
import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Code2,
  Rocket,
  CalendarDays,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const experiences = [
  {
    year: "2024 – Present",
    type: "Professional Learning",
    title: "Full Stack Developer Training",
    organization: "Full Stack Development",
    icon: Code2,
    description:
      "Building my foundation in full stack web development by learning frontend and backend technologies and developing practical applications.",
    skills: ["React.js", "Python", "Django", "REST API", "Tailwind CSS"],
  },
  {
    year: "2021 – 2024",
    type: "Education",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "LN College",
    icon: GraduationCap,
    description:
      "Completed my BCA, developing a foundation in computer applications, programming, databases, and software development concepts.",
    skills: ["Programming", "Database", "Computer Applications"],
  },
  {
    year: "Hands-on Experience",
    type: "Personal Project",
    title: "Skyline Stretch Ceiling",
    organization: "Full Stack Web Development Project",
    icon: Rocket,
    description:
      "Developed a responsive business website with a project gallery, service sections, and a quote request form connected to a Django REST API.",
    skills: ["React", "Vite", "Tailwind CSS", "Django REST API"],
    link: "https://github.com/Cargo81/Skyline-Project",
  },
  {
    year: "Hands-on Experience",
    type: "Personal Project",
    title: "Prakash Sofa Makers",
    organization: "Web Development Project",
    icon: Code2,
    description:
      "Worked on a business website to present services and showcase products using modern frontend technologies.",
    skills: ["JavaScript", "React", "Python", "Django", "Tailwind CSS"],
    link: "https://github.com/Cargo81/prakash-sofa-makers",
  },
];

const Experience = () => {
  return (
    <main id="experience" className="min-h-screen bg-zinc-950 text-white px-5 py-24 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-2 text-sm text-lime-400 mb-6">
            <Sparkles size={16} />
            My Professional Journey
          </span>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Experience &{" "}
            <span className="text-lime-400">Learning</span>
          </h1>

          <p className="max-w-2xl mx-auto text-zinc-400 text-base md:text-lg leading-relaxed">
            I'm a fresher and aspiring Full Stack Developer.
            My journey includes academic learning, continuous
            skill development, and building real-world projects.
          </p>
        </motion.div>

        {/* Fresher Status */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-16 rounded-2xl border border-lime-400/20 bg-lime-400/5 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-lime-400 text-sm font-semibold mb-2">
              CURRENT STATUS
            </p>
            <h2 className="text-2xl font-bold mb-2">
              Fresher | Open to Opportunities
            </h2>
            <p className="text-zinc-400">
              Looking forward to starting my professional journey
              and contributing to a development team.
            </p>
          </div>

          <BriefcaseBusiness
            size={48}
            className="text-lime-400 shrink-0"
          />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-zinc-800" />

          <div className="space-y-12">
            {experiences.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Icon */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-lime-400 flex items-center justify-center shadow-lg shadow-lime-400/20">
                    <Icon size={18} className="text-zinc-950" />
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-[calc(50%-40px)] rounded-2xl border border-zinc-800 bg-zinc-900/70 p-6 md:p-8 hover:border-lime-400/50 transition duration-300 ${
                      index % 2 === 0
                        ? "md:mr-auto"
                        : "md:ml-auto"
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="text-lime-400 text-sm font-semibold">
                        {item.type}
                      </span>

                      <span className="flex items-center gap-2 text-xs text-zinc-400">
                        <CalendarDays size={14} />
                        {item.year}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-zinc-500 text-sm mb-4">
                      {item.organization}
                    </p>

                    <p className="text-zinc-400 leading-relaxed text-sm md:text-base mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 text-xs border border-zinc-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-lime-400 text-sm font-medium hover:text-lime-300"
                      >
                        View Project
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-24">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Every expert was once a beginner.
          </h2>

          <p className="text-zinc-400 mb-7">
            I'm ready to learn, grow, and take on new challenges.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-lime-400 px-7 py-3 font-semibold text-zinc-950 hover:bg-lime-300 transition"
          >
            Let's Connect
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </main>
  );
};

export default Experience;
