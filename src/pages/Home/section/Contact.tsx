import { AnimatePresence, motion, type Variants } from "framer-motion";
import Button from "../../../components/ui/Button";
import { useState } from "react";

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
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ loading: boolean; message: string; error: boolean }>({
    loading: false,
    message: "",
    error: false,
  });

  const validate = () => {
    const newErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format email tidak valid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus({ loading: true, message: "Sending...", error: false });
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      if (response.ok) {
        setStatus({ loading: false, message: "Pesan berhasil terkirim!", error: false });
        setFormData({ name: "", email: "", message: "" });
      } else {
        console.log("Response error:", data);
        throw new Error(data.message || "Gagal mengirim pesan.");
      }
      console.log(data);
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : "Terjadi kesalahan sistem.";
      setStatus({ loading: false, message: errorMsg, error: true });
      console.error("Error:", errorMsg);
    }
  }
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
            onSubmit={handleSubmit}
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
                className={`w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer ${errors.name ? "border-red-500" : "border-white/20 focus:border-zetech-primary"
                  }`}
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative">
              <label className="block text-gray-400 text-sm font-semibold mb-2">
                Email:
              </label>
              <input
                type="email"
                className={`w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer ${errors.name ? "border-red-500" : "border-white/20 focus:border-zetech-primary"
                  }`}
                placeholder="yourname@email.com"
                required
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>

            <div className="relative">
              <label className="block text-gray-400 text-sm font-semibold mb-2">
                Message:
              </label>
              <input
                className={`w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-zetech-primary transition-all peer resize-none ${errors.message ? "border-red-500" : "border-white/20 focus:border-zetech-primary"}`}
                placeholder="Write your message here..."
                required
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-zetech-primary transition-all duration-300 peer-focus:w-full" />
            </div>
            <AnimatePresence>
              {errors.name && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-red-500 text-xs mt-1 block absolute"
                >
                  {errors.name}
                </motion.span>
              )}
            </AnimatePresence>

            <div className="pt-2">
              <Button text={status.loading ? "Sending..." : "Submit Message"} type="submit" disabled={status.loading} />
              {status.message && (
                <p className={`mt-4 text-sm ${status.error ? "text-red-400" : "text-green-400"}`}>
                  {status.message}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
