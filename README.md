
# Ugochukwu Meshach — Premium Next.js Portfolio

### What you get
- Animated multi‑color gradient background (blue → purple → pink → orange)
- Liquid glass panels with reflection + hover glow
- Bootstrap Icons (no emojis)
- Parallax‑style background (background-attachment: fixed)
- Scroll‑triggered reveal animations
- Projects with hero showcases + grid
- Nodemailer contact API (Ethereal fallback for local dev)
- Resume download at `/resume.pdf`

### Run locally
```bash
npm install --no-optional
cp .env.example .env.local   # fill SMTP vars for real email, or leave empty to use Ethereal
npm run dev
```

### Deploy
- Push to GitHub and import on Vercel.
- Set env vars: `NEXT_PUBLIC_SITE_URL`, `CONTACT_TO`, and SMTP vars if you want real emails.

### Edit content
- Home hero + featured: `app/page.tsx`
- Projects list: `app/projects/page.tsx`
- Project details: `app/projects/[slug]/page.tsx`
- About: `app/about/page.tsx`
- Contact form/API: `app/hire-me/page.tsx`, `app/api/contact/route.ts`
- Replace `public/resume.pdf` with your real resume.
