import { m, useInView } from "framer-motion";
import { useRef } from "react";
import type { Teams } from "../../constants/teams";
import TeamsCard from "./TeamsCard";

interface AnimatedTeamCardProps {
  team: typeof Teams[0];
  index: number;
  noAnim?: boolean;
}

export function AnimatedTeamCard({ team, index, noAnim = false }: AnimatedTeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <m.div
      ref={ref}
      initial={noAnim ? { opacity: 0 } : { opacity: 0, y: 56, scale: 0.93 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{
        duration: noAnim ? 0.4 : 0.75,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
        delay: noAnim ? 0 : (index % 4) * 0.1,
      }}
      className="flex justify-center"
      style={{ width: "100%" }}
    >
      <div className="w-full" style={{ maxWidth: 260 }}>
        <TeamsCard {...team} />
      </div>
    </m.div>
  );
}