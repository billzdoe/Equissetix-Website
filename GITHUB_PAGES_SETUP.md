# GitHub Pages Setup Guide for Equissetix Website

This guide will walk you through hosting your website on GitHub Pages and connecting your Squarespace domain.

## Prerequisites

- GitHub account (free)
- Domain purchased from Squarespace (equissetix.com)
- Git installed on your computer (download from git-scm.com if needed)

---

## Step 1: Create GitHub Repository

1. **Go to GitHub.com** and sign in
2. **Click the "+" icon** in the top right → "New repository"
3. **Repository settings:**
   - Name: `equissetix-website` (or any name you prefer)
   - Description: "Equissetix LLC website"
   - Visibility: **Public** (required for free GitHub Pages)
   - **DO NOT** initialize with README, .gitignore, or license
4. **Click "Create repository"**

---

## Step 2: Install Dependencies & Build Website

1. **Open terminal/command prompt** and navigate to your website folder:
   ```bash
   cd "E:\Software Project\equissetix-website"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Test the build:**
   ```bash
   npm run build
   ```
   
   This creates a `dist` folder with your website files.

---

## Step 3: Configure for GitHub Pages

The website is already configured for GitHub Pages! The `vite.config.ts` file has the correct settings.

**Important:** The website uses React Router, so we need to handle routing properly. The configuration is already set up.

---

## Step 4: Push to GitHub

1. **Initialize git** (if not already done):
   ```bash
   git init
   ```

2. **Add all files:**
   ```bash
   git add .
   ```

3. **Create first commit:**
   ```bash
   git commit -m "Initial commit - Equissetix website"
   ```

4. **Connect to GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/equissetix-website.git
   ```
   (Replace `YOUR_USERNAME` with your GitHub username)

5. **Push to GitHub:**
   ```bash
   git branch -M main
   git push -u origin main
   ```

---

## Step 5: Enable GitHub Pages

1. **Go to your repository on GitHub**
2. **Click "Settings"** (top menu)
3. **Click "Pages"** (left sidebar)
4. **Under "Source":**
   - Select: **"GitHub Actions"** (we'll set this up next)
   - OR use **"Deploy from a branch"** → select `main` branch → `/dist` folder
5. **Save**

---

## Step 6: Set Up GitHub Actions (Recommended)

This automatically builds and deploys your site when you push changes.

1. **Create `.github/workflows` folder** in your project:
   ```bash
   mkdir -p .github/workflows
   ```

2. **Create deployment file** (I'll create this for you - see `deploy.yml`)

3. **Commit and push:**
   ```bash
   git add .github
   git commit -m "Add GitHub Actions deployment"
   git push
   ```

4. **Go to repository → "Actions" tab**
5. **The workflow should run automatically** and deploy your site

---

## Step 7: Connect Squarespace Domain to GitHub Pages

### Option A: Using GitHub's Domain Settings (Recommended)

1. **In your GitHub repository**, go to **Settings → Pages**
2. **Under "Custom domain"**, enter: `equissetix.com`
3. **Click "Save"**
4. **GitHub will show you DNS records** you need to add

### Option B: Configure DNS in Squarespace

1. **Log into Squarespace**
2. **Go to Settings → Domains**
3. **Click on equissetix.com**
4. **Go to DNS Settings** or **Advanced DNS**

5. **Add these DNS records:**

   **For apex domain (equissetix.com):**
   - Type: `A`
   - Host: `@` (or leave blank)
   - Points to: `185.199.108.153`
   - TTL: 3600
   
   - Type: `A`
   - Host: `@` (or leave blank)
   - Points to: `185.199.109.153`
   - TTL: 3600
   
   - Type: `A`
   - Host: `@` (or leave blank)
   - Points to: `185.199.110.153`
   - TTL: 3600
   
   - Type: `A`
   - Host: `@` (or leave blank)
   - Points to: `185.199.111.153`
   - TTL: 3600

   **For www subdomain:**
   - Type: `CNAME`
   - Host: `www`
   - Points to: `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - TTL: 3600

6. **Save all DNS records**

7. **Wait 24-48 hours** for DNS to propagate

---

## Step 8: Enable HTTPS (Automatic)

GitHub Pages automatically provides HTTPS certificates. Once DNS propagates:
1. Go to **Settings → Pages**
2. Check **"Enforce HTTPS"** (this may take a few hours after DNS is set)

---

## Step 9: Verify Everything Works

1. **Visit your site:** `https://equissetix.com`
2. **Test all pages:** Home, Breeds, Features, Pricing
3. **Test navigation** between pages

---

## Updating Your Website

Whenever you make changes:

1. **Make your changes** to the code
2. **Test locally:**
   ```bash
   npm run dev
   ```
3. **Build:**
   ```bash
   npm run build
   ```
4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push
   ```
5. **GitHub Actions will automatically deploy** (takes 1-2 minutes)

---

## Troubleshooting

### Site shows 404
- Wait for DNS propagation (can take up to 48 hours)
- Check DNS records are correct
- Make sure GitHub Pages is enabled

### Pages don't load (routing issues)
- The website is configured to handle this automatically
- Make sure you're using the GitHub Actions deployment method

### Domain not connecting
- Double-check DNS records in Squarespace
- Verify domain is entered correctly in GitHub Settings → Pages
- Wait longer for DNS propagation

### Build fails
- Check the Actions tab in GitHub for error messages
- Make sure all dependencies are in `package.json`
- Try building locally first: `npm run build`

---

## Quick Reference

**Your GitHub Pages URL:** `https://YOUR_USERNAME.github.io/equissetix-website/`

**Your custom domain:** `https://equissetix.com`

**Repository:** `https://github.com/YOUR_USERNAME/equissetix-website`

---

## Need Help?

If you get stuck at any step, let me know which step and what error message you're seeing!
