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
    { value: '10+', label: 'Deliverable Projects' },
    { value: '2+', label: 'Years Experience' },
    { value: '100%', label: 'Client Satisfaction' },
    { value: '5+', label: 'Live Global Sites' },
  ];

  const techStack = ['React', 'Node.js', 'MongoDB', 'Express', 'Next.js', 'Tailwind CSS'];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#050d1a] text-white relative overflow-hidden pt-20">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-60" />

      {/* Animated gradient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full filter blur-[120px] animate-blob" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/15 rounded-full filter blur-[100px] animate-blob animation-delay-2000" />
        <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] bg-violet-600/10 rounded-full filter blur-[100px] animate-blob animation-delay-4000" />
      </div>

      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="container mx-auto px-6 z-10 py-16">
        <div className="max-w-5xl mx-auto">
          {/* ── CENTERED CONTENT ── */}
          <div className="text-center">

            {/* Available badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium mb-8 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Available for new projects
            </div>

            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold mb-5 animate-fade-in-up leading-tight tracking-tight">
              Hi, I'm{' '}
              <span className="gradient-text-animated">Mohammad Hassan</span>
            </h1>

            {/* Typing effect */}
            <div className="flex items-center justify-center gap-1 mb-6 h-10 animate-fade-in-up animation-delay-200">
              <span className="text-xl md:text-2xl font-semibold text-blue-300">{typedText}</span>
              <span className="w-0.5 h-7 bg-blue-400 animate-pulse ml-0.5 rounded-full" />
            </div>

            {/* Description */}
            <p className="text-lg text-slate-400 mb-6 leading-relaxed max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
              I build <span className="text-white font-medium">scalable, production-ready</span> websites
              with React, Node.js, Express & MongoDB — delivering real business value for international clients across
              Africa, Mauritius, and beyond.
            </p>

            {/* Location + tags */}
            <div className="flex items-center justify-center gap-2 text-slate-500 mb-10 animate-fade-in-up animation-delay-400">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-sm">Punjab, Pakistan</span>
              <span className="text-slate-700">·</span>
              <Sparkles className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span className="text-sm text-slate-500">AI-Assisted Development</span>
              <span className="text-slate-700">·</span>
              <Star className="w-4 h-4 text-teal-400 flex-shrink-0" />
              <span className="text-sm text-slate-500">Remote Ready</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 animate-fade-in-up animation-delay-600">
              <a
                href="/Hassan_Omar_CV.pdf"
                download="Mohammad_Hassan_CV.pdf"
                className="group flex items-center gap-3 px-9 py-4 shimmer-btn rounded-full font-semibold text-base hover:scale-105 transition-transform duration-300 shadow-xl shadow-blue-500/25"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                Download CV
              </a>
              <a
                href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="group flex items-center gap-3 px-9 py-4 glass-card rounded-full font-semibold text-base hover:bg-white/10 hover:scale-105 transition-all duration-300 border border-white/10 hover:border-blue-400/40"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center gap-4 mb-14 animate-fade-in-up animation-delay-600">
              <span className="text-slate-600 text-sm">Connect:</span>
              <div className="flex gap-3">
                <a href="https://github.com/Hassan-Omar03" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass-card rounded-xl hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:-rotate-3 group">
                  <Github className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://www.linkedin.com/in/mohammad-hassan-6919aa111/" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass-card rounded-xl hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 hover:rotate-3 group">
                  <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
                <a href="https://wa.me/923247305909" target="_blank" rel="noopener noreferrer"
                  className="p-3 glass-card rounded-xl hover:border-emerald-400/40 hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110 hover:-rotate-3 group">
                  <MessageCircle className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto animate-fade-in-up animation-delay-800">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-5 text-center hover:border-blue-400/30 hover:bg-white/[0.07] transition-all duration-300 group cursor-default"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <p className="text-3xl font-bold gradient-text-animated group-hover:scale-110 transition-transform">{s.value}</p>
                  <p className="text-slate-500 text-xs mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Tech stack pills */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-10 animate-fade-in-up animation-delay-800">
              <span className="text-slate-600 text-xs mr-2">Tech Stack:</span>
              {techStack.map(t => (
                <span key={t} className="px-3 py-1 glass-card rounded-full text-xs text-slate-400 border border-white/5 hover:border-blue-400/30 hover:text-blue-300 transition-all duration-300 cursor-default hover:scale-105">
                  {t}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <span className="text-xs text-slate-500 tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-blue-400 to-transparent" />
      </div>
    </section>
  );
}
