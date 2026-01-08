# 🎯 START HERE - Deploy Equissetix Website to GitHub Pages

## What We're Doing

1. ✅ Website code is ready
2. ⏳ Push code to GitHub
3. ⏳ Enable GitHub Pages
4. ⏳ Connect your Squarespace domain

---

## Step 1: Create GitHub Account & Repository

### A. Create GitHub Account (if you don't have one)
- Go to: https://github.com/signup
- Sign up (it's free!)

### B. Create New Repository
1. Go to: https://github.com/new
2. **Repository name:** `equissetix-website`
3. **Description:** `Equissetix LLC website`
4. **Visibility:** ✅ **Public** (required for free GitHub Pages)
5. **DO NOT check any boxes** (no README, .gitignore, license)
6. Click **"Create repository"**

---

## Step 2: Install Required Software

### Install Git
1. Go to: https://git-scm.com/download/win
2. Download and install (use default settings)
3. **Restart your computer** after installing

### Install Node.js
1. Go to: https://nodejs.org
2. Download the LTS version (recommended)
3. Install (use default settings)
4. **Restart your computer** after installing

### Verify Installation
Open PowerShell (Win + X → Windows PowerShell) and type:
```powershell
git --version
node --version
npm --version
```
If you see version numbers, you're good! ✅

---

## Step 3: Prepare Your Website

### Open PowerShell
1. Press `Win + X`
2. Select "Windows PowerShell" or "Terminal"

### Navigate to Your Project
```powershell
cd "E:\Software Project\TrainerTree Pro\equissetix-website"
```

### Install Dependencies
```powershell
npm install
```
⏳ Wait 2-3 minutes for this to complete

### Test the Build
```powershell
npm run build
```
✅ If this completes without errors, you're ready!

---

## Step 4: Push to GitHub

### Initialize Git
```powershell
git init
```

### Add All Files
```powershell
git add .
```

### Create First Commit
```powershell
git commit -m "Initial commit - Equissetix website"
```

### Connect to GitHub
**Replace `YOUR_USERNAME` with your actual GitHub username:**
```powershell
git remote add origin https://github.com/YOUR_USERNAME/equissetix-website.git
```

### Push to GitHub
```powershell
git branch -M main
git push -u origin main
```

**You'll be asked for:**
- **Username:** Your GitHub username
- **Password:** Use a **Personal Access Token** (see below)

### Create Personal Access Token
1. Go to: https://github.com/settings/tokens
2. Click **"Generate new token"** → **"Generate new token (classic)"**
3. **Note:** `GitHub Pages Deploy`
4. **Expiration:** 90 days (or your preference)
5. **Select scopes:** ✅ `repo` (check the box)
6. Click **"Generate token"**
7. **COPY THE TOKEN** (you won't see it again!)
8. Use this token as your password when pushing

---

## Step 5: Enable GitHub Pages

1. Go to your repository: `https://github.com/YOUR_USERNAME/equissetix-website`
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select: **"GitHub Actions"**
5. The deployment will start automatically! ✅

**Check deployment status:**
- Click **"Actions"** tab (top menu)
- You should see a workflow running
- Wait 1-2 minutes for it to complete

---

## Step 6: Connect Your Domain

### In GitHub:
1. Still in **Settings → Pages**
2. Under **"Custom domain"**, type: `equissetix.com`
3. Click **"Save"**
4. **Don't check "Enforce HTTPS" yet** (wait until DNS is set)

### In Squarespace:
1. Log into Squarespace
2. Go to **Settings → Domains**
3. Click on **equissetix.com**
4. Click **"DNS Settings"** or **"Advanced DNS"**

5. **Add 4 A Records:**
   
   **Record 1:**
   - Type: `A`
   - Host: `@` (or leave blank)
   - Points to: `185.199.108.153`
   - TTL: `3600`
   - Click **"Add"**
   
   **Record 2:**
   - Type: `A`
   - Host: `@`
   - Points to: `185.199.109.153`
   - TTL: `3600`
   - Click **"Add"**
   
   **Record 3:**
   - Type: `A`
   - Host: `@`
   - Points to: `185.199.110.153`
   - TTL: `3600`
   - Click **"Add"**
   
   **Record 4:**
   - Type: `A`
   - Host: `@`
   - Points to: `185.199.111.153`
   - TTL: `3600`
   - Click **"Add"**

6. **Add 1 CNAME Record:**
   
   **Record:**
   - Type: `CNAME`
   - Host: `www`
   - Points to: `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - TTL: `3600`
   - Click **"Add"**

7. **Save all changes**

---

## Step 7: Wait & Verify

### Wait for DNS Propagation
- ⏳ Can take 24-48 hours
- Check status: https://dnschecker.org
- Search for `equissetix.com` A records

### Enable HTTPS (After DNS Works)
1. Go back to GitHub → Settings → Pages
2. Check **"Enforce HTTPS"**
3. This may take a few hours after DNS is set

### Test Your Site
- Visit: `https://equissetix.com`
- Test all pages: Home, Breeds, Features, Pricing
- ✅ Should all work!

---

## 🎉 You're Done!

Your website is now live at **equissetix.com**!

---

## 🔄 Making Updates

When you want to update the website:

```powershell
# Navigate to project
cd "E:\Software Project\TrainerTree Pro\equissetix-website"

# Make your changes to files, then:
git add .
git commit -m "Description of your changes"
git push
```

GitHub will automatically rebuild and deploy (1-2 minutes).

---

## 🆘 Need Help?

**Common Issues:**

1. **"npm: command not found"**
   - Install Node.js from nodejs.org
   - Restart your computer

2. **"git: command not found"**
   - Install Git from git-scm.com
   - Restart your computer

3. **Push fails / Authentication error**
   - Make sure you're using a Personal Access Token, not your password
   - Create a new token if needed

4. **Domain not working**
   - Wait longer (DNS can take 48 hours)
   - Double-check DNS records match exactly
   - Verify domain is set in GitHub Settings → Pages

5. **Pages show 404**
   - Check GitHub Actions tab - make sure deployment succeeded
   - Wait a few minutes after pushing

**Tell me which step you're on and what error you see!**
