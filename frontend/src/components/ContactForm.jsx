import React, {useState} from 'react'
import axios from 'axios'

export default function ContactForm(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try{
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form)
      setStatus({ ok:true, msg: 'Message sent — thanks!' })
      setForm({name:'', email:'', message:''})
    }catch(err){
      setStatus({ ok:false, msg: 'Failed to send. Try again later.'})
    }finally{ setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Your name" className="w-full border rounded p-2 mb-3" />
      <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full border rounded p-2 mb-3" />
      <textarea required value={form.message} onChange={e=>setForm({...form, message:e.target.value})} rows={6} placeholder="Message" className="w-full border rounded p-2 mb-3" />
      <div className="flex items-center gap-3">
        <button disabled={loading} className="px-4 py-2 bg-accent text-white rounded">Send</button>
        {status && <div className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>}
      </div>
    </form>
  )
}
