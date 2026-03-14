import type { StudentProject } from "../types/studentProjects";

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "sp-001",
    title: "Sistem Informasi Akademik",
    description:
      "Platform manajemen akademik mahasiswa dengan fitur absensi, nilai, dan jadwal kuliah secara real-time.",
    thumbnail: "/projects/sia.png",
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
    thumbnail: "/projects/ecommerce.png",
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
    thumbnail: "/projects/gizi-app.png",
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