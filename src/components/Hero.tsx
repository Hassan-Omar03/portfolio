import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

const TYPING_STRINGS = ['Full Stack MERN Developer', 'React & Node.js Expert', 'AI-Assisted Developer', 'Production App Builder'];

const projectPreviews = [
  { img: '/absmd.png', title: 'ABSMD', color: '#3b82f6' },
  { img: '/bim.png', title: 'BIM Africa', color: '#14b8a6' },
  { img: '/travel.png', title: 'Travel Tour', color: '#f97316' },
  { img: '/hawar.png', title: 'Hawar Homes', color: '#8b5cf6' },
  { img: '/flash.png', title: 'Flash Wash', color: '#06b6d4' },
  { img: '/hoda.png', title: 'Hoda Shine', color: '#10b981' },
];

function ParticleField() {
  const particles = Array.from({ length: 60 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 4,
    delay: Math.random() * 5,
    color: ['#3b82f6', '#14b8a6', '#8b5cf6', '#f472b6', '#60a5fa'][Math.floor(Math.random() * 5)],
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(p => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, background: p.color }}
          animate={{
            y: [0, -120, 0],
            x: [0, Math.random() * 40 - 20, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

function FloatingProjectCards() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {projectPreviews.map((p, i) => {
        const positions = [
          { top: '8%', right: '2%', rotate: 12 },
          { top: '35%', right: '-2%', rotate: -8 },
          { bottom: '25%', right: '3%', rotate: 10 },
          { top: '12%', left: '1%', rotate: -12 },
          { top: '45%', left: '-1%', rotate: 8 },
          { bottom: '20%', left: '2%', rotate: -6 },
        ];
        const pos = positions[i];
        return (
          <motion.div
            key={p.title}
            className="absolute w-36 h-24 rounded-xl overflow-hidden shadow-2xl border border-white/20"
            style={{ ...pos, rotate: pos.rotate }}
            initial={{ opacity: 0, scale: 0.5, rotate: pos.rotate + 20 }}
            animate={{
              opacity: [0.7, 1, 0.7],
              y: [0, i % 2 === 0 ? -15 : 15, 0],
              scale: [1, 1.05, 1],
              rotate: [pos.rotate, pos.rotate + 3, pos.rotate],
            }}
            transition={{
              y: { duration: 4 + i * 0.5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' },
              scale: { duration: 3, delay: i * 0.4, repeat: Infinity },
              rotate: { duration: 5, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' },
              opacity: { duration: 3, delay: i * 0.4, repeat: Infinity },
            }}
            whileHover={{ scale: 1.2, zIndex: 50, opacity: 1 }}
          >
            <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-1 left-2">
              <p className="text-white text-[9px] font-bold">{p.title}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-[8px]">Live</span>
              </div>
            </div>
            <div className="absolute inset-0 border border-white/10 rounded-xl" style={{ boxShadow: `0 0 20px ${p.color}40` }} />
          </motion.div>
        );
      })}
    </div>
  );
}

function GlitchText({ text }: { text: string }) {
  return (
    <span className="relative inline-block">
      <span className="gradient-text-animated">{text}</span>
      <motion.span
        className="absolute inset-0 gradient-text-animated"
        style={{ clipPath: 'inset(0 0 60% 0)' }}
        animate={{ x: [-2, 2, -1, 1, 0], opacity: [0, 0.5, 0, 0.3, 0] }}
        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4 }}
      >{text}</motion.span>
      <motion.span
        className="absolute inset-0"
        style={{ clipPath: 'inset(60% 0 0 0)', color: '#f472b6' }}
        animate={{ x: [2, -2, 1, -1, 0], opacity: [0, 0.4, 0, 0.2, 0] }}
        transition={{ duration: 0.15, repeat: Infinity, repeatDelay: 4, delay: 0.05 }}
      >{text}</motion.span>
    </span>
  );
}

function MagneticBtn({ children, className, href, download, onClick }: { children: React.ReactNode; className: string; href?: string; download?: string; onClick?: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });
  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.4);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.4);
  };
  const onLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} style={{ x: sx, y: sy }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {href ? (
        <a href={href} download={download} onClick={onClick} className={className}>{children}</a>
      ) : (
        <button onClick={onClick} className={className}>{children}</button>
      )}
    </motion.div>
  );
}

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [stringIndex, setStringIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [0, window.innerHeight], [5, -5]);
  const rotateY = useTransform(mouseX, [0, window.innerWidth], [-5, 5]);

  useEffect(() => {
    const move = (e: MouseEvent) => { mouseX.set(e.clientX); mouseY.set(e.clientY); };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const current = TYPING_STRINGS[stringIndex];
    const speed = isDeleting ? 30 : 70;
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) setTimeout(() => setIsDeleting(true), 2000);
        else setCharIndex(c => c + 1);
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) { setIsDeleting(false); setStringIndex(s => (s + 1) % TYPING_STRINGS.length); setCharIndex(0); }
        else setCharIndex(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, stringIndex]);

  const stats = [
    { value: '10+', label: 'Projects', icon: '🚀' },
    { value: '1yr', label: 'Experience', icon: '⚡' },
    { value: '100%', label: 'Satisfaction', icon: '⭐' },
    { value: '5+', label: 'Countries', icon: '🌍' },
  ];

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#020812] text-white relative overflow-hidden pt-20">

      {/* Deep space background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,rgba(139,92,246,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_80%,rgba(20,184,166,0.1),transparent_50%)]" />
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none" />

      {/* Particles */}
      <ParticleField />

      {/* Scan line */}
      <div className="scan-line" />

      {/* Rotating rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[800, 600, 450, 300].map((size, i) => (
          <motion.div key={size}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{ repeat: Infinity, duration: 20 + i * 5, ease: 'linear' }}
            className="absolute rounded-full border border-white/5"
            style={{ width: size, height: size, borderColor: ['rgba(59,130,246,0.12)', 'rgba(20,184,166,0.1)', 'rgba(139,92,246,0.08)', 'rgba(244,114,182,0.06)'][i] }}
          />
        ))}
      </div>

      {/* Floating project image cards */}
      <FloatingProjectCards />

      {/* Main content */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 py-16 relative"
        style={{ zIndex: 10, rotateX, rotateY, transformStyle: 'preserve-3d' } as React.CSSProperties}
      >
        <div className="max-w-3xl mx-auto text-center">

          {/* Available badge */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold mb-8 tracking-widest uppercase"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
            </span>
            Available for new projects
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, type: 'spring', stiffness: 80 }}
            className="relative inline-block mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
              className="absolute -inset-3 rounded-full"
              style={{ background: 'conic-gradient(from 0deg, #3b82f6, #14b8a6, #8b5cf6, #f472b6, #3b82f6)', padding: 2 }}
            >
              <div className="w-full h-full rounded-full bg-[#020812]" />
            </motion.div>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 6, ease: 'linear' }}
              className="absolute -inset-5 rounded-full border border-dashed border-blue-500/30"
            />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 shadow-2xl shadow-blue-500/30">
              <img src="/me.jpeg" alt="Mohammad Hassan" className="w-full h-full object-cover object-top" />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
            </div>
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute -bottom-1 -right-1 w-7 h-7 bg-emerald-500 rounded-full border-2 border-[#020812] flex items-center justify-center text-xs"
            >✓</motion.div>
          </motion.div>

          {/* Name with glitch */}
          <motion.div
            initial={{ opacity: 0, y: 60, rotateX: 30 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 80 }}
            style={{ perspective: 1000 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mb-4 leading-none tracking-tighter">
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="block text-white/90"
              >Mohammad</motion.span>
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="block"
              >
                <GlitchText text="Hassan" />
              </motion.span>
            </h1>
          </motion.div>

          {/* Typing */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center gap-2 mb-6 h-12"
          >
            <motion.div
              className="px-4 py-2 rounded-lg border border-blue-500/30 bg-blue-500/10 backdrop-blur-sm"
              animate={{ borderColor: ['rgba(59,130,246,0.3)', 'rgba(20,184,166,0.5)', 'rgba(139,92,246,0.3)', 'rgba(59,130,246,0.3)'] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <span className="text-lg md:text-xl font-bold text-blue-300">{typedText}</span>
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-0.5 h-5 bg-blue-400 ml-1 align-middle"
              />
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="text-slate-400 mb-8 leading-relaxed max-w-xl mx-auto text-sm sm:text-base px-4"
          >
            Building <span className="text-white font-semibold">scalable, production-ready</span> websites with React, Node.js & MongoDB for clients across <span className="text-blue-400 font-medium">Africa, Mauritius, UAE & beyond.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <MagneticBtn
              href="/Hassan_Omar_CV.pdf"
              download="Mohammad_Hassan_CV.pdf"
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm w-full sm:w-auto justify-center overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{ background: 'linear-gradient(90deg, #2563eb, #0ea5e9, #14b8a6, #8b5cf6, #2563eb)', backgroundSize: '300% 100%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <span className="relative flex items-center gap-2">
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                Download CV
              </span>
            </MagneticBtn>

            <MagneticBtn
              href="#contact"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm w-full sm:w-auto justify-center border border-white/15 hover:border-blue-400/50 transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.15), transparent)' }}
              />
              <span className="relative flex items-center gap-2">
                Get In Touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </MagneticBtn>
          </motion.div>

          {/* Stats with project images */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-4 gap-3 max-w-2xl mx-auto mb-10"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.1 + i * 0.1, type: 'spring' }}
                whileHover={{ scale: 1.1, y: -8, rotateY: 10, z: 30 }}
                className="premium-card rounded-2xl p-3 text-center cursor-default relative overflow-hidden group"
                style={{ transformStyle: 'preserve-3d', perspective: 600 }}
              >
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'radial-gradient(circle at center, rgba(59,130,246,0.1), transparent)' }}
                />
                <div className="text-xl mb-1">{s.icon}</div>
                <p className="text-xl font-black gradient-text-animated">{s.value}</p>
                <p className="text-slate-500 text-[10px] mt-0.5">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Project image strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="relative overflow-hidden rounded-2xl border border-white/10 mb-8"
          >
            <p className="text-slate-600 text-xs uppercase tracking-widest mb-3 pt-3">Live Projects</p>
            <div className="flex gap-2 px-3 pb-3 overflow-x-auto scrollbar-hide">
              {['/absmd.png', '/bim.png', '/travel.png', '/hawar.png', '/flash.png', '/hoda.png', '/quotation.png', '/construction.png'].map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.06, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.15, y: -5, zIndex: 10 }}
                  className="flex-shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-white/10 cursor-pointer relative group"
                >
                  <img src={img} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social links with images */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: 'https://github.com/Hassan-Omar03', label: 'GitHub', bg: 'from-slate-700 to-slate-900' },
              { href: 'https://www.linkedin.com/in/mohammad-hassan-6919aa111/', label: 'LinkedIn', bg: 'from-blue-700 to-blue-900' },
              { href: 'https://wa.me/923247305909', label: 'WhatsApp', bg: 'from-emerald-700 to-emerald-900' },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.6 + i * 0.1, type: 'spring', stiffness: 300 }}
                whileHover={{ scale: 1.15, y: -4 }}
                whileTap={{ scale: 0.9 }}
                className={`px-4 py-2 rounded-full bg-gradient-to-r ${s.bg} text-white text-xs font-semibold border border-white/10 hover:border-white/30 transition-all duration-300`}
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 10 }}
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-blue-400 rounded-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
