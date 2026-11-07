import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  FileCheck2,
  GraduationCap,
  Menu,
  Search,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const programmes = [
  // Engineering & Technology
  {
    name: "Computer Science Engineering",
    short: "CSE",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description:
      "Programming, algorithms, software engineering and computing systems.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Artificial Intelligence & Machine Learning",
    short: "AI/ML",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description: "Machine learning, intelligent systems and applied AI.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    name: "Information Science",
    short: "ISE",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description:
      "Information systems, databases, networking and software development.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Mechanical Engineering",
    short: "ME",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description: "Mechanical systems, manufacturing and engineering design.",
    color: "bg-slate-100 text-slate-700",
  },
  {
    name: "Civil Engineering",
    short: "CE",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description: "Infrastructure, construction, structures and transportation.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Electronics & Communication Engineering",
    short: "ECE",
    field: "Engineering & Technology",
    level: "Undergraduate",
    duration: "4 years",
    description: "Electronics, communication systems and embedded technology.",
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    name: "Master of Computer Applications",
    short: "MCA",
    field: "Engineering & Technology",
    level: "Postgraduate",
    duration: "2 years",
    description: "Advanced computing, software applications and development.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Polytechnic Diploma in Engineering",
    short: "DIP-ENG",
    field: "Engineering & Technology",
    level: "Diploma",
    duration: "Typically 3 years",
    description:
      "Practical and technical foundations in an engineering discipline.",
    color: "bg-slate-100 text-slate-700",
  },

  // Medical & Healthcare
  {
    name: "Bachelor of Medicine and Bachelor of Surgery",
    short: "MBBS",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "As prescribed",
    description: "Medical education and clinical training for future doctors.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    name: "Bachelor of Dental Surgery",
    short: "BDS",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "As prescribed",
    description: "Dental sciences, oral health and clinical practice.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    name: "Bachelor of Science in Nursing",
    short: "B.Sc Nursing",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "Typically 4 years",
    description: "Patient care, clinical practice and nursing sciences.",
    color: "bg-pink-50 text-pink-700",
  },
  {
    name: "Bachelor of Pharmacy",
    short: "B.Pharm",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "Typically 4 years",
    description: "Pharmaceutical sciences, medicines and drug safety.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Bachelor of Physiotherapy",
    short: "BPT",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "As prescribed",
    description: "Movement, rehabilitation and physical therapy.",
    color: "bg-cyan-50 text-cyan-700",
  },
  {
    name: "Medical Laboratory Technology",
    short: "MLT",
    field: "Medical & Healthcare",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Laboratory testing and diagnostic healthcare techniques.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Master of Public Health",
    short: "MPH",
    field: "Medical & Healthcare",
    level: "Postgraduate",
    duration: "Varies by programme",
    description: "Public health, epidemiology and population-level healthcare.",
    color: "bg-teal-50 text-teal-700",
  },

  // Agriculture & Veterinary
  {
    name: "Bachelor of Science in Agriculture",
    short: "B.Sc Agri",
    field: "Agriculture & Veterinary",
    level: "Undergraduate",
    duration: "Typically 4 years",
    description: "Crop science, soil management and agricultural systems.",
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Horticulture",
    short: "B.Sc Hort",
    field: "Agriculture & Veterinary",
    level: "Undergraduate",
    duration: "Typically 4 years",
    description: "Fruits, vegetables, plantation crops and plant production.",
    color: "bg-lime-50 text-lime-700",
  },
  {
    name: "Veterinary Science",
    short: "BVSc",
    field: "Agriculture & Veterinary",
    level: "Undergraduate",
    duration: "As prescribed",
    description: "Animal health, veterinary medicine and animal husbandry.",
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Forestry",
    short: "B.Sc Forestry",
    field: "Agriculture & Veterinary",
    level: "Undergraduate",
    duration: "Typically 4 years",
    description:
      "Forest ecosystems, conservation and natural resource management.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Fisheries Science",
    short: "BFSc",
    field: "Agriculture & Veterinary",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Aquaculture, aquatic ecosystems and fisheries management.",
    color: "bg-cyan-50 text-cyan-700",
  },

  // Science & Research
  {
    name: "Physics",
    short: "B.Sc Physics",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Matter, energy, experimental science and physical systems.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    name: "Chemistry",
    short: "B.Sc Chemistry",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description:
      "Chemical principles, laboratory methods and material properties.",
    color: "bg-teal-50 text-teal-700",
  },
  {
    name: "Mathematics",
    short: "B.Sc Maths",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Mathematical modelling, statistics and analytical methods.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Biotechnology",
    short: "B.Sc Biotech",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Biological systems, biotechnology and laboratory research.",
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Microbiology",
    short: "B.Sc Micro",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Microorganisms, laboratory science and applied biology.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    name: "Environmental Science",
    short: "Env. Sci",
    field: "Science & Research",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Environmental systems, sustainability and conservation.",
    color: "bg-lime-50 text-lime-700",
  },

  // Business, Commerce & Finance
  {
    name: "Bachelor of Business Administration",
    short: "BBA",
    field: "Business & Commerce",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Management, operations, leadership and business strategy.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Bachelor of Commerce",
    short: "B.Com",
    field: "Business & Commerce",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Accounting, taxation, business and commercial principles.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    name: "Master of Business Administration",
    short: "MBA",
    field: "Business & Commerce",
    level: "Postgraduate",
    duration: "Typically 2 years",
    description: "Business leadership, strategy, finance and management.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    name: "Master of Commerce",
    short: "M.Com",
    field: "Business & Commerce",
    level: "Postgraduate",
    duration: "Typically 2 years",
    description: "Advanced commerce, accounting and financial management.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Economics",
    short: "B.A. Econ",
    field: "Business & Commerce",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Markets, economic policy, data and resource allocation.",
    color: "bg-teal-50 text-teal-700",
  },

  // Arts & Social Sciences
  {
    name: "Bachelor of Arts",
    short: "BA",
    field: "Arts & Social Sciences",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description:
      "Humanities and social science subjects across multiple disciplines.",
    color: "bg-purple-50 text-purple-700",
  },
  {
    name: "Psychology",
    short: "B.Sc Psych",
    field: "Arts & Social Sciences",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Human behaviour, cognition and psychological research.",
    color: "bg-pink-50 text-pink-700",
  },
  {
    name: "Sociology",
    short: "B.A. Soc",
    field: "Arts & Social Sciences",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description: "Society, communities, institutions and social change.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    name: "Journalism & Mass Communication",
    short: "JMC",
    field: "Arts & Social Sciences",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Reporting, digital media, communication and storytelling.",
    color: "bg-orange-50 text-orange-700",
  },

  // Law & Public Policy
  {
    name: "Bachelor of Laws",
    short: "LLB",
    field: "Law & Public Policy",
    level: "Undergraduate",
    duration: "Depends on entry route",
    description: "Legal principles, advocacy and the justice system.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Integrated BA LLB",
    short: "BA LLB",
    field: "Law & Public Policy",
    level: "Undergraduate",
    duration: "Typically 5 years",
    description: "Combined undergraduate arts and professional legal studies.",
    color: "bg-orange-50 text-orange-700",
  },
  {
    name: "Master of Laws",
    short: "LLM",
    field: "Law & Public Policy",
    level: "Postgraduate",
    duration: "Varies by programme",
    description: "Advanced legal study and specialised legal research.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Political Science",
    short: "B.A. Pol Sci",
    field: "Law & Public Policy",
    level: "Undergraduate",
    duration: "Typically 3–4 years",
    description:
      "Government, public policy, political institutions and governance.",
    color: "bg-violet-50 text-violet-700",
  },

  // Architecture, Design & Creative Arts
  {
    name: "Bachelor of Architecture",
    short: "B.Arch",
    field: "Architecture & Design",
    level: "Undergraduate",
    duration: "Typically 5 years",
    description: "Architectural design, buildings and the built environment.",
    color: "bg-slate-100 text-slate-700",
  },
  {
    name: "Interior Design",
    short: "Interior",
    field: "Architecture & Design",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Interior spaces, materials, planning and design practice.",
    color: "bg-pink-50 text-pink-700",
  },
  {
    name: "Fashion Design",
    short: "Fashion",
    field: "Architecture & Design",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Fashion concepts, textiles, garment design and production.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    name: "Fine Arts",
    short: "BFA",
    field: "Architecture & Design",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Visual arts, creative practice and artistic expression.",
    color: "bg-purple-50 text-purple-700",
  },

  // Education & Hospitality
  {
    name: "Bachelor of Education",
    short: "B.Ed",
    field: "Education & Hospitality",
    level: "Undergraduate",
    duration: "As prescribed",
    description: "Teaching methods, pedagogy and classroom practice.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "Master of Education",
    short: "M.Ed",
    field: "Education & Hospitality",
    level: "Postgraduate",
    duration: "Typically 2 years",
    description: "Advanced pedagogy, educational research and leadership.",
    color: "bg-indigo-50 text-indigo-700",
  },
  {
    name: "Hotel Management",
    short: "BHM",
    field: "Education & Hospitality",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Hospitality operations, guest services and hotel management.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    name: "Tourism Management",
    short: "Tourism",
    field: "Education & Hospitality",
    level: "Undergraduate",
    duration: "Varies by programme",
    description:
      "Tourism operations, travel services and destination management.",
    color: "bg-cyan-50 text-cyan-700",
  },

  // Other specialised fields
  {
    name: "Physical Education & Sports Science",
    short: "Sports Sci",
    field: "Sports & Other Fields",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Sports performance, exercise science and physical education.",
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Aviation Management",
    short: "Aviation",
    field: "Sports & Other Fields",
    level: "Undergraduate",
    duration: "Varies by programme",
    description: "Aviation operations, airport services and management.",
    color: "bg-sky-50 text-sky-700",
  },
  {
    name: "Certificate in Data Analytics",
    short: "Data Cert",
    field: "Sports & Other Fields",
    level: "Certificate",
    duration: "Varies by provider",
    description:
      "An introductory pathway into data analysis and visualisation.",
    color: "bg-indigo-50 text-indigo-700",
  },
];

const steps = [
  {
    number: "01",
    title: "Create your profile",
    text: "Register your account and enter your academic details.",
    icon: GraduationCap,
  },
  {
    number: "02",
    title: "Submit your application",
    text: "Choose a programme and upload the required documents.",
    icon: FileCheck2,
  },
  {
    number: "03",
    title: "Complete screening",
    text: "Track eligibility checks and document verification.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "View your decision",
    text: "Follow your application status through the admission stages.",
    icon: CheckCircle2,
  },
];

function HomePage() {
  const [search, setSearch] = useState("");
  const [field, setField] = useState("All fields");
  const [level, setLevel] = useState("All levels");

  const [mobileMenu, setMobileMenu] = useState(false);
  const [selectedProgramme, setSelectedProgramme] = useState(null);
  const [showAllProgrammes, setShowAllProgrammes] = useState(false);

  const [loginType, setLoginType] = useState(null);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const carouselRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lastFrameTimeRef = useRef(0);
  const isPausedRef = useRef(false);
  const dragRef = useRef({
    active: false,
    startX: 0,
    startScrollLeft: 0,
  });

  const fields = [
    "All fields",
    ...new Set(programmes.map((programme) => programme.field)),
  ];

  const levels = [
    "All levels",
    "Undergraduate",
    "Postgraduate",
    "Diploma",
    "Certificate",
  ];

  const filteredProgrammes = useMemo(() => {
    const query = search.trim().toLowerCase();

    return programmes.filter((programme) => {
      const searchableText = [
        programme.name,
        programme.short,
        programme.field,
        programme.level,
        programme.description,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = searchableText.includes(query);
      const matchesField = field === "All fields" || programme.field === field;
      const matchesLevel = level === "All levels" || programme.level === level;

      return matchesSearch && matchesField && matchesLevel;
    });
  }, [search, field, level]);

  const scrollTo = (id) => {
    setMobileMenu(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <div className="bg-[#102b49] px-4 py-2.5 text-center text-xs font-medium tracking-wide text-white sm:text-sm"></div>

      <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <button
            onClick={() => scrollTo("home")}
            className="flex items-center gap-3 text-left"
            aria-label="CrediFit home"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173b61] text-white shadow-sm">
              <GraduationCap size={23} />
            </span>
            <span>
              <span className="block font-display text-xl font-extrabold tracking-tight text-[#173b61]">
                CrediFit
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                Admissions portal
              </span>
            </span>
          </button>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={() => scrollTo("programmes")}
              className="text-sm font-medium text-slate-600 transition hover:text-[#245c8e]"
            >
              Programmes
            </button>
            <button
              onClick={() => scrollTo("process")}
              className="text-sm font-medium text-slate-600 transition hover:text-[#245c8e]"
            >
              How it works
            </button>
            <button
              onClick={() => scrollTo("about")}
              className="text-sm font-medium text-slate-600 transition hover:text-[#245c8e]"
            >
              About CrediFit
            </button>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <button
              onClick={() => {
                setLoginType("applicant");
                setLoginMessage("");
              }}
              className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Sign in
            </button>
            <button
              onClick={() => scrollTo("programmes")}
              className="flex items-center gap-2 rounded-xl bg-[#173b61] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#245c8e]"
            >
              Explore programmes <ArrowUpRight size={16} />
            </button>
          </div>

          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={mobileMenu ? "Close menu" : "Open menu"}
          >
            {mobileMenu ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>

        {mobileMenu && (
          <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">
            <div className="flex flex-col gap-1">
              {[
                ["Programmes", "programmes"],
                ["How it works", "process"],
                ["About CrediFit", "about"],
              ].map(([label, id]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  className="rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-slate-50"
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => {
                  setMobileMenu(false);
                  setLoginType("applicant");
                  setLoginMessage("");
                }}
                className="mt-2 rounded-xl bg-[#173b61] px-4 py-3 text-sm font-semibold text-white"
              >
                Sign in
              </button>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[#f5f8fc]">
          <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 left-1/3 h-80 w-80 rounded-full bg-indigo-100/50 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16 lg:py-28">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3.5 py-2 text-xs font-semibold text-[#245c8e] shadow-sm sm:text-sm">
                <Sparkles size={15} />A more transparent admissions journey
              </div>

              <h1 className="max-w-2xl font-display text-4xl font-extrabold leading-[1.12] tracking-[-0.045em] text-[#142f4d] sm:text-5xl lg:text-[62px]">
                Your next chapter
                <span className="mt-1 block text-[#397bb5]">
                  starts with clarity.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                Discover academic programmes, understand admission requirements
                and follow your application through every screening stage—all in
                one place.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => scrollTo("programmes")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173b61] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:bg-[#245c8e]"
                >
                  Explore programmes <ArrowRight size={17} />
                </button>
                <button
                  onClick={() => scrollTo("process")}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"
                >
                  Understand the process
                </button>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-600">
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  Stage-wise tracking
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 size={17} className="text-emerald-600" />
                  Clear requirements
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.12 }}
              className="relative mx-auto w-full max-w-lg"
            >
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-br from-blue-200/50 to-indigo-100/40 blur-xl" />
              <div className="relative overflow-hidden rounded-[26px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/40 sm:p-7">
                <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Applicant workspace
                    </p>
                    <h2 className="mt-2 font-display text-xl font-bold text-[#173b61]">
                      Your admission journey
                    </h2>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-[#245c8e]">
                    <FileCheck2 size={23} />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-[#f5f8fc] p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-medium text-slate-500">
                        Application overview
                      </p>
                      <p className="mt-1 font-semibold text-slate-800">
                        Stay on top of every stage
                      </p>
                    </div>
                    <span className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-semibold text-[#245c8e]">
                      Preview
                    </span>
                  </div>

                  <div className="mt-5 space-y-4">
                    {[
                      ["Profile details", "Ready when you are", true],
                      ["Document verification", "Required documents", false],
                      ["Eligibility screening", "Rule-based review", false],
                    ].map(([title, detail, complete], index) => (
                      <div key={title} className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${complete ? "bg-emerald-100 text-emerald-700" : "bg-white text-slate-400 ring-1 ring-slate-200"}`}
                        >
                          {complete ? (
                            <CheckCircle2 size={18} />
                          ) : (
                            <span className="text-sm font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold text-slate-800">
                            {title}
                          </p>
                          <p className="mt-0.5 text-xs text-slate-500">
                            {detail}
                          </p>
                        </div>
                        <ChevronDown
                          size={16}
                          className="rotate-[-90deg] text-slate-400"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/70 p-4">
                  <ShieldCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-emerald-700"
                  />
                  <div>
                    <p className="text-sm font-bold text-emerald-900">
                      Designed for transparent screening
                    </p>
                    <p className="mt-1 text-xs leading-5 text-emerald-800/80">
                      Follow the process and understand what is required at each
                      stage.
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-center text-[11px] text-slate-400">
                  Illustrative preview · Not connected to live applications
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="programmes" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#397bb5]">
                  Find your direction
                </p>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#142f4d] sm:text-4xl">
                  Explore programmes
                </h2>
                <p className="mt-3 max-w-xl leading-7 text-slate-600">
                  Browse programmes and discover the path that fits your
                  academic goals.
                </p>
              </div>
              <span className="text-sm font-medium text-slate-500">
                {filteredProgrammes.length} programmes shown
              </span>
            </div>

            <div className="mt-9 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              {/* Single search bar */}
              <div className="relative">
                <Search
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search programmes, degrees or academic fields..."
                  aria-label="Search programmes"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Academic field chips */}
              <div className="mt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Academic field
                </p>

                <div className="flex flex-wrap gap-2">
                  {fields.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setField(item)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        field === item
                          ? "border-[#173b61] bg-[#173b61] text-white"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300 hover:text-[#245c8e]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Qualification level chips */}
              <div className="mt-5">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
                  Qualification level
                </p>

                <div className="flex flex-wrap gap-2">
                  {levels.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setLevel(item)}
                      className={`rounded-full border px-4 py-2 text-xs font-semibold transition ${
                        level === item
                          ? "border-[#397bb5] bg-blue-50 text-[#245c8e]"
                          : "border-slate-200 bg-white text-slate-600 hover:border-blue-300"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setField("All fields");
                    setLevel("All levels");
                    setShowAllProgrammes(false);
                  }}
                  className="text-sm font-semibold text-slate-500 underline underline-offset-4 hover:text-[#245c8e]"
                >
                  Reset filters
                </button>
              </div>
            </div>
            {(() => {
              const featuredProgrammes = filteredProgrammes.slice(0, 6);
              const canLoop = featuredProgrammes.length >= 5;
              const visibleProgrammes = filteredProgrammes;

              const card = (programme, index) => (
                <article
                  key={`${programme.short}-${index}`}
                  className="flex w-[290px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:w-[320px]"
                >
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className={`rounded-lg px-3 py-2 text-xs font-extrabold ${programme.color}`}
                    >
                      {programme.short}
                    </span>
                    <span className="text-xs text-slate-400">
                      {programme.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#397bb5]">
                    {programme.field}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-bold leading-6 text-[#173b61]">
                    {programme.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                    {programme.description}
                  </p>

                  <button
                    onClick={() => setSelectedProgramme(programme)}
                    className="mt-4 flex items-center gap-2 self-start text-sm font-bold text-[#245c8e] hover:underline"
                  >
                    Explore programme <ArrowRight size={15} />
                  </button>
                </article>
              );

              return (
                <>
                  {!showAllProgrammes && (
                    <div className="mt-7 overflow-hidden">
                      <div
                        className="flex w-max gap-5 animate-programme-marquee hover:[animation-play-state:paused]"
                        style={{
                          "--marquee-duration": "45s",
                        }}
                      >
                        {[...featuredProgrammes, ...featuredProgrammes].map(
                          (programme, index) => (
                            <article
                              key={`${programme.short}-${index}`}
                              className="flex w-[290px] shrink-0 flex-col rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg sm:w-[320px]"
                            >
                              <div className="flex items-center justify-between gap-2">
                                <span
                                  className={`rounded-lg px-3 py-2 text-xs font-extrabold ${programme.color}`}
                                >
                                  {programme.short}
                                </span>
                                <span className="text-xs text-slate-400">
                                  {programme.duration}
                                </span>
                              </div>

                              <p className="mt-4 text-[11px] font-semibold uppercase tracking-wider text-[#397bb5]">
                                {programme.field}
                              </p>

                              <h3 className="mt-2 font-display text-lg font-bold leading-6 text-[#173b61]">
                                {programme.name}
                              </h3>

                              <p className="mt-2 flex-1 text-sm leading-6 text-slate-500">
                                {programme.description}
                              </p>

                              <button
                                onClick={() => setSelectedProgramme(programme)}
                                className="mt-4 flex items-center gap-2 self-start text-sm font-bold text-[#245c8e] hover:underline"
                              >
                                Explore programme <ArrowRight size={15} />
                              </button>
                            </article>
                          ),
                        )}
                      </div>
                    </div>
                  )}

                  {showAllProgrammes && (
                    <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                      {visibleProgrammes.map((programme, index) => (
                        <div
                          key={`${programme.short}-grid-${index}`}
                          className="min-w-0"
                        >
                          {card(programme, `grid-${index}`)}
                        </div>
                      ))}
                    </div>
                  )}

                  {filteredProgrammes.length > 6 && (
                    <div className="mt-8 text-center">
                      <button
                        onClick={() =>
                          setShowAllProgrammes((previous) => !previous)
                        }
                        className="border-b border-slate-400 pb-1 text-sm font-semibold text-slate-600 hover:border-[#245c8e] hover:text-[#245c8e]"
                      >
                        {showAllProgrammes
                          ? "Show featured programmes ↑"
                          : "View all programmes ↓"}
                      </button>
                    </div>
                  )}

                  {filteredProgrammes.length === 0 && (
                    <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-12 text-center">
                      <p className="font-semibold text-slate-800">
                        No matching programmes
                      </p>
                      <p className="mt-2 text-sm text-slate-500">
                        Try another search term or academic field.
                      </p>
                      <button
                        onClick={() => {
                          setSearch("");
                          setField("All fields");
                          setLevel("All levels");
                          setShowAllProgrammes(false);
                        }}
                        className="mt-4 text-sm font-semibold text-[#245c8e] underline underline-offset-4"
                      >
                        Clear filters
                      </button>
                    </div>
                  )}
                </>
              );
            })()}

            {filteredProgrammes.length === 0 && (
              <div className="mt-7 rounded-2xl border border-dashed border-slate-300 px-6 py-14 text-center">
                <Search size={30} className="mx-auto text-slate-400" />
                <h3 className="mt-4 font-display text-lg font-bold text-slate-800">
                  No programmes found
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try another search term or change the programme filter.
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setField("All fields");
                    setLevel("All levels");
                  }}
                  className="mt-5 rounded-xl bg-[#173b61] px-5 py-3 text-sm font-semibold text-white hover:bg-[#245c8e]"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section
          id="process"
          className="scroll-mt-24 border-y border-slate-200 bg-[#f5f8fc] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#397bb5]">
                Simple by design
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-[#142f4d] sm:text-4xl">
                Admissions, step by step.
              </h2>
              <p className="mt-4 leading-7 text-slate-600">
                A structured journey helps applicants understand the process and
                know what comes next.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.number}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.07 }}
                    className="rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm font-extrabold tracking-widest text-[#397bb5]">
                        {step.number}
                      </span>
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#245c8e]">
                        <Icon size={21} />
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-lg font-bold text-[#173b61]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {step.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <button
                onClick={() => scrollTo("programmes")}
                className="inline-flex items-center gap-2 rounded-xl bg-[#173b61] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#245c8e]"
              >
                Start by exploring programmes <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-[#245c8e]">
                <ShieldCheck size={25} />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[#397bb5]">
                Built around clarity
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight tracking-tight text-[#142f4d] sm:text-4xl">
                Know the requirements. Follow every stage.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-8 text-slate-600">
              <p>
                CrediFit is designed as a campus admissions screening register.
                It brings programme information, applicant records, document
                verification and rule-based eligibility checks into a structured
                workflow.
              </p>
              <p>
                Admission rules are intended to be maintained as configurable
                records and evaluated by the system, while authorised staff
                review documents and record screening outcomes.
              </p>
              <div className="rounded-2xl border border-blue-100 bg-blue-50/70 p-5 text-sm leading-6 text-[#244a70]">
                <strong>Project prototype:</strong> this page currently uses
                sample programme data. Live registration, secure authentication,
                database records and actual eligibility decisions require
                backend integration.
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 overflow-hidden rounded-[28px] bg-[#173b61] px-7 py-10 text-white sm:px-12 sm:py-12 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-200">
                Your journey begins here
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
                Find the programme that moves you forward.
              </h2>
              <p className="mt-4 leading-7 text-blue-100/80">
                Explore your options and understand the admission process before
                you apply.
              </p>
            </div>
            <button
              onClick={() => scrollTo("programmes")}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#173b61] transition hover:bg-blue-50"
            >
              Browse programmes <ArrowRight size={17} />
            </button>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#f8fafc]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#173b61] text-white">
                <GraduationCap size={22} />
              </span>
              <span className="font-display text-xl font-extrabold text-[#173b61]">
                CrediFit
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-slate-500">
              A structured and transparent approach to campus admissions and
              stage-wise screening.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">Discover</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-500">
              <button
                onClick={() => scrollTo("programmes")}
                className="hover:text-[#245c8e]"
              >
                Academic programmes
              </button>
              <button
                onClick={() => scrollTo("process")}
                className="hover:text-[#245c8e]"
              >
                Admission process
              </button>
              <button
                onClick={() => scrollTo("about")}
                className="hover:text-[#245c8e]"
              >
                About CrediFit
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">Portal access</h3>
            <div className="mt-4 flex flex-col items-start gap-3 text-sm text-slate-500">
              <button
                onClick={() => {
                  setLoginType("applicant");
                  setLoginMessage("");
                }}
                className="hover:text-[#245c8e]"
              >
                Applicant login
              </button>
              <button
                onClick={() => {
                  setLoginType("organisation");
                  setLoginMessage("");
                }}
                className="hover:text-[#245c8e]"
              >
                Organisation login
              </button>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-slate-800">
              Project information
            </h3>
            <p className="mt-4 text-sm leading-6 text-slate-500">
              Admission Stage-Wise Screening Register
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-400">
              Academic project prototype. Programme listings are illustrative
              until configured by an institution.
            </p>
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-slate-400 sm:px-8 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} CrediFit</p>
            <p>Built for a more transparent admission journey.</p>
          </div>
        </div>
      </footer>

      {selectedProgramme && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProgramme(null)}
        >
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(event) => event.stopPropagation()}
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="programme-dialog-title"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-[#245c8e]">
                <GraduationCap size={25} />
              </div>
              <button
                onClick={() => setSelectedProgramme(null)}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close dialog"
              >
                <X size={20} />
              </button>
            </div>

            <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-[#397bb5]">
              {selectedProgramme.short === "Sign in"
                ? "Applicant workspace"
                : "Programme information"}
            </p>
            <h2
              id="programme-dialog-title"
              className="mt-2 font-display text-2xl font-extrabold leading-tight text-[#173b61]"
            >
              {selectedProgramme.name}
            </h2>

            {selectedProgramme.short === "Sign in" ? (
              <>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Applicant sign-in will be available after secure backend
                  authentication is integrated.
                </p>
                <button
                  onClick={() => setSelectedProgramme(null)}
                  className="mt-6 w-full rounded-xl bg-[#173b61] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#245c8e]"
                >
                  Got it
                </button>
              </>
            ) : (
              <>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {selectedProgramme.description}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Academic level</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {selectedProgramme.level}
                    </p>
                  </div>
                  <div className="rounded-xl bg-slate-50 p-4">
                    <p className="text-xs text-slate-500">Duration</p>
                    <p className="mt-1 text-sm font-bold text-slate-800">
                      {selectedProgramme.duration}
                    </p>
                  </div>
                </div>
                <p className="mt-4 text-xs leading-5 text-slate-500">
                  Eligibility criteria and application submission will be
                  connected to the configured admission rules and backend API.
                </p>
                <button
                  onClick={() => {
                    setSelectedProgramme(null);
                    scrollTo("process");
                  }}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b61] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#245c8e]"
                >
                  Understand admission stages <ArrowRight size={16} />
                </button>
              </>
            )}
          </motion.div>
        </div>
      )}

      {loginType && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm"
          onClick={() => setLoginType(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="login-title"
            className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#397bb5]">
                  CrediFit secure access
                </p>
                <h2
                  id="login-title"
                  className="mt-2 font-display text-2xl font-extrabold text-[#173b61]"
                >
                  {loginType === "organisation"
                    ? "Organisation login"
                    : "Applicant login"}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {loginType === "organisation"
                    ? "Sign in using credentials issued to your registered organisation."
                    : "Sign in to manage your profile and track your application."}
                </p>
              </div>

              <button
                onClick={() => setLoginType(null)}
                className="rounded-lg px-3 py-2 text-slate-500 hover:bg-slate-100"
                aria-label="Close login"
              >
                <X size={20} />
              </button>
            </div>

            <form
              className="mt-6 space-y-4"
              onSubmit={(event) => {
                event.preventDefault();
                setLoginMessage(
                  "Login interface ready. Authentication must be connected to the backend before you can sign in.",
                );
              }}
            >
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  {loginType === "organisation"
                    ? "Organisation ID or registered email"
                    : "Registered email"}
                </label>
                <input
                  required
                  type="text"
                  autoComplete="username"
                  value={loginEmail}
                  onChange={(event) => setLoginEmail(event.target.value)}
                  placeholder={
                    loginType === "organisation"
                      ? "Enter your organisation ID"
                      : "Enter your email address"
                  }
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Password
                </label>
                <input
                  required
                  type="password"
                  autoComplete="current-password"
                  value={loginPassword}
                  onChange={(event) => setLoginPassword(event.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {loginMessage && (
                <p
                  role="status"
                  className="rounded-xl bg-blue-50 p-3 text-sm leading-5 text-blue-800"
                >
                  {loginMessage}
                </p>
              )}

              <button
                type="submit"
                className="w-full rounded-xl bg-[#173b61] px-5 py-3.5 text-sm font-bold text-white hover:bg-[#245c8e]"
              >
                Continue securely
              </button>
            </form>

            <p className="mt-4 text-xs leading-5 text-slate-400">
              Demo interface only. Credentials are not verified or saved by this
              form.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
