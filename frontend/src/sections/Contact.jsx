
import React, { useState } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccess("");
        setError("");

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/api/contact/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                const errorMessage = Object.values(data)
                    .flat()
                    .join(" ");

                throw new Error(errorMessage || "Failed to send message.");
            }

            setSuccess("Your message has been sent successfully!");

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });

        } catch (err) {
            setError(
                err.message || "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const contactDetails = [
        {
            icon: "✉",
            title: "Email",
            value: "yadavanubhav388@gmail.com",
            link: "mailto:yadavanubhav388@gmail.com",
        },
        {
            icon: "⌘",
            title: "GitHub",
            value: "github.com/Cargo81",
            link: "https://github.com/Cargo81",
        },
        {
            icon: "in",
            title: "LinkedIn",
            value: "anubhavyadav-dev",
            link: "https://www.linkedin.com/in/anubhavyadav-dev/",
        },
    ];

    return (
        <section
            id="contact"
            data-aos="fade-up"
            className="relative bg-zinc-950 py-24 px-6 overflow-hidden"
        >
            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-10 right-0 w-72 h-72 bg-lime-400/10 rounded-full blur-[120px]" />

            <div className="relative z-10 max-w-6xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-16">
                    <p className="text-lime-400 font-semibold tracking-widest uppercase mb-3">
                        Get In Touch
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                        Contact <span className="text-lime-400">Me</span>
                    </h2>

                    <div className="w-20 h-1 bg-lime-400 mx-auto mt-5 rounded-full" />

                    <p className="text-zinc-400 max-w-xl mx-auto mt-6">
                        Have a project in mind or want to work together?
                        Feel free to send me a message. I'd love to hear from you!
                    </p>
                </div>

                {/* Contact Content */}
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Left Side */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                            Let's Talk About Your Project
                        </h3>

                        <p className="text-zinc-400 leading-relaxed mb-10">
                            I'm always interested in new opportunities,
                            exciting projects, and collaborations.
                            Let's create something amazing together.
                        </p>

                        {/* Contact Details */}
                        <div className="space-y-5">
                            {contactDetails.map((item) => (
                                <a
                                    key={item.title}
                                    href={item.link}
                                    target={item.title === "Email" ? undefined : "_blank"}
                                    rel="noreferrer"
                                    className="flex items-center gap-5 p-5 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-lime-400/60 transition group"
                                >
                                    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-lime-400/10 text-lime-400 text-xl font-bold">
                                        {item.icon}
                                    </div>

                                    <div>
                                        <p className="text-zinc-500 text-sm">
                                            {item.title}
                                        </p>

                                        <p className="text-white font-medium group-hover:text-lime-400 transition">
                                            {item.value}
                                        </p>
                                    </div>

                                    <span className="ml-auto text-lime-400">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-10">
                            <p className="text-white font-semibold mb-4">
                                Let's connect on social media
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/Cargo81"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-lime-400 hover:border-lime-400 transition"
                                >
                                    GitHub ↗
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/anubhavyadav-dev/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="px-5 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-lime-400 hover:border-lime-400 transition"
                                >
                                    LinkedIn ↗
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 md:p-8">

                        <h3 className="text-2xl font-bold text-white mb-7">
                            Send Me a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-5">

                            <div>
                                <label className="block text-zinc-300 text-sm mb-2">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Enter your name"
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 text-sm mb-2">
                                    Your Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 text-sm mb-2">
                                    Subject
                                </label>

                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Enter subject"
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400 transition"
                                />
                            </div>

                            <div>
                                <label className="block text-zinc-300 text-sm mb-2">
                                    Your Message
                                </label>

                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Write your message..."
                                    rows="5"
                                    required
                                    className="w-full bg-zinc-950 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none focus:border-lime-400 transition resize-none"
                                />
                            </div>

                            {/* Success Message */}
                            {success && (
                                <p className="text-lime-400 text-sm text-center">
                                    {success}
                                </p>
                            )}

                            {/* Error Message */}
                            {error && (
                                <p className="text-red-400 text-sm text-center">
                                    {error}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-lime-400 hover:bg-lime-300 text-black font-bold py-3.5 rounded-lg transition duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending..." : "Send Message ↗"}
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
