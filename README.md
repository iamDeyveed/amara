# Big_Hub Portfolio

Production-ready portfolio rebuild for Amarachi Mbanta, based on `big_hub_portfolio.html`.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- Vercel-ready static frontend

## Install

```bash
npm install
```

## Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run typecheck
npm run build
```

## Project Structure

- `app/page.tsx` - Home page
- `app/work/page.tsx` - My Work page
- `app/about/page.tsx` - About Me page
- `app/layout.tsx` - shared layout, fonts, header, footer
- `app/globals.css` - global Tailwind styles
- `components/` - reusable UI components
- `lib/data.ts` - editable copy, expertise lists, categories, project data, socials, contact info
- `tailwind.config.ts` - theme colors, fonts, shadows, sizing

## Edit Text

Most site copy lives in `lib/data.ts`:

- project preview tiles
- expertise skill lists
- case study categories
- project cards
- about page text
- quote
- contact details
- social links

Page-specific headings and layout text live in the matching file under `app/`.

## Replace Images

Create a `public/images/` folder and place final assets there, for example:

```text
public/images/amarachi.jpg
public/images/nexera.jpg
public/images/plenix.jpg
```

Search the code for `Replace this placeholder` comments. Those mark the portrait and project thumbnail areas that are ready for image swaps.

## Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Keep the default framework preset as Next.js.
4. Use the default build command:

```bash
npm run build
```

5. Deploy.

No backend, CMS, or environment variables are required.
