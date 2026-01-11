# BTHS National Honor Society Website

A modern, clean website for the BTHS National Honor Society built with Next.js and Tailwind CSS.

## 📁 Project Structure

```
src/
├── app/                      # Next.js App Router
│   ├── (pages)/             # Grouped page routes
│   │   ├── home/            # Home page
│   │   ├── member-points/   # Member Points page
│   │   ├── executive-board/ # Executive Board page
│   │   ├── about/           # About page
│   │   └── contact/         # Contact page
│   ├── globals.css          # Global Tailwind styles
│   ├── layout.tsx           # Root layout with Navigation & Footer
│   └── page.tsx             # Root page (redirects to /home)
├── components/
│   └── Navigation.tsx       # Navigation bar component
```

## 🚀 Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:3000`

## 🎨 Features

- ✅ **Next.js 15** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS** for styling
- ✅ **5 Main Pages** (Home, Member Points, Executive Board, About, Contact)
- ✅ **Navigation Bar** with active page highlighting
- ✅ **Responsive Design** (mobile-friendly)
- ✅ **ESLint** for code quality

## 📝 How to Add Content

Each page is ready for you to add content:

1. Open any page file in `src/app/(pages)/*/page.tsx`
2. Replace the placeholder content sections
3. Integrate your HTML elements where marked
4. The styling is already handled by Tailwind CSS classes

## 🔧 Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

---

Ready to add your content! Just show me your HTML elements and we'll integrate them. 🎉