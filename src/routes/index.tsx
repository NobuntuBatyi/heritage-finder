import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 font-sans">
      <Nav />
      <Hero />
      <TrustBar />
      <HowItWorks />
      <Coverage />
      <AssistantPreview />
      <Security />
      <FAQ />
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-zinc-50/80 backdrop-blur-md border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <div className="size-8 bg-brand-primary rounded-sm flex items-center justify-center">
            <span className="text-zinc-50 font-serif font-medium">L</span>
          </div>
          <span className="font-medium tracking-tight text-zinc-800">LegacyFind SA</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-sm text-zinc-600 hover:text-brand-primary transition-colors">
            How it works
          </a>
          <a href="#institutions" className="text-sm text-zinc-600 hover:text-brand-primary transition-colors">
            Institutions
          </a>
          <a href="#security" className="text-sm text-zinc-600 hover:text-brand-primary transition-colors">
            Security
          </a>
          <a href="#faq" className="text-sm text-zinc-600 hover:text-brand-primary transition-colors">
            FAQ
          </a>
          <a
            href="#search"
            className="text-sm font-medium bg-brand-primary text-zinc-50 px-4 py-2 rounded-md ring-1 ring-brand-primary hover:bg-brand-accent transition-colors"
          >
            Start search
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [status, setStatus] = useState<"idle" | "pending">("idle");

  return (
    <section id="top" className="py-20 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h1 className="font-serif text-4xl lg:text-6xl text-zinc-900 leading-tight text-balance mb-6">
            Reconnect with assets that belong to you.
          </h1>
          <p className="text-lg text-zinc-600 mb-8 max-w-[48ch] text-pretty">
            Thousands of South African citizens have unclaimed inheritances, pensions, and insurance
            benefits waiting for collection. Verify your status using your national ID — no account
            required.
          </p>
          <div className="flex items-center gap-4 py-4 border-y border-zinc-200 divide-x divide-zinc-200">
            <div className="pr-4">
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Status</p>
              <p className="text-sm text-zinc-700 font-medium">POPIA Compliant</p>
            </div>
            <div className="px-4">
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Protocol</p>
              <p className="text-sm text-zinc-700 font-medium">OTP Verified</p>
            </div>
            <div className="px-4">
              <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-1">Cost</p>
              <p className="text-sm text-zinc-700 font-medium">Free to citizens</p>
            </div>
          </div>
        </div>

        <div id="search" className="lg:col-span-5">
          <div className="bg-zinc-50 p-8 rounded-xl ring-1 ring-black/5 shadow-xl shadow-zinc-200/50">
            <h2 className="text-lg font-medium text-zinc-900 mb-6">Heritage Search</h2>
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("pending");
              }}
            >
              <Field label="South African ID Number" placeholder="920101 5000 081" />
              <Field label="Full Legal Name" placeholder="e.g. Sipho Gumede" />
              <Field label="Mobile Number" placeholder="+27 82 000 0000" type="tel" />
              <button
                type="submit"
                className="w-full bg-brand-primary text-zinc-50 font-medium py-3 rounded-md ring-1 ring-brand-primary shadow-sm hover:brightness-110 transition-transform mt-2"
              >
                Verify Identity
              </button>
              {status === "pending" ? (
                <p className="text-xs text-brand-primary text-center mt-3 px-4">
                  OTP verification is coming soon. Your details were not sent or stored.
                </p>
              ) : (
                <p className="text-[11px] text-zinc-400 text-center mt-4 px-4">
                  By clicking search, you agree to our processing terms. We will never share your ID
                  with third parties without direct consent.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-500 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-white border border-zinc-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/20"
      />
    </div>
  );
}

function TrustBar() {
  const orgs = [
    "Master's Office",
    "Standard Bank",
    "Old Mutual",
    "Sanlam",
    "GEPF",
    "Liberty Life",
  ];
  return (
    <section id="institutions" className="py-10 bg-zinc-100 border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-6 text-center">
          Integrated with national institutions
        </p>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-60 grayscale">
          {orgs.map((o) => (
            <span key={o} className="text-sm font-semibold text-zinc-600">
              {o}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "ID Verification",
      body: "Enter your 13-digit identity number. We cross-reference this against national databases to confirm your profile.",
    },
    {
      n: "02",
      title: "OTP Authentication",
      body: "A secure code is sent to your registered mobile number to ensure that only you can access your personal records.",
    },
    {
      n: "03",
      title: "Claims Review",
      body: "Browse a detailed list of unclaimed assets found across banking, insurance, and government sectors.",
    },
  ];
  return (
    <section id="how" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-[56ch] mb-16">
          <h2 className="font-serif text-3xl text-zinc-900 mb-4">The verification process</h2>
          <p className="text-zinc-600 text-pretty">
            A secure pathway to reclaiming your financial history, developed in alignment with the
            Protection of Personal Information Act.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((s) => (
            <div key={s.n} className="group">
              <div className="size-10 rounded-full border border-zinc-200 flex items-center justify-center mb-6 text-sm font-medium text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-colors">
                {s.n}
              </div>
              <h3 className="text-lg font-medium text-zinc-900 mb-3">{s.title}</h3>
              <p className="text-sm text-zinc-500 leading-relaxed text-pretty">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  const items = [
    {
      title: "Dormant Accounts",
      body: "Unclaimed balances in savings or current accounts left inactive for over three years.",
    },
    {
      title: "Insurance Payouts",
      body: "Life insurance policies where the beneficiary was never located after a claim event.",
    },
    {
      title: "Pension Benefits",
      body: "Forgotten provident fund or pension contributions from previous employers.",
    },
    {
      title: "Trust Funds",
      body: "Assets held by the Guardian's Fund at the Master of the High Court for minors or heirs.",
    },
  ];
  return (
    <section className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-3xl text-zinc-900 mb-4">Search coverage</h2>
            <p className="text-sm text-zinc-500">
              We query over 40 participating financial institutions and government agencies
              simultaneously.
            </p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-px bg-zinc-200 border border-zinc-200 rounded-xl overflow-hidden">
            {items.map((i) => (
              <div key={i.title} className="bg-white p-8">
                <h4 className="font-medium text-zinc-900 mb-2">{i.title}</h4>
                <p className="text-sm text-zinc-500">{i.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AssistantPreview() {
  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-4 block">
            Guided Assistant
          </span>
          <h2 className="font-serif text-3xl text-zinc-900 mb-6">
            Understand estates, benefits, and claims in plain language.
          </h2>
          <p className="text-zinc-600 mb-6 text-pretty max-w-[52ch]">
            Our AI assistant explains what a deceased estate is, how the Master's Office works,
            which documents you need, and what to do when no records are found — without legal
            jargon.
          </p>
          <ul className="space-y-3 text-sm text-zinc-600">
            <li>• How to obtain a Letter of Executorship</li>
            <li>• Claiming from the Guardian's Fund</li>
            <li>• Tracing unclaimed pension contributions</li>
            <li>• Verifying maiden and previous surnames</li>
          </ul>
        </div>
        <div className="bg-zinc-50 rounded-xl ring-1 ring-black/5 p-6 space-y-4">
          <div className="flex justify-end">
            <div className="max-w-[80%] bg-brand-primary text-zinc-50 rounded-2xl rounded-tr-sm px-4 py-3 text-sm">
              What documents do I need to claim from the Guardian's Fund?
            </div>
          </div>
          <div className="flex">
            <div className="max-w-[85%] bg-white border border-zinc-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm text-zinc-700 leading-relaxed">
              You'll typically need your certified ID copy, the deceased's death certificate, proof
              of your relationship (birth or marriage certificate), and the estate's reference
              number if you have it. I can walk you through each step once we find a match.
            </div>
          </div>
          <div className="flex">
            <div className="text-xs text-zinc-400 italic">Assistant is typing…</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Security() {
  return (
    <section id="security" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-primary rounded-2xl p-12 text-zinc-50 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-300 mb-4 block">
              Data Sovereignty
            </span>
            <h2 className="font-serif text-3xl mb-6">Strict adherence to POPIA guidelines</h2>
            <p className="text-zinc-300 text-pretty max-w-[48ch] mb-8">
              Your data is encrypted using banking-grade protocols. We act only as a secure bridge
              between you and the holding institutions. We do not store your identity documents or
              financial history on our servers longer than necessary for verification.
            </p>
            <div className="flex flex-wrap gap-4">
              {["AES-256 Encryption", "Zero-Knowledge Protocol", "No account required"].map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-2 px-3 py-1.5 bg-white/10 rounded-full text-xs"
                >
                  <div className="size-1.5 rounded-full bg-emerald-400" /> {b}
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-72 shrink-0">
            <div className="w-full aspect-square bg-white/5 outline outline-1 -outline-offset-1 outline-white/10 rounded-2xl grid place-items-center relative overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-40 h-40 text-white/70" fill="none" stroke="currentColor" strokeWidth="1.2">
                <circle cx="100" cy="100" r="80" />
                <circle cx="100" cy="100" r="60" />
                <circle cx="100" cy="100" r="40" strokeDasharray="3 3" />
                <path d="M100 40 L120 100 L100 160 L80 100 Z" />
                <text x="100" y="105" textAnchor="middle" fontSize="10" fill="currentColor" stroke="none" fontFamily="serif">POPIA</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Do I need to create an account?",
      a: "No. LegacyFind SA is designed for anonymous, one-time searches. Only your ID, name, and mobile number are used to verify a search — nothing is retained beyond audit logs required by law.",
    },
    {
      q: "Is this a government service?",
      a: "No. LegacyFind SA is an independent platform working alongside participating banks, insurers, pension funds, and the Master's Office to help citizens locate unclaimed assets.",
    },
    {
      q: "Why might no records be found?",
      a: "Records may be filed under a previous surname, contain spelling variations, or belong to institutions not yet participating on the platform. Our AI attempts to match across variations, and you can request a manual review.",
    },
    {
      q: "Is there a fee to claim?",
      a: "The search is free. LegacyFind SA never takes a percentage of any inheritance. Institutions handle payouts directly to you following their own claims process.",
    },
  ];
  return (
    <section id="faq" className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-16">
        <div>
          <h2 className="font-serif text-3xl text-zinc-900 mb-4">Frequently asked</h2>
          <p className="text-sm text-zinc-500">
            Answers to the questions we hear most often from South African citizens.
          </p>
        </div>
        <div className="lg:col-span-2 divide-y divide-zinc-200 border-y border-zinc-200">
          {faqs.map((f) => (
            <details key={f.q} className="py-6 group">
              <summary className="cursor-pointer list-none flex justify-between items-start gap-6">
                <h3 className="text-base font-medium text-zinc-900">{f.q}</h3>
                <span className="text-zinc-400 group-open:rotate-45 transition-transform text-xl leading-none">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-zinc-600 leading-relaxed text-pretty">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-zinc-100 py-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-4">
              <div className="size-6 bg-zinc-800 rounded-sm" />
              <span className="font-medium text-zinc-900">LegacyFind SA</span>
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              An independent verification platform facilitating the reunion of South African
              citizens with unclaimed financial assets. Operated in accordance with the National
              Treasury guidelines.
            </p>
          </div>
          <div className="flex gap-16">
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">Service</h5>
              <ul className="space-y-2">
                <li><a href="#search" className="text-sm text-zinc-600 hover:text-brand-primary">Check Status</a></li>
                <li><a href="#institutions" className="text-sm text-zinc-600 hover:text-brand-primary">Institutions</a></li>
                <li><a href="#how" className="text-sm text-zinc-600 hover:text-brand-primary">Claims Guide</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h5 className="text-xs font-bold uppercase text-zinc-400 tracking-wider">Legal</h5>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-zinc-600 hover:text-brand-primary">Privacy Policy</a></li>
                <li><a href="#security" className="text-sm text-zinc-600 hover:text-brand-primary">POPIA Notice</a></li>
                <li><a href="#" className="text-sm text-zinc-600 hover:text-brand-primary">Terms of Use</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-zinc-200 flex justify-between items-center">
          <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
            © 2026 LegacyFind South Africa
          </p>
          <p className="text-[10px] text-zinc-400 font-medium uppercase tracking-widest">
            Cape Town • Johannesburg
          </p>
        </div>
      </div>
    </footer>
  );
}
