
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarDays,
  Clock3,
  Search,
} from "lucide-react";

const posts = [
  {
    id: 1,
    title: "Getting Started with React: A Beginner's Guide",
    category: "React",
    date: "November 05, 2026",
    readTime: "5 min read",
    featured: true,
    excerpt:
      "Learn the basics of React, components, props, state, and how to start building modern user interfaces.",
    content: [
      "React is a JavaScript library used to build interactive user interfaces. It helps developers divide an application into reusable components.",
      "Components are the building blocks of React applications. Each component can have its own structure, logic, and styling.",
      "Once you understand components, learn about props and state. Props pass information between components, while state helps manage changing data.",
      "Start with small projects and gradually build more complex applications. Practice is the best way to improve your React skills.",
    ],
  },
  {
    id: 2,
    title: "Understanding Django REST Framework",
    category: "Django",
    date: "November 03, 2026",
    readTime: "6 min read",
    excerpt:
      "Discover how Django REST Framework helps you create APIs and connect your Django backend with React.",
    content: [
      "Django REST Framework is a powerful toolkit for building Web APIs using Django.",
      "Serializers convert Django model instances into JSON-friendly data and validate incoming data.",
      "API views handle requests and return responses. React can use fetch to communicate with these endpoints.",
      "This combination allows developers to build full-stack applications with a separate frontend and backend.",
    ],
  },
  {
    id: 3,
    title: "Connecting React with Django",
    category: "Full Stack",
    date: "October 30, 2026",
    readTime: "7 min read",
    excerpt:
      "A practical introduction to connecting a React frontend with a Django backend using REST APIs.",
    content: [
      "A full-stack application often has a frontend responsible for the user interface and a backend responsible for business logic and data.",
      "React can send HTTP requests to Django API endpoints using fetch or another HTTP client.",
      "Django REST Framework provides the API, while Django models manage the database.",
      "Remember to configure CORS correctly when your frontend and backend run on different origins.",
    ],
  },
  {
    id: 4,
    title: "My Journey Building a Developer Portfolio",
    category: "Projects",
    date: "October 25, 2026",
    readTime: "4 min read",
    excerpt:
      "Lessons learned while building a personal portfolio using React, Tailwind CSS, Python, and Django.",
    content: [
      "Building a personal portfolio is a great way to demonstrate your development skills.",
      "I started with a React frontend and gradually added a Django backend for handling contact submissions and dynamic content.",
      "Tailwind CSS helped me create a consistent responsive design, while reusable React components kept the code organized.",
      "The most important lesson is to keep building, testing, and improving one feature at a time.",
    ],
  },
];

const categories = [
  "All",
  "React",
  "Django",
  "Full Stack",
  "Projects",
];

export default function Blog() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesCategory =
        category === "All" || post.category === category;

      const matchesSearch =
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  const featuredPost = posts.find((post) => post.featured);

  // Article reading view
  if (selectedPost) {
    return (
      <main className="min-h-screen bg-zinc-950 text-white px-6 py-24">
        <article className="max-w-3xl mx-auto">
          <button
            onClick={() => {
              setSelectedPost(null);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-lime-400 hover:text-lime-300 mb-12"
          >
            <ArrowLeft size={18} />
            Back to Blog
          </button>

          <span className="text-lime-400 text-sm font-semibold uppercase tracking-widest">
            {selectedPost.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold mt-4 mb-6 leading-tight">
            {selectedPost.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm text-zinc-400 mb-10">
            <span className="flex items-center gap-2">
              <CalendarDays size={16} />
              {selectedPost.date}
            </span>
            <span className="flex items-center gap-2">
              <Clock3 size={16} />
              {selectedPost.readTime}
            </span>
          </div>

          <div className="h-1 w-20 bg-lime-400 rounded-full mb-10" />

          <p className="text-lg text-zinc-300 leading-8 mb-10">
            {selectedPost.excerpt}
          </p>

          <div className="space-y-7">
            {selectedPost.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-zinc-300 text-lg leading-8"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="border-t border-zinc-800 mt-16 pt-8">
            <button
              onClick={() => {
                setSelectedPost(null);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-lime-400 flex items-center gap-2 hover:gap-3 transition-all"
            >
              <ArrowLeft size={18} />
              Back to all articles
            </button>
          </div>
        </article>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-32 pb-20">
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-lime-400/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="relative max-w-6xl mx-auto text-center">
          <p className="text-lime-400 uppercase tracking-[0.3em] text-sm font-semibold mb-5">
            My Blog
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Thoughts, Tutorials &
            <span className="text-lime-400"> Ideas</span>
          </h1>

          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-lg leading-8">
            Sharing my learning journey, development experiences,
            tutorials, and ideas about modern web technologies.
          </p>

          <div className="flex items-center justify-center gap-2 text-zinc-500 mt-8">
            <BookOpen size={18} />
            <span>{posts.length} articles to explore</span>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="px-6 pb-16">
          <div className="max-w-6xl mx-auto">
            <p className="text-lime-400 uppercase text-sm font-semibold tracking-widest mb-5">
              Featured Article
            </p>

            <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-72 h-72 bg-lime-400/10 blur-[100px] rounded-full" />

              <div className="relative max-w-3xl">
                <span className="inline-block bg-lime-400/10 text-lime-400 px-4 py-2 rounded-full text-sm mb-6">
                  {featuredPost.category}
                </span>

                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  {featuredPost.title}
                </h2>

                <p className="text-zinc-400 leading-8 mb-7">
                  {featuredPost.excerpt}
                </p>

                <div className="flex flex-wrap gap-5 text-sm text-zinc-500 mb-8">
                  <span className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {featuredPost.date}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {featuredPost.readTime}
                  </span>
                </div>

                <button
                  onClick={() => {
                    setSelectedPost(featuredPost);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-3 bg-lime-400 text-zinc-950 font-bold px-6 py-3 rounded-xl hover:bg-lime-300 transition"
                >
                  Read Article
                  <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Articles */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <p className="text-lime-400 text-sm uppercase tracking-widest font-semibold mb-2">
                Explore
              </p>
              <h2 className="text-3xl font-bold">Latest Articles</h2>
            </div>

            <div className="relative w-full md:max-w-sm">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
                size={18}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-zinc-900 border border-zinc-800 rounded-xl py-3 pl-12 pr-4 text-white outline-none focus:border-lime-400"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-10">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  category === item
                    ? "bg-lime-400 text-zinc-950"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-lime-400 hover:text-lime-400"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Blog Cards */}
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-zinc-900 border border-zinc-800 rounded-2xl p-7 hover:border-lime-400/50 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="flex justify-between items-center mb-7">
                    <span className="text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full text-xs font-semibold">
                      {post.category}
                    </span>
                    <BookOpen className="text-zinc-600 group-hover:text-lime-400 transition" />
                  </div>

                  <h3 className="text-xl font-bold leading-8 mb-4 group-hover:text-lime-400 transition">
                    {post.title}
                  </h3>

                  <p className="text-zinc-400 text-sm leading-7 mb-7">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-4 text-xs text-zinc-500 mb-7">
                    <span className="flex items-center gap-2">
                      <CalendarDays size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock3 size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedPost(post);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="flex items-center gap-2 text-lime-400 font-semibold text-sm hover:gap-4 transition-all"
                  >
                    Read Article
                    <ArrowRight size={17} />
                  </button>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-zinc-800 rounded-2xl">
              <Search className="mx-auto text-zinc-600 mb-4" size={35} />
              <h3 className="text-xl font-semibold mb-2">
                No articles found
              </h3>
              <p className="text-zinc-500">
                Try another search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center border border-zinc-800 bg-zinc-900 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-5">
            Always Learning. Always
            <span className="text-lime-400"> Building.</span>
          </h2>
          <p className="text-zinc-400 leading-7">
            Follow my journey as I explore new technologies and
            build useful web applications.
          </p>
        </div>
      </section>
    </main>
  );
}
