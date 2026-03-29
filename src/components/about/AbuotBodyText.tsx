import { m, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutBodyText() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    return (
        <m.div ref={ref}
            initial={{ opacity: 0, y: 36 }} animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="max-w-2xl mb-14"
        >
            <p style={{ color: "rgba(175,210,235,0.7)", lineHeight: 1.9, marginBottom: "1.2rem", fontSize: "1.05rem" }}>
                Zetech merupakan inisiatif pengembangan teknologi profesional yang berada di bawah naungan{" "}
                <span style={{ color: "rgba(220,240,255,0.95)", fontWeight: 600 }}>Himpunan Mahasiswa Rekayasa Perangkat Lunak (HMSE)</span>{" "}
                Telkom University Purwokerto.
            </p>
            <p style={{ color: "rgba(175,210,235,0.7)", lineHeight: 1.9, fontSize: "1.05rem" }}>
                Melalui kolaborasi di dalam kabinet{" "}
                <span style={{ color: "#218ABB", fontStyle: "italic", fontWeight: 600 }}>Zenith</span>
                , kami berkomitmen menciptakan ekosistem IT yang inovatif — dari pengembangan web hingga aplikasi mobile yang ramah pengguna.
            </p>
        </m.div>
    );
}