
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-zinc-950/90 border-b border-white/10 backdrop-blur-xl">

            <div className="flex items-center justify-between px-6 py-5 mx-auto max-w-6xl">

                {/* Logo */}
                <a href="#home" className="text-2xl font-bold text-white">
                    Portfolio<span className="text-lime-400">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden gap-8 md:flex">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="relative text-sm text-zinc-400 transition duration-300 hover:text-lime-400"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact Button */}
                <a
                    href="#contact"
                    className="hidden rounded-full bg-lime-400 px-6 py-2.5 font-semibold text-black transition duration-300 hover:bg-lime-300 hover:scale-105 md:block"
                >
                    Let's Talk ↗
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="text-2xl text-white md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? "✕" : "☰"}
                </button>

            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="flex flex-col gap-5 border-t border-white/10 bg-zinc-950 px-6 py-6 md:hidden">
                    {links.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-zinc-300 transition hover:text-lime-400"
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        onClick={() => setIsOpen(false)}
                        className="rounded-full bg-lime-400 px-5 py-3 text-center font-semibold text-black"
                    >
                        Let's Talk ↗
                    </a>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
