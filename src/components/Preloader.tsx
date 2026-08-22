import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import preloaderVideo from "../assets/images/download.mp4";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    // Let the preloader run for exactly 3.2 seconds
    const timer = setTimeout(() => {
      setShowPreloader(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {showPreloader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          onAnimationComplete={() => onComplete()}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white dark:bg-[#030712] select-none pointer-events-none"
        >
          <div className="relative w-64 h-64 flex items-center justify-center">
            {/* 1. Try to load and play local loader.mp4 or video.mp4 */}
            {!videoError && (
              <video
                src={preloaderVideo}
                autoPlay
                loop
                muted
                playsInline
                onCanPlay={() => setVideoLoaded(true)}
                onError={() => {
                  // Fallback to video.mp4 just in case
                  const videoAlt = document.createElement("video");
                  videoAlt.src = "/video.mp4";
                  videoAlt.oncanplay = () => setVideoLoaded(true);
                  videoAlt.onerror = () => setVideoError(true);
                }}
                className={`absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border border-zinc-100 dark:border-zinc-800 transition-all duration-1000 ${
                  videoLoaded ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-95 blur-md"
                }`}
              />
            )}

            {/* 2. Premium SVG geometric lowercase "a" Fallback Loader (shown when video is missing or loading) */}
            {(!videoLoaded || videoError) && (
              <div className="flex flex-col items-center justify-center">
                {/* Outer animated rotating & pulsing circle container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
                  animate={{ 
                    opacity: [0, 1, 1, 0.9, 1],
                    scale: [0.8, 1.05, 1, 1.02, 1],
                    rotate: [0, 5, -5, 2, 0],
                  }}
                  transition={{
                    duration: 3,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                  className="w-40 h-40 rounded-full bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800 flex items-center justify-center shadow-xl relative overflow-hidden"
                >
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-emerald-500/5 opacity-40 blur-xl" />
                  
                  {/* Custom geometric 'a' SVG drawn meticulously */}
                  <svg
                    viewBox="0 0 100 100"
                    className="w-24 h-24 text-zinc-900 dark:text-zinc-100 drop-shadow-sm"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {/* Animated main lowercase 'a' bowl loop */}
                    <motion.path
                      d="M 62 55 C 62 44, 42 44, 42 55 C 42 66, 62 66, 62 55 Z"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                    />
                    {/* Animated vertical stem on the right side */}
                    <motion.path
                      d="M 62 38 L 62 65 C 62 70, 65 72, 69 72"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                    />
                  </svg>
                </motion.div>

                {/* Loading status tag */}
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  className="text-[10px] uppercase font-extrabold tracking-[0.25em] text-zinc-400 dark:text-zinc-500 mt-6 pl-[0.25em]"
                >
                  Loading Experience
                </motion.span>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
