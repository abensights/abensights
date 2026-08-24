import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import preloaderVideo from "../assets/images/download.mp4";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Let the preloader animation play smoothly and complete
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          onAnimationComplete={() => onComplete()}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#030712] select-none pointer-events-none"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-60 h-60 sm:w-64 sm:h-64 flex items-center justify-center"
          >
            <video
              src={preloaderVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover rounded-full shadow-2xl border border-zinc-200/60 dark:border-zinc-800"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
