# Quick Start Guide

## Installation & Setup

1. **Navigate to the website directory:**
   ```bash
   cd equissetix-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   The site will automatically open at `http://localhost:3000`

## Building for Production

```bash
# Build the site
npm run build

# Preview the production build
npm run preview
```

The built files will be in the `dist/` directory, ready to deploy.

## Deployment Options

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Netlify
1. Install Netlify CLI: `npm i -g netlify-cli`
2. Run: `netlify deploy --prod`
3. Follow the prompts

### GitHub Pages
1. Build: `npm run build`
2. Push `dist/` folder to `gh-pages` branch
3. Enable GitHub Pages in repository settings

## Customization

### Update Brand Colors
Edit `tailwind.config.js`:
```js
colors: {
  primary: { ... },  // Change these values
  accent: { ... },
}
```

### Update Content
- **Home page**: `src/pages/Home.tsx`
- **Breeds**: `src/pages/Breeds.tsx`
- **Features**: `src/pages/Features.tsx`
- **Pricing**: `src/pages/Pricing.tsx`

### Update Links
- **TrainerTree Pro link**: Update the `href` in:
  - `src/components/Navbar.tsx`
  - `src/components/Footer.tsx`
  - All page CTA buttons

## Troubleshooting

### Port Already in Use
If port 3000 is busy, Vite will automatically use the next available port.

### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18+)

### Styling Issues
- Ensure Tailwind CSS is properly configured
- Check that `postcss.config.js` exists
- Verify `tailwind.config.js` is in the root
