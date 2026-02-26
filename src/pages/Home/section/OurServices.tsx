import Button from "../../../components/ui/Button";
import webImage from "../../../assets/web-development.png";
import mobileImage from "../../../assets/mobile-development.png";
export default function OurServices() {
  return (
    <section className="py-28 bg-gradient-to-br from-[#020049] to-[#020049] text-white">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            OUR SERVICES
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Zectech menyediakan berbagai macam layanan untuk memenuhi kebutuhan
            anda dibidang digital. Kami siap membantu anda dengan sepenuh hati,
            konsultasi dengan kami secara gratis sekarang!
          </p>
        </div>

        {/* CARDS */}
        <div className="grid lg:grid-cols-2 gap-10">

          {/* CARD 1 */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Website Development
              </h3>
              <p className="text-gray-300">
                Pembuatan website
              </p>
            </div>
            <img
              src={webImage}
              alt="Website Development"
              className="w-full h-[260px] object-cover"
            />
          </div>

          {/* CARD 2 */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition">
            <div className="p-6">
              <h3 className="text-2xl font-semibold">
                Mobile App Development
              </h3>
              <p className="text-gray-300">
                Pembuatan aplikasi mobile
              </p>
            </div>
            <img
              src={mobileImage}
              alt="Mobile App Development"
              className="w-full h-[260px] object-cover"
            />
          </div>

        </div>

        {/* BUTTON */}
        <div className="flex justify-start lg:justify-center mt-16
                        px-8 py-3 rounded-full 
                        font-medium 
                        hover:scale-105 transition">
          <Button text="Consult now" />
        </div>
      </div>
    </section>
  )
}
