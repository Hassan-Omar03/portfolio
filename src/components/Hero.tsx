import { useState, useEffect } from 'react';
import { Github, Linkedin, Download, MessageCircle, ArrowRight, MapPin, Sparkles, Star } from 'lucide-react';

const TYPING_STRINGS = [
  'Full Stack MERN Developer',
  'React & Node.js Expert',
  'AI-Assisted Developer',
  'Production App Builder',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 40 : 80;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex(c => c + 1);
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setStringIndex(s => (s + 1) % TYPING_STRINGS.length);
          setCharIndex(0);
        } else {
          setCharIndex(c => c - 1);
        }
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  const stats = [
    { value: '10+', label: 'Projects Delivered' },
    { value: '1', label: 'Year Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Live Global Sites' },
  ];

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS'];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050d1a] text-white relative overflow-hidden pt-20">
      {/* Grid */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[650px] h-[650px] bg-blue-600/20 rounded-full filter blur-[130px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[550px] h-[550px] bg-teal-500/15 rounded-full filter blur-[110px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-violet-600/10 rounded-full filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Noise */}
      <div className="noise-overlay" />

      {/* Rotating ring decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/[0.03] rounded-full pointer-events-none animate-rotate-slow" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/[0.04] rounded-full pointer-events-none" style={{ animation: 'rotate-slow 15s linear infinite reverse' }} />

      <div className="container mx-auto px-4 sm:px-6 z-10 py-16">
        <div className="max-w-4xl mx-auto text-center">

          {/* Available badge */}
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-semibold mb-8 animate-fade-in tracking-wide uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Available for new projects
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-5 animate-fade-in-up leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="gradient-text-animated">Mohammad Hassan</span>
          </h1>

          {/* Typing effect */}
          <div className="flex items-center justify-center gap-1.5 mb-6 h-10 animate-fade-in-up animation-delay-200">
            <span className="text-xl md:text-2xl font-semibold text-blue-300">{typedText}</span>
            <span className="w-0.5 h-7 bg-blue-400 animate-pulse ml-0.5 rounded-full" />
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400 px-4">
            I build <span className="text-white font-semibold">scalable, production-ready</span> websites
            with React, Node.js, Express & MongoDB — delivering real business value for clients across
            Africa, Mauritius, and beyond.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-slate-500 mb-10 animate-fade-in-up animation-delay-400">
            <span className="flex items-center gap-1.5 text-sm">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />Punjab, Pakistan
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-1.5 text-sm">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />AI-Powered Dev
            </span>
            <span className="text-slate-700">·</span>
            <span className="flex items-center gap-1.5 text-sm">
              <Star className="w-3.5 h-3.5 text-teal-400" />Remote Ready
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
            <a
              href="/Hassan_Omar_CV.pdf"
              download="Mohammad_Hassan_CV.pdf"
              className="group flex items-center gap-3 px-8 py-4 shimmer-btn rounded-full font-bold text-sm hover:scale-105 transition-transform duration-300 shadow-2xl shadow-blue-500/30 w-full sm:w-auto justify-center"
            >
              <Download className="w-4 h-4 group-hover:animate-bounce" />
              Download CV
            </a>
            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="group flex items-center gap-3 px-8 py-4 glass-card rounded-full font-bold text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-400/40 w-full sm:w-auto justify-center"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-3 mb-14 animate-fade-in-up animation-delay-600">
            <span className="text-slate-600 text-xs">Connect:</span>
            {[
              { href: 'https://github.com/Hassan-Omar03', icon: <Github className="w-4 h-4" />, hover: 'hover:border-slate-400/40 hover:bg-slate-500/10' },
              { href: 'https://www.linkedin.com/in/mohammad-hassan-6919aa111/', icon: <Linkedin className="w-4 h-4" />, hover: 'hover:border-blue-400/40 hover:bg-blue-500/10' },
              { href: 'https://wa.me/923247305909', icon: <MessageCircle className="w-4 h-4" />, hover: 'hover:border-emerald-400/40 hover:bg-emerald-500/10' },
            ].map((s, i) => (
              <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                className={`p-2.5 glass-card rounded-xl ${s.hover} transition-all duration-300 hover:scale-110 text-slate-400 hover:text-white`}>
                {s.icon}
              </a>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-800">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="premium-card rounded-2xl p-4 sm:p-5 text-center hover:border-blue-400/20 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <p className="text-2xl sm:text-3xl font-bold gradient-text-animated group-hover:scale-110 transition-transform">{s.value}</p>
                <p className="text-slate-500 text-xs mt-1.5 leading-tight">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Tech Stack pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 animate-fade-in-up animation-delay-800">
            <span className="text-slate-600 text-xs mr-1">Stack:</span>
            {techStack.map(t => (
              <span key={t} className="glow-tag px-3 py-1.5 glass-card rounded-full text-xs text-slate-400 border border-white/5 hover:border-blue-400/30 hover:text-blue-300 transition-all duration-300 cursor-default">
                {t}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-30">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  );
}
