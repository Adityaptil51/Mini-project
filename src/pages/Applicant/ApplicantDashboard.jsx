import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  FileText,
  FolderCheck,
  Bell,
  UserRound,
  Settings,
  LogOut,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Clock3,
  CheckCircle2,
  AlertCircle,
  CalendarDays,
  GraduationCap,
  Upload,
  ChevronRight,
  ShieldCheck,
  CircleHelp,
  MoreHorizontal,
  Search,
  FileCheck2,
} from "lucide-react";

const navigation = [
  { label: "Overview", icon: LayoutDashboard, target: "#overview" },
  { label: "My Application", icon: FileText, target: "#application" },
  { label: "Documents", icon: FolderCheck, target: "#documents" },
  { label: "Eligibility", icon: ShieldCheck, target: "#eligibility" },
  { label: "Notifications", icon: Bell, target: "#notifications" },
];

const applicationStages = [
  {
    title: "Application submission",
    description:
      "This stage begins when you submit your admission application.",
    status: "upcoming",
    date: "Not started",
  },
  {
    title: "Document verification",
    description:
      "Your uploaded documents will be reviewed by the admission team.",
    status: "upcoming",
    date: "Awaiting submission",
  },
  {
    title: "Eligibility screening",
    description:
      "Your academic qualifications will be checked against programme requirements.",
    status: "upcoming",
    date: "Awaiting verification",
  },
  {
    title: "Final admission decision",
    description: "Your final admission outcome will be published here.",
    status: "upcoming",
    date: "Pending",
  },
];

const documents = [
  {
    name: "10th Marks Card",
    type: "Academic document",
    status: "Verified",
    date: "Nov 02, 2026",
  },
  {
    name: "12th / PUC Marks Card",
    type: "Academic document",
    status: "Verified",
    date: "Nov 02, 2026",
  },
  {
    name: "Leaving Certificate",
    type: "Supporting document",
    status: "Under review",
    date: "Nov 05, 2026",
  },
];

function StatusBadge({ status }) {
  const styles = {
    Verified: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    "Under review": "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    Pending: "bg-slate-100 text-slate-500 ring-1 ring-slate-200",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
        styles[status] || styles.Pending
      }`}
    >
      {status === "Verified" ? (
        <CheckCircle2 size={13} />
      ) : status === "Under review" ? (
        <Clock3 size={13} />
      ) : (
        <AlertCircle size={13} />
      )}
      {status}
    </span>
  );
}

function Sidebar({
  mobileNavOpen,
  setMobileNavOpen,
  activeSection,
  setActiveSection,
  unreadNotificationCount,
}) {
  return (
    <>
      {mobileNavOpen && (
        <div
          onClick={() => setMobileNavOpen(false)}
          className="fixed inset-0 z-40 bg-slate-950/50 backdrop-blur-sm lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-300 ${
          mobileNavOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        <div className="flex h-20 items-center justify-between border-b border-slate-100 px-7">
          <a
            href="/"
            className="text-2xl font-extrabold tracking-tight text-[#173b61]"
          >
            CrediFit<span className="text-blue-500">.</span>
          </a>

          <button
            onClick={() => setMobileNavOpen(false)}
            aria-label="Close navigation"
            className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 lg:hidden"
          >
            <X size={20} />
          </button>
        </div>

        <div className="px-5 pt-7">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Workspace
          </p>

          <nav className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = activeSection === item.label;

              return (
                <a
                  key={item.label}
                  href={item.target}
                  onClick={() => {
                    setActiveSection(item.label);
                    setMobileNavOpen(false);
                  }}
                  className={`group flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#173b61] text-white shadow-lg shadow-blue-950/10"
                      : "text-slate-500 hover:bg-blue-50 hover:text-blue-700"
                  }`}
                >
                  <Icon
                    size={18}
                    className={
                      active
                        ? "text-blue-200"
                        : "text-slate-400 group-hover:text-blue-600"
                    }
                  />
                  {item.label}

                  {item.label === "Notifications" && (
                    <span
                      className={`ml-auto flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[10px] font-bold ${
                        active
                          ? "bg-white/15 text-white"
                          : "bg-blue-100 text-blue-700"
                      }`}
                    >
                      {unreadNotificationCount}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="mt-9 px-5">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
            Account
          </p>

          <a
            href="#profile"
            onClick={() => {
              setActiveSection("Profile");
              setMobileNavOpen(false);
            }}
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
          >
            <UserRound size={18} className="text-slate-400" />
            My Profile
          </a>

          <a
            href="#settings"
            className="flex items-center gap-3 rounded-xl px-3.5 py-3 text-sm font-medium text-slate-500 transition hover:bg-blue-50 hover:text-blue-700"
          >
            <Settings size={18} className="text-slate-400" />
            Settings
          </a>
        </div>

        <div className="mt-auto p-5">
          <div className="rounded-2xl bg-[#f3f7fd] p-4">
            <div className="flex items-center gap-2 text-[#173b61]">
              <CircleHelp size={18} />
              <p className="text-sm font-bold">Need assistance?</p>
            </div>
            <p className="mt-2 text-xs leading-5 text-slate-500">
              Contact the admission support team for help with your application.
            </p>
            <a
              href="mailto:admissions@example.edu"
              className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-blue-700 hover:underline"
            >
              Get help <ArrowUpRight size={13} />
            </a>
          </div>

          <a
            href="/login"
            className="mt-4 flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-slate-500 transition hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={18} />
            Sign out
          </a>
        </div>
      </aside>
    </>
  );
}

function ApplicantDashboard() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("Overview");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState({});
  const [avatarPreview, setAvatarPreview] = useState("");
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);

  function handleAvatarUpload(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please select an image file.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Image size must be below 5 MB.");
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setAvatarPreview(reader.result);
    };

    reader.readAsDataURL(file);
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-800">
      <Sidebar
        mobileNavOpen={mobileNavOpen}
        setMobileNavOpen={setMobileNavOpen}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        unreadNotificationCount={unreadNotificationCount}
      />

      <main className="min-h-screen lg:pl-64">
        {/* TOP BAR */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white/90 px-5 backdrop-blur-xl md:px-9">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open navigation"
              className="rounded-xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50 lg:hidden"
            >
              <Menu size={20} />
            </button>

            <div>
              <p className="text-sm font-bold text-[#173b61]">
                Applicant Portal
              </p>
              <p className="hidden text-[11px] text-slate-400 sm:block">
                Your admission workspace
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            <button
              aria-label="Search"
              className="hidden rounded-xl p-2.5 text-slate-400 transition hover:bg-slate-100 hover:text-blue-600 sm:block"
            >
              <Search size={19} />
            </button>

            <div className="relative">
              <button
                type="button"
                aria-label="Notifications"
                aria-expanded={notificationOpen}
                onClick={() => setNotificationOpen(!notificationOpen)}
                className={`relative rounded-xl p-2.5 transition ${
                  notificationOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-400 hover:bg-slate-100 hover:text-blue-600"
                }`}
              >
                <Bell size={20} />
                {/*
    No notification dot until the backend provides
    actual unread notifications.
  */}
              </button>

              <AnimatePresence>
                {notificationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.97 }}
                    transition={{ duration: 0.18 }}
                    className="absolute right-0 top-14 z-50 w-[min(340px,calc(100vw-32px))] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-300/40"
                  >
                    <div className="flex items-center justify-between border-b border-slate-100 p-4">
                      <div>
                        <h3 className="font-bold text-[#173b61]">
                          Notifications
                        </h3>
                        <p className="mt-1 text-xs text-slate-400">
                          Your admission updates
                        </p>
                      </div>

                      <div className="rounded-xl bg-blue-50 p-2 text-blue-600">
                        <Bell size={18} />
                      </div>
                    </div>

                    <div className="px-5 py-9 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400">
                        <Bell size={25} />
                      </div>

                      <p className="mt-4 text-sm font-bold text-[#173b61]">
                        You're all caught up!
                      </p>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        When your admission application receives an update,
                        you'll find it here.
                      </p>
                    </div>

                    <a
                      href="#notifications"
                      onClick={() => setNotificationOpen(false)}
                      className="flex items-center justify-center gap-2 border-t border-slate-100 py-3 text-xs font-bold text-blue-600 transition hover:bg-blue-50"
                    >
                      View notification centre
                      <ArrowRight size={14} />
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="h-8 w-px bg-slate-200" />

            <a
              href="/applicant/edit-profile"
              title="Edit your profile"
              className="group flex items-center gap-3"
            >
              <div className="hidden text-right sm:block">
                <p className="text-sm font-bold text-slate-700">Applicant</p>
                <p className="text-[11px] text-slate-400">Your account</p>
              </div>

              <div className="relative">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white bg-blue-50 text-blue-600 shadow-sm ring-1 ring-slate-200 transition group-hover:ring-2 group-hover:ring-blue-400">
                  <UserRound size={23} />
                </div>

                {avatarPreview && (
                  <button
                    type="button"
                    title="Remove profile picture"
                    aria-label="Remove profile picture"
                    onClick={() => setAvatarPreview("")}
                    className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-red-500 text-xs font-bold text-white shadow-sm transition hover:scale-110 hover:bg-red-600"
                  >
                    ×
                  </button>
                )}
              </div>
            </a>
          </div>
        </header>

        <div className="mx-auto max-w-[1440px] space-y-7 px-5 py-7 md:px-9 md:py-9">
          {/* WELCOME */}
          <motion.section
            id="overview"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                {new Date().toLocaleDateString("en-IN", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>

              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#173b61] md:text-4xl">
                Welcome to your dashboard
                <span className="text-blue-500">.</span>
              </h1>

              <p className="mt-2 text-sm text-slate-500 md:text-base">
                Here's what's happening with your admission application.
              </p>
            </div>

            <div className="flex items-center gap-2 self-start rounded-xl border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 sm:self-auto">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold text-emerald-700">
                Application active
              </span>
            </div>
          </motion.section>

          {/* HERO APPLICATION CARD */}

          {/* APPLICATION EMPTY STATE */}
          <motion.section
            id="application"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative overflow-hidden rounded-3xl bg-[#102c4d] p-7 text-white shadow-xl md:p-10"
          >
            <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-white/10" />
            <div className="absolute -bottom-28 right-32 h-64 w-64 rounded-full bg-blue-500/20 blur-[90px]" />

            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1fr_250px]">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  YOUR ADMISSION JOURNEY
                </span>

                <h2 className="mt-5 text-2xl font-extrabold md:text-3xl">
                  Your next chapter starts here.
                </h2>

                <p className="mt-3 max-w-lg text-sm leading-7 text-blue-100/70">
                  You haven't submitted an admission application yet. Explore
                  available programmes and take your first step towards your
                  future.
                </p>

                <a
                  href="/programmes"
                  className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#173b61] transition hover:-translate-y-1 hover:bg-blue-50"
                >
                  Explore programmes
                  <ArrowRight size={17} />
                </a>
              </div>

              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="flex h-44 w-44 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-xl"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-full bg-blue-400/10">
                    <GraduationCap size={55} className="text-cyan-300" />
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* SUMMARY CARDS */}

          {/* APPLICANT SUMMARY */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                label: "Application status",
                value: "Not started",
                note: "Submit an application to begin",
                icon: FileText,
                color: "blue",
              },
              {
                label: "Documents uploaded",
                value: "0",
                note: "No documents submitted yet",
                icon: FolderCheck,
                color: "emerald",
              },
              {
                label: "Eligibility status",
                value: "Not assessed",
                note: "Awaiting an application",
                icon: ShieldCheck,
                color: "violet",
              },
              {
                label: "Notifications",
                value: "0",
                note: "You're all caught up",
                icon: Bell,
                color: "amber",
              },
            ].map((card, index) => {
              const Icon = card.icon;

              const iconColors = {
                blue: "bg-blue-50 text-blue-600",
                emerald: "bg-emerald-50 text-emerald-600",
                violet: "bg-violet-50 text-violet-600",
                amber: "bg-amber-50 text-amber-600",
              };

              return (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-shadow hover:shadow-lg hover:shadow-slate-200/60"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-medium text-slate-500">
                      {card.label}
                    </p>

                    <div
                      className={`rounded-xl p-2.5 ${iconColors[card.color]}`}
                    >
                      <Icon size={19} />
                    </div>
                  </div>

                  <p className="mt-4 text-xl font-extrabold text-[#173b61]">
                    {card.value}
                  </p>

                  <p className="mt-1 text-xs text-slate-400">{card.note}</p>
                </motion.div>
              );
            })}
          </section>

          {/* LOWER CONTENT */}
          <section className="grid items-start gap-6 xl:grid-cols-[1.4fr_0.9fr]">
            <div className="space-y-6">
              {/* ADMISSION TIMELINE */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-7"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Admission journey
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#173b61]">
                      Screening timeline
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Follow your application at every stage.
                    </p>
                  </div>

                  <button
                    aria-label="More timeline options"
                    className="rounded-lg p-2 text-slate-400 hover:bg-slate-100"
                  >
                    <MoreHorizontal size={20} />
                  </button>
                </div>

                <div className="mt-7">
                  {applicationStages.map((stage, index) => {
                    const completed = stage.status === "completed";
                    const current = stage.status === "current";

                    return (
                      <div
                        key={stage.title}
                        className="relative flex gap-4 pb-7 last:pb-0"
                      >
                        {index !== applicationStages.length - 1 && (
                          <div
                            className={`absolute left-[15px] top-9 h-full w-px ${
                              completed ? "bg-emerald-300" : "bg-slate-200"
                            }`}
                          />
                        )}

                        <div
                          className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                            completed
                              ? "bg-emerald-100 text-emerald-600"
                              : current
                                ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20"
                                : "border border-slate-200 bg-white text-slate-400"
                          }`}
                        >
                          {completed ? (
                            <CheckCircle2 size={18} />
                          ) : current ? (
                            <Clock3 size={16} />
                          ) : (
                            <span className="text-xs font-semibold">
                              {index + 1}
                            </span>
                          )}
                        </div>

                        <div className="min-w-0 flex-1 pt-0.5">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <p
                              className={`text-sm font-bold ${
                                current || completed
                                  ? "text-[#173b61]"
                                  : "text-slate-400"
                              }`}
                            >
                              {stage.title}
                            </p>

                            <span
                              className={`text-[10px] font-semibold ${
                                completed
                                  ? "text-emerald-600"
                                  : current
                                    ? "text-blue-600"
                                    : "text-slate-400"
                              }`}
                            >
                              {stage.date}
                            </span>
                          </div>

                          <p className="mt-1 text-xs leading-5 text-slate-400">
                            {stage.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* ELIGIBILITY SCREENING */}
              <motion.div
                id="eligibility"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Academic assessment
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-[#173b61]">
                      Eligibility Screening
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Your programme eligibility at a glance.
                    </p>
                  </div>

                  <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                    <ShieldCheck size={22} />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-violet-200 bg-violet-50/40 p-6 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-sm">
                    <GraduationCap size={29} />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-[#173b61]">
                    Eligibility assessment not started
                  </h4>

                  <p className="mx-auto mt-2 max-w-sm text-xs leading-6 text-slate-500">
                    Once your application is submitted and your required
                    documents are verified, the eligibility engine will evaluate
                    your academic qualifications against the selected programme
                    criteria.
                  </p>

                  <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white px-4 py-2 text-xs font-semibold text-violet-700">
                    <Clock3 size={14} />
                    Awaiting application submission
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-xl bg-slate-50 p-4">
                  <ShieldCheck
                    size={18}
                    className="mt-0.5 shrink-0 text-slate-500"
                  />

                  <div>
                    <p className="text-xs font-bold text-slate-700">
                      Transparent eligibility rules
                    </p>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Your assessment will be based on the academic requirements
                      defined for your selected programme.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* GETTING STARTED */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                  Quick access
                </p>

                <h3 className="mt-1 text-xl font-extrabold text-[#173b61]">
                  Getting started
                </h3>

                <p className="mt-1 text-xs text-slate-400">
                  Everything you need to prepare your admission application.
                </p>

                <div className="mt-5 space-y-2">
                  {[
                    {
                      title: "Complete your profile",
                      description: "Review your personal and academic details.",
                      icon: UserRound,
                      link: "/applicant/edit-profile",
                    },
                    {
                      title: "Explore programmes",
                      description: "Find the right academic programme.",
                      icon: GraduationCap,
                      link: "/programmes",
                    },
                    {
                      title: "Prepare your documents",
                      description: "Check your required certificates.",
                      icon: FileText,
                      link: "#documents",
                    },
                    {
                      title: "Admission guidance",
                      description: "Understand the admission process.",
                      icon: CircleHelp,
                      link: "/admission-process",
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href={item.link}
                        className="group flex items-center gap-3 rounded-xl border border-transparent p-3 transition-all duration-200 hover:border-blue-100 hover:bg-blue-50/70"
                      >
                        <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-100">
                          <Icon size={19} />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-bold text-slate-700">
                            {item.title}
                          </p>
                          <p className="mt-1 text-xs text-slate-400">
                            {item.description}
                          </p>
                        </div>

                        <ArrowUpRight
                          size={17}
                          className="shrink-0 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-blue-600"
                        />
                      </a>
                    );
                  })}
                </div>
              </motion.div>
            </div>

            <div className="space-y-6">
              {/* DOCUMENT CENTRE */}
              <motion.div
                id="documents"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm md:p-7"
              >
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Document centre
                    </p>
                    <h3 className="mt-1 text-xl font-extrabold text-[#173b61]">
                      Required documents
                    </h3>
                    <p className="mt-1 text-xs text-slate-400">
                      Upload each document separately for verification.
                    </p>
                  </div>

                  <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">
                    <AlertCircle size={14} />
                    Verification required
                  </span>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      id: "marks10",
                      name: "10th Standard Marks Card",
                      description: "Secondary school academic record",
                      required: "Mandatory",
                    },
                    {
                      id: "marks12",
                      name: "12th / PUC Marks Card",
                      description: "Higher secondary academic record",
                      required: "Mandatory",
                    },
                    {
                      id: "leaving",
                      name: "Leaving Certificate",
                      description: "Certificate from previous institution",
                      required: "Mandatory",
                    },
                    {
                      id: "degree",
                      name: "Degree Certificate",
                      description:
                        "Required for applicable postgraduate admissions",
                      required: "Conditional",
                    },
                  ].map((doc) => {
                    const selectedFile = selectedDocuments[doc.id];

                    return (
                      <div
                        key={doc.id}
                        className="group rounded-xl border border-slate-200 p-4 transition-all duration-200 hover:border-blue-300 hover:bg-blue-50/20"
                      >
                        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                          <div className="flex min-w-0 flex-1 items-center gap-3">
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-100">
                              <FileText size={21} />
                            </div>

                            <div className="min-w-0 flex-1">
                              <div className="flex flex-wrap items-center gap-2">
                                <h4 className="text-sm font-bold text-[#173b61]">
                                  {doc.name}
                                </h4>

                                <span
                                  className={`rounded-full px-2 py-1 text-[9px] font-bold ${
                                    doc.required === "Mandatory"
                                      ? "bg-red-50 text-red-600"
                                      : "bg-violet-50 text-violet-600"
                                  }`}
                                >
                                  {doc.required}
                                </span>
                              </div>

                              <p className="mt-1 text-xs text-slate-400">
                                {doc.description}
                              </p>

                              {selectedFile && (
                                <p className="mt-2 flex items-center gap-1.5 break-all text-xs font-medium text-blue-700">
                                  <FileCheck2 size={14} className="shrink-0" />
                                  {selectedFile.name}
                                </p>
                              )}
                            </div>
                          </div>

                          <div className="flex shrink-0 items-center gap-3">
                            <span
                              className={`text-[11px] font-semibold ${
                                selectedFile
                                  ? "text-blue-600"
                                  : "text-slate-400"
                              }`}
                            >
                              {selectedFile
                                ? "Selected locally"
                                : "Not uploaded"}
                            </span>

                            <label className="inline-flex h-9 cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#173b61] px-3 text-xs font-bold text-white transition hover:bg-blue-700">
                              <Upload size={14} />
                              {selectedFile ? "Change file" : "Upload"}

                              <input
                                type="file"
                                accept=".pdf,.jpg,.jpeg,.png"
                                className="hidden"
                                onChange={(e) => {
                                  const file = e.target.files?.[0];

                                  if (!file) return;

                                  const allowedTypes = [
                                    "application/pdf",
                                    "image/jpeg",
                                    "image/png",
                                  ];

                                  if (!allowedTypes.includes(file.type)) {
                                    alert(
                                      "Please select a PDF, JPG or PNG file.",
                                    );
                                    e.target.value = "";
                                    return;
                                  }

                                  if (file.size > 5 * 1024 * 1024) {
                                    alert("File size must be below 5 MB.");
                                    e.target.value = "";
                                    return;
                                  }

                                  setSelectedDocuments((prev) => ({
                                    ...prev,
                                    [doc.id]: file,
                                  }));

                                  e.target.value = "";
                                }}
                              />
                            </label>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-5 rounded-xl border border-blue-100 bg-blue-50/60 p-4">
                  <div className="flex items-start gap-3">
                    <ShieldCheck
                      size={19}
                      className="mt-0.5 shrink-0 text-blue-600"
                    />

                    <div>
                      <p className="text-xs font-bold text-[#173b61]">
                        Document submission guidelines
                      </p>
                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Upload clear and readable documents. Applicable
                        mandatory documents must be submitted before your
                        application can proceed for verification.
                      </p>
                      <p className="mt-2 text-[10px] font-medium text-blue-600">
                        Accepted formats: PDF, JPG and PNG · Maximum size: 5 MB
                        per file
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-[11px] text-slate-400">
                    Selected: {Object.keys(selectedDocuments).length} / 4
                    documents
                  </p>

                  <span className="text-[10px] text-slate-400">
                    Local preview only
                  </span>
                </div>
              </motion.div>

              {/* NOTIFICATIONS */}
              <motion.div
                id="notifications"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-600">
                      Stay informed
                    </p>

                    <h3 className="mt-1 text-xl font-extrabold text-[#173b61]">
                      Notifications
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Important updates about your admission.
                    </p>
                  </div>

                  <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                    <Bell size={21} />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-dashed border-slate-200 bg-slate-50/70 px-5 py-8 text-center">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-blue-500 shadow-sm">
                    <Bell size={27} />
                  </div>

                  <h4 className="mt-4 text-base font-bold text-[#173b61]">
                    You're all caught up!
                  </h4>

                  <p className="mx-auto mt-2 max-w-xs text-xs leading-6 text-slate-500">
                    You don't have any notifications yet. Admission updates,
                    verification results and important announcements will appear
                    here.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* BOTTOM SECTION */}
          <section className="grid gap-6 lg:grid-cols-2"></section>

          {/* FOOTER */}
          <footer
            id="profile"
            className="flex flex-col gap-2 border-t border-slate-200 py-5 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© 2026 CrediFit · Applicant Portal</p>
            <div className="flex items-center gap-4">
              <a href="#settings" className="hover:text-blue-600">
                Privacy
              </a>
              <a href="#settings" className="hover:text-blue-600">
                Terms
              </a>
              <a
                href="mailto:admissions@example.edu"
                className="hover:text-blue-600"
              >
                Support
              </a>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default ApplicantDashboard;
