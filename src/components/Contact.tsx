import { motion } from "motion/react";
import { Linkedin, Mail, Send, MessageCircle, ArrowUpRight, Phone, Calendar } from "lucide-react";
import contactPhoto from "../assets/images/photo_2026-06-29_18-41-43.jpg";

export function Contact() {
  const contactLinks = [
    { 
      name: "Email: abenezerassefa01@gmail.com", 
      href: "mailto:abenezerassefa01@gmail.com", 
      icon: <Mail className="w-4 h-4" /> 
    },
    { 
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/abenezer-assefa-a08a961b4", 
      icon: <Linkedin className="w-4 h-4" /> 
    },
    { 
      name: "WhatsApp", 
      href: "https://wa.me/251931605750", 
      icon: <MessageCircle className="w-4 h-4" /> 
    },
    { 
      name: "Book a call", 
      href: "https://calendar.app.google/hXSWcf66BMP636ip9", 
      icon: <Calendar className="w-4 h-4" /> 
    },
  ];

  return (
    <section id="contact" className="px-4 md:px-8 py-4 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-12 p-6 md:p-12 lg:p-16 border border-zinc-200 dark:border-border rounded-[3rem] bg-[#050a1b] text-white flex flex-col items-center overflow-hidden relative">
            
            {/* Header Content */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-10">
              <span className="px-4 py-1.5 rounded-full border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-8 bg-white/5">
                Contact
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-[1.1] uppercase font-heading">
                Let's talk about product clarity, <br />
                <span className="font-serif italic font-light opacity-60">delivery, and growth</span>
              </h2>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl font-sans text-justify">
                If you need a product designer who can structure the work, align the team, and move the product toward stronger business metrics, I'm happy to connect
              </p>
            </div>

            {/* Inner Cards Row */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-6xl mx-auto mb-12">
              {/* Bio Card */}
              <div className="bg-transparent border border-white/10 rounded-[2.5rem] p-8 md:p-12 flex flex-col items-center gap-8">
                <div className="w-32 h-32 md:w-36 md:h-36 rounded-3xl overflow-hidden bg-zinc-800 flex-shrink-0">
                  <img 
                    src={contactPhoto} 
                    alt="Abenezer Assefa" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col space-y-4 text-center">
                  <h3 className="text-2xl font-bold tracking-tight">Abenezer Assefa</h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans max-w-sm text-justify">
                    Product Manager and UX/UI Designer with a strong foundation in Business Analysis. Building digital products that solve real business problems.
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-green-400 font-subheader">
                      open to work
                    </span>
                  </div>
                </div>
              </div>

              {/* Links Card */}
              <div className="bg-transparent border border-white/10 rounded-[2.5rem] p-5 sm:p-6 md:p-8 flex flex-col gap-3 min-w-0">
                {contactLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all duration-300 group min-w-0 gap-3"
                  >
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                      <div className="p-2 bg-white/5 rounded-lg text-zinc-400 group-hover:text-white transition-colors shrink-0">
                        {link.icon}
                      </div>
                      <span className="text-xs sm:text-sm font-medium tracking-tight text-zinc-300 group-hover:text-white transition-colors truncate min-w-0">
                        {link.name}
                      </span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Row */}
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-center w-full pt-12 border-t border-white/10 gap-8">
              <div className="flex items-center gap-10">
                <a href="https://www.linkedin.com/in/abenezer-assefa-a08a961b4" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5 text-white/40 hover:text-white" />
                </a>
                <a href="https://web.telegram.org/k/#@AbenezerAssefa0" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <Send className="w-5 h-5 text-white/40 hover:text-white" />
                </a>
                <a href="https://wa.me/251931605750" target="_blank" rel="noreferrer" className="hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5 text-white/40 hover:text-white" />
                </a>
                <a href="mailto:abenezerassefa01@gmail.com" className="hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-white/40 hover:text-white" />
                </a>
              </div>
              
              <div className="text-[9px] font-bold uppercase tracking-[0.4em] opacity-40 text-center font-subheader">
                © 2024 ABENEZER ASSEFA. CRAFTED WITH PRECISION.
              </div>
              
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 font-subheader">Addis Ababa, Ethiopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
