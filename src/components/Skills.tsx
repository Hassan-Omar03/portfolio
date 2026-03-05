import { useEffect, useRef, useState } from 'react';

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const categories = [
  {
    label: 'Frontend',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    bg: 'bg-blue-500/8',
    border: 'border-blue-500/20',
    dot: 'bg-blue-400',
    glow: 'hover:shadow-blue-500/10',
    skills: ['React.js', 'JavaScript ES6+', 'Next.js', 'Tailwind CSS', 'HTML5 & CSS3', 'Responsive Design'],
  },
  {
    label: 'Backend',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    gradient: 'from-teal-500 to-emerald-400',
    bg: 'bg-teal-500/8',
    border: 'border-teal-500/20',
    dot: 'bg-teal-400',
    glow: 'hover:shadow-teal-500/10',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT & Auth', 'bcrypt & Security', 'CRUD Operations'],
  },
  {
    label: 'Database',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-400',
    bg: 'bg-violet-500/8',
    border: 'border-violet-500/20',
    dot: 'bg-violet-400',
    glow: 'hover:shadow-violet-500/10',
    skills: ['MongoDB', 'Mongoose ODM'],
  },
  {
    label: 'Tools & DevOps',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    gradient: 'from-orange-500 to-amber-400',
    bg: 'bg-orange-500/8',
    border: 'border-orange-500/20',
    dot: 'bg-orange-400',
    glow: 'hover:shadow-orange-500/10',
    skills: ['Git & GitHub', 'Vercel', 'Postman', 'VS Code'],
  },
  {
    label: 'AI Tools',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 010 2h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 010-2h1a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2z" />
      </svg>
    ),
    gradient: 'from-pink-500 to-rose-400',
    bg: 'bg-pink-500/8',
    border: 'border-pink-500/20',
    dot: 'bg-pink-400',
    glow: 'hover:shadow-pink-500/10',
    skills: ['Prompt Engineering', 'ChatGPT', 'AI-Assisted Dev', 'Code Optimization'],
  },
];

const coreStats = [
  { val: '1', label: 'Year Experience', icon: '⚡' },
  { val: '10+', label: 'Projects Delivered', icon: '🚀' },
  { val: '5+', label: 'Countries Served', icon: '🌍' },
  { val: '100%', label: 'Client Satisfaction', icon: '⭐' },
];

const extras = [
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    gradient: 'from-blue-500 to-cyan-400',
    title: 'Production Deployment',
    desc: 'Vercel, cPanel, Domain & DNS, SSL',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 010 2h-1v1a2 2 0 01-2 2H5a2 2 0 01-2-2v-1H2a1 1 0 010-2h1a7 7 0 017-7h1V5.73A2 2 0 0110 4a2 2 0 012-2z" />
      </svg>
    ),
    gradient: 'from-pink-500 to-rose-400',
    title: 'AI-Assisted Development',
    desc: 'ChatGPT, Prompt Engineering',
  },
  {
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    gradient: 'from-violet-500 to-purple-400',
    title: 'Data & Productivity',
    desc: 'Excel, Data Analysis, Reporting',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section id="skills" className="py-20 bg-[#050d1a] text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full filter blur-[120px]" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-teal-500/5 rounded-full filter blur-[80px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-3">EXPERTISE</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>
          <p className="text-slate-500 mt-3 text-sm md:text-base max-w-md mx-auto">
            Full-spectrum MERN stack proficiency — from pixel-perfect UI to scalable APIs.
          </p>
        </div>

        {/* Stats Row */}
        <div className={`grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl mx-auto mb-10 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {coreStats.map((s) => (
            <div key={s.label} className="premium-card rounded-2xl p-4 text-center hover:bg-white/[0.05] transition-all duration-300 group cursor-default">
              <div className="text-xl mb-1">{s.icon}</div>
              <p className="text-xl sm:text-2xl font-bold gradient-text-animated group-hover:scale-110 transition-transform inline-block">{s.val}</p>
              <p className="text-slate-500 text-xs mt-0.5 leading-tight">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skill Category Cards */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`group premium-card rounded-2xl p-5 border ${cat.border} hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-xl ${cat.glow} transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${ci * 80 + 200}ms`, transition: 'all 0.5s ease' }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.gradient} text-white shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {cat.icon}
                </div>
                <div>
                  <h3 className={`text-sm font-bold bg-gradient-to-r ${cat.gradient} bg-clip-text text-transparent`}>
                    {cat.label}
                  </h3>
                  <p className="text-slate-600 text-xs">{cat.skills.length} technologies</p>
                </div>
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`glow-tag inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium ${cat.bg} border ${cat.border} text-slate-300 hover:text-white transition-all cursor-default`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${cat.dot} flex-shrink-0`} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className={`mt-10 max-w-5xl mx-auto transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="premium-card rounded-2xl p-5 sm:p-8">
            <p className="section-label text-center mb-6">ALSO PROFICIENT IN</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {extras.map((item) => (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 p-4 rounded-xl border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${item.gradient} text-white group-hover:scale-110 transition-transform flex-shrink-0 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
