import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function RevealHeading({ words, accent, dark = true }: { words: string[]; accent: string; dark?: boolean }) {
    const ref = useRef<HTMLHeadingElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <h2 ref={ref} style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.5rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", color: dark ? "white" : "#040850" }}>
            {words.map((word, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", marginRight: "0.22em" }}>
                    <motion.span
                        initial={{ y: "108%", opacity: 0 }}
                        animate={inView ? { y: "0%", opacity: 1 } : {}}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: i * 0.14 }}
                        style={{
                            display: "inline-block",
                            color: word === accent ? "#218ABB" : undefined,
                            textShadow: word === accent && dark ? "0 0 60px rgba(33,138,187,0.65)" : undefined,
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </h2>
    );
}