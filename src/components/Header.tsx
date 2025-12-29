import { Container } from '@mantine/core';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>('hero');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const sectionIds = ['hero', 'technologies', 'model', 'career', 'about'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // offset for header height
      
      // Find which section is currently in view
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActive(sectionIds[i]);
            break;
          }
        }
      }
    };

    // Initial check
    handleScroll();
    
    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50 py-2 shadow-sm' : 'bg-white border-b border-gray-200 py-0'}`}>
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center gap-7 transition-all duration-300 ${scrolled ? 'h-16' : 'h-20'}`}>
          {/* Mobile: Burger */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 -ml-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu2 size={22} />
          </button>
          {/* Left: Logo + Brand */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/Aivanu_logo.png"
                alt="AIVANU"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full ring-2 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-blue-500/10 scale-0 group-hover:scale-110 transition-transform duration-500 -z-10" />
            </div>
            <span className="text-xl sm:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300" style={{ fontFamily: 'Poppins, system-ui, sans-serif' }}>
              AIVANU
            </span>
          </a>

          {/* Center: Nav links */}
          <nav className="ml-auto hidden lg:flex items-center gap-8">
            <a href="#hero" className={`text-sm font-semibold transition-all relative ${active==='hero' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} group/link`}>
              Home
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${active==='hero' ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </a>
            <a href="#technologies" className={`text-sm font-semibold transition-all relative ${active==='technologies' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} group/link`}>
              Technologies
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${active==='technologies' ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </a>
            <a href="#model" className={`text-sm font-semibold transition-all relative ${active==='model' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} group/link`}>
              Learning Model
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${active==='model' ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </a>
            <a href="#career" className={`text-sm font-semibold transition-all relative ${active==='career' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} group/link`}>
              Career
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${active==='career' ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </a>
            <a href="#about" className={`text-sm font-semibold transition-all relative ${active==='about' ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} group/link`}>
              About
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 ${active==='about' ? 'w-full' : 'w-0 group-hover/link:w-full'}`} />
            </a>
          </nav>
        </div>
      </Container>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl border-r border-gray-200">
            <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <img
                  src="/Aivanu_logo.png"
                  alt="AIVANU"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  AIVANU
                </span>
              </div>
              <button aria-label="Close menu" className="p-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                <IconX size={22} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <a href="#hero" className={`block px-4 py-3 rounded-xl font-semibold transition-all ${active==='hero' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#technologies" className={`block px-4 py-3 rounded-xl font-semibold transition-all ${active==='technologies' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Technologies</a>
              <a href="#model" className={`block px-4 py-3 rounded-xl font-semibold transition-all ${active==='model' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Learning Model</a>
              <a href="#career" className={`block px-4 py-3 rounded-xl font-semibold transition-all ${active==='career' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Career</a>
              <a href="#about" className={`block px-4 py-3 rounded-xl font-semibold transition-all ${active==='about' ? 'bg-blue-50 text-blue-600 shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>About</a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}