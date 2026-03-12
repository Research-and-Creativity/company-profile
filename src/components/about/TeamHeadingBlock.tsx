import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { RevealHeading } from "../ui/RevealHeading";
import { RevealLine } from "../ui/RevealLine";

export function TeamHeadingBlock() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    return (
        <div ref={ref} className="mb-20">
            <RevealHeading words={["Our", "Team"]} accent="Team" dark={false} />
            <RevealLine delay={0.3} />
            <motion.p
                initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
                style={{ color: "rgba(60,80,110,0.6)", fontSize: "1.05rem", lineHeight: 1.8, maxWidth: 460, marginTop: 18 }}
            >
                Bertemu dengan orang-orang di balik setiap solusi digital yang kami ciptakan.
            </motion.p>
        </div>
    );
}