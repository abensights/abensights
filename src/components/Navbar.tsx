import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCVOptions, setShowCVOptions] = useState(false);

  const cvOptions = [
    { label: "UX/UI Designer", href: "https://drive.google.com/file/d/1VQ3hegofUIg_dczYP6vhnsxxSQdcxa9W/view?usp=sharing" },
    { label: "Product Manager", href: "https://drive.google.com/file/d/1Eqb3R_b7O5hJOIHKoDkabgYroWU6aRqC/view?usp=sharing" },
    { label: "Business Analyst", href: "https://drive.google.com/file/d/1Ch1ROXmMP_f6DVYy41CEmm1PKHOfOWoI/view?usp=sharing" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 flex justify-center`}
    >
      <div className={`flex items-center justify-between px-8 py-3 rounded-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl border border-zinc-200 dark:border-zinc-800 shadow-xl w-[90%] md:w-[75%]"
          : "bg-transparent border border-transparent w-[95%]"
      }`}>
        <a 
          href="#" 
          className="group flex items-center gap-3"
        >
          <div className="relative w-10 h-10 flex items-center justify-center text-[#060D25] dark:text-white transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-current stroke-[12]">
              <circle cx="45" cy="50" r="35" />
              <path d="M80 30 V85" strokeLinecap="round" />
            </svg>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold uppercase tracking-[0.2em] transition-all hover:scale-110 hover:opacity-100 opacity-70 font-menu text-[#060D25] dark:text-white inline-block"
            >
              {link.name}
            </a>
          ))}
          
          {/* Get CV Button */}
          <div 
            className="relative"
            onMouseEnter={() => setShowCVOptions(true)}
            onMouseLeave={() => setShowCVOptions(false)}
          >
            <button 
              onClick={() => setShowCVOptions((prev) => !prev)}
              aria-label="Download CV"
              className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 border border-zinc-200 dark:border-white/20 rounded-full hover:bg-zinc-100 dark:hover:bg-white/10 transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#060D25] dark:text-white" />
            </button>

            <AnimatePresence>
              {showCVOptions && (
                <motion.div 
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-full mt-3 right-0 min-w-[210px] bg-white/70 dark:bg-zinc-900/60 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-2xl shadow-2xl dark:shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2 z-50 overflow-hidden"
                >
                  <div className="flex flex-col gap-1">
                    {cvOptions.map((opt) => (
                      <a
                        key={opt.label}
                        href={opt.href}
                        target={opt.href.startsWith("http") ? "_blank" : undefined}
                        rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        onClick={() => setShowCVOptions(false)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 text-[10px] font-bold uppercase tracking-widest text-[#060D25] dark:text-white transition-colors group cursor-pointer text-left"
                      >
                        <span>{opt.label}</span>
                        <ChevronRight className="w-3.5 h-3.5 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-zinc-600 dark:text-zinc-300" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <ThemeToggle />
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-2xl font-semibold tracking-tight hover:pl-2 transition-all text-zinc-900 dark:text-white"
                >
                  {link.name}
                </a>
              ))}
              
              <div className="pt-4 mt-2 border-t border-zinc-200/80 dark:border-white/10">
                <div className="flex flex-col gap-2">
                  {cvOptions.map((opt) => (
                    <a
                      key={opt.label}
                      href={opt.href}
                      target={opt.href.startsWith("http") ? "_blank" : undefined}
                      rel={opt.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={() => setMobileMenuOpen(false)}
                      className="w-full flex items-center justify-between p-3 rounded-xl bg-zinc-100/70 dark:bg-white/5 backdrop-blur-md border border-zinc-200/80 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 cursor-pointer text-left"
                    >
                      <span>{opt.label}</span>
                      <Download className="w-3.5 h-3.5 text-zinc-500 dark:text-zinc-400" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
