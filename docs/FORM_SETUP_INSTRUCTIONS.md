# Contact Form Setup Instructions

This guide will help you set up the contact form with reCAPTCHA and email notifications.

## Prerequisites

- A Google account for reCAPTCHA
- An email address to receive form submissions (info@equissetix.com)

## Step 1: Get Google reCAPTCHA v3 Keys

1. Go to [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin)
2. Click the **+** button to register a new site
3. Fill in the form:
   - **Label**: Equissetix Website
   - **reCAPTCHA type**: Select **reCAPTCHA v3**
   - **Domains**: Add your domains:
     - `localhost` (for development)
     - `equissetix.com`
     - `www.equissetix.com`
     - Your GitHub Pages domain if using (e.g., `yourusername.github.io`)
   - Accept the reCAPTCHA Terms of Service
4. Click **Submit**
5. You'll receive two keys:
   - **Site Key** (public key - safe to expose in frontend)
   - **Secret Key** (keep this private - not needed for Web3Forms)

## Step 2: Get Web3Forms Access Key

1. Go to [Web3Forms](https://web3forms.com/)
2. Click **"Get Started Free"**
3. Enter your email: **info@equissetix.com**
4. Check your inbox for the verification email
5. Click the verification link
6. Copy your **Access Key** from the dashboard
7. (Optional) In the Web3Forms dashboard, you can:
   - Customize the email template
   - Set up multiple recipient emails
   - Enable spam filtering
   - Configure webhook notifications

## Step 3: Configure Environment Variables

1. Open the `.env` file in the project root (E:\Software Project\equissetix-website\.env)
2. Replace the placeholder values with your actual keys:

```env
# Google reCAPTCHA v3 Site Key (Public - safe to expose)
VITE_RECAPTCHA_SITE_KEY=your_actual_recaptcha_site_key_here

# Web3Forms Access Key (Get from https://web3forms.com)
VITE_WEB3FORMS_KEY=your_actual_web3forms_access_key_here
```

3. Save the file

## Step 4: Test the Form

1. Make sure the dev server is running:
   ```bash
   npm run dev
   ```

2. Navigate to the contact page: `http://localhost:5174/contact`

3. Fill out and submit the form

4. Check your email (info@equissetix.com) for the form submission

5. You should receive an email with all the form details including:
   - Name
   - Email
   - Phone
   - Operation Type
   - Number of Horses
   - Pain Point
   - Message

## Step 5: Deploy to Production

When deploying to production (GitHub Pages, Netlify, Vercel, etc.):

1. **For GitHub Actions deployment:**
   - Add the environment variables as GitHub Secrets:
     - Go to your repo → Settings → Secrets and variables → Actions
     - Add `VITE_RECAPTCHA_SITE_KEY`
     - Add `VITE_WEB3FORMS_KEY`

2. **For Netlify:**
   - Go to Site settings → Build & deploy → Environment
   - Add both variables

3. **For Vercel:**
   - Go to Project settings → Environment Variables
   - Add both variables

## Important Security Notes

- ✅ The `.env` file is already added to `.gitignore` - never commit it!
- ✅ The reCAPTCHA Site Key is safe to expose in the frontend
- ✅ The Web3Forms Access Key is also safe to expose (it's rate-limited and domain-restricted)
- ✅ reCAPTCHA v3 works invisibly in the background - no checkboxes!
- ✅ All form submissions are protected against bots

## Troubleshooting

### Form submission fails with "reCAPTCHA not loaded"
- Make sure you've added a valid reCAPTCHA Site Key to `.env`
- Clear your browser cache and reload the page

### Email not being received
- Check your spam folder
- Verify the Web3Forms Access Key is correct
- Check the Web3Forms dashboard for submission logs
- Verify info@equissetix.com is verified in Web3Forms

### reCAPTCHA shows "Invalid site key"
- Verify the domain is added in the reCAPTCHA admin console
- Make sure you're using the reCAPTCHA v3 keys (not v2)
- Clear browser cache

## Email Customization

To customize the email format:

1. Log into [Web3Forms Dashboard](https://web3forms.com/dashboard)
2. Go to Settings → Email Template
3. Customize the template with your branding
4. You can use variables like `{name}`, `{email}`, etc.

## Alternative Email Services

If you want to use a different email service:

- **Formspree**: https://formspree.io/
- **EmailJS**: https://www.emailjs.com/
- **Netlify Forms**: Built-in if hosting on Netlify
- **Custom Backend**: Set up your own API endpoint

## Support

- Web3Forms Documentation: https://docs.web3forms.com/
- reCAPTCHA Documentation: https://developers.google.com/recaptcha/docs/v3
