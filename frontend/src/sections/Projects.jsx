
import React from "react";

const Projects = () => {
    const projects = [
        {
            title: "Prakash Sofa Makers",
            description:
                "A website project for Prakash Sofa Makers, built using JavaScript. Explore the source code and implementation on GitHub.",
            image: "/projects/prakash-sofa.png",
            technologies: [
                "JavaScript",
                "React",
                "Python",
                "Django",
                "Tailwind CSS",
                "Django REST API",
            ],
            github: "https://github.com/Cargo81/prakash-sofa-makers",
            demo: "",
            number: "01",
            category: "Web Development",
        },
        {
            title: "Skyline Stretch Ceiling",
            description:
                "A responsive website for SKYLINE Stretch Ceiling featuring services, a filterable portfolio gallery, and a quote request form connected to a Django REST API.",
            image: "/projects/skyline.png",
            technologies: [
                "React",
                "Vite",
                "Tailwind CSS",
                "Django REST API",
            ],
            github: "https://github.com/Cargo81/Skyline-Project",
            demo: "",
            number: "02",
            category: "Full Stack",
        },
        {
            title: "Job Portal",
            description:
                "A full-stack job portal where users can browse jobs, view job details, authenticate, and apply for job opportunities.",
            image: "/projects/job-portal.png",
            technologies: [
                "React.js",
                "Django REST Framework",
                "Tailwind CSS",
                "JavaScript",
                "Python",
            ],
            github: "https://github.com/Cargo81/job-portal",
            demo: "",
            number: "03",
            category: "Full Stack",
        },
    ];

    return (
        <section
            id="projects"
            data-aos="zoom-in"
            className="relative bg-zinc-950 py-24 px-6 overflow-hidden scroll-mt-24"
        >
            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="absolute bottom-20 right-0 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">

                    <p className="text-lime-400 uppercase tracking-widest font-semibold mb-3">
                        My Recent Work
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-lime-400">Projects</span>
                    </h2>

                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-5 rounded-full" />

                    <p className="text-zinc-400 mt-6 max-w-xl mx-auto leading-relaxed">
                        Here are some of my recent projects where I turn
                        ideas into real-world web applications using
                        modern technologies.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {projects.map((project) => (

                        <div
                            key={project.number}
                            className="group flex flex-col bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-lime-400/60 hover:-translate-y-2 hover:shadow-[0_15px_50px_rgba(163,230,53,0.08)] transition-all duration-500"
                        >

                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden bg-zinc-800">

                                <img
                                    src={project.image}
                                    alt={`${project.title} project screenshot`}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                                />

                                {/* Dark Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                                {/* Project Number */}
                                <span className="absolute top-4 left-4 bg-zinc-950/90 backdrop-blur-md text-lime-400 px-3 py-1.5 rounded-lg text-sm font-bold border border-zinc-700">
                                    {project.number}
                                </span>

                                {/* Category */}
                                <span className="absolute top-4 right-4 bg-zinc-950/90 backdrop-blur-md text-white px-3 py-1.5 rounded-lg text-xs border border-zinc-700">
                                    {project.category}
                                </span>

                            </div>

                            {/* Project Details */}
                            <div className="flex flex-col flex-1 p-6">

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-lime-400 transition-colors duration-300">
                                    {project.title}
                                </h3>

                                <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-7">

                                    {project.technologies.map((tech) => (

                                        <span
                                            key={tech}
                                            className="text-xs px-3 py-1.5 rounded-full bg-lime-400/10 text-lime-400 border border-lime-400/20 hover:bg-lime-400 hover:text-black transition-colors duration-300"
                                        >
                                            {tech}
                                        </span>

                                    ))}

                                </div>

                                {/* Project Buttons */}
                                <div className="flex items-center gap-3 mt-auto">

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 text-center border border-zinc-700 text-white py-2.5 rounded-lg text-sm font-semibold hover:border-lime-400 hover:text-lime-400 transition-all duration-300"
                                    >
                                        GitHub ↗
                                    </a>

                                    {project.demo && (
                                        <a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 text-center bg-lime-400 text-black py-2.5 rounded-lg text-sm font-semibold hover:bg-lime-300 transition-all duration-300"
                                        >
                                            Live Demo ↗
                                        </a>
                                    )}

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/* Explore GitHub */}
                <div className="text-center mt-16">

                    <p className="text-zinc-400 mb-6">
                        Want to explore more of my work?
                    </p>

                    <a
                        href="https://github.com/Cargo81"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border border-lime-400 text-lime-400 px-7 py-3 rounded-xl font-semibold hover:bg-lime-400 hover:text-black hover:shadow-lg hover:shadow-lime-400/20 transition-all duration-300"
                    >
                        Explore My GitHub ↗
                    </a>

                </div>

            </div>
        </section>
    );
};

export default Projects;
