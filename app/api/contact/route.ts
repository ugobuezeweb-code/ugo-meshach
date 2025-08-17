import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const TO = process.env.CONTACT_TO;
const HOST = process.env.SMTP_HOST;
const PORT = Number(process.env.SMTP_PORT) || 587;
const USER = process.env.SMTP_USER;
const PASS = process.env.SMTP_PASS;
const SECURE = process.env.SMTP_SECURE === 'true';
const SITE_NAME = process.env.SITE_NAME || 'Ugochukwu Meshach';

export async function POST(req) {
  try {
    // Log environment variables for debugging
    console.log('Environment variables:', {
      SMTP_HOST: HOST,
      SMTP_PORT: PORT,
      SMTP_USER: USER,
      SMTP_PASS: PASS ? '[REDACTED]' : undefined, // Avoid logging password
      SMTP_SECURE: SECURE,
      CONTACT_TO: TO,
      SITE_NAME: SITE_NAME,
    });

    // Validate environment variables
    if (!TO) {
      console.error('Missing CONTACT_TO environment variable');
      return NextResponse.json({ error: 'Server configuration error: CONTACT_TO not set' }, { status: 500 });
    }
    if (!HOST || !USER || !PASS) {
      console.error('Missing SMTP configuration:', { HOST, USER, PASS: PASS ? '[REDACTED]' : undefined });
      return NextResponse.json({ error: 'Server configuration error: SMTP settings missing' }, { status: 500 });
    }

    // Parse and validate request body
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields: name, email, or message' }, { status: 400 });
    }

    // Create Nodemailer transporter
    const transporter = nodemailer.createTransport({
      host: HOST,
      port: PORT,
      secure: SECURE,
      auth: { user: USER, pass: PASS },
    });

    // Verify SMTP connection
    await transporter.verify();
    console.log('SMTP connection verified successfully');

    // Send email
    const info = await transporter.sendMail({
      from: `"${SITE_NAME}" <${USER}>`,
      to: TO,
      subject: `Portfolio Inquiry — ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <h2>Portfolio Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message.replace(/\n/g, '<br/>')}</p>
        <hr/>
        <p>From: <b>${name}</b> &lt;${email}&gt;</p>
      `,
    });

    console.log('Email sent:', info.messageId);
    return NextResponse.json({ ok: true, message: 'Email sent successfully', messageId: info.messageId });
  } catch (error) {
    console.error('Nodemailer error:', error);
    return NextResponse.json(
      { error: `Failed to send email: ${error.message || 'Unknown error'}` },
      { status: 500 }
    );
  }
}