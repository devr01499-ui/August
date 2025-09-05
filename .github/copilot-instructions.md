# 🧑‍💻 Copilot Instructions for AdmirerX Website

## Project Overview
- **Framework:** Next.js 14 (App Router)
- **Languages:** TypeScript, React
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Email Integration:** EmailJS (see `lib/emailjs.ts`)
- **Deployment:** Vercel/Netlify

## Architecture & Key Patterns
- Pages and API routes are in `app/` (e.g., `app/page.tsx`, `app/api/contact/route.ts`).
- UI is modularized in `components/` (e.g., `Hero.tsx`, `ContactSection.tsx`).
- Global styles: `app/globals.css`. Tailwind config: `tailwind.config.js`.
- EmailJS config: `lib/emailjs.ts` (credentials required for contact form).
- Static assets: `public/` (images, icons).
- Environment variables: `.env.local` (not committed).

## Developer Workflows
- **Node 18.x is required**. Use nvm/nvm-windows (`nvm install 18.20.3; nvm use 18.20.3`).
- Install dependencies: `npm install`
- Start dev server: `npm run dev` (http://localhost:3000)
- Build for production: `npm run build`
- Lint: `npm run lint`
- Deploy: Push to GitHub, then deploy via Vercel/Netlify.

## EmailJS Integration
- Update `lib/emailjs.ts` with your EmailJS credentials:
  ```ts
  export const EMAILJS_CONFIG = {
    SERVICE_ID: 'your_service_id',
    TEMPLATE_ID: 'your_template_id',
    PUBLIC_KEY: 'your_public_key',
    TO_EMAIL: 'devr01499@gmail.com'
  }
  ```
- Contact form logic is in `components/ContactSection.tsx`.

## Project-Specific Conventions
- All styling uses Tailwind CSS utility classes.
- Section/component naming follows business domain (e.g., `Hero`, `WhyChoose`, `PartnerSection`).
- Images referenced in components are stored in `public/images/`.
- No Redux/MobX; state is local or via React context if needed.
- API routes use Next.js App Router conventions (`app/api/*/route.ts`).

## Examples
- To add a new service card: edit `components/ServicesGrid.tsx` and update images in `public/images/`.
- To customize colors: edit `tailwind.config.js` under `colors.primary`.
- To change contact logic: update `components/ContactSection.tsx` and `lib/emailjs.ts`.

## External Integrations
- EmailJS: Used for contact form submissions. Requires setup and credentials.
- Vercel/Netlify: For deployment. Vercel auto-detects Next.js.

## Troubleshooting
- If build fails, check Node version and dependency installation.
- For EmailJS issues, verify credentials in `lib/emailjs.ts` and template/service IDs.

---
For more details, see `README.md` and comments in key files. For support, email devr01499@gmail.com.
