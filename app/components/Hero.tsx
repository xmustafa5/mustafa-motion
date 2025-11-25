"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99] as const,
    },
  }),
};

const floatingShapes = [
  { size: 300, x: "10%", y: "20%", delay: 0 },
  { size: 200, x: "80%", y: "60%", delay: 0.5 },
  { size: 150, x: "70%", y: "10%", delay: 1 },
  { size: 100, x: "20%", y: "70%", delay: 1.5 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const title = "MUSTAFA";
  const subtitle = "Motion Designer";

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated Background Shapes */}
      {floatingShapes.map((shape, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full morph opacity-20"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
            background: `linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3))`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.2 }}
          transition={{
            delay: shape.delay,
            duration: 2,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Animated Grid Lines */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Rotating Ring */}
      <motion.div
        className="absolute w-[600px] h-[600px] border border-indigo-500/20 rounded-full rotate-slow"
        style={{ y, opacity }}
      />
      <motion.div
        className="absolute w-[800px] h-[800px] border border-purple-500/10 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ y, opacity }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center px-6"
        style={{ y, opacity }}
      >
        {/* Pre-title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-zinc-400 text-lg mb-4 tracking-widest uppercase"
        >
          Creative Motion Designer
        </motion.p>

        {/* Main Title with Letter Animation */}
        <h1 className="text-7xl md:text-9xl font-bold mb-6 overflow-hidden">
          {title.split("").map((letter, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="visible"
              className="inline-block gradient-text glow-text"
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        {/* Subtitle with Animated Underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="relative inline-block"
        >
          <h2 className="text-2xl md:text-4xl text-zinc-300 font-light">
            {subtitle}
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 1, ease: "easeInOut" }}
            className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent origin-center"
          />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="mt-8 text-zinc-500 max-w-xl mx-auto text-lg"
        >
          Bringing ideas to life through captivating animations and dynamic visual experiences
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#work"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-medium magnetic-btn"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full border border-zinc-700 text-white font-medium hover:border-indigo-500 transition-colors"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-zinc-500"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="animate-bounce"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
