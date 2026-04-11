# 🚀 Complete Deployment Guide: Vercel + Firebase

Panduan lengkap untuk deploy Portfolio React ke Vercel dengan Firebase untuk visitor counter online.

---

## 📋 Table of Contents
1. [Prerequisites](#prerequisites)
2. [Step 1: Setup Firebase Project](#step-1-setup-firebase-project)
3. [Step 2: Create/Setup GitHub Repository](#step-2-createsetup-github-repository)
4. [Step 3: Configure Environment Variables](#step-3-configure-environment-variables)
5. [Step 4: Install Firebase & Update Code](#step-4-install-firebase--update-code)
6. [Step 5: Deploy to Vercel](#step-5-deploy-to-vercel)
7. [Step 6: Testing & Verification](#step-6-testing--verification)
8. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Akun & Tools yang Diperlukan:
- ✅ GitHub account ([github.com](https://github.com))
- ✅ Vercel account ([vercel.com](https://vercel.com) - signup with GitHub)
- ✅ Firebase account ([firebase.google.com](https://firebase.google.com))
- ✅ Git installed di local machine
- ✅ Node.js 16+ dan npm

**Verifikasi di terminal:**
```bash
node --version      # v16.0.0 atau lebih tinggi
npm --version       # v8.0.0 atau lebih tinggi
git --version       # Harus terinstall
```

---

## Step 1: Setup Firebase Project

### 1.1 Buat Firebase Project

1. Buka [Firebase Console](https://console.firebase.google.com)
2. Klik **"Create a new project"** atau **"Add project"**
3. Masukkan Project Name: `portfolio-visitors` (atau nama sesuai pilihan)
4. Pilih/buat lokasi 🌍 terdekat dengan target audience
5. Klik **"Create project"** dan tunggu loading

### 1.2 Setup Realtime Database

1. Di Firebase Console, pilih project yang baru dibuat
2. Di sidebar kiri, buka **Build → Realtime Database**
3. Klik **"Create Database"**
4. Pilih lokasi database (sama dengan project)
5. Pilih mode: **"Start in test mode"** untuk development
   - ⚠️ PENTING: Ubah security rules sebelum production (lihat bagian Security Rules)
6. Klik **"Create"**

### 1.3 Dapatkan Firebase Credentials

1. Buka **Project Settings** (roda gigi icon di atas sidebar)
2. Buka tab **"Your apps"**
3. Klik **Web icon** (</>)
4. Masukkan App Name: `portfolio` (atau sesuai pilihan)
5. Klik **"Register app"**
6. Copy konfigurasi Firebase yang muncul:

```javascript
// Format yang akan Anda copy:
const firebaseConfig = {
  apiKey: "AIzaSyxxxxxxxxxxxxxxxxxxxx",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project-xxxxx",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:xxxxxxxxxxxxx"
};
```

7. **SIMPAN CREDENTIALS INI** - Akan digunakan di Step 3

### 1.4 Setup Security Rules (Penting untuk Production)

1. Di Realtime Database, pilih tab **"Rules"**
2. Replace dengan security rules berikut:

```json
{
  "rules": {
    "visitors": {
      ".read": true,
      ".write": false,
      "count": {
        ".write": "data.val() < root.child('visitors').child('count').val() + 100"
      }
    }
  }
}
```

3. Klik **"Publish"**

**Penjelasan:**
- `.read: true` - Siapa saja bisa baca counter
- `.write` terbatas - Hanya increment increment maksimal 100 di satu request
- Ini mencegah abuse/spam

---

## Step 2: Create/Setup GitHub Repository

### 2.1 Jika Belum Ada Repository

1. Buka [GitHub](https://github.com) dan login
2. Klik **"New repository"** (tombol hijau)
3. Nama: `portfolio` atau `react-portfolio`
4. Deskripsi: `Professional portfolio website with React, Tailwind CSS, and Firebase`
5. Pilih **Public** (agar bisa diakses)
6. **JANGAN** initialize dengan README (sudah ada)
7. Klik **"Create repository"**
8. Copy HTTPS URL: `https://github.com/username/portfolio.git`

### 2.2 Push Code ke GitHub

Di terminal, masuk ke folder project:

```bash
cd "d:\Website Portofolio"

# Jika belum ada git remote, tambahkan
git remote add origin https://github.com/username/portfolio.git

# Atau jika sudah ada, update
git remote set-url origin https://github.com/username/portfolio.git

# Check status
git status

# Stage semua perubahan
git add .

# Commit dengan pesan
git commit -m "Initial commit: React portfolio with Firebase integration"

# Push ke GitHub (perhatian: cabang mungkin 'main' atau 'master')
git branch -M main
git push -u origin main
```

**Jika ada error credentials:**
- Gunakan Personal Access Token alih-alih password
- Follow: [GitHub Personal Token Setup](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

**Verifikasi:** Buka `https://github.com/username/portfolio` di browser, seharusnya code sudah visible.

---

## Step 3: Configure Environment Variables

### 3.1 Buat File `.env.local`

Di root folder project, buat file **`.env.local`** (jangan commit ke git):

```env
VITE_FIREBASE_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your-project-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:xxxxxxxxxxxxx
```

### 3.2 Update `.env.example`

Edit file `.env.example` agar tim lain tahu variabel apa yang diperlukan:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://your-project-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# How to get these values:
# 1. Go to Firebase Console
# 2. Project Settings → Your Apps → Web
# 3. Copy the firebaseConfig object
```

### 3.3 Pastikan `.gitignore` Include `.env.local`

Check apakah `.env.local` di `.gitignore`:

```
# Lihat di .gitignore
.env.local      # ✅ Sudah ada?
.env.*.local
```

Jika tidak ada, tambahkan line berikut ke `.env.local` ke `.gitignore`:
```
.env.local
.env.*.local
```

---

## Step 4: Install Firebase & Update Code

### 4.1 Install Firebase Package

```bash
npm install firebase
```

### 4.2 File Structure (Sudah Disediakan)

Pastikan file-file berikut sudah ada dan updated:

```
src/
├── config/
│   └── firebase.ts          # ✅ File konfigurasi Firebase (disediakan)
├── components/
│   └── VisitorCounter.tsx    # ✅ Updated untuk pakai Firebase
└── ...
```

### 4.3 Verify Firebase Integration

Di VS Code, buka file:
- `src/config/firebase.ts` - Check konfigurasi Firebase
- `src/components/VisitorCounter.tsx` - Check apakah sudah using Firebase

Jika belum ada, file-file ini sudah disediakan di deployment ini.

---

## Step 5: Deploy to Vercel

### 5.1 Connect GitHub ke Vercel

1. Buka [Vercel](https://vercel.com) dan login dengan GitHub
2. Klik **"New Project"** atau **"Import"**
3. Koneksi GitHub account (jika belum connected)
4. Pilih repository `portfolio` Anda
5. Klik **"Import"**

### 5.2 Configure Project Settings

Di halaman Import Project:

**Framework Preset:** Pilih **Vite**

**Root Directory:** Leave as default (`.`)

**Build & Development Settings** akan auto-detect:
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

### 5.3 Add Environment Variables

**PENTING:** Di section **"Environment Variables"**, tambahkan semua credentials Firebase:

| Variable Name | Value |
|---|---|
| `VITE_FIREBASE_API_KEY` | Dari Firebase Console |
| `VITE_FIREBASE_AUTH_DOMAIN` | Dari Firebase Console |
| `VITE_FIREBASE_DATABASE_URL` | Dari Firebase Console |
| `VITE_FIREBASE_PROJECT_ID` | Dari Firebase Console |
| `VITE_FIREBASE_STORAGE_BUCKET` | Dari Firebase Console |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Dari Firebase Console |
| `VITE_FIREBASE_APP_ID` | Dari Firebase Console |

**Cara cepat:** Copy nilai dari `.env.local` Anda

### 5.4 Deploy!

1. Klik **"Deploy"**
2. Tunggu build process (~2-3 menit)
3. Setelah sukses, Anda akan dapat URL:
   - **Production URL**: `https://portfolio-xxxxxx.vercel.app`
   - **QR Code** untuk sharing

---

## Step 6: Testing & Verification

### 6.1 Test Visitor Counter

1. Buka portfolio URL dari Vercel: `https://portfolio-xxxxxx.vercel.app`
2. Lihat footer atau section dengan visitor counter 👥
3. Refresh page beberapa kali
4. Counter seharusnya increment (hanya 1x per session)

### 6.2 Verify Firebase Connection

**Check Di Firebase Console:**
1. Buka Firebase Console → Pilih project
2. Realtime Database → Tab **"Data"**
3. Seharusnya ada data `visitors` dengan struktur:
```json
{
  "visitors": {
    "count": 5,
    "lastUpdate": "2024-01-15T10:30:00Z"
  }
}
```

**Atau cek di DevTools (Browser):**
```javascript
// Di browser console, ketik:
localStorage.getItem('portfolioVisitorId')
// Seharusnya return ID yang unique
```

### 6.3 Performance Check

1. Buka **Vercel Dashboard** → Project Anda
2. Tab **"Analytics"** - Check:
   - Deploy success status ✅
   - Build time (~30-60 detik)
   - Function Logs (error ada?)

---

## Troubleshooting

### Issue 1: "Module not found: firebase"

**Solution:**
```bash
npm install firebase
npm run build
```

### Issue 2: Environment Variables Tidak Terload

**Check:**
1. Pastikan variabel sudah di-add di Vercel Project Settings
2. Nama harus exact: `VITE_FIREBASE_API_KEY` (bukan `FIREBASE_API_KEY`)
3. Redeploy setelah add variables

**Vercel Setting → Environment Variables:**
```
Project Settings 
  → Environment Variables 
  → Copy semua VITE_FIREBASE_* dari .env.local
```

### Issue 3: Firebase Connection Error

**Check:**
- `databaseURL` benar? (harus format: `https://xxx.firebaseio.com`)
- Database rules udah publish? (`Rules` tab di Firebase Console)
- Security rules memungkinkan read/write?

**Debug:**
```javascript
// Di browser console:
firebase.database().ref('visitors').once('value')
  .then(snap => console.log(snap.val()))
  .catch(err => console.error('Firebase Error:', err))
```

### Issue 4: Visitor Counter Tidak Increment

**Check:**
1. Buka DevTools (F12) → Console tab
2. Ada error message?
3. Check Local Storage: `Application → Local Storage → portfolio-url`

**Manual Test:**
```javascript
// Console: Force update counter
localStorage.removeItem('portfolioVisitorId');
location.reload();
```

### Issue 5: Deploy Gagal dengan Error

**Common Errors:**
- **"Build failed"** → Check build log di Vercel, biasanya missing dependency
- **"Cannot find module"** → Run `npm install`, push ke GitHub, redeploy
- **Timeout** → Database URL timeout, check Firebase connection

**Vercel Logs:**
1. Dashboard → Project → Deployments
2. Pilih deployment terakhir (dengan red icon)
3. Klik "View Deployment Log"
4. Scroll baca error message

---

## Deployment Checklist ✅

Sebelum final deploy, pastikan:

- [ ] Firebase project dibuat & database active
- [ ] Firebase credentials di copy dengan benar
- [ ] `.env.local` file berisi all Firebase variables
- [ ] `.env.local` ada di `.gitignore`
- [ ] Code di push ke GitHub repo
- [ ] npm install Firebase package sudah dilakukan
- [ ] VisitorCounter component updated untuk use Firebase
- [ ] Vercel project created dan connected ke GitHub
- [ ] All environment variables added di Vercel
- [ ] Build successful di Vercel
- [ ] Visitor counter working & Firebase data updating
- [ ] Performance OK (no errors di console)

---

## Next Steps: Optional Enhancements

Setelah deploy berhasil, bisa tambahkan:

### 1. Custom Domain
```
Vercel Dashboard → Project → Settings → Domains
Beli domain atau pakai free: portfolio.me
```

### 2. Analytics
```
Tambahkan Google Analytics ID di environment
```

### 3. CI/CD Pipeline
```
Auto-deploy setiap push ke main branch (Vercel default)
```

### 4. Backup Database
```
Firebase Console → Rules & Rules Simulator untuk test
```

---

## Reference Links

- 📖 [Firebase Realtime Database Docs](https://firebase.google.com/docs/database)
- 🚀 [Vercel Deployment Guide](https://vercel.com/docs)
- ⚛️ [React + Firebase Guide](https://firebase.google.com/docs/web/setup)
- 🔐 [Firebase Security Rules](https://firebase.google.com/docs/database/security)

---

**Good luck with your deployment! 🎉**

Jika ada pertanyaan, check troubleshooting section atau reference links di atas.
