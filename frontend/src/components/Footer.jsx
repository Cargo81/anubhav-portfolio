function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14">

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo and Description */}
          <div>
            <a
              href="#home"
              className="text-3xl font-bold tracking-tight"
            >
              Portfolio<span className="text-lime-400">.</span>
            </a>

            <p className="text-zinc-400 mt-5 leading-7 max-w-sm">
              Hi, I'm Anubhav Yadav. A passionate Full Stack Developer
              who loves building modern, responsive and user-friendly
              web applications.
            </p>

            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/Cargo81"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="border border-zinc-700 rounded-full px-4 py-2 text-sm text-zinc-300 hover:bg-lime-400 hover:text-black hover:border-lime-400 transition"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-lime-400 transition"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">
              Get In Touch
            </h3>

            <p className="text-zinc-400 leading-7 mb-4">
              Have a project in mind or want to work together?
              Feel free to contact me.
            </p>

            <a
              href="mailto:your-email@gmail.com"
              className="text-lime-400 hover:text-lime-300 transition break-all"
            >
              yadavanubhav388@gmail.com
            </a>

            <p className="text-zinc-500 text-sm mt-5">
              Based in India 🇮🇳
            </p>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-zinc-500 text-sm text-center">
            © {currentYear} Anubhav Yadav. All rights reserved.
          </p>

          <a
            href="#home"
            className="text-sm text-zinc-400 hover:text-lime-400 transition"
          >
            Back to top ↑
          </a>

          <p className="text-zinc-500 text-sm">
            Built with <span className="text-lime-400">♥</span> using React
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;