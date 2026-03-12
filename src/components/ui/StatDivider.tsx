import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function StatDivider({ delay }: { delay: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true });
    return (
        <motion.div ref={ref}
            initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 0.5, delay }}
            style={{ width: 1, height: 48, background: "rgba(33,138,187,0.25)", transformOrigin: "top" }}
        />
    );
}