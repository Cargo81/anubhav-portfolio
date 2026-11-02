
import { motion } from "framer-motion";

const Hero = () => {
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const technologies = [
    "React",
    "JavaScript",
    "Python",
    "Django",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 bg-lime-500/20 rounded-full blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/20 rounded-full blur-[120px]"
      />

      {/* Main Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        {/* Availability */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300"
        >
          <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          Available for Opportunities
        </motion.div>

        {/* Intro */}
        <motion.p
          variants={item}
          className="text-lime-400 font-semibold tracking-widest uppercase mb-4"
        >
          Hello, I'm Anubhav Yadav
        </motion.p>

        {/* Animated Heading */}
        <motion.h1
          variants={item}
          className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6"
        >
          Full Stack
          <br />
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="bg-gradient-to-r from-lime-300 via-green-400 to-lime-300 bg-[length:200%_auto] bg-clip-text text-transparent"
          >
            Developer
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-9"
        >
          I build modern, responsive, and user-friendly web applications.
          Passionate about creating impactful digital experiences using
          React, Django, Python, and modern web technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          variants={item}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#projects"
            className="bg-lime-400 hover:bg-lime-300 text-black px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            View My Work →
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="border border-zinc-700 hover:border-lime-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Contact Me
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.07, y: -4 }}
            whileTap={{ scale: 0.95 }}
            href="/resume.pdf"
            download="Anubhav_Yadav_Resume.pdf"
            className="border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-7 py-3.5 rounded-xl font-semibold transition-colors"
          >
            Download Resume ↓
          </motion.a>
        </motion.div>

        {/* Technologies */}
        <motion.div
          variants={container}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={tech}
              variants={item}
              whileHover={{
                y: -6,
                scale: 1.08,
                borderColor: "#a3e635",
              }}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:text-white transition-colors cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={item}
          className="flex justify-center gap-7 mt-12 text-zinc-400 font-medium"
        >
          <motion.a
            whileHover={{ y: -4 }}
            href="https://github.com/Cargo81"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition"
          >
            GitHub ↗
          </motion.a>

          <motion.a
            whileHover={{ y: -4 }}
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition"
          >
            LinkedIn ↗
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          variants={item}
          className="text-zinc-600 text-sm mt-12"
        >
          © {new Date().getFullYear()} Anubhav Yadav. All rights reserved.
        </motion.p>
      </motion.div>

     
    </section>
  );
};

export default Hero;
