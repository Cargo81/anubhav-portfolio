
const About = () => {
    const technologies = [
        "React",
        "JavaScript",
        "Python",
        "Django",
        "Tailwind CSS",
    ];

    return (
        <section
            id="about"
            data-aos="fade-right"
            className="relative overflow-hidden bg-zinc-950 py-24 px-6"
        >
            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <p className="text-lime-400 font-semibold tracking-widest uppercase mb-3">
                        Get To Know Me
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        About <span className="text-lime-400">Me</span>
                    </h2>

                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-5 rounded-full" />
                </div>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Profile Image */}
                    <div className="relative flex justify-center">

                        <div className="absolute w-80 h-80 bg-lime-400/20 rounded-full blur-3xl" />

                        <div className="relative z-10 group">

                            <div className="absolute -inset-2 rounded-2xl border border-lime-400/40 rotate-3 group-hover:rotate-6 transition duration-500" />

                            <img
                                src="/profile.png"
                                alt="Anubhav Yadav - Full Stack Developer"
                                className="relative w-72 h-96 md:w-80 md:h-[420px] object-cover rounded-2xl border-2 border-zinc-700 shadow-2xl"
                            />

                            {/* Image Caption */}
                            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-zinc-900/95 backdrop-blur-lg border border-lime-400/40 rounded-xl p-4 text-center shadow-xl">
                                <h3 className="text-xl font-bold text-white">
                                    Anubhav Yadav
                                </h3>

                                <p className="text-lime-400 text-sm mt-1">
                                    Full Stack Developer
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* About Information */}
                    <div className="mt-8 md:mt-0">

                        <p className="text-lime-400 font-semibold uppercase tracking-wider text-sm mb-3">
                            Who Am I?
                        </p>

                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                            Building Digital Experiences
                            <span className="text-lime-400"> With Code.</span>
                        </h3>

                        <p className="text-zinc-400 leading-relaxed mb-5">
                            Hello! I'm <span className="text-white font-semibold">Anubhav Yadav</span>,
                            a passionate Full Stack Developer interested in
                            building modern, responsive, and user-friendly
                            web applications.
                        </p>

                        <p className="text-zinc-400 leading-relaxed mb-8">
                            I work with technologies like React, JavaScript,
                            Python, Django, and Tailwind CSS. I enjoy solving
                            problems, learning new technologies, and turning
                            creative ideas into real-world projects.
                        </p>

                        {/* Information Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">

                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-lime-400/50 transition">
                                <p className="text-lime-400 text-sm font-semibold mb-1">
                                    Name
                                </p>
                                <p className="text-white font-medium">
                                    Anubhav Yadav
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-lime-400/50 transition">
                                <p className="text-lime-400 text-sm font-semibold mb-1">
                                    Role
                                </p>
                                <p className="text-white font-medium">
                                    Full Stack Developer
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-lime-400/50 transition">
                                <p className="text-lime-400 text-sm font-semibold mb-1">
                                    Frontend
                                </p>
                                <p className="text-white font-medium">
                                    React & Tailwind
                                </p>
                            </div>

                            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 hover:border-lime-400/50 transition">
                                <p className="text-lime-400 text-sm font-semibold mb-1">
                                    Backend
                                </p>
                                <p className="text-white font-medium">
                                    Python & Django
                                </p>
                            </div>

                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                            <h4 className="text-white font-semibold mb-4">
                                Technologies I Work With
                            </h4>

                            <div className="flex flex-wrap gap-3">
                                {technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm hover:border-lime-400 hover:text-lime-400 transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Contact Button */}
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-lime-400 hover:bg-lime-300 text-black font-bold px-7 py-3.5 rounded-xl transition duration-300 hover:scale-105"
                        >
                            Let's Connect
                            <span>↗</span>
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
