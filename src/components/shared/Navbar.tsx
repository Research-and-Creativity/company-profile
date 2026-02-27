import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/navigation";
import aboutImage from "../../assets/logo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed bg-white top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? " backdrop-blur-md shadow-sm py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Zetech */}
        <a href="/">
          <div className="flex items-center gap-3">
            {/* Logo Zetech */}
            <img
              src={aboutImage}
              alt="Zetech Logo"
              className="w-12 h-12 object-contain"
            />

            <div className="text-2xl font-bold text-[#001534]">
              ZE<span className="text-blue-600">TECH</span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`font-medium text-[#001534] hover:text-blue-600 transition-all duration-300 ${isScrolled ? 'text-base':'text-lg'} `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
