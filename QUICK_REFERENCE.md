# ⚡ Quick Reference Card

## 🚀 Common Commands

```bash
# Installation
npm install                    # Install dependencies

# Development
npm run dev                   # Start dev server (localhost:3000)
npm run dev -- --port 3001   # Use custom port

# Production
npm run build                 # Build for production (creates dist/)
npm run preview              # Preview production build locally

# Maintenance
npm update                   # Update all packages
npm outdated                 # Check for outdated packages
git add .
git commit -m "message"
git push origin main         # Push to GitHub (auto-deploys if using Vercel)
```

## 📝 File Locations for Common Edits

### Update Your Info
| What | Where |
|------|-------|
| **Name** | `src/components/Hero.tsx` (line 14), `src/components/Footer.tsx` (line 77) |
| **Email** | `src/components/Contact.tsx` (line 65), `src/components/Footer.tsx` (line 50) |
| **Social Links** | `src/components/Navbar.tsx` (line 53-54), `src/components/Hero.tsx` (line 42-55) |
| **Headline** | `src/components/Hero.tsx` (line 14-16) |

### Update Content Data
| What | Where |
|------|-------|
| **Skills** | `src/data/content.ts` (lines 1-20) |
| **Projects** | `src/data/content.ts` (lines 22-60) |
| **Experience** | `src/data/content.ts` (lines 85-130) |
| **Achievements** | `src/data/content.ts` (lines 62-82) |

### Customize Styling
| What | Where |
|------|-------|
| **Colors** | `tailwind.config.js` (lines 9-13) |
| **Animations** | `tailwind.config.js` (lines 14-28) |
| **Global Styles** | `src/index.css` |
| **Breakpoints** | `tailwind.config.js` |

## 🎨 Color Scheme

```
Primary (Dark Background):    #0f172a
Secondary (Lighter Dark):     #1e293b
Accent (Cyan):               #0ea5e9
Text (Light Gray):           #e2e8f0
Text Muted (Gray):           #a0aec0
```

To change, edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      'primary': '#YOUR_COLOR',
      'secondary': '#YOUR_COLOR',
      'accent': '#YOUR_COLOR',
    }
  }
}
```

## 🔧 Component Overview

| Component | Purpose | Key Props/State |
|-----------|---------|-----------------|
| **Navbar** | Navigation | `onNavigate(sectionId)` |
| **Hero** | Landing | onClick handlers for buttons |
| **Skills** | Display skills | Uses `skills` from content.ts |
| **Projects** | Gallery | Uses `projects` array |
| **Experience** | Timeline | Uses `experience` & `achievements` |
| **Contact** | Form | `formData` state, `handleSubmit` |
| **Footer** | Bottom info | Social links, copyright |

## 📱 Responsive Breakpoints

```
Mobile:          < 640px   (sm)
Tablet:          640-1024px (md)
Desktop:         > 1024px  (lg)
```

Tailwind classes: `sm:`, `md:`, `lg:` prefixes

## 🎯 Add New Skill

1. Open `src/data/content.ts`
2. Find `skills.technical` or `skills.soft`
3. Add new object:
```typescript
{ name: 'Your Skill', level: 85, icon: '🎯' }
```
4. Save & auto-reload

## 🎯 Add New Project

1. Open `src/data/content.ts`
2. Find `projects` array
3. Add new object:
```typescript
{
  id: 5,
  title: 'Project Name',
  description: 'Brief description',
  image: 'https://image-url.jpg',
  tags: ['React', 'Tailwind'],
  github: 'https://github.com/link',
  demo: 'https://demo-link.com',
}
```

## 🎯 Add New Achievement

1. Open `src/data/content.ts`
2. Find `achievements` array
3. Add new object:
```typescript
{
  id: 5,
  title: 'Achievement Title',
  description: 'Description',
  impact: 'Why it matters',
  year: 2024,
  icon: '🎯',
}
```

## 🎯 Add New Experience

1. Open `src/data/content.ts`
2. Find `experience` array
3. Add new entry:
```typescript
{
  period: '2024 - Present',
  role: 'Your Role',
  company: 'Company Name',
  description: 'What you did',
  achievements: ['Achievement 1', 'Achievement 2']
}
```

## 🌐 Before Deployment Checklist

- [ ] `npm run build` completed successfully
- [ ] `npm run preview` looks correct
- [ ] All links are correct (GitHub, LinkedIn, etc)
- [ ] Contact form email is correct
- [ ] No console errors in DevTools
- [ ] Mobile responsive on phone
- [ ] All text is correct (no typos)
- [ ] Images loaded correctly
- [ ] Social media links working

## 🚀 Deploy Checklist

- [ ] Code pushed to GitHub: `git push origin main`
- [ ] Vercel auto-deployed (or manually deployed)
- [ ] Production URL accessible
- [ ] All pages load correctly
- [ ] Forms working (if backend integrated)
- [ ] Mobile version looks good
- [ ] Performance metrics acceptable

## 📊 Package.json Scripts

```json
{
  "dev": "vite",                    // Dev server
  "build": "vite build",            // Production build
  "preview": "vite preview"         // Preview production
}
```

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 busy | `npm run dev -- --port 3001` |
| Tailwind not working | Clear cache: `rm -rf node_modules`, `npm install` |
| Build fails | Check console errors, ensure all imports correct |
| Styles look broken | Check `tailwind.config.js` content paths |
| Form not sending | Need backend/EmailJS integration |

## 📚 Useful Links

- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Docs:** https://react.dev
- **Lucide Icons:** https://lucide.dev
- **Vite Docs:** https://vitejs.dev
- **TypeScript:** https://www.typescriptlang.org/docs

## 💡 Pro Tips

1. **Use `Ctrl+Shift+P` in VS Code** for quick commands
2. **Install "Tailwind CSS IntelliSense"** extension for better autocomplete
3. **DevTools (F12)** to check responsive design
4. **Preview in different browsers** for compatibility
5. **Use git branches** for experimenting: `git checkout -b new-feature`

## 🔄 Update Cycle

```
1. Make changes locally
   ↓
2. Test with `npm run dev`
   ↓
3. Commit & push: git push origin main
   ↓
4. Vercel auto-deploys
   ↓
5. Live on production! 🚀
```

---

**🎉 Need more help? Check README.md, SETUP_GUIDE.md, or DEPLOYMENT_GUIDE.md**
