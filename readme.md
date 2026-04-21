# BTHS NHS Website

A modern Next.js-based website for the Brooklyn Technical High School National Honor Society, featuring member authentication and points tracking.

## Tech Stack

- **Next.js 16** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **React 19** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Supabase** - Backend database and authentication
- **Vercel** - Hosting and deployment platform

## Environment Setup

### .env.local File

Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_public_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Hosting & Deployment

This project is hosted on Vercel, which provides seamless integration with Next.js:

- Push to GitHub to auto-deploy
- Environment variables are configured in Vercel's dashboard
- Zero-config deployment for Next.js apps

### Getting Started

1. Install dependencies: `npm install`
2. Set up `.env.local` with your Supabase credentials
3. Run dev server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── (pages)/          # Main page routes
│   │   ├── login/        # Login page
│   │   ├── member-points/ # Member dashboard
│   │   └── ...
│   ├── api/              # API routes
│   │   ├── login/        # Authentication endpoint
│   │   └── member/       # Member data endpoints
│   └── layout.tsx        # Root layout
├── components/           # Reusable React components
├── config/              # Configuration files
└── utils/               # Utility functions
    └── supabase/        # Supabase client setup
```

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm start` - Start production server