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
      <div className="absolute inset-0 pointer-events-none select-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ct-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="rgba(33,138,187,0.05)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ct-grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Section label */}
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-5">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                style={{
                  transformOrigin: "left", height: 1, width: 36,
                  background: "linear-gradient(90deg, #218ABB, transparent)",
                }}
              />
              <span style={{ color: "#218ABB", fontSize: "10.5px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase" }}>
                Get In Touch
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-bold mb-3 tracking-tight"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05,
                color: "white",
              }}
            >
              Contact{" "}
              <span style={{ color: "#218ABB", textShadow: "0 0 50px rgba(33,138,187,0.55)" }}>
                Us
              </span>
            </motion.h2>

            {/* Underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
              style={{
                transformOrigin: "left", height: 1, width: 72, marginBottom: 24,
                background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))",
              }}
            />

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
