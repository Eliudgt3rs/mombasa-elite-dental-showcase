import { useState, useEffect } from "react";
import { Menu, X, Smile, ArrowRight } from "lucide-react";

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-us" },
    { name: "Virtual Assessment", href: "#assessment" },
    { name: "Reviews", href: "#reviews" },
  ];

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-nav py-3 shadow-sm shadow-slate-900/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick("#home");
            }}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-teal-600 flex items-center justify-center text-white shadow-md shadow-teal-600/20 group-hover:bg-teal-700 transition-colors">
              <Smile className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg font-bold tracking-tight text-slate-900 leading-none block">
                Mombasa
              </span>
              <span className="font-sans text-xs uppercase tracking-widest font-semibold text-teal-600 block">
                Dental Clinic
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-teal-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <div className="hidden md:block">
            <button
              onClick={onBookClick}
              className="font-sans text-sm font-medium bg-slate-900 text-white hover:bg-teal-600 px-5 py-2.5 rounded-xl transition-all duration-300 ease-in-out shadow-sm shadow-slate-900/10 hover:shadow-teal-600/20 active:scale-95 flex items-center space-x-2"
            >
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-teal-600 transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      <div
        className={`fixed inset-0 top-[64px] z-40 bg-slate-900/20 backdrop-blur-sm md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Side Panel */}
      <div
        className={`fixed top-[64px] right-0 bottom-0 w-[280px] z-40 bg-white shadow-xl md:hidden transform transition-transform duration-300 ease-out flex flex-col justify-between p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6">
          <p className="font-sans text-xs uppercase tracking-widest font-semibold text-slate-400">
            Navigation Menu
          </p>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="font-sans text-base font-semibold text-slate-800 hover:text-teal-600 transition-colors py-2 block border-b border-slate-50"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-4 pb-12">
          <button
            onClick={() => {
              setIsOpen(false);
              onBookClick();
            }}
            className="w-full text-center font-sans font-medium bg-teal-600 text-white hover:bg-teal-700 py-3 px-4 rounded-xl transition-all shadow-md shadow-teal-600/20 flex items-center justify-center space-x-2"
          >
            <span>Book Appointment</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center font-sans text-xs text-slate-400">
            Mombasa, Nyali Beach Rd
          </p>
        </div>
      </div>
    </nav>
  );
}
