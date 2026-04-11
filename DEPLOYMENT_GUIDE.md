# 🚀 Deployment Guide

Complete guide untuk deploy portfolio website ke production.

## Option 1: Vercel (⭐ Recommended - Easiest)

### Why Vercel?
- Maintained oleh creator Next.js & Vite
- Auto-detect Vite project
- Free tier yang unlimited
- Zero-config deployment
- Super fast CDN global

### Steps:

1. **Push ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to Vercel**
   - Visit https://vercel.com
   - Click "Sign Up" (bisa sign up with GitHub)
   - Authorize Vercel to access GitHub

3. **Import Project**
   - Click "New Project"
   - Select repository dari list
   - Framework: Vite akan auto-detect
   - Click "Deploy"

4. **Done! 🎉**
   - Vercel akan auto-generate URL
   - Setiap push ke main branch = auto deploy
   - Custom domain support tersedia

### Custom Domain (Optional)
1. Di Vercel dashboard → Settings → Domains
2. Add custom domain
3. Update DNS di domain registrar
4. Wait untuk propagasi (15-30 menit)

---

## Option 2: Netlify

### Why Netlify?
- Simple deployment dari GitHub
- Free tier dengan unlimited bandwidth
- Continuous deployment otomatis
- Easy DNS management

### Steps:

1. **Build Locally** (optional, untuk verify)
   ```bash
   npm run build
   ```

2. **Go to Netlify**
   - Visit https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Select GitHub

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Done!**
   - Netlify auto-generates random URL
   - Auto-redeploy setiap push ke GitHub

### Custom Domain
- Settings → Domain management → Add custom domain
- Update DNS records
- SSL auto-generate dalam 24 hours

---

## Option 3: GitHub Pages

### Why GitHub Pages?
- Completely FREE
- Hosted langsung dari GitHub
- Tidak perlu third-party service

### Steps:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Update vite.config.ts**
   ```typescript
   export default {
     base: '/portfolio/',  // Replace dengan repo name
     // ... rest of config
   }
   ```

3. **Add deploy script di package.json**
   ```json
   {
     "scripts": {
       "deploy": "npm run build && gh-pages -d dist"
     }
   }
   ```

4. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

5. **Deploy**
   ```bash
   npm run deploy
   ```

6. **Setup on GitHub**
   - Go to Repository Settings
   - Pages section
   - Select "Deploy from a branch"
   - Select `gh-pages` branch
   - Save

7. **Access URL**
   - https://yourusername.github.io/portfolio

---

## Option 4: Firebase Hosting

### Why Firebase?
- Easy setup
- Real-time database support
- Backend-ready untuk future expansion
- Free tier dengan generous limits

### Steps:

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**
   ```bash
   firebase login
   ```

3. **Initialize Firebase Project**
   ```bash
   firebase init hosting
   ```
   - Select existing Firebase project (atau create new)
   - Public directory: `dist`
   - Configure single-page app: Yes
   - Set up automatic builds: No

4. **Build & Deploy**
   ```bash
   npm run build
   firebase deploy
   ```

5. **Access URL**
   - Firebase akan auto-generate URL
   - Atau connect custom domain di Firebase console

---

## Option 5: AWS S3 + CloudFront

### Why AWS?
- Ultra scalable
- Enterprise-grade security
- Global CDN
- Pay-as-you-go pricing

### Steps (Advanced):

1. **Create S3 Bucket**
   - Go to AWS Console → S3
   - Create bucket (nama = domain kamu)
   - Block all public access: OFF
   - Enable static website hosting

2. **Build & Upload**
   ```bash
   npm run build
   # Use AWS CLI atau drag-drop files
   aws s3 sync dist/ s3://your-bucket-name/
   ```

3. **Create CloudFront Distribution**
   - AWS Console → CloudFront
   - Create distribution
   - Origin: S3 bucket
   - Enable compression
   - Create

4. **Connect Domain**
   - Route 53 → Create hosted zone
   - Add A records pointing to CloudFront

---

## Comparison Table

| Platform | Cost | Setup | Custom Domain | Auto Deploy | Performance |
|----------|------|-------|---------------|-------------|-------------|
| **Vercel** | Free | ⭐⭐⭐ | ✅ free | ✓ | ⭐⭐⭐⭐⭐ |
| **Netlify** | Free | ⭐⭐⭐ | ✅ free | ✓ | ⭐⭐⭐⭐ |
| **GitHub Pages** | Free | ⭐⭐ | ⚠️ complex | ✓ | ⭐⭐⭐ |
| **Firebase** | Free | ⭐⭐ | ✅ paid | ✓ | ⭐⭐⭐⭐ |
| **AWS** | Pay | ⭐ | ✅ paid | ✗ | ⭐⭐⭐⭐⭐ |

**👉 Rekomendasi: Vercel untuk simplicity & performance**

---

## Pre-Deployment Checklist

Sebelum deploy, pastikan:

- [ ] Update semua social links di components
- [ ] Ganti email di Contact section
- [ ] Update project links & descriptions
- [ ] Test form submission (akan perlu backend untuk email)
- [ ] Check responsivitas di mobile
- [ ] Update meta tags di `index.html`
- [ ] Test semua links dan buttons
- [ ] Run `npm run build` dan cek untuk errors
- [ ] Review colors dan styling

## Environment Variables (Optional)

Jika perlu environment variables untuk production:

1. **Create .env.production**
   ```bash
   VITE_API_URL=https://api.example.com
   ```

2. **Access dalam code**
   ```typescript
   const apiUrl = import.meta.env.VITE_API_URL
   ```

3. **Set di platform**
   - Vercel: Settings → Environment Variables
   - Netlify: Build & deploy → Environment

---

## Post-Deployment

### 1. Test Website
- Visit URL production
- Test semua links
- Verify forms
- Check mobile responsiveness
- Test social media links

### 2. Setup Analytics (Optional)
```bash
npm install react-ga4
```

Edit `App.tsx`:
```typescript
import ReactGA from 'react-ga4'
ReactGA.initialize('GA_MEASUREMENT_ID')
```

### 3. Setup Contact Form Backend
Pilih salah satu:
- **EmailJS** - Easy integration
- **Formspree** - Simple form backend
- **Custom backend** - Node.js + email service

### 4. Monitor Performance
- Vercel/Netlify analytics dashboard
- Google PageSpeed Insights
- Lighthouse

---

## Domain Setup (Custom Domain)

### If Using GoDaddy/Namecheap/etc:

1. **Pointing DNS:**
   - Get nameservers dari Vercel/Netlify
   - Update nameservers di domain registrar
   - Wait 24-48 hours untuk propagasi

2. **Or CNAME Records:**
   - Get CNAME value dari platform
   - Add CNAME record di DNS
   - Point ke platform's domain

3. **SSL Certificate:**
   - Most platforms auto-generate
   - Usually available dalam 24 hours

---

## Troubleshooting

**Page shows 404?**
- Check vite.config.ts base path
- Make sure dist/ folder uploaded completely

**Page loads but styling is broken?**
- Check vite.config.ts base property
- Ensure all CSS files built correctly

**Form tidak berfungsi?**
- Need backend atau EmailJS integration
- Test locally: `npm run dev`

**Slow performance?**
- Check Network tab di DevTools
- Ensure images optimized
- Consider CDN for assets

---

## Continuous Deployment

### Auto-Deploy Setup (Vercel/Netlify)

1. **Every push to main branch**
   ```bash
   git push origin main
   ```
   → Automatically deploys ✅

2. **Preview deployments**
   - Pull requests auto-generate preview URLs
   - Test changes sebelum merge

3. **Rollback**
   - Vercel/Netlify dashboard
   - Select previous deployment
   - Click "promote to production"

---

## Tips & Best Practices

1. **Version control**
   - Always use git
   - Meaningful commit messages

2. **Performance**
   - Optimize images (use WebP)
   - Lazy load components
   - Min CSS/JS files

3. **Security**
   - Keep dependencies updated
   - Use environment variables untuk secrets
   - Validate form inputs

4. **SEO**
   - Update meta tags
   - Descriptive title & description
   - Open Graph tags untuk social sharing

---

## Support & Resources

- Vercel Docs: https://vercel.com/docs
- Netlify Docs: https://docs.netlify.com
- Vite Docs: https://vitejs.dev
- React Docs: https://react.dev

---

**🎉 Selamat! Portfolio website kamu siap di-launch ke dunia!**
