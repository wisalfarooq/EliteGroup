import React, {useState} from 'react'
import axios from 'axios'

export default function RecruitmentForm(){
  const [form, setForm] = useState({name:'', email:'', position:''})
  const [file, setFile] = useState(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    if(!file){ setStatus({ok:false, msg:'Please attach a CV (PDF)'}); return }
    setLoading(true)
    try{
      const fd = new FormData()
      fd.append('name', form.name)
      fd.append('email', form.email)
      fd.append('position', form.position)
      fd.append('cv', file)
      await axios.post(`${import.meta.env.VITE_API_URL}/api/apply`, fd, { headers: {'Content-Type':'multipart/form-data'} })
      setStatus({ok:true, msg:'Application submitted. Thank you!'})
      setForm({name:'', email:'', position:''})
      setFile(null)
    }catch(e){
      setStatus({ok:false, msg:'Failed to submit. Try again.'})
    }finally{ setLoading(false) }
  }

  return (
    <form onSubmit={submit} className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow">
      <input required value={form.name} onChange={e=>setForm({...form, name:e.target.value})} placeholder="Full name" className="w-full border rounded p-2 mb-3" />
      <input required type="email" value={form.email} onChange={e=>setForm({...form, email:e.target.value})} placeholder="Email" className="w-full border rounded p-2 mb-3" />
      <input required value={form.position} onChange={e=>setForm({...form, position:e.target.value})} placeholder="Position applying for" className="w-full border rounded p-2 mb-3" />
      <input required type="file" accept=".pdf,.doc,.docx" onChange={e=>setFile(e.target.files[0])} className="w-full mb-3" />
      <div className="flex items-center gap-3">
        <button disabled={loading} className="px-4 py-2 bg-accent text-white rounded">Apply</button>
        {status && <div className={`text-sm ${status.ok ? 'text-green-600' : 'text-red-600'}`}>{status.msg}</div>}
      </div>
    </form>
  )
}
