# Editorial Portfolio — Next.js + Tailwind

A static-exportable, JSON-driven personal portfolio. Built with the Next.js App Router, TypeScript, Tailwind CSS, and a few lightweight Lucide icons. No CMS, client-side animation library, or external image requests.

## Start

```bash
npm install
npm run dev
```

Visit http://localhost:3000. Build static site with `npm run build`. Deploy the generated `out/` directory to a static host, or deploy the project directly to a Next.js-capable host.

## Customize your content

**Edit `content/portfolio.json`** to customize the site metadata, name, intro, project listings, experience, education, skills, certifications, social accounts, and contact details. Projects automatically produce statically generated `/projects/{slug}/` pages. `featured: true` shows a project on the homepage.

**Replace** the included placeholder project illustrations in `public/projects/` with your own licensed, context-specific work. Update JSON `image` and `imageAlt` accordingly. These placeholders are design demonstrations, not real case-study evidence; replace sample descriptions, employers, credentials, and projects with truthful information before launch.

**CV:** Replace `public/cv/alex-morgan-cv.pdf` with your own CV, or update `profile.cvUrl`. The provided sample CV is explicitly marked as example content.

**Profile photo:** Add a photo inside `public/profile/` and set `profile.photo` in `content/portfolio.json`, for example `"photo": "/profile/profile-photo.jpg"`. When the value is empty, the homepage displays a labelled profile-photo placeholder.

**SEO:** Set `site.url` to your final public HTTPS domain BEFORE building. This powers canonical URLs, sitemap.xml, robots.txt, and JSON-LD. Update title, description, social links and OG image. `public/og-image.svg` is a starter; for maximum sharing-platform compatibility, export a 1200×630 PNG and update the two image paths in `app/layout.tsx`.

## SEO checklist

- Unique homepage and per-project titles, descriptions, canonical tags, Open Graph and Twitter cards
- Generated `/sitemap.xml` and `/robots.txt` for static export
- `Person` structured data on every page and `CreativeWork` JSON-LD on projects
- Accessible semantic headings, text links, keyboard focus, reduced-motion support, alt text
- Pre-rendered HTML, no dynamic runtime data, no external font requests, responsive `<Image>` assets

## Visual direction

Simple classic portfolio inspired by practical 2018-era personal websites: white and light-grey sections, standard sans-serif typography, a conventional profile introduction, equal project cards, modest blue accents, clear information panels, and a traditional multi-column footer.

## Notes

All supplied personal data, CV, projects and links are illustrative placeholders. No contact form or backend is required: contact uses an email link. To change the visual system, edit `tailwind.config.ts` and `app/globals.css`.
