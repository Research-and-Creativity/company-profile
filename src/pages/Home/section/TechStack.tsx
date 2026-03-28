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
        padding: "16px 0",
      }}
    >
      <div className="container mx-auto px-6">
        <div className="rounded-xl overflow-hidden"> 
           <TechMarquee items={TECH_ITEMS} speed={30} bgColor={BG} />
        </div>
      </div>
    </section>
  );
}