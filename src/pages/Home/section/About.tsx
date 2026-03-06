import { motion, type Variants } from "framer-motion";
import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/about-image.png";

const contentVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      delay: 0.5,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, x: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.8 },
  },
};

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1"
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="text-zetech-primary font-bold text-sm uppercase tracking-[0.3em] block">
            Who We Are
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#040850] mb-6 leading-tight">
            ABOUT <span className="text-zetech-primary">ZETECH</span>
          </h2>

          <p className="text-gray-600 leading-relaxed mb-8 text-lg">
            Zetech merupakan inisiatif pengembangan teknologi profesional yang
            berada di bawah naungan
            <span className="font-semibold text-[#040850]">
              {" "}
              Himpunan Mahasiswa Rekayasa Perangkat Lunak (HMSE){" "}
            </span>
            Telkom University Purwokerto. Kami berfokus pada penyediaan solusi
            digital berkualitas tinggi guna mendukung transformasi bisnis dan
            ekonomi kreatif.
          </p>

          <p className="text-gray-600 leading-relaxed mb-10 text-lg">
            Melalui kolaborasi di dalam kabinet{" "}
            <span className="italic font-medium">Zenith</span>, kami berkomitmen
            untuk menciptakan ekosistem IT yang inovatif, mulai dari
            pengembangan web hingga aplikasi mobile yang ramah pengguna.
          </p>

          <div className="hidden lg:block">
            <Button
              classAdd="hover:scale-105 px-10 py-4"
              text="Explore More"
              href="/about"
            />
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-zetech-primary/10 rounded-full blur-3xl -z-10" />

          <div className="bg-white rounded-4xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] p-4 md:p-8 relative overflow-hidden group hover:shadow-[0_30px_70px_rgba(0,0,0,0.15)] transition-shadow duration-500">
            <img
              src={aboutImage}
              alt="About Zetech"
              className="w-full h-auto object-contain relative z-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        <div className="flex justify-center lg:hidden mt-10">
          <Button text="Explore More" classAdd="px-10 py-4" />
        </div>
      </div>
    </section>
  );
}
