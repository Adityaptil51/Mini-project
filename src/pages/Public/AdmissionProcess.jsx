import { motion } from "framer-motion";
import {
  UserPlus,
  FileUp,
  ClipboardCheck,
  ShieldCheck,
  Bell,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
} from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Applicant Registration",
    description:
      "Create an account and provide your personal and academic information.",
    icon: UserPlus,
    status: "Application begins",
  },
  {
    number: "02",
    title: "Document Submission",
    description:
      "Upload the required academic documents, certificates and supporting records.",
    icon: FileUp,
    status: "Document upload",
  },
  {
    number: "03",
    title: "Document Verification",
    description:
      "Admission officers review submitted documents and request corrections when necessary.",
    icon: ClipboardCheck,
    status: "Verification",
  },
  {
    number: "04",
    title: "Eligibility Screening",
    description:
      "The eligibility engine checks academic qualifications against programme requirements.",
    icon: ShieldCheck,
    status: "Eligibility assessment",
  },
  {
    number: "05",
    title: "Admission Evaluation",
    description:
      "Evaluators review the application and complete any required assessment stages.",
    icon: GraduationCap,
    status: "Evaluation",
  },
  {
    number: "06",
    title: "Final Admission Decision",
    description:
      "The final admission decision is recorded and the applicant is notified of the outcome.",
    icon: Bell,
    status: "Final decision",
  },
];

function AdmissionProcess() {
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
            Simple. Transparent. Structured.
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-[#173b61] md:text-6xl">
            Your admission journey,
            <span className="text-blue-600"> step by step.</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-500">
            CrediFit organizes the admission process into clear stages, helping
            applicants and admission teams track every step.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {[
            ["06", "Admission stages"],
            ["04", "Core user roles"],
            ["01", "Centralized platform"],
          ].map(([number, label]) => (
            <div
              key={label}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <p className="text-3xl font-extrabold text-blue-600">{number}</p>
              <p className="mt-2 text-sm font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <div className="mb-10">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              The workflow
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#173b61] md:text-4xl">
              How admission works
            </h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-500">
              Each stage has a defined purpose, ensuring that applications move
              through a structured screening process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={stage.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="rounded-xl bg-blue-50 p-3 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-3xl font-extrabold text-slate-200">
                      {stage.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#173b61]">
                    {stage.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {stage.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 border-t border-slate-100 pt-5 text-sm font-semibold text-blue-600">
                    <CheckCircle2 size={17} />
                    {stage.status}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 rounded-3xl bg-[#173b61] p-8 text-white md:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-300">
              Ready to begin?
            </p>

            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">
              Start your admission journey with CrediFit.
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Register as an applicant and follow your application through every
              screening stage.
            </p>

            <button
              onClick={() => (window.location.href = "/login")}
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-6 py-4 font-bold text-[#173b61] transition hover:bg-blue-50"
            >
              Get Started
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AdmissionProcess;
