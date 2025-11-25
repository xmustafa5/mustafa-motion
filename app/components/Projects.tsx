"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const categories = ["All", "Motion Graphics", "UI Animation", "VFX", "Branding"];

const projects = [
  {
    id: 1,
    title: "Neon Dreams",
    category: "Motion Graphics",
    description: "Vibrant motion graphics for a music festival campaign",
    color: "from-pink-500 to-purple-500",
    tags: ["After Effects", "Cinema 4D"],
  },
  {
    id: 2,
    title: "Flow App",
    category: "UI Animation",
    description: "Seamless micro-interactions for a wellness application",
    color: "from-blue-500 to-cyan-500",
    tags: ["Figma", "Lottie"],
  },
  {
    id: 3,
    title: "Tech Reveal",
    category: "VFX",
    description: "Product reveal video with advanced visual effects",
    color: "from-indigo-500 to-purple-500",
    tags: ["Nuke", "After Effects"],
  },
  {
    id: 4,
    title: "Brand Motion",
    category: "Branding",
    description: "Dynamic logo animation and brand guidelines",
    color: "from-orange-500 to-red-500",
    tags: ["After Effects", "Illustrator"],
  },
  {
    id: 5,
    title: "Cosmic Journey",
    category: "Motion Graphics",
    description: "Space-themed explainer video for educational platform",
    color: "from-violet-500 to-indigo-500",
    tags: ["Cinema 4D", "Octane"],
  },
  {
    id: 6,
    title: "Fintech Dashboard",
    category: "UI Animation",
    description: "Data visualization animations for financial app",
    color: "from-emerald-500 to-teal-500",
    tags: ["React", "Framer Motion"],
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{ x: [-100, 100, -100], y: [100, -100, 100] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            A curated collection of my best motion design projects
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white"
                  : "bg-zinc-900 text-zinc-400 hover:text-white"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`} />

                {/* Animated Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: "20px 20px",
                  }}
                  animate={
                    hoveredProject === project.id
                      ? { scale: 1.5, rotate: 45 }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{ duration: 0.6 }}
                />

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      hoveredProject === project.id
                        ? { y: 0, opacity: 1 }
                        : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="mb-2"
                  >
                    <span className="text-white/80 text-sm">{project.category}</span>
                  </motion.div>

                  <motion.h3
                    className="text-2xl font-bold text-white mb-2"
                    animate={
                      hoveredProject === project.id
                        ? { y: 0 }
                        : { y: 10 }
                    }
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      hoveredProject === project.id
                        ? { y: 0, opacity: 1 }
                        : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="text-white/80 text-sm mb-4"
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={
                      hoveredProject === project.id
                        ? { y: 0, opacity: 1 }
                        : { y: 20, opacity: 0 }
                    }
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="flex gap-2"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/20 text-white text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>
                </div>

                {/* Play Button */}
                <motion.div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    hoveredProject === project.id
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <svg
                      className="w-6 h-6 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-zinc-700 text-white font-medium hover:border-indigo-500 transition-colors inline-flex items-center gap-2"
          >
            View All Projects
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
