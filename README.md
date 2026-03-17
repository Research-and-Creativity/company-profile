# Zetech (Zetra Tech) - Digital Identity of Kabinet Zenith

[![React](https://img.shields.io/badge/React-18.x-blue?style=for-the-badge&logo=react)](https://react.dev/) [![Vite](https://img.shields.io/badge/Vite-6.x-purple?style=for-the-badge&logo=vite)](https://vitejs.dev/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.X-blue?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/) [![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-purple?style=for-the-badge&logo=framer)](https://www.framer.com/motion/)

**Zetech**, kependekan dari **Zetra Tech**, adalah platform *company profile* resmi yang dikembangkan di bawah naungan **Kabinet Zenith HMSE (Himpunan Mahasiswa Software Engineering) Telkom University Purwokerto**. Proyek ini dirancang sebagai wajah digital untuk menampilkan profesionalisme dan inovasi teknologi dari mahasiswa RPL.

---

## 🏛️ Background & Vision
Sesuai dengan semangat **Kabinet Zenith**, nama **Zetra Tech** melambangkan integrasi antara visi yang mencapai puncak (Zenith) dengan eksekusi teknologi yang presisi. Website ini bukan sekadar profil, melainkan bukti nyata kapabilitas teknis tim *Software Engineering* Telkom University Purwokerto.

* **Zetra** - Representasi dari identitas Zenith yang tangguh.
* **Tech** - Fokus utama pada pengembangan perangkat lunak yang solutif.

---

## ✨ Fitur Utama (Highlight Features)

### 1. **Ultra-Fast Performance**
Dibangun di atas **Vite**, memastikan *development experience* yang instan dan waktu muat (*load time*) yang sangat cepat bagi pengguna.

### 2. **Zetra Visual Experience**
Animasi yang kompleks namun halus menggunakan **Framer Motion**, memberikan kesan interaktif pada setiap transisi halaman dan elemen UI.

### 3. **Responsive Design**
Optimalisasi tampilan di berbagai ukuran layar menggunakan **Tailwind CSS** untuk fleksibilitas desain yang modern.

### 4. **Component-Based Architecture**
Struktur kode yang rapi dan modular, memudahkan integrasi fitur baru oleh tim pengembang Kabinet Zenith.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Tooling** | **Vite** | Build tool generasi berikutnya yang sangat cepat. |
| **Library** | **React.js** | Library utama untuk membangun antarmuka pengguna. |
| **Styling** | **Tailwind CSS** | Framework CSS untuk styling yang cepat dan konsisten. |
| **Animation** | **Framer Motion** | Engine utama untuk semua interaksi animasi Zetech. |
| **Icons** | **React Icons** | Koleksi ikon minimalis dan modern. |

---

## 📁 Project Structure

```text
zetech/
├── public/                # Static assets (Logos, Icons, etc.)
├── src/
│   ├── assets/            # Project images and global media
│   ├── components/        # Reusable UI components
│   │   ├── about/         # About Reusable Component
│   │   ├── shared/        # Navbar, Footer
│   │   └── teams/         # Reusable UI Teams
│   │   └── ui/            # Component UI
│   ├── constants/         # Data Constant
│   ├── hooks/             # Custom React hooks
│   ├── layouts/           # Layout page
│   ├── pages/             # Main page views
│   ├── routes/            # Routes App
│   ├── types/             # Types every components
│   ├── App.tsx            # Main application entry
│   └── main.tsx           # Vite entry point
├── .gitignore
└── vite.config.ts
