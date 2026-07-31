import { ArrowLeft, Shield, Mail } from 'lucide-react';
import { useEffect } from 'react';

const PAGE_TITLE = 'Privacy Policy | Muhammad Hassan';
const PAGE_DESCRIPTION =
  "Privacy Policy for Muhammad Hassan's portfolio website — how contact form, WhatsApp, and email information is collected, used, and protected.";
const PAGE_URL = 'https://www.hassanomar.site/privacy-policy';

function setMetaContent(selector: string, attr: string, value: string) {
  const el = document.querySelector(selector);
  if (el) el.setAttribute(attr, value);
}

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
  useEffect(() => {
    const previousTitle = document.title;
    document.title = PAGE_TITLE;
    setMetaContent('meta[name="description"]', 'content', PAGE_DESCRIPTION);
    setMetaContent('link[rel="canonical"]', 'href', PAGE_URL);
    setMetaContent('meta[property="og:title"]', 'content', PAGE_TITLE);
    setMetaContent('meta[property="og:description"]', 'content', PAGE_DESCRIPTION);
    setMetaContent('meta[property="og:url"]', 'content', PAGE_URL);
    setMetaContent('meta[name="twitter:title"]', 'content', PAGE_TITLE);
    setMetaContent('meta[name="twitter:description"]', 'content', PAGE_DESCRIPTION);
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="min-h-screen bg-[var(--bg)] text-[var(--text)] relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-3xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--text)] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <div className="flex items-center gap-3 mb-4">
          <div className="p-2.5 rounded-xl bg-[var(--p)]">
            <Shield className="w-5 h-5 text-[var(--bg)]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
        </div>
        <p className="text-[var(--muted)] text-sm mb-10">Effective date: January 1, 2026</p>

        <div className="rounded-2xl p-6 sm:p-10 space-y-8 bg-[var(--card)] border border-[var(--line)]">
          <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">
            This Privacy Policy explains how Muhammad Hassan ("I", "me") collects, uses, and protects information
            when you visit this portfolio website. By using this site, you agree to the practices described below.
          </p>

          {sections.map((s) => (
            <div key={s.title}>
              <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2">{s.title}</h2>
              <p className="text-[var(--muted)] leading-relaxed text-sm sm:text-base">{s.body}</p>
            </div>
          ))}

          <div className="pt-6 border-t border-[var(--line)]">
            <h2 className="text-lg sm:text-xl font-semibold text-[var(--text)] mb-2">Contact</h2>
            <a
              href="mailto:info@hassanomar.site"
              className="inline-flex items-center gap-2 text-[var(--p)] hover:text-[var(--text)] transition-colors text-sm sm:text-base"
            >
              <Mail className="w-4 h-4" />
              info@hassanomar.site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

