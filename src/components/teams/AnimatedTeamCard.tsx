import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Teams } from "../../constants/teams";
import TeamsCard from "./TeamsCard";

export function AnimatedTeamCard({ team, index }: { team: typeof Teams[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });
    return (
        <motion.div ref={ref}
            initial={{ opacity: 0, y: 56, scale: 0.93 }}
            animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.13 }}
            className="w-full sm:w-[45%] lg:w-[30%] flex justify-center"
        >
            <div className="max-w-75 w-full">
                <TeamsCard {...team} />
            </div>
        </motion.div>
    );
}