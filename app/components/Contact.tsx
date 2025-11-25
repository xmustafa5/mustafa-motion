"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const socialLinks = [
  { name: "Behance", icon: "Be", href: "#" },
  { name: "Dribbble", icon: "Dr", href: "#" },
  { name: "Instagram", icon: "Ig", href: "#" },
  { name: "LinkedIn", icon: "Li", href: "#" },
  { name: "Twitter", icon: "Tw", href: "#" },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden bg-zinc-950">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <motion.div
        className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-indigo-500/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-purple-500/10 rounded-full blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.1, 0.15] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div ref={containerRef} className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm font-medium mb-6"
          >
            Get in Touch
          </motion.span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            Let&apos;s Create <span className="gradient-text">Magic</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-base md:text-lg">
            Have a project in mind? Let&apos;s bring your vision to life with stunning motion design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <label className="block text-zinc-400 text-sm mb-2">Your Name</label>
                <motion.div
                  animate={{
                    boxShadow: focusedField === "name"
                      ? "0 0 0 2px rgba(99, 102, 241, 0.5)"
                      : "0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                  className="rounded-xl overflow-hidden"
                >
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-zinc-900 border-none px-4 md:px-5 py-3 md:py-4 text-white text-sm md:text-base placeholder-zinc-500 focus:outline-none"
                    placeholder="John Doe"
                  />
                </motion.div>
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <label className="block text-zinc-400 text-sm mb-2">Email Address</label>
                <motion.div
                  animate={{
                    boxShadow: focusedField === "email"
                      ? "0 0 0 2px rgba(99, 102, 241, 0.5)"
                      : "0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                  className="rounded-xl overflow-hidden"
                >
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className="w-full bg-zinc-900 border-none px-4 md:px-5 py-3 md:py-4 text-white text-sm md:text-base placeholder-zinc-500 focus:outline-none"
                    placeholder="john@example.com"
                  />
                </motion.div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
              >
                <label className="block text-zinc-400 text-sm mb-2">Your Message</label>
                <motion.div
                  animate={{
                    boxShadow: focusedField === "message"
                      ? "0 0 0 2px rgba(99, 102, 241, 0.5)"
                      : "0 0 0 1px rgba(255, 255, 255, 0.1)",
                  }}
                  className="rounded-xl overflow-hidden"
                >
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full bg-zinc-900 border-none px-4 md:px-5 py-3 md:py-4 text-white text-sm md:text-base placeholder-zinc-500 focus:outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </motion.div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, boxShadow: "0 0 30px rgba(99, 102, 241, 0.5)" }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 md:py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-sm md:text-base font-medium magnetic-btn"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-5 md:space-y-6"
          >
            {/* Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-2xl glass"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-sm md:text-base font-medium">Email</h4>
                  <p className="text-zinc-400 text-sm">hello@mustafa.design</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              whileHover={{ y: -5 }}
              className="p-5 md:p-6 rounded-2xl glass"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white text-sm md:text-base font-medium">Location</h4>
                  <p className="text-zinc-400 text-sm">Available Worldwide (Remote)</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
            >
              <h4 className="text-white text-sm md:text-base font-medium mb-4">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.1 * index + 0.8 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-indigo-400 hover:bg-zinc-800 transition-colors"
                    title={social.name}
                  >
                    <span className="text-xs md:text-sm font-bold">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1 }}
              className="p-5 md:p-6 rounded-2xl animated-border"
            >
              <div className="flex items-center gap-3 mb-3">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 rounded-full bg-green-500"
                />
                <span className="text-green-400 text-sm md:text-base font-medium">Available for Projects</span>
              </div>
              <p className="text-zinc-400 text-xs md:text-sm leading-relaxed">
                Currently accepting new motion design projects. Let&apos;s discuss your next creative endeavor!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
