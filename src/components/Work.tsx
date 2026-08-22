import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToolsShowcase } from "./ToolsShowcase";
import { ProjectModal, ProjectDetail, apolloProjectDetail, boaProjectDetail, nablisProjectDetail, cribProjectDetail, ayotechProjectDetail } from "./ProjectModal";
import cribCrmVideo from "../assets/Video/crib-crm-demo-video-738x630 (1).mp4";
import apolloVideo from "../assets/Video/apollo-demo-video-738x630 (1).mp4";
import boaVideo from "../assets/Video/abyssinia-remit-demo-video-gold-738x630.mp4";
import nablisVideo from "../assets/Video/nablis-admin-demo-video-738x630 (2).mp4";
import ayotechVideo from "../assets/Video/ayotech-mahder-sacco-demo-video-738x630 (1).mp4";

interface Project {
  id: string;
  title: string;
  category: string;
  types: string[];
  year: string;
  image: string;
  video?: string;
  url: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "Apollo",
    category: "Mobile Banking app",
    types: ["UX/UI", "Product Management", "Business Analysis"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
    video: apolloVideo,
    url: "#",
  },
  {
    id: "02",
    title: "BOA Mobile",
    category: "Mobile Banking app",
    types: ["UX/UI", "Product Management", "Business Analysis"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9759?q=80&w=2000&auto=format&fit=crop",
    video: boaVideo,
    url: "#",
  },
  {
    id: "03",
    title: "Nablis Consulting Service",
    category: "Digital Ministry & Spiritual Guidance Platform",
    types: ["UX/UI"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=2000&auto=format&fit=crop",
    video: nablisVideo,
    url: "#",
  },
  {
    id: "04",
    title: "AYOtech Core System",
    category: "Core Business Management System · Web Application · Enterprise Software",
    types: ["Product Manager", "Business Analyst", "UX/UI Designer"],
    year: "2023",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=2000&auto=format&fit=crop",
    video: ayotechVideo,
    url: "#",
  },
  {
    id: "05",
    title: "CRIB CRM",
    category: "CRM · Web & Mobile Application · Network Marketing & Sales Management",
    types: ["UX/UI Designer", "Product Designer"],
    year: "2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
    video: cribCrmVideo,
    url: "#",
  },
];

const categories = ["All", "UX/UI", "Product Management", "Business Analysis"];

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter(project => 
    activeFilter === "All" ? true : project.types.some(t => t.toLowerCase().includes(activeFilter.toLowerCase()))
  );

  const handleProjectClick = (project: Project) => {
    if (project.title.toLowerCase().includes("apollo") || project.id === "01") {
      setSelectedProject({
        ...apolloProjectDetail,
        video: project.video || apolloVideo,
        image: project.image
      });
    } else if (project.title.toLowerCase().includes("boa") || project.id === "02") {
      setSelectedProject({
        ...boaProjectDetail,
        video: project.video || boaVideo,
        image: project.image
      });
    } else if (project.title.toLowerCase().includes("nablis") || project.id === "03") {
      setSelectedProject({
        ...nablisProjectDetail,
        video: project.video || nablisVideo,
        image: project.image
      });
    } else if (project.title.toLowerCase().includes("ayo") || project.id === "04") {
      setSelectedProject({
        ...ayotechProjectDetail,
        video: project.video || ayotechVideo,
        image: project.image
      });
    } else if (project.title.toLowerCase().includes("crib") || project.id === "05") {
      setSelectedProject({
        ...cribProjectDetail,
        video: project.video || cribCrmVideo,
        image: project.image
      });
    } else {
      setSelectedProject({
        id: project.id,
        title: project.title,
        category: project.category,
        types: project.types,
        year: project.year,
        video: project.video,
        image: project.image,
        roleTitle: project.types.join(" · "),
        roleDescription: `Led UX/UI design, product strategy, and business analysis for ${project.title}, translating complex operational requirements into intuitive user journeys.`,
        designContribution: {
          description: `Designed user workflows, wireframes, component layouts, and high-fidelity interactive prototypes for ${project.title}.`,
          responsibilities: [
            "User research and interface layout design",
            "High-fidelity prototyping and design tokens",
            "Cross-functional collaboration with engineering"
          ]
        },
        featuresManaged: [
          "User research, discovery, and requirements analysis",
          "Feature roadmap planning and backlog grooming",
          "High-fidelity prototyping and design system components",
          "Cross-functional collaboration with engineering and stakeholders"
        ],
        impactHighlights: [
          "Delivered intuitive interfaces for end users and internal operators",
          "Improved task efficiency and reduced drop-off rates across key workflows"
        ]
      });
    }
    setIsModalOpen(true);
  };

  return (
    <section id="work" className="px-4 md:px-8 py-8 scroll-mt-28">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Section Header as Bento Item */}
          <div className="md:col-span-8 p-8 md:p-12 border border-zinc-200 dark:border-border rounded-[2.5rem] bg-zinc-100 dark:bg-card flex flex-col justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight uppercase font-heading text-foreground">FEATURED <br /><span className="font-serif italic font-light text-zinc-400">PROJECTS</span></h2>
          </div>

          <div className="md:col-span-4 p-8 border border-zinc-200 dark:border-border rounded-[2.5rem] bg-zinc-100 dark:bg-card flex flex-col items-center justify-center text-center gap-6">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all cursor-pointer ${
                    activeFilter === cat
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-lg"
                      : "bg-white/50 dark:bg-zinc-800/50 text-zinc-500 hover:bg-white dark:hover:bg-zinc-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <p className="text-[10px] text-zinc-500 uppercase tracking-widest max-w-[150px]">Filter by category</p>
          </div>

          {/* Project Grid */}
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => handleProjectClick(project)}
                className="md:col-span-6 lg:col-span-4 group border border-zinc-200 dark:border-border rounded-[2.5rem] p-6 bg-zinc-100 dark:bg-card hover:bg-zinc-200 dark:hover:bg-white/20 transition-all duration-500 flex flex-col justify-between cursor-pointer"
              >
                <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-zinc-200 dark:bg-zinc-800/50 rounded-[2rem] flex items-center justify-center">
                  {project.video ? (
                    <video
                      src={project.video}
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                    />
                  ) : (
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-white/90 dark:bg-zinc-950/90 backdrop-blur-sm border-none shadow-sm text-zinc-900 dark:text-white uppercase tracking-widest text-[10px] rounded-full px-3 py-1">
                      {project.id}
                    </Badge>
                  </div>
                </div>
                <div className="flex justify-between items-start px-2">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight uppercase group-hover:pl-2 transition-all duration-500">
                      {project.title}
                    </h3>
                    <p className="text-zinc-500 font-medium text-xs mt-1 uppercase tracking-wider">{project.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-700 flex items-center justify-center group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-zinc-900 transition-all duration-500 transform group-hover:rotate-45 shrink-0">
                    <span className="text-sm font-bold">↗</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          
          <div className="md:col-span-12 mt-12 text-center">
            <Button variant="outline" className="rounded-full px-8 py-6 uppercase tracking-[0.2em] font-bold border-zinc-300 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-white transition-all">
              Load More Projects
            </Button>
          </div>
        </div>

        {/* Tools Showcase Subsection */}
        <ToolsShowcase />
      </div>

      {/* Project Detail Overlay Modal */}
      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </section>
  );
}


