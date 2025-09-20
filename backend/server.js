require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const helmet = require('helmet')
const rateLimit = require('express-rate-limit')
const cors = require('cors')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const multer = require('multer')
const fs = require('fs')
const nodemailer = require('nodemailer')

const Contact = require('./models/ContactMessage')
const Application = require('./models/Application')
const User = require('./models/User')
const auth = require('./middleware/auth')

const app = express()
const PORT = process.env.PORT || 4000

app.use(helmet())
app.use(express.json())
const allowed = (process.env.ALLOWED_ORIGINS || 'http://localhost:5173').split(',')
app.use(cors({ origin: allowed }))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

const limiter = rateLimit({ windowMs: 1*60*1000, max: 60 })
app.use(limiter)

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser:true, useUnifiedTopology:true })
  .then(()=> console.log('MongoDB connected'))
  .catch(e=> console.error('MongoDB error', e))

const storage = multer.diskStorage({
  destination: (req,file,cb)=> {
    const dir = path.join(__dirname,'uploads','cvs')
    fs.mkdirSync(dir, {recursive:true})
    cb(null, dir)
  },
  filename: (req,file,cb)=> {
    const name = `${Date.now()}-${file.originalname.replace(/\s+/g,'_')}`
    cb(null, name)
  }
})
const upload = multer({ storage, limits: { fileSize: 10*1024*1024 } })

let transporter = null
if(process.env.SMTP_HOST){
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT||587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
  })
}

app.post('/api/auth/login', async (req,res)=>{
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if(!user) return res.status(401).json({ error: 'Invalid credentials' })
  const ok = await bcrypt.compare(password, user.passwordHash)
  if(!ok) return res.status(401).json({ error: 'Invalid credentials' })
  const token = jwt.sign({ id: user._id, email: user.email, role: user.role }, process.env.JWT_SECRET, { expiresIn: '8h' })
  res.json({ token })
})

app.post('/api/contact', async (req,res)=>{
  try {
    const { name, email, message } = req.body
    const doc = await Contact.create({ name, email, message })
    if(transporter && process.env.ADMIN_EMAIL){
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New contact — ${name}`,
        text: `${name} <${email}>\n\n${message}`
      })
    }
    res.json({ ok:true, id: doc._id })
  } catch(e){
    console.error(e); res.status(500).json({ error: 'server error' })
  }
})

app.post('/api/apply', upload.single('cv'), async (req,res)=>{
  try{
    const { name, email, position } = req.body
    const file = req.file
    const pathUrl = file ? `/uploads/cvs/${file.filename}` : ''
    const doc = await Application.create({
      name, email, position, cvPath: pathUrl, originalName: file ? file.originalname : ''
    })
    if(transporter && process.env.ADMIN_EMAIL){
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.ADMIN_EMAIL,
        subject: `New application — ${name}`,
        text: `${name} applied for ${position}\nEmail: ${email}\nCV: ${file ? file.originalname : 'none'}`,
        attachments: file ? [{ path: path.join(__dirname, pathUrl) }] : []
      })
    }
    res.json({ ok:true, id: doc._id })
  }catch(e){
    console.error(e); res.status(500).json({ error:'server error' })
  }
})

app.get('/api/admin/messages', auth, async (req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).json({error:'forbidden'})
  const items = await Contact.find().sort({createdAt:-1}).limit(500)
  res.json(items)
})

app.get('/api/admin/applications', auth, async (req,res)=>{
  if(req.user.role !== 'admin') return res.status(403).json({error:'forbidden'})
  const items = await Application.find().sort({createdAt:-1}).limit(500)
  res.json(items)
})

app.get('/api/health', (req,res)=> res.json({ok:true, now: new Date()}))

app.listen(PORT, ()=> console.log('Server listening on', PORT))
