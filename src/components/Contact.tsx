import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Github, Linkedin, MessageCircle, Download, ExternalLink, Phone, Globe } from 'lucide-react';

function useInView(ref: React.RefObject<Element>, threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref, threshold]);
  return visible;
}

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visible = useInView(sectionRef);

  const contactItems = [
    {
      href: 'mailto:hassanomar7674@gmail.com',
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      bg: 'from-blue-500/20 to-blue-600/10',
      border: 'hover:border-blue-400/50 hover:shadow-blue-500/20',
      label: 'Email',
      value: 'hassanomar7674@gmail.com',
    },
    {
      href: 'https://wa.me/923247305909',
      icon: <MessageCircle className="w-6 h-6 text-emerald-400" />,
      bg: 'from-emerald-500/20 to-emerald-600/10',
      border: 'hover:border-emerald-400/50 hover:shadow-emerald-500/20',
      label: 'WhatsApp',
      value: '+92 324 7305909',
      external: true,
    },
    {
      href: 'tel:+923247305909',
      icon: <Phone className="w-6 h-6 text-teal-400" />,
      bg: 'from-teal-500/20 to-teal-600/10',
      border: 'hover:border-teal-400/50 hover:shadow-teal-500/20',
      label: 'Phone',
      value: '+92 324 7305909',
    },
    {
      icon: <MapPin className="w-6 h-6 text-cyan-400" />,
      bg: 'from-cyan-500/20 to-cyan-600/10',
      border: 'border-white/5',
      label: 'Location',
      value: 'Punjab, Pakistan · Remote Ready',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-[#050d1a] text-white relative overflow-hidden" ref={sectionRef}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(20,184,166,0.06),transparent_60%)]" />

      <div className="container mx-auto px-6 relative z-10" >

        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="section-label mb-3">GET IN TOUCH</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Work <span className="gradient-text-animated">Together</span>
          </h2>
          <p className="text-slate-500 mt-4 text-base max-w-md mx-auto">
            Ready to bring your ideas to life? Whether it's a new project, freelance gig, or collaboration — I'm all ears.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* ── LEFT ── */}
          <div className={`space-y-6 transition-all duration-700 delay-100 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="glass-card rounded-3xl p-8 border border-white/5">
              <h3 className="text-2xl font-bold mb-3 text-white">Ready for your next project?</h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                I'm passionate about building high-quality websites that solve real problems.
                Whether you need a full-stack website, a frontend redesign, or backend optimisation —
                I deliver on time with clean, maintainable code.
              </p>

              {/* Availability */}
              <div className="flex items-center gap-3 p-4 bg-emerald-500/8 border border-emerald-500/20 rounded-2xl mb-8">
                <div className="relative flex-shrink-0">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full" />
                  <div className="absolute inset-0 bg-emerald-400 rounded-full animate-ping opacity-60" />
                </div>
                <div>
                  <p className="text-emerald-400 font-semibold text-sm">Open to opportunities</p>
                  <p className="text-slate-500 text-xs mt-0.5">Available for freelance, part-time & collaborations</p>
                </div>
              </div>

              {/* Contact cards */}
              <div className="space-y-3">
                {contactItems.map((item, i) => {
                  const inner = (
                    <div className={`flex items-center gap-4 p-4 glass-card rounded-2xl transition-all duration-300 group border border-white/5 ${item.border} hover:shadow-lg hover:-translate-y-0.5`}>
                      <div className={`p-3 bg-gradient-to-br ${item.bg} rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-slate-500 text-xs mb-0.5">{item.label}</p>
                        <p className="text-slate-100 font-medium text-sm truncate">{item.value}</p>
                      </div>
                      {item.href && (
                        <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-slate-400 ml-auto flex-shrink-0 transition-colors" />
                      )}
                    </div>
                  );
                  return item.href ? (
                    <a
                      key={i}
                      href={item.href}
                      {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={i}>{inner}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT ── */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>

            {/* Social + CV card */}
            <div className="glass-card rounded-3xl p-8 border border-white/5 space-y-4">
              <h4 className="text-xl font-bold mb-5">Connect with me</h4>

              <a href="https://github.com/Hassan-Omar03" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-white/[0.08] transition-all duration-300 group border border-white/5 hover:border-white/15 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/8 rounded-xl group-hover:bg-white/15 transition-colors">
                    <Github className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">GitHub</p>
                    <p className="text-slate-500 text-xs">Hassan-Omar03</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://www.linkedin.com/in/mohammad-hassan-6919aa111/" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-white/[0.08] transition-all duration-300 group border border-white/5 hover:border-white/15 hover:shadow-lg hover:shadow-teal-500/10 hover:-translate-y-0.5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/8 rounded-xl group-hover:bg-white/15 transition-colors">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-slate-500 text-xs">Mohammad Hassan</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-teal-400 group-hover:translate-x-1 transition-all" />
              </a>

              <a href="https://wa.me/923247305909" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-between p-4 glass-card rounded-2xl hover:bg-white/[0.08] transition-all duration-300 group border border-white/5 hover:border-white/15 hover:shadow-lg hover:shadow-emerald-500/10 hover:-translate-y-0.5">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white/8 rounded-xl group-hover:bg-white/15 transition-colors">
                    <MessageCircle className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">WhatsApp</p>
                    <p className="text-slate-500 text-xs">+92 324 7305909</p>
                  </div>
                </div>
                <ExternalLink className="w-5 h-5 text-slate-600 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
              </a>

              {/* Download CV */}
              <a
                href="/Hassan_Omar_CV.pdf"
                download="Mohammad_Hassan_CV.pdf"
                className="w-full flex items-center justify-between p-5 shimmer-btn rounded-2xl hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <Download className="w-6 h-6 group-hover:animate-bounce" />
                  <span className="font-bold text-base">Download CV</span>
                </div>
                <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Quick facts card */}
            <div className="glass-card rounded-3xl p-6 border border-white/5">
              <p className="text-slate-500 text-xs font-semibold uppercase tracking-widest mb-4">Quick Facts</p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🌍', label: 'Remote Friendly', val: '100%' },
                  { icon: '⏱️', label: 'Response Time', val: '< 24 hrs' },
                  { icon: '🚀', label: 'Projects Done', val: '10+' },
                  { icon: '⭐', label: 'Satisfaction', val: '100%' },
                ].map(f => (
                  <div key={f.label} className="text-center glass-card rounded-xl p-3 border border-white/5 hover:border-blue-400/20 transition-colors">
                    <div className="text-2xl mb-1">{f.icon}</div>
                    <p className="text-white font-bold text-sm">{f.val}</p>
                    <p className="text-slate-600 text-xs mt-0.5">{f.label}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className={`mt-20 pt-10 border-t border-white/5 text-center transition-all duration-700 delay-400 ${visible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-2 mb-3">
            <Globe className="w-4 h-4 text-blue-400" />
            <p className="text-slate-400 text-sm font-medium">
              © {new Date().getFullYear()} Mohammad Hassan — Full Stack MERN Developer
            </p>
          </div>
          <p className="text-slate-600 text-xs">
            
          </p>
        </div>

      </div>
    </section>
  );
}
