import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
}

const experienceData: Record<string, ExperienceItem[]> = {
  "Product Manager": [
    {
      role: "Product Manager",
      company: "Ayo Tech Solutions",
      period: "2023 – Present",
      description: "Drove end-to-end product strategy and delivery for custom web and mobile apps, streamlining feature scoping and improving development velocity."
    },
    {
      role: "Product Owner",
      company: "Bank of Abyssinia",
      period: "2022 – Present",
      description: "Led cross-functional teams to build and scale critical digital banking features, aligning product vision with strategic business goals and core user needs."
    }
  ],
  "UX/UI Designer": [
    {
      role: "Senior UX/UI Designer",
      company: "Ayo Tech Solutions",
      period: "2023 – Present",
      description: "Meticulously crafted interactive user interfaces and high-fidelity prototypes, setting design standards and conducting in-depth usability research."
    },
    {
      role: "UX/UI Designer",
      company: "Nablis Consulting Service",
      period: "2025 – 2026",
      description: "Provided comprehensive consulting on digital experience improvements, leading design sprints and implementing modern interface patterns."
    },
    {
      role: "UX/UI Designer",
      company: "Crib CRM",
      period: "2023 – 2025",
      description: "Created user-centered customer relationship management layouts, focusing on intuitive dashboard navigation and detailed data visualizations."
    },
    {
      role: "UX/UI Designer",
      company: "Bank of Abyssinia",
      period: "2022 – 2025",
      description: "Redesigned mobile banking touchpoints and desktop portals, ensuring a cohesive design system and raising overall user satisfaction."
    }
  ],
  "Business Analyst": [
    {
      role: "Business Analyst",
      company: "Bank of Abyssinia",
      period: "2023 – Present",
      description: "Collaborated directly with stakeholders to gather operational requirements, define user stories, and evaluate data-driven success metrics."
    },
    {
      role: "Business Analyst",
      company: "Ayo Tech Solutions",
      period: "2023 – Present",
      description: "Conducted comprehensive market research and business process modeling to optimize software delivery pathways and maximize project ROI."
    },
    {
      role: "Associate Business Analyst",
      company: "Bank of Abyssinia",
      period: "2023 – 2025",
      description: "Analyzed complex financial systems and compiled detailed system integration specifications to bridge business and engineering capabilities."
    }
  ]
};

export function About() {
  return (
    <section id="about" className="px-4 md:px-8 py-4 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-12 p-8 md:p-16 border border-zinc-200 dark:border-border rounded-[2.5rem] bg-zinc-100 dark:bg-card">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.65rem] font-bold tracking-tight leading-none mb-12 uppercase font-heading text-foreground">
              <span className="block leading-tight">I DESIGN DATA DRIVEN DIGITAL PRODUCTS THAT ARE</span>
              <span className="block font-serif italic font-light text-zinc-400 mt-2 leading-tight">SIMPLE, INTUITIVE, AND BUILT FOR IMPACT</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-zinc-600 dark:text-zinc-400">
              <p className="text-sm md:text-base leading-relaxed font-sans text-justify">
                Based in Addis Ababa, I work as a Product Manager and UX/UI Designer with a strong foundation in Business Analysis. My focus is on building digital products that solve real business problems, create meaningful user experiences, and streamline workflows. I collaborate closely with cross-functional teams, stakeholders, and forward-thinking organizations to translate complex operational requirements into intuitive, elegant, and highly scalable solutions.
              </p>
              <p className="text-sm md:text-base leading-relaxed font-sans text-justify">
                My approach combines business strategy, data-driven insights, and user-centered design to ensure every product decision delivers measurable value. I believe great design is about how effectively it performs, works, and adapts to real-world user needs. From digital banking platforms to customer-focused applications, I bring a structured and analytical mindset to drive user engagement and support sustainable business growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  const [activePath, setActivePath] = useState<string>("Product Manager");

  return (
    <section id="experience" className="px-4 md:px-8 py-4 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column: A single card containing Header, Career Tracks, and Body */}
          <div className="lg:col-span-4 p-6 sm:p-8 border border-zinc-200 dark:border-border rounded-[2.5rem] bg-zinc-100 dark:bg-card flex flex-col justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6 uppercase font-heading text-foreground">
                My Career <br />
                <span className="font-serif italic font-light text-zinc-400">Path</span>
              </h2>

              {/* Career Track selectors between header and body */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 mt-4">
                {["Business Analyst", "UX/UI Designer", "Product Manager"].map((path) => {
                  const isActive = activePath === path;
                  return (
                    <motion.div
                      key={path}
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActivePath(path)}
                      className={`cursor-pointer border rounded-xl p-3 px-4 transition-all duration-300 flex items-center justify-between gap-2 min-w-0 ${
                        isActive
                          ? "bg-[#050a1b] border-[#050a1b] text-white dark:bg-white/10 dark:border-white/20 dark:text-white shadow-md"
                          : "bg-zinc-50 dark:bg-zinc-900/30 border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200/50 dark:hover:bg-white/5"
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <span className="text-[8px] font-extrabold uppercase tracking-widest opacity-50 block leading-none">Career Track</span>
                        <h4 className="text-xs sm:text-sm font-extrabold uppercase tracking-tight mt-1 truncate">{path}</h4>
                      </div>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 shrink-0 aspect-square ${
                        isActive 
                          ? "border-white/30 bg-white/10 text-white" 
                          : "border-zinc-300 dark:border-zinc-700 text-zinc-400 dark:text-zinc-500"
                      }`}>
                        <span className="text-[10px] font-bold">→</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <p className="text-zinc-500 dark:text-white/60 text-sm leading-relaxed font-sans">
              Merging design research with technical implementation.
            </p>
          </div>
          
          {/* Right Column: Card containing the experiences table */}
          <div className="lg:col-span-8 p-6 sm:p-8 md:p-12 border border-zinc-200 dark:border-border rounded-[2.5rem] bg-zinc-100 dark:bg-card flex flex-col justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePath}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col h-full divide-y divide-zinc-200 dark:divide-white/10"
              >
                {experienceData[activePath]?.map((exp, index) => (
                  <div
                    key={exp.role + exp.company + index}
                    className="group py-6 sm:py-8 flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6 lg:gap-8 relative first:pt-0 last:pb-0"
                  >
                    <div className="sm:w-1/3 shrink-0">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-zinc-500 transition-colors uppercase tracking-tight text-foreground">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-xs sm:text-sm font-medium text-zinc-400 italic">at</span>
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-foreground/80">{exp.company}</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed italic font-serif">
                        "{exp.description}"
                      </p>
                    </div>
                    
                    <div className="sm:text-right shrink-0">
                      <span className="text-xs font-mono font-bold opacity-50 bg-zinc-200/50 dark:bg-zinc-800/50 px-3 py-1.5 rounded-full text-foreground/90 whitespace-nowrap inline-block">{exp.period}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
