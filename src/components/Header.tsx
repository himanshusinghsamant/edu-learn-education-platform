import { Container } from '@mantine/core';
import { IconMenu2, IconX } from '@tabler/icons-react';
import { useEffect, useState } from 'react';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<string>('hero');

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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-7 h-20">
          {/* Mobile: Burger */}
          <button
            aria-label="Open menu"
            className="lg:hidden p-2 -ml-2 rounded hover:bg-gray-100"
            onClick={() => setMobileOpen(true)}
          >
            <IconMenu2 size={22} />
          </button>
          {/* Left: Logo (not a link) */}
          <div className="flex items-center gap-3 p-2">
            <img
              src="/Aivanu_logo.png"
              alt="AIVANU"
              className="w-16 rounded-full"
            />
          </div>

          {/* Center: Nav links */}
          <nav className="ml-auto hidden lg:flex items-center gap-6">
            <a href="#hero" className={`text-sm font-medium transition relative ${active==='hero' ? 'text-black font-bold' : 'text-gray-700 hover:text-black'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-amber-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${active==='hero' ? 'after:w-full' : ''}`}>Home</a>
            <a href="#technologies" className={`text-sm font-medium transition relative ${active==='technologies' ? 'text-black font-bold' : 'text-gray-700 hover:text-black'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-amber-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${active==='technologies' ? 'after:w-full' : ''}`}>Technologies</a>
            <a href="#model" className={`text-sm font-medium transition relative ${active==='model' ? 'text-black font-bold' : 'text-gray-700 hover:text-black'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-amber-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${active==='model' ? 'after:w-full' : ''}`}>Learning Model</a>
            <a href="#career" className={`text-sm font-medium transition relative ${active==='career' ? 'text-black font-bold' : 'text-gray-700 hover:text-black'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-amber-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${active==='career' ? 'after:w-full' : ''}`}>Career</a>
            <a href="#about" className={`text-sm font-medium transition relative ${active==='about' ? 'text-black font-bold' : 'text-gray-700 hover:text-black'} after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-yellow-400 after:to-amber-500 after:w-0 hover:after:w-full after:transition-all after:duration-300 ${active==='about' ? 'after:w-full' : ''}`}>About</a>
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
                  className="h-7 w-auto"
                />
              </div>
              <button aria-label="Close menu" className="p-2 rounded hover:bg-gray-100" onClick={() => setMobileOpen(false)}>
                <IconX size={22} />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <a href="#hero" className={`block px-3 py-2 rounded font-medium transition-all ${active==='hero' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 text-black font-bold border-l-4 border-yellow-500' : 'hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Home</a>
              <a href="#technologies" className={`block px-3 py-2 rounded font-medium transition-all ${active==='technologies' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 text-black font-bold border-l-4 border-yellow-500' : 'hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Technologies</a>
              <a href="#model" className={`block px-3 py-2 rounded font-medium transition-all ${active==='model' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 text-black font-bold border-l-4 border-yellow-500' : 'hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Learning Model</a>
              <a href="#career" className={`block px-3 py-2 rounded font-medium transition-all ${active==='career' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 text-black font-bold border-l-4 border-yellow-500' : 'hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>Career</a>
              <a href="#about" className={`block px-3 py-2 rounded font-medium transition-all ${active==='about' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 text-black font-bold border-l-4 border-yellow-500' : 'hover:bg-gray-50'}`} onClick={() => setMobileOpen(false)}>About</a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}