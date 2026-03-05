import { useEffect, useRef, useState } from 'react';
import { Server, Database, Layout, Globe, Shield, Cpu, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: <Layout className="w-5 h-5" />,
    title: 'Frontend Development',
    color: 'from-blue-500 to-cyan-400',
    shadow: 'hover:shadow-blue-500/20',
    items: ['React.js & Next.js SPAs', 'Responsive & Mobile-First UI', 'Tailwind CSS & modern design'],
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: 'Backend Development',
    color: 'from-teal-500 to-emerald-400',
    shadow: 'hover:shadow-teal-500/20',
    items: ['Node.js & Express REST APIs', 'JWT / bcrypt Authentication', 'Scalable server architecture'],
  },
  {
    icon: <Database className="w-5 h-5" />,
    title: 'Database & Storage',
    color: 'from-violet-500 to-purple-500',
    shadow: 'hover:shadow-violet-500/20',
    items: ['MongoDB & Mongoose ODM', 'Schema design & optimization', 'CRUD & aggregation pipelines'],
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: 'Deployment & DevOps',
    color: 'from-orange-500 to-amber-400',
    shadow: 'hover:shadow-orange-500/20',
    items: ['Vercel, Hostinger, cPanel', 'Domain & DNS configuration', 'SSL & production-ready setup'],
  },
  {
    icon: <Cpu className="w-5 h-5" />,
    title: 'AI-Assisted Dev',
    color: 'from-pink-500 to-rose-400',
    shadow: 'hover:shadow-pink-500/20',
    items: ['ChatGPT & prompt engineering', 'AI-accelerated debugging', 'Faster delivery cycles'],
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Security & Quality',
    color: 'from-cyan-500 to-blue-500',
    shadow: 'hover:shadow-cyan-500/20',
    items: ['Secure auth & data handling', 'Clean, maintainable code', 'Cross-browser testing'],
  },
];

const tools = [
  'React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose',
  'Tailwind CSS', 'JavaScript ES6+', 'JWT', 'bcrypt', 'Git & GitHub',
  'Postman', 'Vercel', 'VS Code', 'Vite', 'REST APIs',
];

const highlights = [
  '10+ production-ready websites delivered to international clients',
  'Specialised in full MERN stack — from concept to live deployment',
  'Worked with clients across Africa, Mauritius, Pakistan & beyond',
  'AI-powered workflows for faster, higher-quality output',
  '100% client satisfaction with on-time project delivery',
  'Strong focus on responsive, mobile-first design principles',
];

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section id="about" className="py-20 bg-[#080f1e] text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/6 rounded-full filter blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-500/6 rounded-full filter blur-[100px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-3">WHO I AM</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            About <span className="gradient-text-animated">Me</span>
          </h2>
        </div>

        {/* Photo + Bio */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-6xl mx-auto mb-20">

          {/* Photo */}
          <div className={`relative group transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/8">
              <img
                src="/me.jpeg"
                alt="Mohammad Hassan"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e]/80 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="glass-card rounded-2xl px-4 py-3 border border-white/10 backdrop-blur-xl">
                  <p className="font-bold text-base text-white">Mohammad Hassan</p>
                  <p className="text-blue-400 text-xs mt-0.5">Full Stack MERN Developer · Punjab, Pakistan</p>
                </div>
              </div>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 premium-card rounded-2xl px-4 py-3 shadow-xl animate-float border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-lg">🚀</span>
                <div>
                  <p className="text-white font-bold text-sm leading-none">10+ Projects</p>
                  <p className="text-slate-400 text-xs mt-0.5">Delivered Globally</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 premium-card rounded-2xl px-4 py-3 shadow-xl animate-float animation-delay-2000 border border-white/10">
              <div className="flex items-center gap-2">
                <span className="text-lg">⚡</span>
                <div>
                  <p className="text-white font-bold text-sm leading-none">1 Year</p>
                  <p className="text-slate-400 text-xs mt-0.5">Professional XP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 leading-snug">
                Passionate developer who turns<br />
                <span className="gradient-text-animated">ideas into live products</span>
              </h3>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base mb-3">
                I'm a <span className="text-white font-semibold">Full Stack MERN Developer</span> with hands-on
                experience building responsive, scalable, and production-optimised websites for
                clients across multiple continents.
              </p>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                My journey started with the <span className="text-blue-400 font-medium">Saylani Mass IT Training Program</span>,
                where I completed an intensive MERN course. Since then I've worked at
                <span className="text-teal-400 font-medium"> Digital Brains</span> and have been freelancing
                full-time since <span className="text-white font-medium">January 2024</span> — using AI tools to ship faster.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-2.5">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                  style={{ transitionDelay: `${300 + i * 70}ms` }}
                >
                  <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                  <p className="text-slate-300 text-sm leading-relaxed">{h}</p>
                </div>
              ))}
            </div>

            {/* Mini stats */}
            <div className="flex gap-6 pt-2 border-t border-white/5">
              {[['10+', 'Projects'], ['5+', 'Countries'], ['100%', 'Satisfaction']].map(([val, lbl]) => (
                <div key={lbl} className="text-center">
                  <p className="text-xl sm:text-2xl font-bold gradient-text-animated">{val}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white text-sm font-semibold group transition-colors"
            >
              Let's work together
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-10">
            <p className="section-label mb-3">WHAT I DO</p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Services I <span className="gradient-text-animated">Offer</span>
            </h3>
            <p className="text-slate-500 mt-3 text-sm max-w-md mx-auto">
              End-to-end web development — from pixel-perfect UI to robust backend systems.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {services.map((svc, i) => (
              <div
                key={svc.title}
                className={`group premium-card rounded-2xl p-5 hover:bg-white/[0.06] transition-all duration-400 hover:shadow-xl ${svc.shadow} hover:-translate-y-1 cursor-default ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${400 + i * 70}ms`, transition: 'all 0.4s ease' }}
              >
                <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-br ${svc.color} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {svc.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-3">{svc.title}</h4>
                <ul className="space-y-1.5">
                  {svc.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-slate-400 text-xs">
                      <span className={`w-1 h-1 rounded-full bg-gradient-to-r ${svc.color} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Toolbox */}
        <div className={`mt-14 text-center transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-6">MY TOOLBOX</p>
          <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto">
            {tools.map(t => (
              <span
                key={t}
                className="glow-tag px-4 py-2 glass-card rounded-full text-xs text-slate-300 border border-white/5 hover:border-blue-400/40 hover:text-blue-300 hover:bg-blue-500/5 hover:scale-105 transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
