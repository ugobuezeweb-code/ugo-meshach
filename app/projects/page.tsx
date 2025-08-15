
import Link from 'next/link'
import Glass from '../../components/Glass'
import Reveal from '../../components/Reveal'

const items = [
  { slug:'zutech-ecommerce', title:'Zutech – E‑commerce Platform', desc:'SEO‑first storefront, optimized images, frictionless cart/checkout.', img:'https://i.ibb.co/20B0YLvN/Screenshot-2025-08-14-at-13-13-25.png', live:'https://zutech.vercel.app' },
  { slug:'giftcard-referral', title:'Gift‑Card Redemption + Referral', desc:'Admin approval, proof uploads, referral tracking & leaderboard.', img:'https://i.ibb.co/4gNphhR4/Screenshot-2025-08-14-at-13-12-46.png', live:'https://ugobueze-web.vercel.app' },
  { slug:'your-next-project', title:'Your Next Project (Placeholder)', desc:'Swap this card for your 3rd project later.', img:'', live:'' },
]

export default function Projects(){
  return (
    <main className="container">
      <h1 className="text-3xl font-bold mb-4">Projects</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p => (
          <Reveal key={p.slug}>
            <Glass className="p-4 card-hover">
              {p.img ? <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded-xl" /> : <div className="w-full h-44 rounded-xl bg-white/60 border flex items-center justify-center text-gray-600"><i className="bi bi-image"></i></div>}
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-gray-700 text-sm">{p.desc}</p>
              <div className="mt-3 flex gap-2">
                <Link className="btn-ghost" href={`/projects/${p.slug}`}><i className="bi bi-journal-text"></i> Details</Link>
                {p.live ? <a className="btn-primary" href={p.live} target="_blank"><i className="bi bi-box-arrow-up-right"></i> Live</a> : null}
              </div>
            </Glass>
          </Reveal>
        ))}
      </div>
    </main>
  )
}
