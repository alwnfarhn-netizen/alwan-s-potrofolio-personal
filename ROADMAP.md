# 🚀 ALWAN.SYS — Roadmap Menuju Production

> Dari frontend statis → full-stack → deployed & siap digunakan.

---

## Status Saat Ini

| Komponen | Status |
|---|---|
| Frontend (10 sections) | ✅ Selesai |
| Animasi & CRT effects | ✅ Selesai |
| Responsive mobile | ✅ Selesai |
| File konten terpusat (`content.ts`) | ✅ Dibuat, belum diisi |
| Koneksi `content.ts` → komponen | ⏳ Menunggu data diisi |
| Supabase CMS | ❌ Belum |
| Contact form backend | ❌ Belum |
| Deployment Vercel | ❌ Belum |
| Domain custom | ❌ Belum |
| SEO & Analytics | ❌ Belum |

---

## Tahapan Lengkap

### ━━━ PHASE 1: Konten Personal ━━━
**⏱ Estimasi: 30-60 menit (kamu kerjakan)**

- [ ] **1.1** Isi semua data di `src/data/content.ts`
  - Identitas (nama, lokasi, foto profil)
  - Bio & mission statement
  - Skills (sesuaikan level & deskripsi)
  - Projects (minimal 3-5 project nyata kamu)
  - Testimonials (feedback asli dari dosen/klien)
  - Contact links (email, WA, LinkedIn, GitHub, IG)
- [ ] **1.2** Siapkan screenshot/mockup project (format `.png` atau `.webp`)
- [ ] **1.3** Siapkan foto profil (opsional, bisa juga tanpa foto)

> ⚠️ Phase ini **harus kamu kerjakan sendiri** — data personal tidak bisa dikarang.

---

### ━━━ PHASE 2: Integrasi Konten ━━━
**⏱ Estimasi: 15-20 menit (dikerjakan AI)**

- [ ] **2.1** Hubungkan `content.ts` ke semua komponen section
- [ ] **2.2** Import & render data dinamis di setiap section
- [ ] **2.3** Tambahkan gambar project ke `/public/projects/`
- [ ] **2.4** Verifikasi semua section menampilkan data yang benar
- [ ] **2.5** Test build production (`npm run build`)

---

### ━━━ PHASE 3: Supabase CMS (Opsional) ━━━
**⏱ Estimasi: 30-45 menit (dikerjakan AI)**

Agar kamu bisa update konten **tanpa edit kode** di kemudian hari.

- [ ] **3.1** Setup project Supabase (kamu buat akun di supabase.com)
- [ ] **3.2** Buat tabel database:
  - `projects` — semua data project
  - `insights` — artikel/blog entries
  - `testimonials` — feedback
- [ ] **3.3** Buat SQL schema & seed data dari `content.ts`
- [ ] **3.4** Install `@supabase/supabase-js`
- [ ] **3.5** Buat Supabase client (`src/lib/supabase.ts`)
- [ ] **3.6** Update komponen Projects, Insights, Testimonials untuk fetch dari Supabase
- [ ] **3.7** Setup Row Level Security (RLS) — read-only untuk publik
- [ ] **3.8** Buat `.env.local` dengan keys Supabase

```
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJxxxxx
```

---

### ━━━ PHASE 4: Contact Form Backend ━━━
**⏱ Estimasi: 20-30 menit (dikerjakan AI)**

- [ ] **4.1** Buat API route `src/app/api/contact/route.ts`
- [ ] **4.2** Pilih metode pengiriman:

| Opsi | Kelebihan | Setup |
|---|---|---|
| **Email (Resend)** | Masuk ke inbox langsung | API key gratis |
| **WhatsApp redirect** | Tanpa backend | Paling simpel |
| **Supabase table** | Tersimpan di database | Sudah ada |
| **Google Sheets** | Mudah dikelola | API key |

- [ ] **4.3** Implementasi form submission dengan loading state
- [ ] **4.4** Tambah validasi input & error handling
- [ ] **4.5** Tambah success/error notification toast

---

### ━━━ PHASE 5: Polish & Optimisasi ━━━
**⏱ Estimasi: 20-30 menit (dikerjakan AI)**

- [ ] **5.1** Optimasi gambar — konversi ke WebP, lazy loading
- [ ] **5.2** Tambah `loading.tsx` untuk route-level loading
- [ ] **5.3** Tambah `not-found.tsx` custom 404 page (retro themed)
- [ ] **5.4** Tambah `robots.txt` & `sitemap.xml`
- [ ] **5.5** Tambah Open Graph meta images
- [ ] **5.6** Tambah `manifest.json` untuk PWA (opsional)
- [ ] **5.7** Performance audit (Lighthouse score > 90)
- [ ] **5.8** Test semua section di mobile (responsive check)
- [ ] **5.9** Cross-browser test (Chrome, Firefox, Safari)

---

### ━━━ PHASE 6: Deployment ━━━
**⏱ Estimasi: 15-20 menit**

- [ ] **6.1** Buat repository GitHub
  ```bash
  git init
  git add .
  git commit -m "Initial commit: ALWAN.SYS portfolio v2"
  git remote add origin https://github.com/USERNAME/REPO.git
  git push -u origin main
  ```
- [ ] **6.2** Hubungkan ke Vercel (vercel.com)
  - Import repo dari GitHub
  - Set environment variables (Supabase keys)
  - Deploy otomatis
- [ ] **6.3** Setup domain custom (opsional)
  - Beli domain di Namecheap/Niagahoster/etc
  - Arahkan DNS ke Vercel
  - Enable HTTPS otomatis
- [ ] **6.4** Verifikasi production build berjalan sempurna

---

### ━━━ PHASE 7: Post-Launch ━━━
**⏱ Ongoing**

- [ ] **7.1** Setup Google Analytics 4
- [ ] **7.2** Submit ke Google Search Console
- [ ] **7.3** Share portfolio link di LinkedIn, GitHub, CV
- [ ] **7.4** Monitor performa & error via Vercel dashboard
- [ ] **7.5** Update konten berkala via Supabase dashboard

---

## Path Pilihan

| Path | Durasi Total | Hasil |
|---|---|---|
| 🟢 **Minimal** (Phase 1→2→5→6) | ~2 jam | Portfolio statis, deployed |
| 🟡 **Standard** (Phase 1→2→4→5→6) | ~3 jam | + contact form berfungsi |
| 🔵 **Full-stack** (Phase 1→2→3→4→5→6→7) | ~4-5 jam | + CMS + analytics, production-grade |

> 💡 **Rekomendasi:** Mulai dengan path **Standard** dulu. Supabase CMS bisa ditambahkan kapan saja setelah deploy.

---

## File yang Perlu Kamu Edit

```
src/data/content.ts   ← SATU-SATUNYA file yang perlu kamu edit
```

Setelah selesai mengisi → bilang ke AI → Phase 2-6 dikerjakan otomatis.
