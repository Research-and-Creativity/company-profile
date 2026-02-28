import { motion, type Variants } from "framer-motion";
import Button from "../../../components/ui/Button";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight"
            >
              CONTACT US
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-gray-300 md:text-lg mb-8 leading-relaxed max-w-md"
            >
              Jangan ragu untuk menghubungi kami. Kami siap melayani dan
              membantu Anda dengan sepenuh hati.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-8 leading-relaxed max-w-md group"
            >
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">
                Collaboration
              </p>
              <p className="text-gray-300 md:text-lg">
                Feel free to reach out for collaborations, or consultation.
              </p>
              <p className="text-gray-300 md:text-lg">Send us an email at</p>
              <a
                href="mailto:hmse-pwt.telkomuniversity.ac.id"
                className="text-[#17a1e1] font-medium hover:underline cursor-pointer transition-all"
              >
                hmse-pwt.telkomuniversity.ac.id
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mb-8 leading-relaxed max-w-md"
            >
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-1">
                Quick Response
              </p>
              <p className="text-gray-300 md:text-lg">Prefer a quick response?</p>
              <p className="text-gray-300 md:text-lg">
                Send us a message via WhatsApp
              </p>
              <a href="https://wa.me/6285385782684" target="_blank" className="font-bold md:text-lg block mt-1">
                +62 853-8578-2684
              </a>
            </motion.div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative">
              <label className="block text-gray-400 text-sm font-semibold mb-2">
                Name:
              </label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer"
                placeholder="Your full name"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative">
              <label className="block text-gray-400 text-sm font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer"
                placeholder="yourname@email.com"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative">
              <label className="block text-gray-400 text-sm font-semibold mb-2">
                Message:
              </label>
              <input
                className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer resize-none"
                placeholder="Write your message here..."
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="pt-2">
              <Button text="Submit Message" classAdd="hover:scale-105" />
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
