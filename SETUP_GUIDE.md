# 🚀 Quick Setup Guide

Siap bikin portfolio website React yang keren? Ikuti langkah-langkah ini!

## 📋 Apa yang Sudah Ada

✅ React 18+ dengan Functional Components & Hooks  
✅ Tailwind CSS dengan dark mode support  
✅ Lucide React icons  
✅ Vite untuk build yang lightning-fast  
✅ TypeScript untuk type safety  
✅ Fully responsive design  
✅ Glassmorphism UI effects  

## ⚡ Quick Start (5 Menit)

### 1. Install Dependencies
```bash
npm install
```

### 2. Jalankan Development Server
```bash
npm run dev
```

Server akan automatically kebuka di browser kamu (http://localhost:3000)

### 3. Edit Content
File-file yang perlu kamu edit:

**Untuk data (Skills, Projects, Experience):**
- `src/data/content.ts` - Edit data di sini

**Untuk styling & warna:**
- `tailwind.config.js` - Customize colors dan theme

**Untuk informasi personal:**
- `src/components/Hero.tsx` - Headline dan sub-headline
- `src/components/Contact.tsx` - Email dan contact info
- `src/components/Navbar.tsx` - Social media links

## 🎯 Fitur yang Sudah Dibangun

### 1. **Navbar** 
- Glassmorphic design (transparan dengan blur)
- Mobile-responsive hamburger menu
- Smooth scroll navigation
- CTA button "Let's Talk"

### 2. **Hero Section**
- Catchy headline: "Gym & Tech Content Creator"
- Sub-headline tentang problem-solving
- Multiple CTA buttons
- Social media links
- Scroll indicator

### 3. **Skills Section**
- Technical skills (React, JS, Tailwind, dll)
- Soft skills (Content Creation, Discipline, dll)
- Progress bars dengan level 0-100%
- Statistics display (15+ Projects, 100K+ Audience, dll)

### 4. **Projects Gallery**
- 4 project cards contoh (tinggal ganti dengan project kamu)
- Image placeholder (bisa ganti URL gambar)
- Technology tags
- GitHub link & Demo link buttons
- Hover effects yang smooth

### 5. **Experience Section**
- Timeline profesional
- Achievement highlights
- **Highlight: Personal transformation story** (110kg → 75kg)
- Menunjukkan dedikasi & konsistensi sebagai nilai tambah

### 6. **Contact Form**
- Full form dengan validation
- State management dengan useState
- Success message setelah submit
- Responsive design
- Social media links

### 7. **Footer**
- Navigation links
- Social media links
- Copyright info
- Professional styling

## 📝 Cara Customize

### Update Skills Data
Edit `src/data/content.ts`:
```typescript
export const skills = {
  technical: [
    { name: 'React.js', level: 90, icon: '⚛️' },
    // Add more skills...
  ],
  soft: [
    { name: 'Content Creation', level: 93, icon: '📹' },
    // Add more...
  ]
}
```

### Update Projects
Di file yang sama, edit `projects` array:
```typescript
export const projects = [
  {
    id: 1,
    title: 'Nama Project',
    description: 'Deskripsi...',
    image: 'URL_IMAGE',
    tags: ['React', 'Node.js'],
    github: 'GITHUB_LINK',
    demo: 'DEMO_LINK',
  },
  // Add more projects...
]
```

### Update Personal Info
- **Nama**: Edit di `Hero.tsx` dan `Footer.tsx`
- **Email**: Update di `Contact.tsx`
- **Social Links**: Update URL di components yang relevan

### Customize Colors
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#0f172a',    // Background color
      'secondary': '#1e293b',  // Secondary color
      'accent': '#0ea5e9',     // Accent/highlight color
    },
  },
}
```

## 🏗️ Build & Deploy

### Build untuk Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## 🌐 Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Buka https://vercel.com
3. Click "New Project"
4. Connect GitHub repository
5. Vercel auto-detect Vite → Deploy otomatis ✅

## 🎨 Struktur File

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation
│   ├── Hero.tsx        # Landing section
│   ├── Skills.tsx      # Skills display
│   ├── Projects.tsx    # Project gallery
│   ├── Experience.tsx  # Timeline & achievements
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── data/
│   └── content.ts      # Semua data (skills, projects, experience)
├── App.tsx             # Main app
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 💡 Pro Tips

1. **Untuk gambar project**: Bisa pake Unsplash, Pexels, atau foto sendiri
2. **Update meta info**: Edit di `index.html` untuk SEO
3. **Icons**: Lebih banyak icons tersedia di Lucide React - https://lucide.dev
4. **Custom font**: Bisa add google fonts di `index.css`
5. **Email form**: Bisa integrate dengan EmailJS atau backend

## ❓ Troubleshooting

**Port 3000 sudah terpakai?**
```bash
npm run dev -- --port 3001
```

**Tailwind classes tidak apply?**
- Pastikan path di `tailwind.config.js` sama dengan struktur file

**Build error?**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## 🚀 Next Steps

1. ✅ Setup sudah done
2. 📝 Customize content di `src/data/content.ts`
3. 🎨 Tweak warna & styling di `tailwind.config.js`
4. 📸 Add foto project kamu
5. 🔗 Update social links & contact info
6. 🚀 Deploy ke Vercel

---

Happy coding! 🎉

Pertanyaan? Cek README.md untuk info lebih detail.
