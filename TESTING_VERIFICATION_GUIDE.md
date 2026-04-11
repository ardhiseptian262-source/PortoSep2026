# 🧪 Testing & Verification Guide

Panduan lengkap untuk test dan verifikasi Firebase integration dengan Visitor Counter di local dan production.

---

## 📋 Testing Phases

1. **Local Testing** - Development machine
2. **Build Testing** - Production build di local
3. **Firebase Integration Testing** - Koneksi ke Firebase
4. **Vercel Deployment Testing** - Production environment
5. **End-to-End Testing** - Full workflow validation

---

## Phase 1: Local Testing

### 1.1 Setup Environment

```bash
cd "d:\Website Portofolio"

# Verify Node.js
node --version          # v16+ required
npm --version          # v8+ required

# Install dependencies
npm install

# Verify Firebase installed
npm ls firebase        # Should show firebase@10.0.0 or similar
```

### 1.2 Create & Configure `.env.local`

```bash
# Copy example
copy .env.example .env.local

# Edit .env.local dengan Firebase credentials dari Firebase Console
# Pastikan values EXACT - tidak ada typos!
```

**`.env.local` should look like:**
```env
VITE_FIREBASE_API_KEY=AIzaSyxxxxxxxxxxxxxxxxxxxxxxxxx
VITE_FIREBASE_AUTH_DOMAIN=portfolio-xxxxx.firebaseapp.com
VITE_FIREBASE_DATABASE_URL=https://portfolio-xxxxx-default-rtdb.firebaseio.com
VITE_FIREBASE_PROJECT_ID=portfolio-xxxxx
VITE_FIREBASE_STORAGE_BUCKET=portfolio-xxxxx.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789123
VITE_FIREBASE_APP_ID=1:123456789123:web:xxxxxxxxxxxxxxxxxxxxx
```

### 1.3 Start Development Server

```bash
npm run dev
```

**Output should be:**
```
  VITE v4.x.x  build xxx

  ➜  Local:   http://127.0.0.1:5173/
  ➜  press h to show help
  ✅ Firebase initialized successfully
```

### 1.4 Test Visitor Counter

**Di Browser:**
1. Buka `http://localhost:5173`
2. Lihat footer atau navbar → cari "Visitors" dengan icon 👥
3. Catat angka awal, misal: 5

**Test 1: Refresh Page**
```
- Refresh page (F5 atau Ctrl+R)
- Counter harus TETAP sama (5)
- ✅ Session tracking working
```

**Test 2: Buka Incognito/Private**
```
- Buka http://localhost:5173 di incognito/private window
- Counter harus INCREMENT ke 6
- ✅ New session detected
```

**Test 3: Close & Reopen Normal Tab**
```
- Tutup tab normal
- Buka baru ke http://localhost:5173
- Counter harus INCREMENT ke 7
- ✅ Session mechanism working
```

### 1.5 Check Firebase Console

**Di Firebase Console Real-time Database:**
1. Buka Firebase Project
2. **Database** tab
3. Lihat data path: `visitors/count`

**Should show:**
```json
{
  "visitors": {
    "count": 7,
    "lastUpdate": "2024-01-15T10:30:00Z"
  }
}
```

**Jika tidak ada data:**
- ❌ Koneksi Firebase gagal
- Check `.env.local` values atau errors di console

### 1.6 Check Browser Console

**Buka DevTools (F12):**

1. **Console tab:**
   - Seharusnya ada: `✅ Firebase initialized successfully`
   - Tidak boleh ada merah error messages

2. **Application → LocalStorage:**
   ```
   portfolioVisitorId: "1705308000000-xxxxx"
   ```

3. **Network tab:**
   - Cari request ke `*.firebaseio.com`
   - Status harus `200` (success)

```javascript
// Test Firebase connection di Console:
firebase.database().ref('visitors/count').once('value')
  .then(snap => console.log('Count:', snap.val()))
  .catch(err => console.error('Error:', err))

// Result:
// Count: 7 ✅
```

---

## Phase 2: Build Testing

Verifikasi production build bekerja di local sebelum deploy ke Vercel.

### 2.1 Create Production Build

```bash
npm run build
```

**Output:**
```
vite v4.x.x building for production...
✓ 123 modules transformed
dist/index.html         0.50 kB │ gzip:  0.30 kB
dist/assets/main.xxxxx.js    123.45 kB │ gzip: 45.67 kB
✓ built in 2.50s
```

**Check jika ada error:**
- ❌ Build failed → cek error message
- Biasanya: missing import, typo, atau missing dependency

### 2.2 Preview Build

```bash
npm run preview
```

**Harus buka browser:**
```
  ➜  Local:   http://localhost:4173/
```

### 2.3 Test Preview Build

**Lakukan sama seperti Phase 1:**
- Counter harus tetap increment
- Firefox Console should show ✅ Firebase initialized
- Performance harus lebih cepat dari dev mode

---

## Phase 3: Firebase Integration Testing

Test specific Firebase functionality.

### 3.1 Test Realtime Updates

1. Buka portfolio di tab 1 (`http://localhost:5173`)
2. Buka Firebase Console di tab 2
3. Di Firebase Console, edit `visitors/count` ke 100
4. Kembali ke tab 1 aplikasi
5. Refresh atau tunggu ~5 detik
6. Counter seharusnya menunjukkan 100 ✅

### 3.2 Test Offline Fallback

1. Di DevTools (F12) → Network tab
2. Pilih "Offline" di dropdown
3. Refresh page
4. Counter harus:
   - Menampilkan ⚠️ icon (bukan 👥)
   - Background text "(offline)" 
   - Gunakan localStorage sebagai fallback
   - ✅ Graceful degradation

### 3.3 Test Database Rules

**Check security rules di Firebase:**

1. Firebase Console → Database → Rules
2. Seharusnya:
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

3. Test write protection:
```javascript
// Di browser console, coba write invalid data:
firebase.database().ref('visitors/count').set(-999)
  .then(() => console.log('Write success'))
  .catch(err => console.log('Write denied:', err))

// Should return error: "Permission denied"
// ✅ Security rules working
```

---

## Phase 4: Vercel Deployment Testing

Test setelah deploy ke Vercel.

### 4.1 Verify Deployment Success

1. Buka Vercel Dashboard: `https://vercel.com/dashboard`
2. Pilih project `portfolio`
3. Check **Deployments** tab:
   - Latest deployment harus status ✅ "Ready"
   - Bukan status ⏳ "Building" atau ❌ "Failed"

### 4.2 Check Build Logs

**Jika deployment failed:**

1. Di Deployments list, klik deployment yang gagal
2. Tab **"Build Logs"**
3. Scroll baca error message
4. Common errors:
   - `Module not found: firebase` → npm install di local first
   - `Cannot find module 'src/config/firebase'` → file not uploaded
   - Port conflict → Vercel picks random port automatically

### 4.3 Test Production URL

**Get production URL:**
1. Vercel Dashboard → Project
2. Copy URL dari section "Domains", misal: `https://portfolio-abc123.vercel.app`

**Open di browser:**
```
https://portfolio-abc123.vercel.app
```

**Perform same tests:**
- ✅ Page loads (tidak blank, tidak error)
- ✅ Visitor counter visible
- ✅ Counter increment works
- ✅ Console shows ✅ Firebase initialized
- ✅ No red errors di console

### 4.4 Verify Environment Variables

**Di Vercel Dashboard:**
1. Project Settings → **"Environment Variables"**
2. Check semua `VITE_FIREBASE_*` ada dan nilai's correct

**Jika env vars visible di page source:**
- ❌ SECURITY ISSUE! Env vars leaked!
- Pastikan prefixed dengan `VITE_` ← Vite only expose VITE_ vars
- Redeploy setelah fix

### 4.5 Test Firebase Production Connection

```javascript
// Di production browser console:
firebase.database().ref('visitors').once('value')
  .then(snap => console.log('Firebase Data:', snap.val()))
  .catch(err => console.error('Firebase Error:', err))

// Expected:
// {count: 123, lastUpdate: "2024-01-15T..."}
```

---

## Phase 5: End-to-End Testing

Complete workflow validation.

### 5.1 Multi-Device Testing

Test dari berbagai devices & browsers:

```
Device 1 (Desktop - Chrome):
  - Buka production URL
  - Counter: 100

Device 2 (Mobile - Safari):
  - Buka production URL
  - Counter: 101 (increment 1x)
  - Refresh: tetap 101

Device 3 (Tablet - Firefox):
  - Buka production URL
  - Counter: 102
  - Check responsive design OK
```

### 5.2 Time-Based Testing

```
Session 1 (10:00 AM):
  - Buka → count increment
  - Counter: 100

Session 2 (10:05 AM, beda tab):
  - Buka → count increment
  - Counter: 101

Session 3 (10:10 AM, same browser, same tab):
  - Refresh → count tetap
  - Counter: 101 (no double count)
```

### 5.3 Performance Metrics

**Check Vercel Analytics:**
1. Dashboard → Project → **"Analytics"**
2. Lihat:
   - **First Contentful Paint (FCP)**: < 1.5s ✅
   - **Largest Contentful Paint (LCP)**: < 2.5s ✅
   - **Cumulative Layout Shift (CLS)**: < 0.1 ✅

**Jika performance jelek:**
- Check Firebase response time
- Mungkin perlu optimize query atau caching

---

## ✅ Testing Checklist

- [ ] Local dev server runs (npm run dev)
- [ ] .env.local created dengan values exact
- [ ] Visitor counter visible & incrementing locally
- [ ] Firebase Console shows updated data
- [ ] Production build successful (npm run build)
- [ ] Preview build works (npm run preview)
- [ ] Offline fallback working
- [ ] Security rules tested & working
- [ ] Vercel deployment success (status ✅)
- [ ] Production URL accessible
- [ ] Env variables visible di Vercel settings
- [ ] Production visitor counter working
- [ ] Firebase Console data updating from production
- [ ] Multi-device testing done
- [ ] Performance metrics acceptable

---

## 🐛 Debugging Checklist

Jika ada issue, check ini:

### Issue: Counter tidak increment
```
☐ Env vars di .env.local exact?
☐ Firebase initialized message di console?
☐ Firebase Console menunjukkan data?
☐ Network tab → requests ke firebaseio.com successful?
☐ sessionStorage punya 'portfolioVisitorId'?
```

### Issue: Env vars tidak load di Vercel
```
☐ Prefix dengan VITE_? (case-sensitive)
☐ Added ke Vercel Project Settings → Environment Variables?
☐ Redeployed setelah add vars?
☐ Tidak ada spaces di values?
```

### Issue: Firebase connection error
```
☐ databaseURL correct? (ends with .firebaseio.com)
☐ Credentials complete? (7 values)
☐ Copy-paste exact dari Firebase Console?
☐ Database exists & enabled di Firebase Console?
```

---

## 📊 Expected Logs

**Good logs (no errors):**
```
✅ Firebase initialized successfully
Counter updated: 123
lastUpdate: 2024-01-15T10:30:00Z
```

**Bad logs (needs fixing):**
```
❌ Firebase initialization failed: ...
"Module not found: firebase"
Cannot read property 'database' of undefined
```

---

## 🔗 Resources

- [Firebase Realtime Database Testing](https://firebase.google.com/docs/database/start)
- [Vercel Deployment Debugging](https://vercel.com/docs/concepts/deployments/troubleshoot)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-modes.html)

---

**Testing complete = Confident deployment! ✅**
