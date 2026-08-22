import { useState, useRef, useEffect, type ReactNode, type MouseEvent, type WheelEvent } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Award, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ToolItem {
  id: string;
  name: string;
  category: string;
  domain: "Design" | "Product & Agile" | "Data & Analysis" | "Tech & Dev";
  level: "Expert" | "Advanced";
  years: string;
  description: string;
  accentColor: string;
  bgGradient: string;
  icon: ReactNode;
}

export const toolsData: ToolItem[] = [
  {
    id: "figma",
    name: "Figma",
    category: "UI/UX Design & Prototyping",
    domain: "Design",
    level: "Expert",
    years: "4+ Years",
    description: "Design Systems, Auto Layout, Interactive Components, Team Libraries",
    accentColor: "#F24E1E",
    bgGradient: "from-[#F24E1E]/15 via-[#A259FF]/10 to-transparent dark:from-[#F24E1E]/20 dark:via-[#A259FF]/15",
    icon: (
      <svg viewBox="0 0 38 57" className="w-8 h-8" fill="none">
        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE" />
        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83" />
        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF" />
      </svg>
    ),
  },
  {
    id: "adobe-xd",
    name: "Adobe XD",
    category: "UI/UX & Wireframing",
    domain: "Design",
    level: "Expert",
    years: "3+ Years",
    description: "User Flow Mapping, Interactive Prototypes, Component States",
    accentColor: "#FF61F6",
    bgGradient: "from-[#FF61F6]/15 via-[#470137]/20 to-transparent dark:from-[#FF61F6]/20 dark:via-[#470137]/30",
    icon: (
      <div className="w-8 h-8 rounded-xl bg-[#470137] border border-[#FF61F6] flex items-center justify-center font-bold text-[#FF61F6] text-sm shadow-md">
        Xd
      </div>
    ),
  },
  {
    id: "framer",
    name: "Framer",
    category: "Interactive Prototyping",
    domain: "Design",
    level: "Advanced",
    years: "2+ Years",
    description: "High-Fidelity Animations, Micro-Interactions, Responsive Layouts",
    accentColor: "#0055FF",
    bgGradient: "from-[#0055FF]/15 via-[#002266]/20 to-transparent dark:from-[#0055FF]/25 dark:via-[#002266]/30",
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" fill="#0055FF" />
      </svg>
    ),
  },
  {
    id: "balsamiq",
    name: "Balsamiq",
    category: "Low-Fidelity Wireframes",
    domain: "Design",
    level: "Expert",
    years: "3+ Years",
    description: "Rapid Concept Ideation, IA Architecture, Quick Stakeholder Alignment",
    accentColor: "#A81C51",
    bgGradient: "from-[#A81C51]/15 via-[#700D33]/15 to-transparent dark:from-[#A81C51]/25 dark:via-[#700D33]/20",
    icon: (
      <div className="w-9 h-9 rounded-xl bg-[#A81C51]/15 border border-[#A81C51]/30 flex items-center justify-center p-1 shadow-sm">
        <svg viewBox="0 0 140 100" className="w-full h-full" fill="none">
          <path
            d="M55 20 C50 16 58 26 64 24 C72 22 80 29 78 33 C75 38 56 40 52 46 C47 52 82 44 91 49 C100 54 62 64 57 71 C51 78 82 72 85 78"
            stroke="#A81C51"
            strokeWidth="12"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "excalidraw",
    name: "Excalidraw",
    category: "System Diagrams & Flows",
    domain: "Product & Agile",
    level: "Expert",
    years: "3+ Years",
    description: "Architecture Blueprinting, User Journeys, Real-time Whiteboarding",
    accentColor: "#6965DB",
    bgGradient: "from-[#6965DB]/15 via-[#4A47A3]/15 to-transparent dark:from-[#6965DB]/25 dark:via-[#4A47A3]/20",
    icon: (
      <div className="w-9 h-9 rounded-2xl bg-[#6965DB]/15 border border-[#6965DB]/30 flex items-center justify-center p-1 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Upper-left pencil tip */}
          <path
            d="M12 12 C18 48 22 66 40 86 L82 44 C64 24 46 18 12 12 Z"
            fill="#6965DB"
          />
          <path
            d="M18 18 C24 45 27 58 38 75"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Lower-right block segment */}
          <path
            d="M122 148 L152 118 C172 138 185 152 192 160 L164 188 C152 180 136 166 122 148 Z"
            fill="#6965DB"
          />
          <path
            d="M130 148 C140 158 154 172 165 178"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Major Diagonal Pen/Brush Stroke */}
          <path
            d="M18 152 C8 164 12 174 22 184 C32 194 42 198 54 186 L178 62 C192 48 196 28 192 12 C176 8 156 12 142 26 L18 152 Z"
            fill="#6965DB"
          />
          {/* Circular Cutout near top-right pen tip */}
          <circle cx="150" cy="50" r="11.5" fill="white" />
          {/* Hand-drawn white highlights */}
          <path
            d="M26 162 L144 44 C152 34 166 22 182 18"
            stroke="white"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M42 178 L168 58"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeOpacity="0.85"
            fill="none"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "lunacy",
    name: "Lunacy",
    category: "Vector Graphics & UI",
    domain: "Design",
    level: "Advanced",
    years: "2+ Years",
    description: "Vector Assets, Iconography, Rapid Screen Design & Export",
    accentColor: "#2B9DFD",
    bgGradient: "from-[#2B9DFD]/20 via-[#0066CC]/15 to-transparent dark:from-[#2B9DFD]/25 dark:via-[#004C99]/20",
    icon: (
      <div className="w-9 h-9 rounded-2xl bg-[#2B9DFD] flex items-center justify-center shadow-md p-1">
        <svg viewBox="0 0 240 240" className="w-full h-full" fill="none">
          {/* Left tall rectangle */}
          <rect x="65" y="65" width="50" height="110" rx="3" fill="white" />
          {/* Bottom right triangle */}
          <path d="M115 175 L175 115 L175 175 Z" fill="white" />
          {/* Top right 4-point sparkle star */}
          <path
            d="M150 67 C150 78 157 85 168 85 C157 85 150 92 150 103 C150 92 143 85 132 85 C143 85 150 78 150 67 Z"
            fill="white"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "canva",
    name: "Canva",
    category: "Visual Decks & Collateral",
    domain: "Design",
    level: "Expert",
    years: "4+ Years",
    description: "Executive Pitch Decks, Marketing Visuals, Stakeholder Presentations",
    accentColor: "#00C4CC",
    bgGradient: "from-[#00C4CC]/15 via-[#7D2AE8]/15 to-transparent dark:from-[#00C4CC]/20 dark:via-[#7D2AE8]/20",
    icon: (
      <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] flex items-center justify-center shadow-md font-serif italic text-white text-base font-bold">
        C
      </div>
    ),
  },
  {
    id: "jira",
    name: "Jira",
    category: "Agile Sprint & Backlog",
    domain: "Product & Agile",
    level: "Expert",
    years: "4+ Years",
    description: "Epics & User Story Mapping, Sprint Velocity, Kanban Boards",
    accentColor: "#2684FF",
    bgGradient: "from-[#2684FF]/20 via-[#0052CC]/15 to-transparent dark:from-[#2684FF]/25 dark:via-[#0052CC]/20",
    icon: (
      <div className="w-9 h-9 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-1 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Top-Right Chevron */}
          <path
            d="M98 22 H176 C184 22 190 28 190 36 V114 C150 114 150 80 150 62 H98 C82 62 82 22 98 22 Z"
            fill="#2684FF"
          />
          {/* Middle Chevron */}
          <path
            d="M56 64 H134 C142 64 148 70 148 78 V156 C108 156 108 122 108 104 H56 C40 104 40 64 56 64 Z"
            fill="#2684FF"
          />
          {/* Bottom-Left Chevron */}
          <path
            d="M14 106 H92 C100 106 106 112 106 120 V198 C66 198 66 164 66 146 H14 C-2 146 -2 106 14 106 Z"
            fill="#2684FF"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "notion",
    name: "Notion",
    category: "Product Specs & PRDs",
    domain: "Product & Agile",
    level: "Expert",
    years: "4+ Years",
    description: "PRD Documentation, Feature Roadmaps, Knowledge Bases",
    accentColor: "#000000",
    bgGradient: "from-zinc-400/20 via-zinc-600/10 to-transparent dark:from-white/15 dark:via-zinc-800/20",
    icon: (
      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-0.5 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Outer Black 3D Isometric Cube Block with Rounded Geometry */}
          <path
            d="M38 46 C38 30 48 20 64 18 L142 14 C156 13 168 22 172 36 L174 142 C174 158 162 170 146 170 H58 C42 170 34 158 34 142 Z"
            fill="#000000"
            className="dark:fill-white"
          />
          {/* Top Face White Quad */}
          <path
            d="M50 42 C50 36 56 32 66 31 L142 26 C148 25 154 29 156 35 L150 56 C148 59 144 61 138 61 H58 C52 61 48 57 48 51 Z"
            fill="#FFFFFF"
            className="dark:fill-zinc-950"
          />
          {/* Front Face White Panel */}
          <rect
            x="61"
            y="63"
            width="97"
            height="93"
            rx="12"
            fill="#FFFFFF"
            className="dark:fill-zinc-950"
          />
          {/* Signature Bold Serif 'N' */}
          <path
            d="M76 86 C76 81 80 79 87 79 H101 C101 84 98 86 94 87 V132 C98 133 101 134 101 139 H81 C81 134 84 133 88 132 V95 L118 139 H138 C138 134 135 133 131 132 V87 C135 86 138 84 138 79 H124 C124 84 127 86 131 87 V121 L102 79 Z"
            fill="#000000"
            className="dark:fill-white"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "asana",
    name: "Asana",
    category: "Workflow & Project Ops",
    domain: "Product & Agile",
    level: "Expert",
    years: "3+ Years",
    description: "Cross-Functional Timelines, Goal Tracking, Dependency Management",
    accentColor: "#F06A6A",
    bgGradient: "from-[#F06A6A]/15 via-[#FC636B]/10 to-transparent dark:from-[#F06A6A]/25 dark:via-[#FC636B]/15",
    icon: (
      <div className="w-8 h-8 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 flex flex-col items-center justify-center p-1 shadow-sm gap-0.5">
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F06A6A] to-[#FF8B66]"></div>
        <div className="flex gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F06A6A] to-[#FF8B66]"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-[#F06A6A] to-[#FF8B66]"></div>
        </div>
      </div>
    ),
  },
  {
    id: "sql",
    name: "SQL",
    category: "Data Querying & Schema",
    domain: "Data & Analysis",
    level: "Expert",
    years: "3+ Years",
    description: "Complex Joins, Aggregations, User Cohort Analysis, Schema Diagnostics",
    accentColor: "#1E78E6",
    bgGradient: "from-[#1E78E6]/20 via-[#0D4290]/15 to-transparent dark:from-[#1E78E6]/25 dark:via-[#0D4290]/20",
    icon: (
      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-0.5 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Bottom Tier (Cobalt Navy Blue) */}
          <path
            d="M34 126 V152 C34 172 64 186 100 186 C136 186 166 172 166 152 V126 C166 144 136 158 100 158 C64 158 34 144 34 126 Z"
            fill="#0D4290"
          />

          {/* Middle Tier (Vivid Azure Blue) */}
          <path
            d="M34 74 V126 C34 144 64 158 100 158 C136 158 166 144 166 126 V74 C166 92 136 106 100 106 C64 106 34 92 34 74 Z"
            fill="#1557BF"
          />

          {/* Top Tier Wall (Bright Blue) */}
          <path
            d="M34 34 V74 C34 92 64 106 100 106 C136 106 166 92 166 74 V34 C166 52 136 66 100 66 C64 66 34 52 34 34 Z"
            fill="#1E78E6"
          />

          {/* Top Cap Ellipse (Light Sky Blue) */}
          <ellipse
            cx="100"
            cy="34"
            rx="66"
            ry="22"
            fill="#459EFA"
          />

          {/* Bold White "SQL" Text Across Middle Tier */}
          <text
            x="100"
            y="131"
            textAnchor="middle"
            fontFamily="system-ui, -apple-system, 'Inter', 'Plus Jakarta Sans', sans-serif"
            fontWeight="800"
            fontSize="36"
            fill="#FFFFFF"
            letterSpacing="-0.5px"
          >
            SQL
          </text>
        </svg>
      </div>
    ),
  },
  {
    id: "power-bi",
    name: "Power BI",
    category: "Business Intelligence & BI",
    domain: "Data & Analysis",
    level: "Expert",
    years: "3+ Years",
    description: "Executive KPI Dashboards, DAX Calculations, Data Modeling, Visuals",
    accentColor: "#F2C811",
    bgGradient: "from-[#F2C811]/15 via-[#B78103]/10 to-transparent dark:from-[#F2C811]/25 dark:via-[#B78103]/20",
    icon: (
      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-1.5 shadow-sm">
        <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
          {/* Right Tall Bar - Golden Amber */}
          <rect
            x="54"
            y="6"
            width="32"
            height="88"
            rx="6"
            fill="#DE9B00"
          />
          {/* Middle Medium Bar - Bright Yellow */}
          <rect
            x="33"
            y="28"
            width="32"
            height="66"
            rx="6"
            fill="#F5CA25"
          />
          {/* Left Short Bar - Soft Lemon Yellow */}
          <rect
            x="12"
            y="50"
            width="32"
            height="44"
            rx="6"
            fill="#FCE57B"
          />
        </svg>
      </div>
    ),
  },
  {
    id: "minitab",
    name: "Minitab",
    category: "Statistical Analysis & QA",
    domain: "Data & Analysis",
    level: "Advanced",
    years: "2+ Years",
    description: "Hypothesis Testing, Regression Modeling, Quality Metrics & Six Sigma",
    accentColor: "#7CBD34",
    bgGradient: "from-[#7CBD34]/20 via-[#5E9B24]/10 to-transparent dark:from-[#7CBD34]/25 dark:via-[#5E9B24]/20",
    icon: (
      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-0.5 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          <defs>
            <clipPath id="minitab-clip">
              <rect x="20" y="20" width="160" height="160" rx="30" />
            </clipPath>
          </defs>

          {/* Green Rounded Tile Background */}
          <rect x="20" y="20" width="160" height="160" rx="30" fill="#7CBD34" />

          {/* 45° Long Drop Shadow & 4-Bar Histogram */}
          <g clipPath="url(#minitab-clip)">
            <polygon
              points="99,52 180,133 180,180 65,180 47,146 157,146 157,105 128,71 99,52"
              fill="#68A528"
            />

            {/* Bar 1 (Medium Left - Height 58) */}
            <rect x="47" y="88" width="23" height="58" fill="#FFFFFF" />
            <polygon points="47,141 70,132 70,146 47,146" fill="#D6D9DC" />

            {/* Bar 2 (Peak Mode Distribution - Height 94) */}
            <rect x="76" y="52" width="23" height="94" fill="#FFFFFF" />
            <polygon points="76,146 99,109 99,146" fill="#D6D9DC" />

            {/* Bar 3 (High-Medium - Height 75) */}
            <rect x="105" y="71" width="23" height="75" fill="#FFFFFF" />
            <polygon points="105,109 128,124 128,146 105,146" fill="#D6D9DC" />

            {/* Bar 4 (Short Right - Height 41) */}
            <rect x="134" y="105" width="23" height="41" fill="#FFFFFF" />
            <polygon points="134,124 157,116 157,146 134,146" fill="#D6D9DC" />
          </g>
        </svg>
      </div>
    ),
  },
  {
    id: "android-studio",
    name: "Android Studio",
    category: "Mobile Inspection & QA",
    domain: "Tech & Dev",
    level: "Advanced",
    years: "2+ Years",
    description: "Layout Inspection, UI Emulation, Build Validation, Flow Debugging",
    accentColor: "#7CB342",
    bgGradient: "from-[#7CB342]/20 via-[#4E7028]/10 to-transparent dark:from-[#7CB342]/25 dark:via-[#4E7028]/20",
    icon: (
      <div className="w-10 h-10 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-center p-0.5 shadow-sm">
        <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
          {/* Green Circular Background */}
          <circle cx="100" cy="100" r="88" fill="#7CB342" />

          {/* Upper Horizon Crease / Material Shading */}
          <path d="M12 100 A88 88 0 0 1 188 100 Z" fill="#8BC34A" opacity="0.22" />

          {/* 45° Long Drop Shadow from Slate Pivot across Green Circle */}
          <path
            d="M116 48 L188 120 A88 88 0 0 1 154 172 L96 114 Z"
            fill="#558B2F"
            opacity="0.65"
          />

          {/* Left Compass Leg (Silver / White with pointed needle tip) */}
          <path
            d="M86 86 L48 168 L48 178 L56 178 L98 94 Z"
            fill="#FAFAFA"
          />
          <path
            d="M48 168 L44 174 L48 178 Z"
            fill="#E0E0E0"
          />

          {/* Right Compass Leg (Silver / White with pointed needle tip) */}
          <path
            d="M102 94 L144 178 L152 178 L152 168 L114 86 Z"
            fill="#ECEFF1"
          />
          <path
            d="M152 168 L156 174 L152 178 Z"
            fill="#CFD8DC"
          />

          {/* Circular Arc Crossbar forming the 'A' */}
          <path
            d="M72 120 C84 130 118 130 152 86 L154 98 C116 142 78 138 68 126 Z"
            fill="#F5F5F7"
          />

          {/* Dark Charcoal / Slate Pivot Head */}
          <path
            d="M92 38 H108 V50 H120 C124 50 126 54 124 58 L124 82 L100 104 L76 82 L76 58 C74 54 76 50 80 50 H92 Z"
            fill="#5E5E5E"
          />
          {/* Inner Cutout Hole on Pivot showing Green Background */}
          <circle cx="100" cy="72" r="13" fill="#7CB342" />
        </svg>
      </div>
    ),
  },
];

const domains = ["All", "Design", "Product & Agile", "Data & Analysis", "Tech & Dev"] as const;

export function ToolsShowcase() {
  const [activeDomain, setActiveDomain] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastStepTimeRef = useRef<number>(0);

  const filteredTools = toolsData.filter(
    (tool) => activeDomain === "All" || tool.domain === activeDomain
  );

  // Reset index when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [activeDomain]);

  // Calm automatic horizontal gliding when idle (every 6.5 seconds)
  useEffect(() => {
    if (isHovered || filteredTools.length <= 1) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev < filteredTools.length - 1 ? prev + 1 : 0));
    }, 6500);

    return () => clearInterval(interval);
  }, [isHovered, filteredTools.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : filteredTools.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < filteredTools.length - 1 ? prev + 1 : 0));
  };

  // Slower, measured mouse movement with wide deadband and extended 550ms throttle
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || filteredTools.length === 0) return;
    
    const now = Date.now();
    // Relaxed step interval (550ms) for calm, non-erratic card navigation
    if (now - lastStepTimeRef.current < 550) return;

    const rect = containerRef.current.getBoundingClientRect();
    const relativeX = e.clientX - rect.left;
    const center = rect.width / 2;
    const distanceFromCenter = relativeX - center;

    // Wide center deadband (±130px) so resting over the middle card never triggers accidental movement
    if (Math.abs(distanceFromCenter) < 130) return;

    lastStepTimeRef.current = now;
    if (distanceFromCenter > 0) {
      handleNext();
    } else {
      handlePrev();
    }
  };

  // Measured mouse wheel flips (480ms debounce)
  const handleWheel = (e: WheelEvent<HTMLDivElement>) => {
    const now = Date.now();
    if (now - lastStepTimeRef.current < 480) return;
    
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(delta) > 25) {
      lastStepTimeRef.current = now;
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div className="mt-16 pt-12 border-t border-zinc-200/80 dark:border-border/60">
      {/* Subheader & Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 px-2">
        <div>
          <h3 className="text-3xl md:text-5xl font-bold tracking-tight uppercase font-heading text-zinc-900 dark:text-foreground">
            TOOLKIT & <span className="font-serif italic font-light text-zinc-400">EXPERTISE</span>
          </h3>
        </div>

        {/* Separate Category Filter Buttons (Matching Featured Works Style) */}
        <div className="flex flex-wrap items-center gap-2">
          {domains.map((domain) => (
            <button
              key={domain}
              onClick={() => setActiveDomain(domain)}
              className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all ${
                activeDomain === domain
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg"
                  : "bg-white/60 dark:bg-zinc-800/50 text-zinc-500 hover:bg-white dark:hover:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60"
              }`}
            >
              {domain}
            </button>
          ))}
        </div>
      </div>

      {/* 3D Perspective Stage */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative w-full h-[350px] sm:h-[380px] md:h-[400px] flex items-center justify-center overflow-hidden select-none cursor-grab active:cursor-grabbing"
        style={{
          perspective: "1100px",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 14%, black 86%, transparent 100%)"
        }}
      >
        {/* Subtle Ambient Stage Glow */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-40 transition-colors duration-1000 blur-3xl -z-10"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${filteredTools[activeIndex]?.accentColor || '#6366f1'}33 0%, transparent 60%)`
          }}
        />

        {/* 3D Cards Flow Carousel */}
        <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
          {filteredTools.map((tool, index) => {
            const offset = index - activeIndex;
            const absOffset = Math.abs(offset);
            const isCenter = offset === 0;

            // Strict rendering boundary (center + 2 immediate flanking cards each side)
            if (absOffset > 2) return null;

            // Geometry & smooth physical spacing
            const xOffset = offset * 125;
            const rotationY = offset * -14;
            const scale = isCenter ? 1.05 : (absOffset === 1 ? 0.88 : 0.74);
            const opacity = isCenter ? 1 : (absOffset === 1 ? 0.78 : 0.35);
            const zIndex = 50 - absOffset;
            const translateZ = isCenter ? 50 : -absOffset * 30;

            return (
              <motion.div
                key={tool.id}
                onClick={() => setActiveIndex(index)}
                animate={{
                  x: xOffset,
                  rotateY: rotationY,
                  scale: scale,
                  opacity: opacity,
                  z: translateZ,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 26,
                  mass: 0.8,
                }}
                style={{
                  zIndex,
                  transformStyle: "preserve-3d",
                }}
                className={`absolute w-[185px] sm:w-[205px] md:w-[220px] h-[265px] sm:h-[285px] md:h-[300px] rounded-[1.6rem] p-4.5 border cursor-pointer flex flex-col justify-between transition-shadow duration-300 backdrop-blur-xl ${
                  isCenter
                    ? "bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white border-zinc-300 dark:border-white/20 shadow-[0_20px_45px_-10px_rgba(0,0,0,0.14)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.7)] ring-1 ring-zinc-900/5 dark:ring-white/20"
                    : "bg-white/95 dark:bg-zinc-900/90 text-zinc-700 dark:text-zinc-300 border-zinc-200/90 dark:border-white/10 shadow-sm dark:shadow-md hover:border-zinc-300 dark:hover:border-white/20"
                }`}
              >
                {/* Dynamic Gradient Accent Glow inside Card */}
                <div 
                  className={`absolute inset-0 rounded-[1.6rem] bg-gradient-to-b ${tool.bgGradient} pointer-events-none opacity-40 dark:opacity-50`}
                />

                {/* Card Header: Domain Tag & Level Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <Badge 
                    variant="outline" 
                    className="text-[8px] uppercase tracking-widest px-2 py-0.5 rounded-full border-zinc-200 bg-zinc-100/90 text-zinc-700 dark:border-white/15 dark:bg-white/5 dark:text-white/80 font-medium"
                  >
                    {tool.domain}
                  </Badge>

                  <span className="flex items-center gap-1 text-[8.5px] uppercase tracking-widest font-mono text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200/80 dark:border-emerald-800/40">
                    <CheckCircle2 className="w-2.5 h-2.5" /> {tool.level}
                  </span>
                </div>

                {/* Card Body: Iconic Logo & Clean Typography */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto text-center py-1">
                  <div className="p-2 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 mb-2 shadow-xs">
                    {tool.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-bold tracking-tight text-zinc-900 dark:text-white uppercase font-heading">
                    {tool.name}
                  </h4>
                  <p className="text-[9.5px] font-medium text-zinc-500 dark:text-zinc-400 mt-0.5 uppercase tracking-wider">
                    {tool.category}
                  </p>
                </div>

                {/* Card Footer: Capabilities & Experience Pill */}
                <div className="relative z-10 pt-2 border-t border-zinc-200 dark:border-white/10 flex flex-col gap-1.5">
                  <p className="text-[9.5px] leading-snug text-zinc-600 dark:text-zinc-300 line-clamp-2 italic font-serif opacity-90">
                    "{tool.description}"
                  </p>
                  <div className="flex items-center justify-between text-[8px] uppercase tracking-widest text-zinc-400 dark:text-zinc-500 font-mono pt-0.5">
                    <span className="flex items-center gap-1 font-bold text-zinc-800 dark:text-white/90">
                      <Award className="w-2.5 h-2.5 text-zinc-600 dark:text-emerald-400" /> {tool.years}
                    </span>
                    <span className="text-zinc-400 dark:text-zinc-500">Mastered</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls: Progress Dots & Centered Hover Arrows Below */}
      <div className="mt-4 flex flex-col items-center justify-center gap-3">
        {/* Dynamic Position Progress Dots */}
        <div className="flex items-center gap-1.5 z-20">
          {filteredTools.map((tool, idx) => (
            <button
              key={tool.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-400 ${
                idx === activeIndex
                  ? "w-6 bg-zinc-900 dark:bg-white"
                  : "w-1.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
              }`}
              aria-label={`Jump to ${tool.name}`}
            />
          ))}
        </div>

        {/* Hover Arrow Controls Centered Below the Dots */}
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrev}
            className="group p-2.5 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Previous tool"
          >
            <ChevronLeft className="w-4 h-4 transform group-hover:-translate-x-0.5 transition-transform" />
          </button>

          <span className="text-[10px] font-mono text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
            {activeIndex + 1} / {filteredTools.length}
          </span>

          <button
            onClick={handleNext}
            className="group p-2.5 rounded-full border border-zinc-300/80 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-950 transition-all duration-300 shadow-sm hover:scale-105"
            aria-label="Next tool"
          >
            <ChevronRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
