import { motion, type Variants } from "framer-motion";
import Button from "../../../components/ui/Button";
import webImage from "../../../assets/web-development.png";
import mobileImage from "../../../assets/mobile-development.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.8 },
  },
};

export default function OurServices() {
  return (
    <section className="py-28 bg-[#020049] text-white overflow-hidden">
      <motion.div 
        className="container mx-auto px-6 md:px-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 md:text-lg leading-relaxed">
            Zetech menyediakan berbagai macam layanan untuk memenuhi kebutuhan
            Anda di bidang digital. Kami siap membantu Anda dengan sepenuh hati,
            konsultasi dengan kami secara gratis sekarang!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-zetech-primary/50"
          >
            <div className="p-8">
              <span className="text-zetech-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                Web Solution
              </span>
              <h3 className="text-2xl font-bold mb-2">Website Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Pembuatan website profesional yang responsif, cepat, dan ramah SEO.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={webImage}
                alt="Website Development"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#020049] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -10 }}
            className="group relative bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 shadow-2xl transition-all duration-500 hover:border-zetech-primary/50"
          >
            <div className="p-8">
              <span className="text-zetech-primary font-bold text-xs uppercase tracking-[0.2em] mb-2 block">
                Mobile Solution
              </span>
              <h3 className="text-2xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Aplikasi mobile Android dan iOS dengan performa tinggi dan desain intuitif.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden">
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
                src={mobileImage}
                alt="Mobile App Development"
                className="w-full h-full object-cover grayscale-20 group-hover:grayscale-0 transition-all"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#020049] via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        <motion.div 
          variants={itemVariants}
          className="flex justify-start lg:justify-center mt-20"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-zetech-primary rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
            <Button classAdd="hover:scale-105 px-10 py-4" text="Consult now" href="#contact" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}