
import { motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import Blog from "./sections/Blog";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Blog />
      <Contact />

      <Footer />

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918169653781?text=Hello%20Anubhav,%20I%20visited%20your%20portfolio."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with me on WhatsApp"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.5 }}
        className="fixed bottom-6 right-6 z-[9999] flex items-center gap-2 rounded-full bg-[#25D366] px-3 py-3 text-white shadow-lg hover:bg-[#20BA5A]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5"
        >
          <path d="M20.52 3.48A11.87 11.87 0 0 0 12.07 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.57 0 11.92-5.34 11.93-11.91a11.83 11.83 0 0 0-3.48-8.43ZM12.07 21.8a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98.99-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.46 4.45-9.9 9.91-9.9a9.85 9.85 0 0 1 7.01 2.9 9.85 9.85 0 0 1 2.9 7.01c-.01 5.46-4.45 9.88-9.91 9.88Zm5.44-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.5 1.7.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>

        <span className="font-semibold">WhatsApp Me</span>
      </motion.a>
    </>
  );
};

export default App;
