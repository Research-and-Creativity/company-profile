import { useState, useEffect } from "react";
import { NAV_LINKS } from "../../constants/navigation";
import Logo from "../../assets/logo.svg";
import LogoWhite from "../../assets/logo_white.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${sectionId}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
        ? "bg-white shadow-md"
        : "bg-transparent"
        }`}
    >
      <div className={`relative z-20 transition-all duration-300 ${isScrolled ? "py-2" : "py-4"} bg-inherit`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <div className="flex items-center gap-3">
              <img
                src={isScrolled ? Logo : LogoWhite}
                alt="Zetech Logo"
                className={`object-contain transition-all ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
              />
              {isScrolled ? (
                <div className="text-2xl font-bold text-[#001534]">
                  ZE<span className="text-blue-900">TECH</span>
                </div>
              ) : (
                <div className="text-white text-2xl font-bold">ZETECH</div>
              )}
            </div>
          </a>

          <div className="hidden md:flex gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium transition-all duration-300 relative group
              ${isScrolled ? "text-black" : "text-white"}
            `}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${activeSection === link.href ? "w-full" : "w-0 group-hover:w-full"} ${isScrolled ? "bg-blue-600" : "bg-white"}`} />
              </a>
            ))}
          </div>

          <button
            className={`cursor-pointer md:hidden ${isScrolled ? "text-[#001534]" : "text-white"} p-2`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-white relative z-10
    ${isMobileMenuOpen ? "max-h-64 border-b border-gray-100" : "max-h-0"}`}
      >
        <div className="flex flex-col p-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium text-[#001534] hover:text-blue-600 py-1"
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
