
import { notFound } from 'next/navigation'
import Glass from '../../../components/Glass'
import Reveal from '../../../components/Reveal'

const data: Record<string, any> = {
  'zutech-ecommerce': {
    title: 'Zutech – E‑commerce Platform',
    img: 'https://i.ibb.co/20B0YLvN/Screenshot-2025-08-14-at-13-13-25.png',
    story: `Built a performance‑first storefront with SEO‑friendly product pages and optimized images. Reduced friction at checkout to improve conversion.`,
    results: ['~1.7s LCP across catalog pages', 'SEO‑optimized product routes', 'Streamlined checkout UX'],
    tech: ['Next.js','Node.js','MongoDB','Cloudinary'],
    live: 'https://zutech.vercel.app',
    code: 'https://github.com/ugobuez'
  },
  'giftcard-referral': {
    title: 'Gift‑Card Redemption + Referral',
    img: 'https://i.ibb.co/4gNphhR4/Screenshot-2025-08-14-at-13-12-46.png',
    story: `Created a secure workflow where users upload gift‑card proof for admin review. Added referral incentives and a leaderboard to increase growth while keeping fraud under control.`,
    results: ['Admin verification reduced bad submissions', 'Referral loop increased user signups', 'Scalable image handling via Cloudinary'],
    tech: ['React/Next.js','Express','MongoDB','Cloudinary','JWT'],
    live: 'https://ugobueze-web.vercel.app',
    code: 'https://github.com/ugobuez'
  },
  'your-next-project': {
    title: 'Your Next Project (Placeholder)',
    img: '',
    story: `Replace this entry with your third project. Add a short problem → solution narrative and outcomes.`,
    results: ['Outcome 1', 'Outcome 2', 'Outcome 3'],
    tech: ['Next.js','Node.js','MongoDB'],
    live: '',
    code: 'https://github.com/ugobuez'
  },
}

export default function Project({ params }:{ params:{ slug:string }}){
  const p = data[params.slug]
  if (!p) return notFound()
  return (
    <main className="container">
      <Reveal>
        <Glass className="p-6">
          <h1 className="text-3xl font-bold">{p.title}</h1>
          {p.img ? <img src={p.img} alt={p.title} className="w-full h-64 object-cover rounded-xl mt-4" /> : <div className="w-full h-64 rounded-xl bg-white/60 border mt-4 flex items-center justify-center text-gray-600"><i className="bi bi-image"></i></div>}
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            <div className="md:col-span-2">
              <h2 className="text-xl font-semibold">The Story</h2>
              <p className="text-gray-700 mt-2">{p.story}</p>
              <h3 className="font-semibold mt-4">Impact & Outcomes</h3>
              <ul className="list-disc pl-5 text-gray-700">
                {p.results.map((r:string)=> <li key={r}>{r}</li>)}
              </ul>
            </div>
            <aside>
              <Glass className="p-4">
                <h3 className="font-semibold">Tech Stack</h3>
                <p className="text-gray-700 mt-2">{p.tech.join(', ')}</p>
                <div className="mt-3 flex gap-2 flex-wrap">
                  {p.live ? <a className="btn-primary" href={p.live} target="_blank"><i className="bi bi-box-arrow-up-right"></i> Live</a> : null}
                  <a className="btn-ghost" href={p.code} target="_blank"><i className="bi bi-github"></i> Code</a>
                </div>
              </Glass>
            </aside>
          </div>
        </Glass>
      </Reveal>
    </main>
  )
}
