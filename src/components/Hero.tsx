import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDownLeft, PenTool, Code2, Search, BarChart3, Download, ChevronRight } from "lucide-react";

export function Hero() {
  return (
    <section className="px-4 md:px-8 pt-20 pb-6">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch lg:min-h-[500px]">
        {/* Main Personal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 p-6 md:p-10 lg:p-12 bg-zinc-100 dark:bg-transparent border border-zinc-200 dark:border-border rounded-[2.5rem] flex flex-col justify-between h-full relative overflow-hidden"
        >
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tighter leading-tight mb-4 font-heading text-foreground whitespace-nowrap">
              Hello, I'm Abenezer
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-serif italic font-light text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
              Product Manager | UX/UI Designer | Business Analyst
            </p>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-sm md:text-base text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed mb-6 font-sans text-justify"
          >
            I specialize in identifying strategic business opportunities and translating them into intuitive, data-driven digital products through business analysis, product strategy, and user-centered UX/UI design focused on improving user experience and delivering measurable business impact.
          </motion.p>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-auto">
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2.5">
                <div className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-foreground font-subheader">Available for work</span>
              </div>
              <p className="text-[9px] font-semibold text-zinc-400 dark:text-white/50 uppercase tracking-widest pl-4.5 font-subheader">Currently accepting freelance and hybrid roles starting 2024</p>
            </div>
          </div>
        </motion.div>

        {/* Right Stack */}
        <div className="lg:col-span-4 flex flex-col gap-6 h-full justify-between">
          {/* Top Card: Bridging Strategy */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="bg-zinc-100 dark:bg-card border border-zinc-200 dark:border-border rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between flex-1 min-h-[220px] lg:min-h-0"
          >
            <div className="flex flex-col items-center justify-center text-center flex-1 py-2">
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-3 leading-snug font-heading text-foreground">
                Bridging Strategy <br className="hidden md:inline" />with Design
              </h3>
              <p className="text-sm text-[#8B8B8C] dark:text-white/80 leading-relaxed max-w-[240px] font-semibold">
                Explore 5+ Projects across various industries.
              </p>
            </div>
            
            <div 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group cursor-pointer self-start"
            >
              <div className="w-10 h-10 rounded-full border border-zinc-400 dark:border-white/30 flex items-center justify-center transition-all duration-500 group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 group-hover:border-transparent">
                <ArrowDownLeft className="w-4 h-4 transition-transform group-hover:-rotate-45" />
              </div>
            </div>
          </motion.div>

          {/* Bottom Card: Our Service */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-[#050a1b] dark:bg-transparent text-white rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-between flex-1 min-h-[250px] lg:min-h-0 border border-white/40"
          >
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-8 text-center font-heading">Our Service</h3>
            
            <div className="grid grid-cols-3 gap-2 flex-1 items-center">
              {/* UX/UI Service */}
              <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
                <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current stroke-[1.5] rotate-[245deg] text-white/80 group-hover:text-white group-hover:scale-110 group-hover:rotate-[290deg] transition-all duration-500" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 19l7-7 3 3-7 7-3-3z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 2l5 5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M11 11l1 1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="text-center space-y-0.5">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wider font-subheader">UX/UI</p>
                  <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest font-subheader leading-none">Designing</p>
                </div>
              </div>
              
              {/* Product Management Service */}
              <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
                <div className="w-10 h-10 flex items-center justify-center text-2xl font-mono font-black text-white/80 group-hover:text-white group-hover:scale-115 group-hover:rotate-6 transition-all duration-300">
                  {"</>"}
                </div>
                <div className="text-center space-y-0.5">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wider font-subheader">Product</p>
                  <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest font-subheader leading-none">Management</p>
                </div>
              </div>
              
              {/* Business Analysis Service */}
              <div className="flex flex-col items-center gap-2.5 group cursor-pointer">
                <svg viewBox="0 0 48 48" className="w-10 h-10 fill-none stroke-current stroke-[3] text-white/80 group-hover:text-white group-hover:scale-110 group-hover:translate-y-[-2px] transition-all duration-300">
                  <circle cx="20" cy="20" r="14" />
                  <path d="M30 30L42 42" strokeLinecap="round" />
                  <rect x="14" y="22" width="2" height="6" />
                  <rect x="19" y="16" width="2" height="12" />
                  <rect x="24" y="20" width="2" height="8" />
                </svg>
                <div className="text-center space-y-0.5">
                  <p className="text-xs md:text-sm font-bold uppercase tracking-wider font-subheader">Business</p>
                  <p className="text-[10px] font-medium opacity-60 uppercase tracking-widest font-subheader leading-none">Analysis</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

