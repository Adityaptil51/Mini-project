import { useState } from "react";
import { motion } from "framer-motion";
import {
  UserRound,
  Camera,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  CalendarDays,
  ChevronDown,
  Save,
  ArrowLeft,
  ShieldCheck,
  Lock,
  CheckCircle2,
} from "lucide-react";

import { CountrySelect, StateSelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const fieldStyle =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-blue-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50";

function CustomSelect({ value, onChange, placeholder, options }) {
  const [open, setOpen] = useState(false);

  const selected = options.find((option) => option.value === value);

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`flex h-12 w-full items-center justify-between rounded-xl border bg-white px-4 text-sm transition-all duration-200 ${
          open
            ? "border-blue-500 ring-4 ring-blue-100 shadow-sm"
            : value
              ? "border-blue-200 hover:border-blue-400"
              : "border-slate-200 hover:border-blue-300"
        }`}
      >
        <span
          className={value ? "font-medium text-slate-700" : "text-slate-400"}
        >
          {selected ? selected.label : placeholder}
        </span>

        <ChevronDown
          size={17}
          className={`text-slate-400 transition-transform duration-200 ${
            open ? "rotate-180 text-blue-600" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 rounded-xl border border-blue-200 bg-white p-1.5 shadow-xl shadow-slate-300/40">
          {options.map((option) => (
            <button
              key={option.value}
              type="button"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
              className={`flex w-full items-center justify-between rounded-lg border px-3 py-3 text-left text-sm transition ${
                value === option.value
                  ? "border-blue-200 bg-blue-50 font-semibold text-blue-700"
                  : "border-transparent text-slate-600 hover:border-blue-100 hover:bg-slate-50 hover:text-blue-700"
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

function EditProfile() {
  const [photo, setPhoto] = useState("");
  const [saved, setSaved] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedState, setSelectedState] = useState(null);

  const [profile, setProfile] = useState({
    fullName: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    countryCode: "+91",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "India",
    qualification: "",
    institution: "",
    programme: "",
  });

  function updateField(e) {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  }

  function handlePhoto(e) {
    const file = e.target.files?.[0];

    if (!file) return;

    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      alert("Please choose a JPG, PNG or WEBP image.");
      e.target.value = "";
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert("Profile photo must be below 5 MB.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      setPhoto(reader.result);
      setSaved(false);
    };

    reader.readAsDataURL(file);
    e.target.value = "";
  }

  function handleSave(e) {
    e.preventDefault();

    setSaved(true);
    alert(
      "Profile changes saved in this demo. Backend integration is pending.",
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* TOP NAVIGATION */}
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5 md:px-8">
          <a
            href="/applicant/dashboard"
            className="text-2xl font-extrabold text-[#173b61]"
          >
            CrediFit<span className="text-blue-500">.</span>
          </a>

          <a
            href="/applicant/dashboard"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-4 py-2.5 text-xs font-semibold text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
          >
            <ArrowLeft size={16} />
            Back to dashboard
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-10">
        {/* PAGE HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Account settings
          </p>

          <h1 className="mt-2 text-3xl font-extrabold text-[#173b61]">
            Edit your profile
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage your personal, contact and academic information.
          </p>
        </motion.div>

        <form onSubmit={handleSave} className="space-y-6">
          {/* PROFILE PHOTO */}
          <motion.section
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
              <label className="group relative h-24 w-24 shrink-0 cursor-pointer overflow-hidden rounded-full border-4 border-white bg-slate-100 shadow-lg ring-1 ring-slate-200">
                {photo ? (
                  <img
                    src={photo}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-slate-400">
                    <UserRound size={42} />
                  </div>
                )}

                <span className="absolute inset-0 flex items-center justify-center bg-black/45 text-white opacity-0 transition group-hover:opacity-100">
                  <Camera size={23} />
                </span>

                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={handlePhoto}
                />
              </label>

              <div className="flex-1">
                <h2 className="text-lg font-bold text-[#173b61]">
                  Profile photograph
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  Upload a clear photograph to personalise your applicant
                  account.
                </p>

                <p className="mt-2 text-xs text-slate-400">
                  JPG, PNG or WEBP · Maximum 5 MB
                </p>

                <label className="mt-3 inline-flex cursor-pointer items-center gap-2 rounded-lg border border-slate-200 px-4 py-2 text-xs font-bold text-slate-600 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700">
                  <Camera size={15} />
                  {photo ? "Change photograph" : "Upload photograph"}

                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={handlePhoto}
                  />
                </label>
              </div>
            </div>
          </motion.section>

          {/* PERSONAL INFORMATION */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <UserRound size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#173b61]">
                  Personal information
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Your basic identity details
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Full name
                </label>
                <input
                  required
                  name="fullName"
                  value={profile.fullName}
                  onChange={updateField}
                  placeholder="Enter your full name"
                  className={fieldStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Date of birth
                </label>
                <div className="relative">
                  <CalendarDays className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={profile.dateOfBirth}
                    onChange={updateField}
                    className={`${fieldStyle} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Gender
                </label>
                <CustomSelect
                  value={profile.gender}
                  onChange={(value) =>
                    setProfile((prev) => ({ ...prev, gender: value }))
                  }
                  placeholder="Select gender"
                  options={[
                    { value: "Male", label: "Male" },
                    { value: "Female", label: "Female" },
                    { value: "Other", label: "Other" },
                    { value: "Prefer not to say", label: "Prefer not to say" },
                  ]}
                />
              </div>
            </div>
          </section>

          {/* CONTACT INFORMATION */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-emerald-50 p-3 text-emerald-600">
                <Mail size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#173b61]">
                  Contact information
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  How the admission team can contact you
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Email address
                </label>

                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    name="email"
                    value={profile.email}
                    onChange={updateField}
                    placeholder="you@example.com"
                    className={`${fieldStyle} pl-11`}
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Mobile number
                </label>

                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={profile.countryCode}
                    onChange={updateField}
                    className="w-19 shrink-0 rounded-xl border border-slate-200 bg-white px-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="+91">+91</option>
                    <option value="+971">+971</option>
                    <option value="+1">+1</option>
                    <option value="+44">+44</option>
                    <option value="+61">+61</option>
                    <option value="+977">+977</option>
                  </select>

                  <div className="relative min-w-0 flex-1">
                    <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={updateField}
                      placeholder="Phone number"
                      className={`${fieldStyle} pl-9`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ADDRESS INFORMATION */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-violet-50 p-3 text-violet-600">
                <MapPin size={21} />
              </div>

              <div>
                <h2 className="font-bold text-[#173b61]">
                  Address information
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Your residential details
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Residential address
                </label>
                <input
                  name="address"
                  value={profile.address}
                  onChange={updateField}
                  placeholder="House number, street and locality"
                  className={fieldStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  City
                </label>
                <input
                  name="city"
                  value={profile.city}
                  onChange={updateField}
                  placeholder="Enter city"
                  className={fieldStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  State
                </label>

                <StateSelect
                  countryid={selectedCountry?.id || 0}
                  disabled={!selectedCountry}
                  containerClassName="credifit-location-field"
                  inputClassName="credifit-location-input"
                  defaultValue={selectedState || undefined}
                  onChange={(state) => {
                    setSelectedState(state);

                    setProfile((prev) => ({
                      ...prev,
                      state: state.name,
                    }));

                    setSaved(false);
                  }}
                  placeHolder={
                    selectedCountry
                      ? "Search and select state"
                      : "Select country first"
                  }
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Postal code
                </label>
                <input
                  name="postalCode"
                  value={profile.postalCode}
                  onChange={updateField}
                  placeholder="Enter postal code"
                  className={fieldStyle}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Country
                </label>

                <CountrySelect
                  containerClassName="credifit-location-field"
                  inputClassName="credifit-location-input"
                  defaultValue={selectedCountry || undefined}
                  onChange={(country) => {
                    setSelectedCountry(country);
                    setSelectedState(null);

                    setProfile((prev) => ({
                      ...prev,
                      country: country.name,
                      state: "",
                    }));

                    setSaved(false);
                  }}
                  placeHolder="Search and select country"
                  showFlag
                />
              </div>
            </div>
          </section>

          {/* ACADEMIC INFORMATION */}
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-xl bg-amber-50 p-3 text-amber-600">
                <GraduationCap size={22} />
              </div>

              <div>
                <h2 className="font-bold text-[#173b61]">
                  Academic information
                </h2>
                <p className="mt-1 text-xs text-slate-400">
                  Your educational background
                </p>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Highest qualification
                </label>
                <CustomSelect
                  value={profile.qualification}
                  onChange={(value) =>
                    setProfile((prev) => ({ ...prev, qualification: value }))
                  }
                  placeholder="Select qualification"
                  options={[
                    { value: "10th", label: "10th Standard" },
                    { value: "12th", label: "12th / PUC" },
                    { value: "Diploma", label: "Diploma" },
                    { value: "Degree", label: "Bachelor's Degree" },
                  ]}
                />
              </div>

              <div>
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Interested programme
                </label>
                <CustomSelect
                  value={profile.programme}
                  onChange={(value) =>
                    setProfile((prev) => ({ ...prev, programme: value }))
                  }
                  placeholder="Select programme"
                  options={[
                    {
                      value: "BCA",
                      label: "Bachelor of Computer Applications (BCA)",
                    },
                    {
                      value: "BBA",
                      label: "Bachelor of Business Administration (BBA)",
                    },
                    { value: "B.Com", label: "Bachelor of Commerce (B.Com)" },
                    {
                      value: "MCA",
                      label: "Master of Computer Applications (MCA)",
                    },
                  ]}
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-xs font-semibold text-slate-600">
                  Previous institution
                </label>
                <input
                  name="institution"
                  value={profile.institution}
                  onChange={updateField}
                  placeholder="Enter school or college name"
                  className={fieldStyle}
                />
              </div>
            </div>
          </section>

          {/* SECURITY INFORMATION */}
          <section className="flex flex-col justify-between gap-4 rounded-2xl border border-blue-100 bg-blue-50/60 p-5 sm:flex-row sm:items-center md:p-6">
            <div className="flex items-start gap-3">
              <ShieldCheck
                size={22}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <h3 className="text-sm font-bold text-[#173b61]">
                  Account security
                </h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Password changes and account security settings will be managed
                  through the secure authentication service.
                </p>
              </div>
            </div>

            <span className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-slate-500">
              <Lock size={14} />
              Protected
            </span>
          </section>

          {/* SAVE ACTIONS */}
          <div className="flex flex-col-reverse items-stretch justify-between gap-3 pb-8 sm:flex-row sm:items-center">
            <a
              href="/applicant/dashboard"
              className="rounded-xl border border-slate-200 bg-white px-6 py-3 text-center text-sm font-semibold text-slate-600 transition hover:bg-slate-50"
            >
              Cancel
            </a>

            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#173b61] px-7 py-3 text-sm font-bold text-white shadow-lg shadow-blue-950/10 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <Save size={17} />
              Save changes
            </button>
          </div>

          {saved && (
            <p className="pb-6 text-center text-sm font-semibold text-emerald-600">
              <CheckCircle2 size={16} className="mr-1 inline" />
              Your changes have been saved in this demo.
            </p>
          )}
        </form>
      </main>
    </div>
  );
}

export default EditProfile;
