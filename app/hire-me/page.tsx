
'use client'
import { useState } from 'react'
import Glass from '../../components/Glass'
import Reveal from '../../components/Reveal'

export default function Contact(){
  const [status,setStatus]=useState<'idle'|'sending'|'sent'|'error'>('idle')
  const [msg,setMsg]=useState('')
  async function onSubmit(e:any){ e.preventDefault(); setStatus('sending'); setMsg(''); 
    const body = { name: e.currentTarget.name.value, email: e.currentTarget.email.value, message: e.currentTarget.message.value }
    const res = await fetch('/api/contact',{ method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify(body) })
    const data = await res.json()
    if (res.ok) { setStatus('sent'); setMsg('Message sent — I will reply within 24 hours.') }
    else { setStatus('error'); setMsg(data.error || 'Failed to send. Email ugobuezeweb@gmail.com') }
  }
  return (
    <main className="container">
      <Reveal>
        <Glass className="p-8">
          <h1 className="text-3xl font-bold">Let’s Work Together</h1>
          <p className="text-gray-700 mt-2">Open to remote roles. I respond quickly to serious opportunities.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <form onSubmit={onSubmit}>
              <input name="name" placeholder="Your name" className="w-full mb-3 p-3 bg-white/70 border rounded" required />
              <input name="email" type="email" placeholder="Your email" className="w-full mb-3 p-3 bg-white/70 border rounded" required />
              <textarea name="message" rows={6} placeholder="Tell me about the role, timeline, and next steps" className="w-full mb-3 p-3 bg-white/70 border rounded" required />
              <button className="btn-primary" disabled={status==='sending'}><i className="bi bi-send"></i> {status==='sending' ? 'Sending...' : 'Send message'}</button>
              {msg && <p className={status==='error' ? 'text-red-600 mt-3' : 'text-green-700 mt-3'}>{msg}</p>}
            </form>
            <div>
              <div className="flex flex-col gap-3">
                <a className="btn-ghost w-max" href="mailto:ugobuezeweb@gmail.com"><i className="bi bi-envelope"></i> ugobuezeweb@gmail.com</a>
                <a className="btn-ghost w-max" href="https://github.com/ugobuez" target="_blank"><i className="bi bi-github"></i> GitHub</a>
                <a className="btn-ghost w-max" href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
              </div>
              <p className="text-sm text-gray-700 mt-4">If the form fails, please email me directly.</p>
            </div>
          </div>
        </Glass>
      </Reveal>
    </main>
  )
}
