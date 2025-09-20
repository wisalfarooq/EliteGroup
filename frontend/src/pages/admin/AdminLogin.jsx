import React, {useState} from 'react'
import axios from 'axios'
export default function AdminLogin(){
  const [form,setForm] = useState({email:'', password:''})
  const [msg,setMsg] = useState(null)
  const login = async (e)=>{
    e.preventDefault()
    try{
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, form)
      localStorage.setItem('elite_token', res.data.token)
      setMsg('Logged in — open /admin in another tab (not implemented client-side fully).')
    }catch(e){ setMsg('Login failed') }
  }
  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Admin Login</h2>
      <form onSubmit={login} className="space-y-4">
        <input required value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full border rounded p-2" />
        <input required type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} placeholder="Password" className="w-full border rounded p-2" />
        <button className="px-4 py-2 bg-accent text-white rounded">Sign in</button>
        {msg && <div className="text-sm mt-2">{msg}</div>}
      </form>
    </div>
  )
}
