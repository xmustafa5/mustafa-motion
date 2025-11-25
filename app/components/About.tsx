"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { number: "5+", label: "Years Experience" },
  { number: "100+", label: "Projects Completed" },
  { number: "50+", label: "Happy Clients" },
  { number: "15+", label: "Awards Won" },
];

const services = [
  {
    icon: "M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z",
    title: "Motion Graphics",
    description: "Eye-catching animations for brands, ads, and social media content",
  },
  {
    icon: "M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m4 4v12a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h14a2 2 0 012 2zM9 14l2 2 4-4",
    title: "UI Animations",
    description: "Smooth micro-interactions and interface animations for web and mobile",
  },
  {
    icon: "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Video Editing",
    description: "Professional video editing with seamless transitions and effects",
  },
  {
    icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
    title: "Visual Effects",
    description: "Stunning VFX and compositing for film and commercial projects",
  },
];

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-4"
          >
            About Me
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Crafting <span className="gradient-text">Motion</span> That Moves
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            I&apos;m Mustafa, a passionate motion designer who transforms static ideas into dynamic visual stories that captivate and engage audiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 * index + 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center p-6 rounded-2xl glass"
            >
              <motion.span
                className="block text-4xl md:text-5xl font-bold gradient-text mb-2"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.3 * index + 0.6, type: "spring" }}
              >
                {stat.number}
              </motion.span>
              <span className="text-zinc-400 text-sm">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-center mb-12">What I Do</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index + 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="p-6 rounded-2xl animated-border group cursor-pointer"
              >
                <motion.div
                  className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={service.icon} />
                  </svg>
                </motion.div>
                <h4 className="text-lg font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                  {service.title}
                </h4>
                <p className="text-zinc-400 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Animated Illustration */}
          <div className="relative h-96 flex items-center justify-center">
            <motion.div
              className="absolute w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-48 h-48 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="relative z-10 w-40 h-40 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-6xl font-bold text-white">M</span>
            </motion.div>
          </div>

          {/* Bio Text */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.3 }}
              className="text-3xl font-bold mb-6"
            >
              Bringing <span className="gradient-text">Stories</span> to Life
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.4 }}
              className="text-zinc-400 mb-4"
            >
              With over 5 years of experience in motion design, I&apos;ve had the privilege of working with brands and agencies worldwide. My passion lies in creating animations that not only look stunning but also tell compelling stories.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 1.5 }}
              className="text-zinc-400 mb-6"
            >
              From sleek UI animations to complex visual effects, I bring a meticulous attention to detail and a deep understanding of timing and rhythm to every project.
            </motion.p>
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.6 }}
              whileHover={{ x: 10 }}
              className="inline-flex items-center gap-2 text-indigo-400 font-medium"
            >
              Let&apos;s work together
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
