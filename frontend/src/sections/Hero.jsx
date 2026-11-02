
const Hero = () => {
  return (
    <section
      id="home"
      data-aos="fade-up"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 px-6 py-24"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-lime-500/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">

        {/* Availability */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-zinc-300">
          <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse" />
          Available for Opportunities
        </div>

        <p className="text-lime-400 font-semibold tracking-widest uppercase mb-4">
          Hello, I'm Anubhav Yadav
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
          Full Stack
          <br />
          <span className="bg-gradient-to-r from-lime-300 via-lime-400 to-green-500 bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-zinc-400 text-lg md:text-xl leading-relaxed mb-9">
          I build modern, responsive, and user-friendly web applications.
          Passionate about creating impactful digital experiences using
          React, Django, Python, and modern web technologies.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">

          <a
            href="#projects"
            className="bg-lime-400 hover:bg-lime-300 text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            View My Work →
          </a>

          <a
            href="#contact"
            className="border border-zinc-700 hover:border-lime-400 text-white px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
          >
            Contact Me
          </a>

          {/* Download Resume */}
          <a
            href="/resume.pdf"
            download="Anubhav_Yadav_Resume.pdf"
            className="border border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-black px-7 py-3.5 rounded-xl font-semibold transition-all duration-300"
          >
            Download Resume ↓
          </a>

        </div>

        {/* Technologies */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {["React", "JavaScript", "Python", "Django", "Tailwind CSS"].map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:border-lime-400 hover:text-white transition-all"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-7 mt-12 text-zinc-400 font-medium">

          <a
            href="https://github.com/Cargo81"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition"
          >
            GitHub ↗
          </a>

          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-lime-400 transition"
          >
            LinkedIn ↗
          </a>

        </div>

        <p className="text-zinc-600 text-sm mt-12">
          © {new Date().getFullYear()} Anubhav Yadav. All rights reserved.
        </p>

      </div>
    </section>
  );
};

export default Hero;
