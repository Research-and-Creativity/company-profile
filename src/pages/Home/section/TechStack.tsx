import { TechMarquee } from "../../../components/ui/TechMarquee";
import { TECH_ITEMS } from "../../../constants/techstack";

const BG = "#f0f5fa";

export default function TechStack() {
  return (
    <section
      style={{
        background: BG,
        borderTop: "1px solid rgba(33,138,187,0.1)",
        borderBottom: "1px solid rgba(33,138,187,0.1)",
        padding: "4px 0",
      }}
    >
      <TechMarquee items={TECH_ITEMS} speed={30} bgColor={BG} />
    </section>
  );
}