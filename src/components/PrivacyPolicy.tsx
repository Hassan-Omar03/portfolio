import { ArrowLeft, Shield, Mail } from 'lucide-react';

const sections = [
  {
    title: '1. Information We Collect',
    body: `When you use this website or reach out through the contact form, WhatsApp link, or email, we may collect the
    information you voluntarily provide — such as your name, email address, phone number, and the contents of your
    message. We also automatically collect limited technical data (browser type, device type, and general usage
    analytics) to help understand how visitors use the site.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `Information collected is used solely to respond to inquiries, discuss potential projects or collaborations,
    and improve the website experience. We do not sell, rent, or trade your personal information to third parties.`,
  },
  {
    title: '3. Cookies & Analytics',
    body: `This site may use cookies or similar local storage technologies to remember preferences and understand
    aggregate visitor behavior. You can disable cookies through your browser settings at any time without affecting
    your ability to browse the site.`,
  },
  {
    title: '4. Third-Party Services',
    body: `This portfolio links to third-party platforms such as GitHub, LinkedIn, and WhatsApp. Interactions with
    those services are governed by their own privacy policies, and we encourage you to review them separately.`,
  },
  {
    title: '5. Data Security',
    body: `Reasonable technical measures are taken to protect any information submitted through this site.
    However, no method of transmission over the internet is completely secure, and absolute security cannot be
    guaranteed.`,
  },
  {
    title: '6. Your Rights',
    body: `You may request access to, correction of, or deletion of any personal information you've shared with us
    by contacting the email address below. Requests will be handled promptly.`,
  },
  {
    title: '7. Changes to This Policy',
    body: `This Privacy Policy may be updated occasionally to reflect changes in practices or for legal reasons.
    Any updates will be posted on this page with a revised effective date.`,
  },
];

export default function PrivacyPolicy() {
  return (
    <section className="min-h-screen bg-[#050d1a] text-white relative overflow-hidden py-20">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(59,130,246,0.08),transparent_60%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg">
            <Shield className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-slate-500 text-sm mb-10">Effective date: January 1, 2026</p>

        <div className="glass-card rounded-2xl p-6 sm:p-10 border border-white/5 space-y-8">
          <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
            This Privacy Policy explains how Mohammad Hassan ("I", "me") collects, uses, and protects information
            when you visit this portfolio website. By using this site, you agree to the practices described below.
          </p>

          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">{s.title}</h2>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">{s.body}</p>
            </div>
          ))}

          <div className="pt-6 border-t border-white/5">
            <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">Contact</h2>
            <a
              href="mailto:hassanomar7674@gmail.com"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              hassanomar7674@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
