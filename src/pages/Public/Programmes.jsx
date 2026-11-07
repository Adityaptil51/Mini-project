import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
  Clock,
} from "lucide-react";

const programmes = [
  {
    name: "Bachelor of Computer Applications",
    short: "BCA",
    level: "Undergraduate",
    duration: "3 Years",
    category: "Computer Science",
    description:
      "Build a strong foundation in programming, databases, software development and modern computing.",
  },
  {
    name: "Bachelor of Business Administration",
    short: "BBA",
    level: "Undergraduate",
    duration: "3 Years",
    category: "Management",
    description:
      "Develop business knowledge, leadership abilities and practical management skills.",
  },
  {
    name: "Bachelor of Commerce",
    short: "B.Com",
    level: "Undergraduate",
    duration: "3 Years",
    category: "Commerce",
    description:
      "Explore accounting, finance, taxation and the fundamentals of business.",
  },
  {
    name: "Master of Computer Applications",
    short: "MCA",
    level: "Postgraduate",
    duration: "2 Years",
    category: "Computer Science",
    description:
      "Advance your technical expertise in software engineering, computing and application development.",
  },
];

function Programmes() {
  const [search, setSearch] = useState("");
  const [level, setLevel] = useState("All");

  const filteredProgrammes = programmes.filter((programme) => {
    const matchesSearch =
      programme.name.toLowerCase().includes(search.toLowerCase()) ||
      programme.category.toLowerCase().includes(search.toLowerCase());

    const matchesLevel = level === "All" || programme.level === level;

    return matchesSearch && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-[#f7f9fc] text-slate-800">
      <nav className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-5 md:px-12">
        <a href="/" className="text-2xl font-extrabold text-[#173b61]">
          CrediFit<span className="text-blue-500">.</span>
        </a>

        <a
          href="/"
          className="text-sm font-semibold text-slate-600 hover:text-blue-600"
        >
          Back to Home
        </a>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-blue-600">
            Explore your future
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-[#173b61] md:text-6xl">
            Find the programme
            <br />
            <span className="text-blue-600">that fits you.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            Explore available academic programmes and discover the right path
            for your educational journey.
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm md:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search programmes or departments..."
              className="w-full rounded-xl border border-slate-200 py-4 pl-12 pr-4 outline-none focus:border-blue-500"
            />
          </div>

          <select
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            className="rounded-xl border border-slate-200 bg-white px-5 py-4 outline-none focus:border-blue-500"
          >
            <option value="All">All Levels</option>
            <option value="Undergraduate">Undergraduate</option>
            <option value="Postgraduate">Postgraduate</option>
          </select>
        </div>

        <div className="mb-6 mt-12 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#173b61]">
            Available Programmes
          </h2>

          <span className="text-sm text-slate-500">
            {filteredProgrammes.length} programmes found
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {filteredProgrammes.map((programme, index) => (
            <motion.div
              key={programme.short}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <GraduationCap size={28} />
                </div>

                <span className="rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-700">
                  {programme.level}
                </span>
              </div>

              <p className="mb-2 text-sm font-bold text-blue-600">
                {programme.short} · {programme.category}
              </p>

              <h3 className="text-xl font-bold text-[#173b61]">
                {programme.name}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {programme.description}
              </p>

              <div className="mt-6 flex items-center gap-6 border-t border-slate-100 pt-5 text-sm text-slate-500">
                <span className="flex items-center gap-2">
                  <Clock size={16} />
                  {programme.duration}
                </span>

                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  {programme.category}
                </span>
              </div>

              <button
                onClick={() => (window.location.href = "/login")}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b61] py-4 font-semibold text-white transition hover:bg-blue-700"
              >
                Apply Now
                <ArrowUpRight size={18} />
              </button>
            </motion.div>
          ))}
        </div>

        {filteredProgrammes.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center">
            <p className="text-lg font-semibold text-slate-700">
              No programmes found
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Try another search term or change the qualification level.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Programmes;
