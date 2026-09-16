import { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Work } from "./components/Work";
import { About, Experience } from "./components/AboutAndExperience";
import { Contact } from "./components/Contact";
import { Preloader } from "./components/Preloader";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {/* Dynamic preloader screen */}
      <Preloader onComplete={() => setLoading(false)} />

      <div className={`min-h-screen bg-background text-foreground font-sans selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-zinc-900 dark:selection:text-zinc-100 transition-opacity duration-1000 ${
        loading ? "opacity-0 h-screen overflow-hidden" : "opacity-100"
      }`}>
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

