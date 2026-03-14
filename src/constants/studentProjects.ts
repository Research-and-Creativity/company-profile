import type { StudentProject } from "../types/studentProjects";

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "sp-001",
    title: "Sistem Informasi Akademik",
    description:
      "Platform manajemen akademik mahasiswa dengan fitur absensi, nilai, dan jadwal kuliah secara real-time.",
    thumbnail: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Budi Santoso",
    year: 2024,
    techStack: ["React", "Laravel", "MySQL"],
    demoUrl: "",
    githubUrl: "",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-002",
    title: "E-Commerce Batik Lokal",
    description:
      "Marketplace UMKM batik lokal Purwokerto dengan sistem pembayaran terintegrasi dan manajemen stok.",
    thumbnail: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Siti Rahayu",
    year: 2024,
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Midtrans"],
    demoUrl: "",
    githubUrl: "",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-003",
    title: "Aplikasi Pemantau Gizi",
    description:
      "Aplikasi mobile untuk memantau asupan gizi harian dengan rekomendasi makanan berbasis AI.",
    thumbnail: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    author: "Ahmad Fauzi",
    year: 2023,
    techStack: ["Flutter", "Firebase", "Python"],
    demoUrl: "adap://gizi-app-demo.vercel.app",
    githubUrl: "https://github.com/example/gizi-app",
    category: "Mobile",
    featured: true,
  },
  {
    id: "sp-004",
    title: "Dashboard IoT Smart Campus",
    description:
      "Dashboard monitoring sensor IoT kampus meliputi suhu, kelembaban, dan konsumsi energi gedung.",
    thumbnail: "/projects/iot-dashboard.png",
    author: "Dewi Permatasari",
    year: 2023,
    techStack: ["Vue.js", "Node.js", "MQTT", "InfluxDB"],
    demoUrl: "https://smartcampus-demo.vercel.app",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-005",
    title: "Sistem Reservasi Lapangan",
    description:
      "Aplikasi booking lapangan olahraga dengan notifikasi real-time dan manajemen slot waktu.",
    thumbnail: "/projects/reservasi.png",
    author: "Rizky Pratama",
    year: 2024,
    techStack: ["React", "Express", "Socket.io", "MongoDB"],
    githubUrl: "https://github.com/example/reservasi",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-006",
    title: "UI/UX Redesign Bank Daerah",
    description:
      "Redesain antarmuka aplikasi mobile bank daerah dengan pendekatan user-centered design.",
    thumbnail: "/projects/bank-redesign.png",
    author: "Nisa Fitriani",
    year: 2024,
    techStack: ["Figma", "Protopie"],
    demoUrl: "https://figma.com/proto/example",
    category: "UI/UX Design",
    featured: false,
  },
];

export const FEATURED_PROJECTS = STUDENT_PROJECTS.filter((project) => project.featured);