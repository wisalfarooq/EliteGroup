require('dotenv').config()
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/User')

async function seed(){
  if(!process.env.MONGO_URI) {
    console.error('Please set MONGO_URI in .env')
    process.exit(1)
  }
  await mongoose.connect(process.env.MONGO_URI)
  const email = process.env.ADMIN_EMAIL || 'admin@elite.local'
  const pw = process.env.ADMIN_PASSWORD || 'ChangeMe123!'
  const exists = await User.findOne({email})
  if(exists) {
    console.log('Admin already exists:', email)
    process.exit(0)
  }
  const hash = await bcrypt.hash(pw, 10)
  await User.create({ email, passwordHash: hash, role: 'admin' })
  console.log('Seeded admin:', email)
  process.exit(0)
}
seed().catch(console.error)
