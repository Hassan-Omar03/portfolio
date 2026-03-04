import { useEffect, useRef, useState } from 'react';

function useInView(ref: React.RefObject<Element>, threshold = 0.15) {
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
    emoji: '🎨',
    color: 'from-blue-500 to-cyan-500',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/10',
    skills: [
      { name: 'React.js', level: 95, icon: '⚛️' },
      { name: 'JavaScript (ES6+)', level: 95, icon: '🟨' },
      { name: 'Next.js', level: 85, icon: '▲' },
      { name: 'Tailwind CSS', level: 93, icon: '🎐' },
      { name: 'Responsive Design', level: 94, icon: '📱' },
      { name: 'HTML5 & CSS3', level: 97, icon: '🌐' },
    ],
  },
  {
    label: 'Backend',
    emoji: '⚙️',
    color: 'from-teal-500 to-emerald-500',
    border: 'border-teal-500/20',
    glow: 'shadow-teal-500/10',
    skills: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Express.js', level: 92, icon: '🚂' },
      { name: 'RESTful APIs', level: 94, icon: '🔗' },
      { name: 'JWT & Auth', level: 90, icon: '🔐' },
      { name: 'bcrypt & Security', level: 88, icon: '🛡️' },
      { name: 'CRUD Operations', level: 95, icon: '📋' },
    ],
  },
  {
    label: 'Database',
    emoji: '🗄️',
    color: 'from-violet-500 to-purple-600',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/10',
    skills: [
      { name: 'MongoDB', level: 88, icon: '🍃' },
      { name: 'Mongoose', level: 87, icon: '📦' },
    ],
  },
  {
    label: 'Tools & DevOps',
    emoji: '🛠️',
    color: 'from-orange-500 to-amber-500',
    border: 'border-orange-500/20',
    glow: 'shadow-orange-500/10',
    skills: [
      { name: 'Git & GitHub', level: 93, icon: '🐙' },
      { name: 'Vercel & Deployment', level: 90, icon: '▲' },
      { name: 'Postman', level: 91, icon: '📬' },
      { name: 'VS Code', level: 95, icon: '💻' },
    ],
  },
  {
    label: 'AI Tools',
    emoji: '🤖',
    color: 'from-pink-500 to-rose-500',
    border: 'border-pink-500/20',
    glow: 'shadow-pink-500/10',
    skills: [
      { name: 'Prompt Engineering', level: 88, icon: '✨' },
      { name: 'ChatGPT', level: 90, icon: '🧠' },
      { name: 'AI-Assisted Debug', level: 86, icon: '🔍' },
    ],
  },
];

function SkillBar({ name, level, icon, color, delay, visible }: {
  name: string; level: number; icon: string;
  color: string; delay: number; visible: boolean;
}) {
  return (
    <div
      className={`transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-slate-300 text-sm font-medium">{name}</span>
        </div>
        <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${color} text-white`}>
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-1000 ease-out`}
          style={{ width: visible ? `${level}%` : '0%', transitionDelay: `${delay + 200}ms` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section id="skills" className="py-24 bg-[#050d1a] text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/5 rounded-full filter blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-3">EXPERTISE</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Technical <span className="gradient-text-animated">Skills</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-md mx-auto">
            Full-spectrum MERN stack proficiency, from pixel-perfect UI to scalable APIs.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {categories.map((cat, ci) => (
            <div
              key={cat.label}
              className={`glass-card rounded-2xl p-6 border ${cat.border} hover:bg-white/[0.05] hover:shadow-xl ${cat.glow} transition-all duration-400 hover:-translate-y-1 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${ci * 100}ms`, transition: 'all 0.5s ease' }}
            >
              {/* Card header */}
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${cat.color} text-white text-xl shadow-md`}>
                  {cat.emoji}
                </div>
                <h3 className={`text-lg font-bold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                  {cat.label}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                    color={cat.color}
                    delay={ci * 100 + si * 60}
                    visible={visible}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip — additional */}
        <div className={`mt-16 max-w-5xl mx-auto glass-card rounded-2xl p-8 border border-white/5 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label text-center mb-6">ALSO PROFICIENT IN</p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '☁️', title: 'Production Deployment', desc: 'Vercel, cPanel, Domain & DNS, SSL Configuration' },
              { icon: '🤖', title: 'AI-Assisted Development', desc: 'ChatGPT, Prompt Engineering, Code Optimization' },
              { icon: '📊', title: 'Data & Productivity', desc: 'Microsoft Excel, Data Analysis, Client Reporting' },
            ].map(item => (
              <div key={item.title} className="group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">{item.icon}</div>
                <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
