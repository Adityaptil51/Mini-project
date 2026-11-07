import { useState } from "react";
import { motion } from "framer-motion";
import {
  UserRound,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  BookOpen,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Search,
  Globe2,
} from "lucide-react";

const countries = [
  { name: "India", dial: "+91" },
  { name: "United Arab Emirates", dial: "+971" },
  { name: "United States", dial: "+1" },
  { name: "United Kingdom", dial: "+44" },
  { name: "Canada", dial: "+1" },
  { name: "Australia", dial: "+61" },
  { name: "Saudi Arabia", dial: "+966" },
  { name: "Pakistan", dial: "+92" },
  { name: "Nepal", dial: "+977" },
  { name: "Bangladesh", dial: "+880" },
  { name: "Sri Lanka", dial: "+94" },
  { name: "Qatar", dial: "+974" },
  { name: "Kuwait", dial: "+965" },
  { name: "Oman", dial: "+968" },
  { name: "Singapore", dial: "+65" },
  { name: "Malaysia", dial: "+60" },
  { name: "Germany", dial: "+49" },
  { name: "France", dial: "+33" },
  { name: "Japan", dial: "+81" },
  { name: "China", dial: "+86" },
];

const qualifications = [
  { value: "10th", label: "10th Standard" },
  { value: "12th", label: "12th Standard / PUC" },
  { value: "diploma", label: "Diploma" },
  { value: "degree", label: "Bachelor's Degree" },
];

const programmes = [
  { value: "BCA", label: "BCA" },
  { value: "BBA", label: "BBA" },
  { value: "BCom", label: "B.Com" },
  { value: "MCA", label: "MCA" },
];

const inputStyle =
  "h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-700 outline-none transition-all duration-200 placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

function SelectField({ icon: Icon, placeholder, options, value, onChange }) {
  const [open, setOpen] = useState(false);

  const selected = options.find((option) => option.value === value);

  return (
    <div className="relative min-w-0">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => setOpen(!open)}
        className={`flex h-12 w-full items-center gap-3 rounded-xl border bg-white px-4 text-left text-sm transition-all duration-200 ${
          open
            ? "border-blue-500 ring-4 ring-blue-100 shadow-sm"
            : value
              ? "border-blue-200 hover:border-blue-400"
              : "border-slate-200 hover:border-blue-300"
        }`}
      >
        <Icon
          size={19}
          className={`shrink-0 ${value || open ? "text-blue-600" : "text-slate-400"}`}
        />

        <span
          className={`min-w-0 flex-1 truncate ${
            value ? "font-medium text-slate-700" : "text-slate-400"
          }`}
        >
          {selected ? selected.label : placeholder}
        </span>

        <ChevronDown
          size={17}
          className={`shrink-0 text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-xl border border-blue-200 bg-white p-1.5 shadow-xl shadow-slate-300/40"
        >
          {options.map((option) => (
            <button
              type="button"
              role="option"
              aria-selected={value === option.value}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-3 text-left text-sm transition ${
                value === option.value
                  ? "bg-blue-50 font-semibold text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-blue-700"
              }`}
            >
              {option.label}

              {value === option.value && (
                <CheckCircle2 size={17} className="text-blue-600" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function CountrySelector({ country, onChange }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((item) => {
    const query = search.trim().toLowerCase().replace(/^\+/, "");

    return (
      item.name.toLowerCase().includes(query) ||
      item.dial.replace("+", "").includes(query)
    );
  });

  return (
    <div className="relative shrink-0">
      <button
        type="button"
        onClick={() => {
          setOpen(!open);
          setSearch("");
        }}
        aria-expanded={open}
        className={`flex h-12 min-w-[112px] items-center justify-center gap-2 rounded-l-xl border border-r-0 bg-slate-50 px-3 text-sm font-semibold transition ${
          open
            ? "border-blue-500 ring-2 ring-inset ring-blue-100"
            : "border-slate-200 hover:bg-blue-50"
        }`}
      >
        <span className="text-xl">{country.flag}</span>
        <span className="text-slate-700">{country.dial}</span>
        <ChevronDown
          size={15}
          className={`text-slate-400 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-50 mt-2 w-72 overflow-hidden rounded-xl border border-blue-200 bg-white p-2 shadow-2xl shadow-slate-300/50">
          <div className="relative">
            <Search
              size={17}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              autoFocus
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search country or code (91, 971...)"
              className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-3 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mt-2 max-h-52 overflow-y-auto">
            {filteredCountries.length > 0 ? (
              filteredCountries.map((item, index) => (
                <button
                  type="button"
                  key={`${item.name}-${item.dial}`}
                  onClick={() => {
                    onChange(item);
                    setOpen(false);
                    setSearch("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition ${
                    country.name === item.name
                      ? "bg-blue-50"
                      : "hover:bg-slate-50"
                  }`}
                >
                  <span className="text-xl">{item.flag}</span>

                  <span className="flex-1 truncate text-sm text-slate-700">
                    {item.name}
                  </span>

                  <span className="text-sm font-semibold text-slate-500">
                    {item.dial}
                  </span>
                </button>
              ))
            ) : (
              <p className="px-3 py-5 text-center text-sm text-slate-400">
                No matching country found
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function RegisterPage() {
  const [country, setCountry] = useState(countries[0]);
  const [phone, setPhone] = useState("");

  const [qualification, setQualification] = useState("");
  const [programme, setProgramme] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function handleRegister(e) {
    e.preventDefault();

    if (!qualification || !programme) {
      alert("Please select your qualification and programme.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    alert(
      `Registration demo successful.\nPhone: ${country.dial} ${phone}\nBackend connection will be added later.`,
    );
  }

  function handleGoogle() {
    alert("Google registration will be connected with backend OAuth later.");
  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] lg:flex lg:h-screen lg:overflow-hidden">
      {/* LEFT BRANDING PANEL */}
      <motion.aside
        initial={{ opacity: 0, x: -25 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="relative hidden min-h-screen w-[38%] flex-col justify-between overflow-hidden bg-[#071a35] p-10 text-white lg:flex xl:p-12"
      >
        <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-600/30 blur-[100px]" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <a href="/" className="relative z-10 text-3xl font-extrabold">
          CrediFit<span className="text-blue-400">.</span>
        </a>

        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            SMART ADMISSION MANAGEMENT
          </div>

          <h1 className="text-4xl font-extrabold leading-tight xl:text-5xl">
            Your future.
            <br />
            Your application.
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Your journey.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
            Create your CrediFit account and manage your admission journey
            through a clear and structured screening process.
          </p>

          <div className="mt-9 space-y-5">
            {[
              "Centralized application management",
              "Transparent document verification",
              "Stage-wise admission tracking",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={19} className="shrink-0 text-cyan-300" />
                <span className="text-sm text-slate-200">{item}</span>
              </div>
            ))}
          </div>

          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="mt-10 rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl backdrop-blur-xl"
          >
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-400/15 p-3 text-cyan-300">
                <GraduationCap size={28} />
              </div>

              <div>
                <p className="font-bold">Your admission journey</p>
                <p className="mt-1 text-xs text-slate-300">
                  One connected platform
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <p className="relative z-10 text-xs text-slate-400">
          © 2026 CrediFit · All rights reserved.
        </p>
      </motion.aside>

      {/* RIGHT REGISTRATION FORM */}
      <main className="flex flex-1 items-center justify-center px-5 py-8 lg:min-h-0 lg:overflow-y-auto lg:px-8 lg:py-5">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-2xl"
        >
          <a
            href="/"
            className="mb-5 inline-block text-3xl font-extrabold text-[#173b61] lg:hidden"
          >
            CrediFit<span className="text-blue-500">.</span>
          </a>

          <p className="text-xs font-bold uppercase tracking-widest text-blue-600">
            Applicant registration
          </p>

          <h2 className="mt-2 text-3xl font-extrabold text-[#173b61]">
            Create your account
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Fill in your details to start your admission journey.
          </p>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* PERSONAL INFORMATION */}
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-[#173b61]">
                <UserRound size={17} className="text-blue-600" />
                Personal Information
              </p>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Full name"
                  className={inputStyle}
                />

                <input
                  type="date"
                  name="dateOfBirth"
                  required
                  aria-label="Date of birth"
                  className={`${inputStyle} cursor-pointer`}
                />
              </div>
            </div>

            {/* CONTACT INFORMATION */}
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-[#173b61]">
                <Mail size={17} className="text-blue-600" />
                Contact Information
              </p>

              <div className="grid grid-cols-2 gap-3">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email address"
                  className={inputStyle}
                />

                <div className="relative flex min-w-0">
                  <CountrySelector country={country} onChange={setCountry} />

                  <input
                    type="tel"
                    name="phone"
                    required
                    inputMode="numeric"
                    pattern="[0-9]{6,15}"
                    maxLength={15}
                    value={phone}
                    onChange={(e) =>
                      setPhone(e.target.value.replace(/\D/g, ""))
                    }
                    placeholder="Phone number"
                    aria-label="Phone number"
                    className="h-12 min-w-0 flex-1 rounded-r-xl border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>
            </div>

            {/* ACADEMIC INFORMATION */}
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-[#173b61]">
                <GraduationCap size={18} className="text-blue-600" />
                Academic Information
              </p>

              <div className="grid grid-cols-2 gap-3">
                <SelectField
                  icon={BookOpen}
                  placeholder="Highest qualification"
                  options={qualifications}
                  value={qualification}
                  onChange={setQualification}
                />

                <SelectField
                  icon={GraduationCap}
                  placeholder="Choose programme"
                  options={programmes}
                  value={programme}
                  onChange={setProgramme}
                />
              </div>
            </div>

            {/* ACCOUNT SECURITY */}
            <div>
              <p className="mb-2 flex items-center gap-2 text-sm font-bold text-[#173b61]">
                <Lock size={17} className="text-blue-600" />
                Account Security
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    minLength={8}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create password"
                    className={`${inputStyle} pr-11`}
                  />

                  <button
                    type="button"
                    aria-label="Show or hide password"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <div className="relative">
                  <input
                    type={showConfirm ? "text" : "password"}
                    name="confirmPassword"
                    required
                    minLength={8}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm password"
                    className={`${inputStyle} pr-11`}
                  />

                  <button
                    type="button"
                    aria-label="Show or hide confirmation password"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-blue-600"
                  >
                    {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>
            </div>

            {/* TERMS */}
            <label className="flex cursor-pointer items-start gap-3 text-xs leading-5 text-slate-500">
              <input
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0 accent-blue-600"
              />

              <span>
                I confirm that my information is accurate and agree to the
                CrediFit terms and conditions.
              </span>
            </label>

            {/* SUBMIT */}
            <button
              type="submit"
              className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#173b61] text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg"
            >
              Create Account
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-[11px] font-semibold tracking-wider text-slate-400">
              OR REGISTER WITH EMAIL
            </span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* GOOGLE REGISTRATION */}
          <button
            type="button"
            onClick={handleGoogle}
            className="mt-5 flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-md"
          >
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

          <p className="mt-5 text-center text-sm text-slate-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-bold text-blue-600 transition hover:underline"
            >
              Sign in
            </a>
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default RegisterPage;
