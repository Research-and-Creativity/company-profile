import type { StudentProject } from "../types/studentProjects";
import ecoScope from "../assets/projects/ecoscope.webp";
import SapaPMKS from "../assets/projects/sapa-pmks.webp";
import TalkUp from "../assets/projects/talkup.webp";
import Patukrejo from "../assets/projects/patukrejomulyo.webp";
import AutoBell from "../assets/projects/autobell.webp";
import Hitoong from "../assets/projects/hitoong.webp";
import EbiiGreen from "../assets/projects/ebii-green.webp";
import LadangGo from "../assets/projects/ladanggo.webp";
import Guestify from "../assets/projects/guestify.webp";

export const STUDENT_PROJECTS: StudentProject[] = [
  {
    id: "sp-001",
    title:
      "EcoScope: Aplikasi Kota Cerdas Berbasis WebGIS dan AI (Kabupaten Wonosobo)",
    description: `EcoScope adalah aplikasi kota cerdas berbasis WebGIS dan kecerdasan buatan (AI) yang bertujuan untuk mendukung ketahanan pangan dan pengurangan risiko bencana di Kabupaten Wonosobo. Aplikasi ini dirancang untuk menjawab tantangan pertanian lokal dengan mengintegrasikan data spasial dari Diskominfo (seperti peta lereng dan vegetasi), data cuaca dari BMKG, serta data harga pasar dari portal UMKM Wonosobo.
      
      EcoScope dapat diakses secara gratis oleh masyarakat umum untuk mendorong masyarakat dan petani memanfaatkan teknologi digital dalam pengambilan keputusan pertanian berbasis bukti (evidence-based decision making). Melalui kolaborasi lintas sektor ini, EcoScope diharapkan menjadi model inovasi teknologi yang mendukung pembangunan pertanian yang adaptif dan berkelanjutan.`,
    thumbnail: ecoScope,
    authors: [
      "Lintang Suminar Tyas W.",
      "Rizky Hanifa Afania",
      "Althafia Defiyandrea L.W.",
      "Rezky Pratiwi",
      "Aorinka Anendya Chazanah",
      "Muhammad Rizaldy Akbar",
      "Muhammad Idham Cholid",
      "Ananta Puti Maharani",
    ],
    year: 2025,
    techStack: [
      "React",
      "Typescript",
      "TailwindCSS",
      "Python",
      "ShadcnUI",
      "RadixUI",
      "Lucide",
      "Vercel",
      "PostgreSQL",
    ],
    demoUrl: "https://web-pertanian-wonosobo.id/",
    githubUrl:
      "https://github.com/Web-Pertanian-Wonosobo/Web-Pertanian-Wonosobo",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-002",
    title: "LadangGo: AI-Powered Smart Farming & Supply Management",
    description:
      "LadangGo adalah platform AgriTech yang menghadirkan asisten AI Chatbot via WhatsApp untuk mendukung aktivitas harian petani secara instan. Fitur utamanya meliputi prediksi cuaca berbasis lokasi lahan, peringatan risiko hama, rekomendasi pemupukan, dan deteksi penyakit tanaman. Selain itu, LadangGo memiliki dasbor manajemen rantai pasok (Supply Chain) terintegrasi untuk menghubungkan hasil panen ke bisnis HORECA (Hotel, Restoran, Kafe) secara real-time dengan harga yang transparan.",
    thumbnail: LadangGo,
    authors: [],
    year: 2026,
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "WhatsApp Cloud API",
      "Python",
      "FastAPI",
      "Google Sheets API",
    ],
    demoUrl: "https://ladanggo.id/",
    githubUrl: "",
    category: "AI/ML",
    featured: true,
  },
  {
    id: "sp-003",
    title:
      "TalkUp: Platform Konseling Online dengan Role-Based Access Control (SMA N 1 Purwokerto)",
    description: `TalkUp adalah platform konseling digital berbasis website yang dikembangkan oleh mahasiswa Telkom University Purwokerto sebagai ruang aman bagi siswa SMA Negeri 1 Purwokerto untuk berkonsultasi dan mendapatkan dukungan dari Guru Bimbingan dan Konseling (BK). Sistem yang dibangun dengan teknologi React.js dan Express.js ini dirancang khusus untuk mendobrak stigma negatif yang sering membuat pelajar enggan mencari bantuan terkait masalah psikologis.
      
      Melalui TalkUp, siswa dapat dengan mudah mengakses fitur forum diskusi, pengajuan konseling daring, hingga memantau riwayat konseling mereka dengan jaminan keamanan dan kerahasiaan data melalui sistem Role-Based Access Control (RBAC). Implementasi platform ini diharapkan mampu meningkatkan literasi kesehatan mental, mempermudah akses layanan bimbingan secara efisien, serta membangun budaya sekolah yang lebih empatik dan peduli terhadap kesejahteraan siswa.`,
    thumbnail: TalkUp,
    authors: [
      "Ahmad Junaidi",
      "Nita Fitrotul Mar’ah",
      "Nadia Putri Rahmaniar",
      "Alfian Mutakim",
      "Afad Fath Musyarof Halim",
    ],
    year: 2025,
    techStack: [
      "React.js",
      "Express.js",
      "PostgreSQL",
      "JSON Web Token(JWT)",
      "Nginx atau Apache",
    ],
    demoUrl: "https://frontend-talk-up.id/",
    githubUrl: "https://github.com/Talkup-TPLM-PT3",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-004",
    title: "EBII Green System: Smart Aquaculture IoT Dashboard",
    description:
      "EBII Green System adalah platform monitoring cerdas berbasis IoT dan AI (Sustainable Smart Aquaculture Technology) yang dirancang untuk memantau kualitas air tambak secara real-time, mengoptimalkan aerasi, dan mewujudkan tambak ramah lingkungan. Sistem ini mengintegrasikan sensor IoT untuk memantau 8 parameter air, model AI untuk prediksi dan peramalan (forecast), serta kontrol aerator otomatis untuk menghemat energi dan mengurangi emisi karbon.",
    thumbnail: EbiiGreen,
    authors: [],
    year: 2026,
    techStack: ["Next.js", "Tailwind CSS", "NestJS", "FastAPI", "Python"],
    demoUrl: "https://ebii.sivia.id/",
    githubUrl: "",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-005",
    title:
      "SAPA PMKS: Sistem Aduan Online Kesejahteraan Sosial (Kabupaten Banjarnegara)",
    description: `SAPA PMKS (Sistem Aduan dan Pelayanan Penyandang Masalah Kesejahteraan Sosial) adalah platform berbasis website yang dikembangkan oleh tim pengabdian masyarakat Telkom University bekerja sama dengan Dinas Sosial Kabupaten Banjarnegara. Sistem ini dirancang sebagai solusi inovatif untuk memfasilitasi masyarakat dalam menyampaikan laporan atau aduan terkait masalah sosial secara cepat, transparan, dan terintegrasi secara daring.
      
    Dengan fitur pelaporan yang mudah diakses dan dashboard admin untuk proses verifikasi, SAPA PMKS bertujuan mempercepat penanganan kasus sosial sekaligus mendokumentasikan setiap tindak lanjut secara terpadu, menggantikan proses manual yang selama ini berjalan. Melalui kehadiran platform ini, diharapkan partisipasi masyarakat dalam pelaporan sosial meningkat, penanganan kasus menjadi lebih efisien, dan tercipta budaya pelayanan publik yang lebih tanggap dan transparan.`,
    thumbnail: SapaPMKS,
    authors: [
      "Muhammad Abdul Aziz",
      "Devrin Anggun Saputri",
      "Dimas Bimantoro",
      "Atika Aji Hadiyani",
      "Maulidya Fatima Marsyanni",
      "Salsha Chalista",
      "Andini Pratiwi",
      "Muhammad Hanif Baihaqi",
    ],
    year: 2025,
    techStack: ["Laravel", "TailwindCSS", "PHP", "SQL Lite"],
    demoUrl: "https://sapapmks.banjarnegarakab.go.id/",
    githubUrl: "https://github.com/akuazizz/sapapmks-banjarnegara",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-006",
    title: "New Hydra Zeta",
    description:
      "LadangGo adalah platform AgriTech yang menghadirkan asisten AI Chatbot via WhatsApp untuk mendukung aktivitas harian petani secara instan. Fitur utamanya meliputi prediksi cuaca berbasis lokasi lahan, peringatan risiko hama, rekomendasi pemupukan, dan deteksi penyakit tanaman. Selain itu, LadangGo memiliki dasbor manajemen rantai pasok (Supply Chain) terintegrasi untuk menghubungkan hasil panen ke bisnis HORECA (Hotel, Restoran, Kafe) secara real-time dengan harga yang transparan.",
    thumbnail: "",
    authors: [],
    year: 2026,
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "WhatsApp Cloud API",
      "Python",
      "FastAPI",
      "Google Sheets API",
    ],
    demoUrl: "https://new-hydra-zeta.id/",
    githubUrl: "",
    category: "AI/ML",
    featured: true,
  },
  {
    id: "sp-007",
    title:
      "Sistem Laporan Kerusakan Fasilitas Umum Berbasis Live Tracking (Desa Patukrejomulyo)",
    description: `Website Sistem Laporan Kerusakan Fasilitas Umum Berbasis Live Tracking adalah platform digital yang dikembangkan untuk menjembatani komunikasi antara masyarakat dan perangkat Desa Patukrejomulyo, Kabupaten Kebumen. Sistem pelaporan ini dirancang untuk mengatasi keterlambatan penanganan fasilitas umum akibat proses manual dengan memungkinkan warga melaporkan kerusakan secara real-time, lengkap dengan unggahan foto dan penandaan lokasi kejadian melalui fitur live tracking.
      
      Pihak desa disediakan dashboard admin khusus untuk memverifikasi dan mengelola data, sementara masyarakat dapat memantau status laporan mereka secara transparan mulai dari tahap pending, validasi, penanganan, hingga selesai . Melalui sistem yang dibangun dengan kerangka kerja Next.js dan integrasi Google Maps API ini, diharapkan pelayanan publik di Desa Patukrejomulyo dapat menjadi lebih cepat, terukur, dan transparan.`,
    thumbnail: Patukrejo,
    authors: [
      "Firman Maulana",
      "Muhammad Fariz Nur Hidayat",
      "Putra Pratama Okta Riano",
      "Naufal Maulana Izzudin",
      "Danuar Ihza Mahendra",
      "Naufal Ananta",
      "Dimas Angga Sulsistyo Nugroho",
      "Allaya Daffa Zhilal",
    ],
    year: 2025,
    techStack: ["React", "RadixUI", "TailwindCSS", "Typescript"],
    demoUrl: "",
    githubUrl: "https://github.com/BLUKANG-TSX-KEBUMEN/Blukang-Frontend",
    category: "Web",
    featured: true,
  },
  {
    id: "sp-008",
    title: "DistribuPlan",
    description:
      "LadangGo adalah platform AgriTech yang menghadirkan asisten AI Chatbot via WhatsApp untuk mendukung aktivitas harian petani secara instan. Fitur utamanya meliputi prediksi cuaca berbasis lokasi lahan, peringatan risiko hama, rekomendasi pemupukan, dan deteksi penyakit tanaman. Selain itu, LadangGo memiliki dasbor manajemen rantai pasok (Supply Chain) terintegrasi untuk menghubungkan hasil panen ke bisnis HORECA (Hotel, Restoran, Kafe) secara real-time dengan harga yang transparan.",
    thumbnail: "",
    authors: [],
    year: 2026,
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "WhatsApp Cloud API",
      "Python",
      "FastAPI",
      "Google Sheets API",
    ],
    demoUrl: "https://distribu-plan.sivia.id/",
    githubUrl: "",
    category: "AI/ML",
    featured: true,
  },
  {
    id: "sp-009",
    title:
      "HITOONG: Pencatatan Keuangan Otomatis & Digital Branding (ASPIKMAS)",
    description: `Program pengabdian masyarakat ini menghadirkan HITOONG, sebuah Sistem Pencatatan Keuangan Otomatis berbasis website yang dikembangkan untuk mendukung ratusan UMKM di bawah naungan Asosiasi Pengusaha Mikro Banyumas (ASPIKMAS). Dibangun menggunakan framework Laravel dan Tailwind CSS, platform digital ini mengatasi kendala pembukuan manual melalui fitur perhitungan Harga Pokok Produksi (HPP) otomatis, pengelolaan biaya operasional, serta pemantauan arus kas secara real-time di dalam satu dasbor yang terintegrasi.
      
    Selain penyediaan teknologi, inisiatif ini juga membekali para pelaku usaha dengan pelatihan pemasaran digital (digital marketing)—memanfaatkan platform media sosial seperti TikTok dan kecerdasan buatan (AI)—untuk memperluas saluran penjualan produk. Melalui kombinasi otomatisasi administrasi keuangan dan strategi branding digital ini, diharapkan ekosistem UMKM di Banyumas dapat beroperasi dengan lebih efisien, transparan, dan berkelanjutan.`,
    thumbnail: Hitoong,
    authors: ["Rafli Dhafin Kamil", "Fauzan Wahyu Mubarak"],
    year: 2025,
    techStack: ["Laravel", "TailwindCSS", "Axios", "Alpine JS"],
    demoUrl: "",
    githubUrl: "https://github.com/PliTheGeek/tplm_aspikmas",
    category: "Web",
    featured: false,
  },
  {
    id: "sp-010",
    title: "Site Track Project",
    description:
      "LadangGo adalah platform AgriTech yang menghadirkan asisten AI Chatbot via WhatsApp untuk mendukung aktivitas harian petani secara instan. Fitur utamanya meliputi prediksi cuaca berbasis lokasi lahan, peringatan risiko hama, rekomendasi pemupukan, dan deteksi penyakit tanaman. Selain itu, LadangGo memiliki dasbor manajemen rantai pasok (Supply Chain) terintegrasi untuk menghubungkan hasil panen ke bisnis HORECA (Hotel, Restoran, Kafe) secara real-time dengan harga yang transparan.",
    thumbnail: "",
    authors: [],
    year: 2026,
    techStack: [
      "Next.js",
      "Tailwind CSS",
      "WhatsApp Cloud API",
      "Python",
      "FastAPI",
      "Google Sheets API",
    ],
    demoUrl: "https://site-track-project.sivia.id/",
    githubUrl: "",
    category: "AI/ML",
    featured: false,
  },
  {
    id: "sp-011",
    title:
      "Aplikasi Desktop Bel Sekolah Otomatis Berbasis Python (SMP Muhammadiyah 3 Purwokerto)",
    description: `Berikut adalah deskripsi satu paragraf dari dokumen laporan pengabdian masyarakat tersebut yang cocok untuk ditampilkan di website:

    Aplikasi Desktop Sistem Informasi Bel Sekolah Otomatis adalah perangkat lunak yang dikembangkan oleh mahasiswa Telkom University Purwokerto untuk mengatasi keterbatasan sistem bel manual di SMP Muhammadiyah 3 Purwokerto. Dibangun menggunakan bahasa pemrograman Python dengan framework PyQt/PySide dan basis data SQLite, aplikasi ini menawarkan penjadwalan bel yang presisi, manajemen file suara yang fleksibel (MP3, WAV, OGG), serta fitur log riwayat dan backup/restore data. Antarmukanya yang sederhana dan intuitif dirancang khusus agar mudah dioperasikan oleh staf tata usaha sekolah tanpa memerlukan keahlian teknis khusus. Melalui implementasi aplikasi ini, sekolah dapat mengurangi kesalahan jadwal akibat kelalaian manusia, meningkatkan efisiensi administrasi, dan memberdayakan operator sekolah untuk mengelola sistem informasi secara mandiri dan berkelanjutan.`,
    thumbnail: AutoBell,
    authors: [
      "Dzikri Naufal Wisnu Pravida",
      "Afif Ramadhani",
      "Kholil Abdi Prasetyo",
      "Irfan Muria",
      "Rosyid Mukti Wibowo",
      "Muhammad Hadziq Subono",
      "Abdul Roni",
      "Adhitya Sofwan Al Rasyid",
    ],
    year: 2025,
    techStack: ["Python", "Pillow", "Py Game"],
    githubUrl: "https://github.com/kholilapras/AutoBellSchedule_TPLM-PT3",
    category: "Desktop",
    featured: false,
  },
  {
    id: "sp-012",
    title:
      "Guestify: Sistem Buku Tamu Digital dengan Ekspor Laporan Otomatis (Dukcapil Banyumas)",
    description: `Guestify adalah platform buku tamu digital berbasis website yang dikembangkan oleh tim mahasiswa Telkom University Purwokerto untuk memodernisasi sistem pendataan pengunjung pada suatu instansi atau institusi. Aplikasi ini hadir sebagai solusi untuk mengeliminasi kendala pencatatan manual (konvensional) dengan menyediakan fitur pengisian data tamu yang cepat, aman, dan terintegrasi langsung ke dalam database pusat.
    
    Melalui dasbor administrator yang komprehensif, pihak pengelola dapat memantau riwayat kunjungan secara real-time, mengelola arsip rekapitulasi data dengan lebih efisien, dan meningkatkan keamanan lingkungan. Implementasi Guestify diharapkan tidak hanya mempermudah beban kerja administrasi atau resepsionis, tetapi juga menciptakan citra pelayanan publik yang lebih profesional, akurat, dan inovatif.`,
    thumbnail: Guestify,
    authors: [
      "Chayla Ravenelly Quinintitawati",
      "Muhammad Agam Nasywaan",
      "Namirah Salsabila",
      "Muhammad Imam AL Amin",
      "Kholifahdina",
      "Muhammad Chairul An'am",
      "Putri Naila Salsabila",
      "Quratu A'yun Defaren",
    ],
    year: 2025,
    techStack: ["Laravel", "TailwindCSS"],
    demoUrl: "",
    githubUrl: "",
    category: "Web",
    featured: false,
  },
];

export const FEATURED_PROJECTS = STUDENT_PROJECTS.filter(
  (project) => project.featured,
);
