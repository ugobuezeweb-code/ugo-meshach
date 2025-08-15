
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const TO = process.env.CONTACT_TO || ''
const HOST = process.env.SMTP_HOST || ''
const PORT = Number(process.env.SMTP_PORT || 587)
const USER = process.env.SMTP_USER || ''
const PASS = process.env.SMTP_PASS || ''
const SECURE = (process.env.SMTP_SECURE || 'false') === 'true'

async function getTransport(){
  if (!HOST || !USER || !PASS){
    const test = await nodemailer.createTestAccount()
    return nodemailer.createTransport({ host: 'smtp.ethereal.email', port: 587, secure: false, auth: { user: test.user, pass: test.pass } })
  }
  return nodemailer.createTransport({ host: HOST, port: PORT, secure: SECURE, auth: { user: USER, pass: PASS } })
}

export async function POST(req: Request){
  try {
    if (!TO) return NextResponse.json({ error: 'CONTACT_TO not configured on server' }, { status: 500 })
    const { name, email, message } = await req.json()
    if (!name || !email || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    const transporter = await getTransport()
    const from = USER || 'no-reply@example.com'
    const info = await transporter.sendMail({
      from,
      to: TO,
      subject: `Portfolio Inquiry — ${name}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${message.replace(/\n/g, '<br/>')}</p><hr/><p>From: <b>${name}</b> &lt;${email}&gt;</p>`
    })
    const preview = nodemailer.getTestMessageUrl(info) || null
    return NextResponse.json({ ok: true, preview })
  } catch (e) {
    console.error(e)
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 })
  }
}
