import { motion } from "framer-motion";
import Button from "../../../components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001534]"
    >
      <motion.div
        animate={{
          x: ["-20vw", "30vw", "-10vw", "-20vw"],
          y: ["-10vh", "40vh", "10vh", "-10vh"],
          scale: [1, 1.4, 0.8, 1],
          opacity: [0.2, 0.4, 0.15, 0.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-175 bg-zetech-primary/20 blur-[150px] rounded-full z-10"
      />

      <motion.div
        animate={{
          x: ["-40vw", "20vw", "40vw", "-40vw"],
          y: ["30vh", "-20vh", "10vh", "30vh"],
          rotate: [0, 120, 240, 360],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-0 left-0 w-150 h-150 bg-blue-700/30 blur-[130px] rounded-full z-10"
      />

      <motion.div
        animate={{
          x: ["10vw", "-50vw", "30vw", "10vw"],
          y: ["-20vh", "30vh", "-40vh", "-20vh"],
          scale: [0.8, 1.2, 1, 0.8],
          opacity: [0.1, 0.3, 0.1, 0.1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-200 h-200 bg-zetech-primary/20 blur-[160px] rounded-full z-10"
      />

      <div className="container mx-auto px-6 text-center relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight tracking-tighter text-white">
            Building Advanced <br />
            <span className="text-zetech-primary drop-shadow-[0_0_40px_rgba(33,138,187,0.6)]">
              Digital Technology
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-zetech-primary to-blue-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 animate-pulse" />
              <Button
                classAdd="hover:scale-105"
                text="Start your project"
                href="#products"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase">
          Scroll
        </span>
        <div className="w-px h-20 bg-linear-to-b from-zetech-primary to-transparent" />
      </motion.div>
    </section>
  );
}
