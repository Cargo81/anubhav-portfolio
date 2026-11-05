
import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { API_BASE } from "../config";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const response = await fetch(
          `${API_BASE}/api/testimonials/`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch: ${response.status}`);
        }

        const data = await response.json();

        setTestimonials(data);
      } catch (err) {
        console.error("Testimonials API error:", err);
        setError("Unable to load testimonials.");
      } finally {
        setLoading(false);
      }
    }

    fetchTestimonials();
  }, []);

  return (
    <section
      id="testimonials"
      className="relative bg-zinc-950 px-6 py-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-lime-400 font-semibold tracking-widest uppercase text-sm mb-3">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            What People Say
            <span className="text-lime-400"> About Me</span>
          </h2>

          <p className="text-zinc-400 mt-5 max-w-2xl mx-auto">
            Feedback and experiences from people I've worked with.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <p className="text-center text-lime-400">
            Loading testimonials...
          </p>
        )}

        {/* Error */}
        {!loading && error && (
          <p className="text-center text-red-400">
            {error}
          </p>
        )}

        {/* Empty State */}
        {!loading && !error && testimonials.length === 0 && (
          <p className="text-center text-zinc-400">
            No testimonials available yet.
          </p>
        )}

        {/* Cards */}
        {!loading && !error && testimonials.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {testimonials.map((item) => (
              <div
                key={item.id}
                className="group relative bg-zinc-900 border border-zinc-800
                rounded-2xl p-8 transition-all duration-300
                hover:border-lime-400/50 hover:-translate-y-2
                hover:shadow-xl hover:shadow-lime-400/5"
              >
                <Quote
                  size={40}
                  className="text-lime-400/30 mb-6"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(item.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className="fill-lime-400 text-lime-400"
                    />
                  ))}
                </div>

                {/* Message */}
                <p className="text-zinc-300 leading-7 mb-8">
                  "{item.message}"
                </p>

                {/* User Info */}
                <div className="flex items-center gap-4 border-t border-zinc-800 pt-6">

                  {item.avatar ? (
                    <img
                      src={
                        item.avatar.startsWith("http")
                          ? item.avatar
                          : `${API_BASE}${item.avatar}`
                      }
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-lime-400/30"
                    />
                  ) : (
                    <div
                      className="w-12 h-12 rounded-full bg-lime-400/10
                      border border-lime-400/30 flex items-center
                      justify-center text-lime-400 font-bold"
                    >
                      {item.name
                        ?.split(" ")
                        .map((word) => word[0])
                        .join("")
                        .slice(0, 2)
                        .toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h3 className="text-white font-semibold">
                      {item.name}
                    </h3>

                    <p className="text-zinc-400 text-sm">
                      {item.role}
                    </p>

                    {item.company && (
                      <p className="text-lime-400 text-xs mt-1">
                        {item.company}
                      </p>
                    )}
                  </div>

                </div>
              </div>
            ))}

          </div>
        )}

      </div>
    </section>
  );
}
