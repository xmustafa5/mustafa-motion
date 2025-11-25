"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "After Effects", level: 95, color: "from-purple-500 to-indigo-500" },
  { name: "Cinema 4D", level: 88, color: "from-blue-500 to-cyan-500" },
  { name: "Premiere Pro", level: 90, color: "from-pink-500 to-purple-500" },
  { name: "Blender", level: 82, color: "from-orange-500 to-amber-500" },
  { name: "Figma", level: 85, color: "from-violet-500 to-purple-500" },
  { name: "Framer Motion", level: 78, color: "from-emerald-500 to-teal-500" },
];

const tools = [
  { name: "After Effects", icon: "Ae" },
  { name: "Cinema 4D", icon: "C4D" },
  { name: "Premiere Pro", icon: "Pr" },
  { name: "Blender", icon: "Bl" },
  { name: "Figma", icon: "Fi" },
  { name: "Illustrator", icon: "Ai" },
  { name: "Photoshop", icon: "Ps" },
  { name: "DaVinci", icon: "Dv" },
];

const specialties = [
  {
    title: "Kinetic Typography",
    description: "Dynamic text animations that bring words to life",
    icon: "T",
  },
  {
    title: "3D Animation",
    description: "Immersive three-dimensional visual experiences",
    icon: "3D",
  },
  {
    title: "Character Animation",
    description: "Bringing characters to life with fluid motion",
    icon: "Ch",
  },
  {
    title: "Particle Effects",
    description: "Stunning particle systems and simulations",
    icon: "Px",
  },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-indigo-500/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 lg:px-8">
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
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6"
          >
            Expertise
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Mastering the art of motion through industry-leading software and techniques
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Skill Bars */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Proficiency</h3>
            <div className="space-y-5 md:space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.5 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white text-sm md:text-base font-medium">{skill.name}</span>
                    <span className="text-zinc-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : {}}
                      transition={{
                        delay: 0.1 * index + 0.7,
                        duration: 1,
                        ease: "easeOut",
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Specialties</h3>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {specialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.1 * index + 0.6 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="p-4 md:p-5 rounded-2xl glass group cursor-pointer"
                >
                  <motion.div
                    className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center mb-3 md:mb-4 text-indigo-400 text-sm md:text-base font-bold"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {specialty.icon}
                  </motion.div>
                  <h4 className="text-white text-sm md:text-base font-semibold mb-1 group-hover:text-indigo-400 transition-colors">
                    {specialty.title}
                  </h4>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{specialty.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-16 md:mt-20"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">Tools I Use</h3>
          <div className="relative overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

            <motion.div
              className="flex gap-4 md:gap-8"
              animate={{ x: [0, -800] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...tools, ...tools].map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl glass flex flex-col items-center justify-center gap-2 cursor-pointer"
                >
                  <span className="text-xl md:text-2xl font-bold gradient-text">{tool.icon}</span>
                  <span className="text-[10px] md:text-xs text-zinc-400">{tool.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 md:mt-24"
        >
          <h3 className="text-xl md:text-2xl font-bold text-center mb-8 md:mb-12">My Process</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: "01", title: "Discover", desc: "Understanding your vision and goals" },
              { step: "02", title: "Concept", desc: "Developing creative concepts and storyboards" },
              { step: "03", title: "Create", desc: "Bringing ideas to life through animation" },
              { step: "04", title: "Deliver", desc: "Final polish and delivery in all formats" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 1.3 }}
                className="relative"
              >
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-transparent"
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ delay: 0.2 * index + 1.5, duration: 0.8 }}
                    style={{ originX: 0 }}
                  />
                )}
                <motion.div
                  whileHover={{ y: -5 }}
                  className="text-center"
                >
                  <motion.div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mx-auto mb-3 md:mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <span className="text-white text-sm md:text-base font-bold">{item.step}</span>
                  </motion.div>
                  <h4 className="text-white text-sm md:text-base font-semibold mb-1 md:mb-2">{item.title}</h4>
                  <p className="text-zinc-500 text-xs md:text-sm">{item.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
