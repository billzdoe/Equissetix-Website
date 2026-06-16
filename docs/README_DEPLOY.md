# Equissetix Website - GitHub Pages Deployment

## 🚀 Quick Start

Follow the **QUICK_DEPLOY.md** file for step-by-step instructions.

## 📋 What You Need

1. **GitHub Account** (free)
2. **Git** installed (download from git-scm.com)
3. **Node.js** installed (download from nodejs.org)
4. **Your domain** (equissetix.com) configured in Squarespace

## 📁 Project Structure

```
equissetix-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Auto-deployment script
├── public/
│   └── 404.html               # Routing fix for GitHub Pages
├── src/                        # Website source code
├── .nojekyll                   # Disable Jekyll processing
├── package.json                # Dependencies
└── vite.config.ts             # Build configuration
```

## 🔧 Setup Steps Summary

1. **Create GitHub repository** (public)
2. **Install dependencies:** `npm install`
3. **Test build:** `npm run build`
4. **Push to GitHub:** Follow git commands in QUICK_DEPLOY.md
5. **Enable GitHub Pages:** Settings → Pages → GitHub Actions
6. **Configure domain:** Add DNS records in Squarespace
7. **Wait for DNS:** 24-48 hours

## 🌐 DNS Configuration

In Squarespace DNS settings, add:

**A Records (4 total):**
- `@` → `185.199.108.153`
- `@` → `185.199.109.153`
- `@` → `185.199.110.153`
- `@` → `185.199.111.153`

**CNAME Record:**
- `www` → `YOUR_USERNAME.github.io`

## 🔄 Updating the Website

After making changes:

```bash
git add .
git commit -m "Your change description"
git push
```

GitHub Actions will automatically rebuild and deploy (1-2 minutes).

## ✅ Verification

Once deployed:
- GitHub URL: `https://YOUR_USERNAME.github.io/equissetix-website/`
- Custom domain: `https://equissetix.com` (after DNS propagates)

## 🆘 Common Issues

**404 errors on pages:**
- The 404.html file handles this automatically
- Make sure it's in the `public/` folder

**Build fails:**
- Check GitHub Actions tab for error messages
- Make sure all dependencies are in package.json

**Domain not working:**
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check GitHub Settings → Pages has your domain

## 📚 More Help

See **GITHUB_PAGES_SETUP.md** for detailed explanations.
