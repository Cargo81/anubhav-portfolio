
const Skills = () => {

    const skillCategories = [
        {
            title: "Frontend Development",
            subtitle: "Building beautiful user interfaces",
            skills: [
                { name: "HTML5", level: "Advanced", icon: "🌐" },
                { name: "CSS3", level: "Advanced", icon: "🎨" },
                { name: "JavaScript", level: "Intermediate", icon: "⚡" },
                { name: "React.js", level: "Intermediate", icon: "⚛️" },
                { name: "Tailwind CSS", level: "Intermediate", icon: "💨" },
            ],
        },
        {
            title: "Backend Development",
            subtitle: "Building powerful server-side applications",
            skills: [
                { name: "Python", level: "Intermediate", icon: "🐍" },
                { name: "Django", level: "Intermediate", icon: "🚀" },
                { name: "REST API", level: "Learning", icon: "🔗" },
                { name: "SQL", level: "Intermediate", icon: "🗄️" },
            ],
        },
        {
            title: "Tools & Technologies",
            subtitle: "Tools I use in development",
            skills: [
                { name: "Git", level: "Intermediate", icon: "🔧" },
                { name: "GitHub", level: "Intermediate", icon: "💻" },
                { name: "VS Code", level: "Advanced", icon: "📝" },
                { name: "Postman", level: "Learning", icon: "📮" },
            ],
        },
    ];

    return (
        <section
            id="skills"
            data-aos="fade-up"
            className="relative bg-zinc-950 py-24 px-6 overflow-hidden"
        >

            {/* Background Glow */}
            <div className="absolute top-20 right-0 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-20 left-0 w-72 h-72 bg-lime-400/10 blur-[120px] rounded-full" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">

                    <p className="text-lime-400 uppercase tracking-widest font-semibold mb-3">
                        My Expertise
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        My <span className="text-lime-400">Skills</span>
                    </h2>

                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-5 rounded-full" />

                    <p className="text-zinc-400 mt-6 max-w-xl mx-auto">
                        Technologies and tools I use to turn ideas into
                        modern, functional, and user-friendly applications.
                    </p>

                </div>

                {/* Skill Categories */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">

                    {skillCategories.map((category) => (

                        <div
                            key={category.title}
                            className="group bg-zinc-900/70 border border-zinc-800 rounded-2xl p-7 hover:border-lime-400/60 hover:-translate-y-2 transition-all duration-300"
                        >

                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-lime-400 transition">
                                {category.title}
                            </h3>

                            <p className="text-zinc-500 text-sm mb-7">
                                {category.subtitle}
                            </p>

                            <div className="space-y-4">

                                {category.skills.map((skill) => (

                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-between gap-3 border-b border-zinc-800 pb-4 last:border-0 last:pb-0"
                                    >

                                        <div className="flex items-center gap-3">
                                            <span className="text-2xl">
                                                {skill.icon}
                                            </span>

                                            <span className="text-zinc-200 font-medium">
                                                {skill.name}
                                            </span>
                                        </div>

                                        <span className="text-xs text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full whitespace-nowrap">
                                            {skill.level}
                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

                {/* Bottom Text */}
                <div className="text-center mt-16">
                    <p className="text-zinc-400">
                        Always learning, always improving.
                        <span className="text-lime-400 font-semibold">
                            {" "}Growing every day.
                        </span>
                    </p>
                </div>

            </div>
        </section>
    );
};

export default Skills;
