
import React, { useState, useEffect } from 'react';

const StickyCTA: React.FC<{ isSigned: boolean }> = ({ isSigned }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const signSection = document.getElementById('sign');
      
      if (!signSection) return;

      const sectionPos = signSection.getBoundingClientRect().top + scrollY;
      const windowHeight = window.innerHeight;

      // Show after 400px scroll, hide when the sign section is largely in view
      const shouldBeVisible = scrollY > 400 && scrollY < sectionPos - (windowHeight / 2);
      setIsVisible(shouldBeVisible);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (isSigned) return null;

  return (
    <div 
      className={`fixed bottom-12 right-6 z-40 transition-all duration-500 transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <button
        onClick={() => document.getElementById('sign')?.scrollIntoView({ behavior: 'smooth' })}
        className="group relative bg-red-500 text-white font-black uppercase py-4 px-8 text-sm tracking-widest flex items-center gap-3 transition-transform active:translate-y-1"
        style={{ boxShadow: '6px 6px 0px white' }}
      >
        <span>Sign the Manifesto</span>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="18" 
          height="18" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3" 
          strokeLinecap="square" 
          strokeLinejoin="miter"
          className="group-hover:translate-x-1 transition-transform"
        >
          <path d="M5 12h14M12 5l7 7-7 7"/>
        </svg>
        
        {/* Animated accent */}
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-white animate-ping" />
      </button>
    </div>
  );
};

export default StickyCTA;
