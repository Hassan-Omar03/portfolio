import { useState, useEffect } from 'react';
import { Code2, X, Menu } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const scrollTo = (id: string) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${isScrolled
            ? 'bg-[#050d1a]/90 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-white/5'
            : 'bg-transparent'
          }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-18 py-4">

            {/* Logo */}
            <button
              onClick={() => scrollTo('home')}
              className="flex items-center gap-2.5 group"
            >
              <div className="relative p-2 rounded-xl bg-gradient-to-br from-blue-600 to-teal-500 shadow-lg group-hover:shadow-blue-500/40 transition-shadow">
                <Code2 className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <span className="font-bold text-lg text-white group-hover:text-blue-300 transition-colors tracking-tight">
                Hassan<span className="text-blue-400">.</span>dev
              </span>
            </button>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${activeSection === link.id
                      ? 'text-white bg-white/8 border border-white/10'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <a
                href="/Hassan_Omar_CV.pdf"
                download="Mohammad_Hassan_CV.pdf"
                className="px-5 py-2.5 shimmer-btn rounded-xl text-sm font-semibold hover:scale-105 transition-transform shadow-lg shadow-blue-500/20"
              >
                Download CV
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 glass-card rounded-xl border border-white/10 text-white hover:border-blue-400/40 transition-all"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed top-0 right-0 bottom-0 w-72 bg-[#080f1e]/98 backdrop-blur-xl z-50 md:hidden border-l border-white/5 shadow-2xl animate-slide-in-right">
            <div className="flex flex-col h-full p-6 pt-20">

              {/* Close btn */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 glass-card rounded-xl border border-white/10 text-white hover:border-white/20 transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Links */}
              <div className="flex-1 space-y-1">
                <p className="section-label mb-4 px-2">Navigation</p>
                {navLinks.map((link, i) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`w-full text-left flex items-center gap-3 p-3.5 rounded-xl transition-all duration-300 ${activeSection === link.id
                        ? 'bg-blue-500/15 border border-blue-500/20 text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    style={{ animationDelay: `${i * 50}ms` }}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${activeSection === link.id ? 'bg-blue-400' : 'bg-white/20'}`} />
                    <span className="font-medium">{link.name}</span>
                  </button>
                ))}
              </div>

              {/* Download CV mobile */}
              <div className="pt-6 border-t border-white/5">
                <a
                  href="/Hassan_Omar_CV.pdf"
                  download="Mohammad_Hassan_CV.pdf"
                  className="w-full flex items-center justify-center gap-2 py-3.5 shimmer-btn rounded-xl font-semibold text-sm hover:scale-[1.02] transition-transform shadow-lg"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
