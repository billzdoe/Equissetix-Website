# Equissetix Website

Modern, cutting-edge website for Equissetix LLC - the company behind TrainingTree Pro.

## Features

- 🎨 Modern, cutting-edge design with glassmorphism effects
- 🐎 Breed-specific pages with detailed information
- 💎 Tier comparison (Starter, Pro, Elite) with feature breakdown
- 🚀 Comprehensive feature showcase
- 📱 Fully responsive design
- ⚡ Fast performance with React + Vite
- 🎭 Smooth animations with Framer Motion

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The website will be available at `http://localhost:3000`

## Project Structure

```
equissetix-website/
├── src/
│   ├── components/      # Reusable components (Navbar, Footer)
│   ├── pages/          # Page components (Home, Breeds, Features, Pricing)
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Pages

- **Home** (`/`) - Hero section, feature overview, and call-to-action
- **Breeds** (`/breeds`) - Tabbed interface showing breed-specific features
- **Features** (`/features`) - Comprehensive feature showcase with filtering
- **Pricing** (`/pricing`) - Tier comparison with detailed feature breakdown

## Technologies

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  primary: { ... },  // Main brand color
  accent: { ... },   // Accent color
}
```

### Content

- Breed information: `src/pages/Breeds.tsx`
- Features: `src/pages/Features.tsx`
- Pricing tiers: `src/pages/Pricing.tsx`

## Deployment

The site can be deployed to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: Use the build output from `dist/`
- **AWS S3 + CloudFront**: Upload `dist/` folder

## License

© 2024 Equissetix LLC. All rights reserved.
