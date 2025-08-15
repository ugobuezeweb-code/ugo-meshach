
import Link from 'next/link'
import Glass from '../components/Glass'
import Reveal from '../components/Reveal'

const featured = [
  {
    slug: 'zutech-ecommerce',
    title: 'Zutech – E‑commerce Platform',
    tagline: 'High-performance storefront with SEO-first product pages and smooth checkout.',
    img: 'https://i.ibb.co/20B0YLvN/Screenshot-2025-08-14-at-13-13-25.png',
    live: 'https://zutech.vercel.app',
  },
  {
    slug: 'giftcard-referral',
    title: 'Gift‑Card Redemption + Referral',
    tagline: 'Upload gift cards with proof, admin approval, referral tracking & leaderboard.',
    img: 'https://i.ibb.co/4gNphhR4/Screenshot-2025-08-14-at-13-12-46.png',
    live: 'https://ugobueze-web.vercel.app',
  },
  {
    slug: 'your-next-project',
    title: 'Your Next Project (Placeholder)',
    tagline: 'Add your third featured project here with a short, punchy description.',
    img: '',
    live: '',
  }
]

const tech = ['React','Next.js','TypeScript','Node.js','Express','MongoDB','Tailwind','Bootstrap Icons','Cloudinary','Vercel','Railway']

export default function Home(){
  return (
    <main className="container">
      <section className="section">
        <Glass className="p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
                I build fast, beautiful, and scalable web apps that help businesses grow.
              </h1>
              <p className="mt-3 text-gray-700 text-lg">Full‑Stack • React • Next.js • TypeScript • Node • MongoDB</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link className="btn-primary" href="/projects"><i className="bi bi-grid-1x2"></i> View Projects</Link>
                <Link className="btn-ghost" href="/hire-me"><i className="bi bi-send"></i> Hire Me</Link>
              </div>
              <div className="mt-4 text-sm text-gray-700">Open to Remote · GMT+1 · 4+ Projects shipped · ~1.7s LCP</div>
            </div>
            <div className="justify-self-center md:justify-self-end">
              <img src="https://i.ibb.co/Zp9dshXd/Ugobueze-53ca8918c78af07ace1e.jpg" alt="Ugochukwu Meshach" className="w-48 h-48 rounded-2xl object-cover shadow-glow animate-float" />
            </div>
          </div>
        </Glass>
      </section>

      <section className="section">
        <Reveal>
          <div className="glass relative p-6">
            <div className="flex items-center gap-3 flex-wrap text-sm">
              <i className="bi bi-lightning-charge"></i><span className="font-semibold">Tech Stack:</span>
              {tech.map(t => <span key={t} className="px-3 py-1 rounded-full bg-white/70 text-gray-800 text-xs border">{t}</span>)}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section">
        <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(p => (
            <Reveal key={p.slug}>
              <Glass className="p-4 card-hover">
                {p.img ? (
                  <img src={p.img} alt={p.title} className="w-full h-56 object-cover rounded-xl" />
                ) : (
                  <div className="w-full h-56 rounded-xl bg-white/60 border flex items-center justify-center text-gray-600">
                    <i className="bi bi-image"></i>
                  </div>
                )}
                <div className="mt-4">
                  <h3 className="text-xl font-semibold">{p.title}</h3>
                  <p className="text-gray-700 mt-1">{p.tagline}</p>
                  <div className="mt-3 flex gap-2">
                    <Link className="btn-ghost" href={`/projects/${p.slug}`}><i className="bi bi-journal-text"></i> Details</Link>
                    {p.live ? <a className="btn-primary" href={p.live} target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"></i> View Live</a> : null}
                  </div>
                </div>
              </Glass>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
