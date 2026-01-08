# Quick Deploy Guide - GitHub Pages

## Prerequisites Checklist

- [ ] GitHub account created
- [ ] Git installed on your computer
- [ ] Node.js installed (for building)

---

## Step-by-Step Instructions

### 1. Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `equissetix-website`
3. Make it **Public**
4. **Don't** check any boxes (no README, .gitignore, license)
5. Click "Create repository"

---

### 2. Open Terminal/PowerShell

**On Windows:**
- Press `Win + X` → Select "Windows PowerShell" or "Terminal"
- Or search for "PowerShell" in Start menu

**Navigate to your project:**
```powershell
cd "E:\Software Project\TrainerTree Pro\equissetix-website"
```

---

### 3. Install Dependencies

```powershell
npm install
```

Wait for it to finish (may take 2-3 minutes).

---

### 4. Test Build Locally

```powershell
npm run build
```

If this works without errors, you're good to go!

---

### 5. Initialize Git (if not already done)

```powershell
git init
git add .
git commit -m "Initial commit - Equissetix website"
```

---

### 6. Connect to GitHub

**Replace `YOUR_USERNAME` with your actual GitHub username:**

```powershell
git remote add origin https://github.com/YOUR_USERNAME/equissetix-website.git
git branch -M main
git push -u origin main
```

**You'll be prompted for:**
- GitHub username
- GitHub password (or Personal Access Token)

**If you need a Personal Access Token:**
1. Go to GitHub.com → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token
3. Give it "repo" permissions
4. Copy the token and use it as your password

---

### 7. Enable GitHub Pages

1. Go to your repository on GitHub: `https://github.com/YOUR_USERNAME/equissetix-website`
2. Click **"Settings"** (top menu)
3. Click **"Pages"** (left sidebar)
4. Under **"Source"**, select: **"GitHub Actions"**
5. The deployment will start automatically (check the "Actions" tab)

---

### 8. Connect Your Domain

#### In GitHub:

1. Still in **Settings → Pages**
2. Under **"Custom domain"**, type: `equissetix.com`
3. Check **"Enforce HTTPS"** (after DNS is set up)
4. Click **"Save"**

#### In Squarespace:

1. Log into Squarespace
2. Go to **Settings → Domains**
3. Click on **equissetix.com**
4. Go to **DNS Settings** or **Advanced DNS**

5. **Add these A records** (for equissetix.com):
   - Type: `A`
   - Host: `@` (or blank)
   - Points to: `185.199.108.153`
   - TTL: `3600`
   
   Repeat for these IPs:
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`

6. **Add CNAME record** (for www.equissetix.com):
   - Type: `CNAME`
   - Host: `www`
   - Points to: `YOUR_USERNAME.github.io` (replace with your GitHub username)
   - TTL: `3600`

7. **Save all records**

---

### 9. Wait for DNS Propagation

- Can take 24-48 hours
- Check status at: https://dnschecker.org
- Search for `equissetix.com` A records

---

### 10. Verify It Works

Once DNS propagates:
- Visit: `https://equissetix.com`
- Should see your website!

---

## Updating Your Website

Whenever you make changes:

```powershell
# Make your changes to files, then:
git add .
git commit -m "Description of changes"
git push
```

GitHub Actions will automatically rebuild and deploy (takes 1-2 minutes).

---

## Troubleshooting

### "npm: command not found"
- Install Node.js from nodejs.org
- Restart your terminal after installing

### "git: command not found"
- Install Git from git-scm.com
- Restart your terminal after installing

### Build fails
- Make sure you ran `npm install` first
- Check error messages in terminal

### Domain not working
- Wait longer (DNS can take 48 hours)
- Double-check DNS records match exactly
- Verify domain is set in GitHub Settings → Pages

### Pages show 404
- Make sure GitHub Actions deployment completed successfully
- Check the "Actions" tab for errors
- Verify the workflow file exists at `.github/workflows/deploy.yml`

---

## Need Help?

Tell me which step you're on and what error message you see!
