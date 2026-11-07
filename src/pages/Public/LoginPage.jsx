import { useState } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  ClipboardCheck,
  UserCog,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
} from "lucide-react";

const roles = [
  {
    name: "Applicant",
    icon: GraduationCap,
    description: "Apply and track admission",
  },
  {
    name: "Admission Officer",
    icon: ShieldCheck,
    description: "Manage applications",
  },
  {
    name: "Evaluator",
    icon: ClipboardCheck,
    description: "Review applications",
  },
  {
    name: "Admin",
    icon: UserCog,
    description: "Manage the platform",
  },
];

function LoginPage() {
  const [selectedRole, setSelectedRole] = useState("Applicant");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin(e) {
    e.preventDefault();
    alert("Login will be connected to the CrediFit backend later.");
  }

  return (
    <div className="flex min-h-screen bg-[#f7f9fc]">
      {/* LEFT PANEL */}
      <motion.div
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden min-h-screen w-1/2 flex-col justify-between overflow-hidden bg-[#071a35] p-8 text-white lg:flex xl:p-10"
      >
        {/* Background glow */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-600/30 blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-[100px]" />

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        <a href="/" className="relative z-10 text-2xl font-extrabold">
          CrediFit<span className="text-blue-400">.</span>
        </a>

        <div className="relative z-10 max-w-xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            SMART ADMISSION MANAGEMENT
          </div>

          <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
            Your journey.
            <br />
            Your future.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              One platform.
            </span>
          </h1>

          <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Experience a smarter admission journey with structured screening,
            transparent evaluation and centralized application tracking.
          </p>

          {/* Floating information cards */}
          <div className="relative mt-8 h-40">
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="absolute left-0 top-0 w-60 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-xs text-blue-200">APPLICATION WORKFLOW</p>

              <div className="mt-3 flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/20 p-3 text-cyan-300">
                  <GraduationCap size={23} />
                </div>

                <div>
                  <p className="text-sm font-bold">Application</p>
                  <p className="text-xs text-slate-300">Stage-wise screening</p>
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  animate={{ width: ["35%", "75%", "35%"] }}
                  transition={{ duration: 5, repeat: Infinity }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.03 }}
              className="absolute right-0 top-12 rounded-2xl border border-white/15 bg-[#102b4c]/90 p-4 shadow-2xl backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-400/15 p-3 text-emerald-300">
                  <ShieldCheck size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold">Smart Screening</p>
                  <p className="text-xs text-slate-300">
                    Structured evaluation
                  </p>
                </div>
              </div>

              <p className="mt-3 text-xs text-cyan-200">
                One connected platform
              </p>
            </motion.div>
          </div>
        </div>

        <p className="relative z-10 text-xs text-slate-400">
          © 2026 CrediFit · Admission Management Platform
        </p>
      </motion.div>

      {/* RIGHT LOGIN PANEL */}
      <div className="flex flex-1 items-center justify-center px-5 py-6 lg:py-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg"
        >
          <div className="mb-6 lg:hidden">
            <a href="/" className="text-3xl font-extrabold text-[#173b61]">
              CrediFit<span className="text-blue-500">.</span>
            </a>
          </div>

          <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
            Welcome back
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#173b61]">
            Sign in to CrediFit
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Select your role to continue to your account.
          </p>

          {/* ROLE SELECTION */}
          <div className="mt-6 grid grid-cols-2 gap-2">
            {roles.map((role) => {
              const Icon = role.icon;
              const active = selectedRole === role.name;

              return (
                <button
                  type="button"
                  key={role.name}
                  onClick={() => setSelectedRole(role.name)}
                  className={`group rounded-xl border p-3 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                    active
                      ? "border-blue-600 bg-blue-50 shadow-md ring-1 ring-blue-600"
                      : "border-slate-200 bg-white hover:border-blue-400"
                  }`}
                >
                  <Icon
                    size={22}
                    className={`transition-transform duration-300 group-hover:scale-110 ${
                      active
                        ? "text-blue-600"
                        : "text-slate-500 group-hover:text-blue-600"
                    }`}
                  />

                  <p className="mt-2 text-sm font-bold text-[#173b61]">
                    {role.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {role.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* LOGIN FORM */}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Email address
              </label>

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>

            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-12 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#173b61] py-3 font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Sign In
              <ArrowRight size={18} />
            </button>
          </form>
          <>
            {/* GOOGLE SIGN IN */}
            <button
              type="button"
              onClick={() =>
                alert(
                  "Google Sign-In will be connected with backend OAuth later.",
                )
              }
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white py-3 font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
            >
              {/* Keep your existing four-colour Google SVG here */}
              <svg
                viewBox="0 0 48 48"
                className="h-5 w-5 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  fill="#4285F4"
                  d="M43.6 24.5c0-1.4-.1-2.7-.4-4H24v7.6h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.9-3.6 6.1-8.8 6.1-14.6z"
                />
                <path
                  fill="#34A853"
                  d="M24 44c5.4 0 9.9-1.8 13.2-4.9l-6.6-5c-1.8 1.2-4 1.9-6.6 1.9-5.1 0-9.4-3.4-10.9-8H6.3v5.2C9.6 39.6 16.3 44 24 44z"
                />
                <path
                  fill="#FBBC05"
                  d="M13.1 28c-.4-1.2-.7-2.6-.7-4s.3-2.8.7-4v-5.2H6.3C4.8 17.7 4 20.8 4 24s.8 6.3 2.3 9.2l5.3-4.1 1.5-1.1z"
                />
                <path
                  fill="#EA4335"
                  d="M24 12c2.9 0 5.5 1 7.5 3l5.6-5.6C33.9 6.1 29.4 4 24 4 16.3 4 9.6 8.4 6.3 14.8l6.8 5.2c1.5-4.6 5.8-8 10.9-8z"
                />
              </svg>
              Continue with Google
            </button>

            <div className="mt-5 flex items-center gap-3">
              <div className="h-px flex-1 bg-slate-200" />
              <span className="text-xs font-medium text-slate-400">
                OR CONTINUE WITH EMAIL
              </span>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
          </>

          <p className="mt-5 text-center text-sm text-slate-500">
            New applicant?{" "}
            <a
              href="/register"
              className="font-bold text-blue-600 transition hover:underline"
            >
              Create an account
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
