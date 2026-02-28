import { motion, type Variants } from "framer-motion";
import aboutImage from "../../assets/logo_white.svg";
import { CiLinkedin, CiInstagram } from "react-icons/ci";
import { BsWhatsapp } from "react-icons/bs";

const footerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const categories = ["Landing page", "Undangan Digital", "Digital Finance"];

export default function Footer() {
  return (
    <footer className="bg-[#020049] py-16 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <motion.div
          variants={footerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10"
        >
          <div className="max-w-xl">
            <motion.a variants={itemVariants} href="/" className="inline-block">
              <div className="flex items-center gap-3">
                <img
                  src={aboutImage}
                  alt="Zetech Logo"
                  className="w-16 h-16 object-contain"
                />
                <div className="text-5xl font-bold text-white tracking-tighter">ZETECH</div>
              </div>
            </motion.a>

            <motion.p variants={itemVariants} className="text-gray-400 md:text-lg leading-relaxed mb-8 mt-4">
              Pembuatan Aplikasi profesional yang berada di bawah organisasi
              HMSE Telkom University untuk mendukung pertumbuhan bisnis Anda.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              {categories.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-white/20 text-base text-gray-300 hover:border-zetech-primary hover:text-white transition-all duration-300 cursor-default hover:bg-white/5"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="flex items-center gap-6">
            <a
              href="https://wa.me/6285385782684"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-green-500 transition-all hover:scale-125"
            >
              <BsWhatsapp size={35} />
            </a>
            <a
              href="https://www.linkedin.com/company/hmse-tup/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-all hover:scale-125"
            >
              <CiLinkedin size={40} />
            </a>
            <a
              href="https://www.instagram.com/hmse_telkompurwokerto/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition-all hover:scale-125"
            >
              <CiInstagram size={40} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}