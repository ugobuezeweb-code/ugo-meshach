import './globals.css'
import type { Metadata } from 'next'
import Navbar from '../components/Navbar'

export const metadata: Metadata = {
  title: 'Ugochukwu Meshach – Full‑Stack Developer',
  description: 'I build production-ready web apps with React, Next.js, TypeScript, and Node.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css"
        />
      </head>
      <body className="bg-parallax">
        <Navbar />
        <main className="mt-16">{children}</main>
        <footer className="container section text-sm text-gray-700">
          <div className="glass relative p-4 flex flex-wrap items-center justify-between">
            <p>© {new Date().getFullYear()} Ugochukwu Meshach</p>
            <div className="flex items-center gap-3">
              <a className="btn-ghost" href="https://github.com/ugobuez" target="_blank">
                <i className="bi bi-github mr-1"></i> GitHub
              </a>
              <a
                className="btn-ghost"
                href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285"
                target="_blank"
              >
                <i className="bi bi-linkedin mr-1"></i> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}