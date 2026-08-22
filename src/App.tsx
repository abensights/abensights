import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About, Experience } from "./components/AboutAndExperience";
import { Contact } from "./components/Contact";
import { Preloader } from "./components/Preloader";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Dynamic preloader screen */}
      <Preloader onComplete={() => setLoading(false)} />

      <div className={`min-h-screen bg-background text-foreground font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 transition-opacity duration-1000 ${
        loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
      }`}>
        {/* Progress Bar */}
        {!loading && (
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 dark:bg-zinc-100 z-[60] origin-left"
            style={{ scaleX }}
          />
        )}
        
        <Navbar />
        
        <main>
          <Hero />
          <About />
          <Work />
          <Experience />
          <Contact />
        </main>
      </div>
    </ThemeProvider>
  );
}

