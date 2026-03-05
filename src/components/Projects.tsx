import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Globe } from 'lucide-react';

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

const projects = [
  {
    title: 'ABSMD – Construction Platform',
    description: 'Medical billing company in GA — 99% first-pass rate, HIPAA compliant, credentialing & coding services, and 24/7 support for healthcare providers.',
    image: '/absmd.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://absmd.us/',
    badge: 'Live',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'BIM Quotation System',
    description: 'Instant website pricing tool with real-time calculations, customizable templates, and seamless client communication for construction project quotes.',
    image: '/quotation.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://quotation.bim.africa/',
    badge: 'Live',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    title: 'BIM Africa Main Portal',
    description: 'Digital agency — web dev, SEO, social media, 3D animation.',
    image: '/bim.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://www.bim.africa/',
    badge: 'Live',
    color: 'from-violet-500 to-purple-600',
  },
  {
    title: 'Mauritius Travel Tour',
    description: 'Island tour & travel booking platform with destination guides, itinerary builder, online reservations, and customer reviews for Mauritius tourism.',
    image: '/travel.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://maurituistraveltour.com/',
    badge: 'Live',
    color: 'from-orange-500 to-amber-500',
  },
  {
    title: 'Flash Wash Mauritius',
    description: 'Automatic tunnel car wash in Mauritius — Basic / Radiant Wax / Ultimate Glow packages ',
    image: '/flash.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://flashwash.mu/',
    badge: 'Live',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'Hoda Shine Services',
    description: 'Cleaning service in Ajman UAE — Dubai, Sharjah, Ajman coverage, eco-friendly cleaning, and 24/7 support.',
    image: '/hoda.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://hodashineservices.com/',
    badge: 'Live',
    color: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Hawar Homes Real Estate',
    description: 'Dubai DET-licensed luxury vacation rentals, Burj Khalifa view apartments, and 24/7 support for property owners.',
    image: '/hawar.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://hawarhomes.com/',
    badge: 'Live',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    title: 'Digitals Universe Portfolio',
    description: 'Digital agency portfolio showcasing web development, design, and marketing services with project showcase and contact integration.',
    image: '/digitals.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://digitals-universe.vercel.app/',
    badge: 'Live',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    title: 'Construction Management App',
    description: 'Enterprise-level construction management website with project tracking, resource management, and team collaboration features.',
    image: '/construction.png',
    github: 'https://github.com/Hassan-Omar03',
    live: 'https://construction-mu-sandy.vercel.app/',
    badge: 'Live',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  return (
    <section id="projects" className="py-24 bg-[#080f1e] text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/5 rounded-full filter blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full filter blur-[100px]" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-3">MY WORK</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text-animated">Projects</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-lg mx-auto">
            Production-ready websites built for international clients — all live and running.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-8 mt-8">
            {[['10+', 'Total Projects'], ['5+', 'Countries'], ['100%', 'Live & Active']].map(([v, l]) => (
              <div key={l} className="text-center">
                <p className="text-2xl font-bold gradient-text-animated">{v}</p>
                <p className="text-slate-600 text-xs mt-0.5">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group glass-card rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 60}ms`, transition: 'all 0.5s ease' }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-44">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080f1e] via-[#080f1e]/50 to-transparent" />

                {/* Live badge */}
                <div className="absolute top-3 right-3">
                  <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                    {project.badge}
                  </span>
                </div>

                {/* Color accent top bar */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${project.color}`} />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className={`text-base font-bold text-white mb-2 group-hover:bg-gradient-to-r group-hover:${project.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-1`}>
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Links */}
                <div className="flex items-center justify-between pt-3 border-t border-white/5">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-white transition-colors text-xs font-medium group/link">
                    <Github className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r ${project.color} text-white hover:scale-105 hover:shadow-lg transition-all duration-300`}>
                    <Globe className="w-3.5 h-3.5" />
                    View Live
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={`text-center mt-14 transition-all duration-700 delay-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <a
            href="https://github.com/Hassan-Omar03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 glass-card rounded-full text-sm font-semibold border border-white/10 hover:border-blue-400/40 hover:bg-white/[0.07] hover:scale-105 transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            View All Projects on GitHub
            <ExternalLink className="w-4 h-4 text-slate-500" />
          </a>
        </div>

      </div>
    </section>
  );
}