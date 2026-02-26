import Button from "../../../components/ui/Button";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#001534]">

      <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-150 h-150 bg-zetech-primary/20 blur-[120px] rounded-full z-10 animate-soft-glow" />

      <div className="absolute bottom-[10%] left-[-5%] w-100 h-100 bg-blue-600/10 blur-[100px] rounded-full z-10" />

      <div className="absolute top-[20%] right-[-10%] w-125 h-125 bg-zetech-primary/15 blur-[130px] rounded-full z-10" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
          Building Advanced <br />
          <span className="text-zetech-primary">Digital Technology</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
          Zetech menciptakan solusi digital yang cepat, aman, dan inovatif untuk masa depan bisnis Anda.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button text="Start Your Project"/>
        </div>
      </div>
    </section>
  );
}