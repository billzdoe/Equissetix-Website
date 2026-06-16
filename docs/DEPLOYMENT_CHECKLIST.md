# ✅ Deployment Checklist

Use this checklist to track your progress!

## Pre-Deployment

- [ ] GitHub account created
- [ ] Git installed on computer
- [ ] Node.js installed on computer
- [ ] Verified installations work (`git --version`, `node --version`)

## Repository Setup

- [ ] Created GitHub repository (public)
- [ ] Repository name: `equissetix-website`
- [ ] Navigated to project folder in PowerShell
- [ ] Ran `npm install` (completed successfully)
- [ ] Ran `npm run build` (completed successfully)

## Git Setup

- [ ] Initialized git (`git init`)
- [ ] Added all files (`git add .`)
- [ ] Created first commit (`git commit -m "Initial commit"`)
- [ ] Added GitHub remote (`git remote add origin ...`)
- [ ] Created Personal Access Token on GitHub
- [ ] Pushed to GitHub (`git push -u origin main`)

## GitHub Pages Setup

- [ ] Enabled GitHub Pages (Settings → Pages)
- [ ] Selected "GitHub Actions" as source
- [ ] Checked "Actions" tab - deployment running
- [ ] Deployment completed successfully ✅

## Domain Configuration

### GitHub Side
- [ ] Added custom domain in GitHub Settings → Pages
- [ ] Domain: `equissetix.com`
- [ ] Saved settings

### Squarespace Side
- [ ] Logged into Squarespace
- [ ] Went to Settings → Domains → equissetix.com
- [ ] Opened DNS Settings
- [ ] Added A record: `@` → `185.199.108.153`
- [ ] Added A record: `@` → `185.199.109.153`
- [ ] Added A record: `@` → `185.199.110.153`
- [ ] Added A record: `@` → `185.199.111.153`
- [ ] Added CNAME record: `www` → `YOUR_USERNAME.github.io`
- [ ] Saved all DNS records

## Verification

- [ ] Waited 24-48 hours for DNS propagation
- [ ] Checked DNS status at dnschecker.org
- [ ] Visited https://equissetix.com
- [ ] Home page loads correctly
- [ ] Breeds page works
- [ ] Features page works
- [ ] Pricing page works
- [ ] Navigation between pages works
- [ ] Enabled HTTPS in GitHub Settings → Pages

## 🎉 Complete!

Your website is live at **equissetix.com**!

---

## Notes

- DNS propagation can take 24-48 hours
- HTTPS may take a few hours after DNS is set
- Keep this checklist for reference
