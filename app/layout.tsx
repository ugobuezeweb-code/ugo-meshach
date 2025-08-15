
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ugochukwu Meshach – Full‑Stack Developer',
  description: 'I build production-ready web apps with React, Next.js, TypeScript, and Node.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-parallax">
        <header className="header-blur">
          <div className="container flex items-center justify-between">
            <a href="/" className="flex items-center gap-2 font-extrabold text-lg">
              <i className="bi bi-brilliance text-xl"></i>
              <span>Ugochukwu Meshach</span>
            </a>
            <nav className="flex items-center gap-3">
              <a className="btn-ghost" href="/projects"><i className="bi bi-grid-3x3-gap"></i> Projects</a>
              <a className="btn-ghost" href="/about"><i className="bi bi-person-badge"></i> About</a>
              <a className="btn-ghost" href="/hire-me"><i className="bi bi-envelope-paper-heart"></i> Hire Me</a>
              <a className="btn-ghost" href="/resume.pdf"><i className="bi bi-download"></i> Download Resume</a>
            </nav>
          </div>
        </header>
        {children}
        <footer className="container section text-sm text-gray-700">
          <div className="glass relative p-4 flex flex-wrap items-center justify-between">
            <p>© {new Date().getFullYear()} Ugochukwu Meshach</p>
            <div className="flex items-center gap-3">
              <a className="btn-ghost" href="https://github.com/ugobuez" target="_blank"><i className="bi bi-github"></i> GitHub</a>
              <a className="btn-ghost" href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
