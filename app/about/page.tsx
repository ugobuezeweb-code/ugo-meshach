
import Glass from '../../components/Glass'
import Reveal from '../../components/Reveal'

export default function About(){
  return (
    <main className="container">
      <Reveal>
        <Glass className="p-8">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2">
              <h1 className="text-3xl font-bold">About Me</h1>
              <p className="text-gray-700 mt-3">
                I’m <strong>Ugochukwu Meshach</strong>, a full‑stack developer focused on building production‑grade web apps that are fast, accessible, and scalable. 
                I ship real features for real users — from e‑commerce to referral systems.
              </p>
              <p className="text-gray-700 mt-2">
                I’ve trained at <strong>Pluralcode Academy</strong> and keep learning by shipping projects and iterating in the open. 
                I value clean code, great DX, and measurable results.
              </p>
              <h2 className="text-xl font-semibold mt-4">Skills & Tools</h2>
              <ul className="grid sm:grid-cols-2 gap-2 mt-2 text-gray-700">
                <li><i className="bi bi-layers"></i> React, Next.js (App Router), TypeScript</li>
                <li><i className="bi bi-diagram-3"></i> Node.js, Express, REST APIs, JWT</li>
                <li><i className="bi bi-database"></i> MongoDB</li>
                <li><i className="bi bi-palette2"></i> Tailwind CSS, Bootstrap Icons</li>
                <li><i className="bi bi-cloud-upload"></i> Vercel, Railway, Render</li>
                <li><i className="bi bi-graph-up"></i> SEO, Web Vitals, analytics</li>
              </ul>
            </div>
            <aside>
              <Glass className="p-4 text-center">
                <img src="https://i.ibb.co/Zp9dshXd/Ugobueze-53ca8918c78af07ace1e.jpg" alt="Ugochukwu" className="w-40 h-40 rounded-2xl object-cover mx-auto" />
                <div className="mt-3 flex justify-center gap-2">
                  <a className="btn-ghost" href="https://github.com/ugobuez" target="_blank"><i className="bi bi-github"></i> GitHub</a>
                  <a className="btn-ghost" href="https://www.linkedin.com/in/ugochukwu-meshach-69b830285" target="_blank"><i className="bi bi-linkedin"></i> LinkedIn</a>
                </div>
              </Glass>
            </aside>
          </div>
        </Glass>
      </Reveal>
    </main>
  )
}
