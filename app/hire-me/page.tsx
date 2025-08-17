'use client';
import { useState } from 'react';
import { send } from '@emailjs/browser';
import Glass from '../../components/Glass';
import Reveal from '../../components/Reveal';

export default function Contact() {
  const [status, setStatus] = useState('idle');
  const [msg, setMsg] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    setMsg('');

    try {
      // Log environment variables for debugging
      console.log('EmailJS configuration:', {
        serviceID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ? '[REDACTED]' : undefined,
      });

      // Send email using EmailJS
      const response = await send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, // service_h7t7kdh
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, // template_czpdmks
        {
          Portfolio: 'Portfolio', // Matches your test parameter
          name: formData.name,
          message: formData.message,
          from_email: formData.email,
          to_email: process.env.CONTACT_TO, // ugobuezeweb@gmail.com
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (response.status === 200) {
        setStatus('sent');
        setMsg('Message sent successfully — I will reply within 24 hours.');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
        setMsg('Failed to send message. Please email ugobuezeweb@gmail.com directly.');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setMsg('Failed to send message. Please email ugobuezeweb@gmail.com directly.');
    }
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="container">
      <Reveal>
        <Glass className="p-8">
          <h1 className="text-3xl font-bold">Let’s Work Together</h1>
          <p className="text-gray-700 mt-2">Open to remote roles. I respond quickly to serious opportunities.</p>
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <form onSubmit={onSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full mb-3 p-3 bg-white/70 border rounded"
                required
                aria-label="Your name"
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full mb-3 p-3 bg-white/70 border rounded"
                required
                aria-label="Your email"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                placeholder="Tell me about the role, timeline, and next steps"
                className="w-full mb-3 p-3 bg-white/70 border rounded"
                required
                aria-label="Your message"
              />
              <button
                type="submit"
                className="btn-primary"
                disabled={status === 'sending'}
                aria-disabled={status === 'sending'}
              >
                <i className="bi bi-send"></i> {status === 'sending' ? 'Sending...' : 'Send message'}
              </button>
              {msg && (
                <p className={status === 'error' ? 'text-red-600 mt-3' : 'text-green-700 mt-3'} aria-live="polite">
                  {msg}
                </p>
              )}
            </form>
            <div>
              <div className="flex flex-col gap-3">
                <a className="btn-ghost w-max" href="mailto:ugobuezeweb@gmail.com">
                  <i className="bi bi-envelope"></i> ugobuezeweb@gmail.com
                </a>
                <a className="btn-ghost w-max" href="https://github.com/ugobuez" target="_blank" rel="noopener noreferrer">
                  <i className="bi bi-github"></i> GitHub
                </a>
                <a
                  className="btn-ghost w-max"
                  href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin"></i> LinkedIn
                </a>
              </div>
              <p className="text-sm text-gray-700 mt-4">If the form fails, please email me directly.</p>
            </div>
          </div>
        </Glass>
      </Reveal>
    </main>
  );
}