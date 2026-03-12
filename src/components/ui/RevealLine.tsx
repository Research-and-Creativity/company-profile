import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function RevealLine({ delay = 0.4 }: { delay?: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div ref={ref}
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay }}
            style={{ transformOrigin: "left", marginTop: 22, height: 1, width: 96, background: "linear-gradient(90deg, #218ABB, rgba(33,138,187,0.1))" }}
        />
    );
}