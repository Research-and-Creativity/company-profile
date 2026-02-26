import Button from "../../../components/ui/Button";
import aboutImage from "../../../assets/about-image.png";

export default function About() {
  return (
     <section id="about" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6 
                flex flex-col lg:flex-row 
                items-center 
                gap-8">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            ABOUT US
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
          </p>
          {/* Button Desktop */}
            <div className="hidden lg:inline-block
                            py-3 rounded-full">
              <Button text="More About Us" />
            </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center">
        <div className="bg-white rounded-3xl shadow-2xl p-6 
                        w-full min-w-[610px] 
                        min-h-[320px] 
                        flex items-center justify-center">
            <img
              src= {aboutImage} 
              alt="About Zectech"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      {/* Button Mobile */}
        <div className="flex justify-center lg:hidden
                        px-6 py-3 rounded-full mt-6">
          <Button text="More About Us" />
        </div>
      </div>
    </section>
  )
}
