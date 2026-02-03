
import React, { useState, useEffect, useRef } from 'react';
import { MANIFESTO_POINTS } from '../constants';

const Visual: React.FC<{ index: number; isActive: boolean }> = ({ index, isActive }) => {
  const commonClasses = `w-full h-full transition-all duration-[1200ms] cubic-bezier(0.23, 1, 0.32, 1) ${
    isActive ? 'opacity-30 scale-110 rotate-0 blur-0' : 'opacity-0 scale-90 rotate-6 blur-md'
  }`;
  
  const visuals = [
    // 01: PERFORMANCE - Animated stage lights/radar
    <svg viewBox="0 0 100 100" className={commonClasses} fill="none" stroke="currentColor">
      <defs>
        <radialGradient id="grad1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="red" stopOpacity="0.2" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="45" stroke="white" strokeWidth="0.1" strokeDasharray="1 4" />
      <circle cx="50" cy="50" r="30" stroke="white" strokeWidth="0.1" strokeDasharray="2 2" />
      <g className={isActive ? 'animate-[spin_10s_linear_infinite]' : ''}>
        <path d="M50 10 L50 90 M10 50 L90 50" stroke="white" strokeWidth="0.05" />
      </g>
      <circle cx="50" cy="50" r="15" fill="url(#grad1)" />
      <rect x="42" y="42" width="16" height="16" stroke="red" strokeWidth="1" className={isActive ? 'animate-pulse' : ''} />
      <path d="M10 10 L25 10 M10 10 L10 25" stroke="white" strokeWidth="1" />
      <path d="M90 90 L75 90 M90 90 L90 75" stroke="white" strokeWidth="1" />
    </svg>,
    // 02: PRIVILEGE TAX - Unbalanced scales/Rising barriers
    <svg viewBox="0 0 100 100" className={commonClasses} fill="none" stroke="currentColor">
      <path d="M20 85 L80 85" stroke="white" strokeWidth="1" />
      <g className={isActive ? 'animate-[bounce_3s_ease-in-out_infinite]' : ''}>
        <rect x="25" y="40" width="15" height="45" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.5" />
        <rect x="42" y="20" width="15" height="65" fill="red" fillOpacity="0.2" stroke="red" strokeWidth="0.5" />
        <rect x="59" y="55" width="15" height="30" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="0.5" />
      </g>
      <path d="M10 40 L90 20" stroke="red" strokeWidth="0.5" strokeDasharray="2 2" opacity="0.5" />
    </svg>,
    // 03: UNPAID LABOR - Clock/Drain
    <svg viewBox="0 0 100 100" className={commonClasses} fill="none" stroke="currentColor">
      <circle cx="50" cy="50" r="40" stroke="white" strokeWidth="0.5" opacity="0.2" />
      <path d="M50 10 L50 50 L80 50" stroke="red" strokeWidth="1" strokeLinecap="round" className={isActive ? 'origin-[50px_50px] animate-[spin_8s_linear_infinite]' : ''} />
      <g opacity="0.4">
        {[...Array(12)].map((_, i) => (
          <line key={i} x1="50" y1="15" x2="50" y2="20" transform={`rotate(${i * 30} 50 50)`} stroke="white" strokeWidth="1" />
        ))}
      </g>
      <text x="50" y="50" textAnchor="middle" dy=".3em" fill="white" fontSize="4" fontWeight="black" opacity="0.3">UNPAID</text>
    </svg>,
    // 04: BIAS TOWARDS POLISH - Refraction/Diamond
    <svg viewBox="0 0 100 100" className={commonClasses} fill="none" stroke="currentColor">
      <path d="M50 15 L85 50 L50 85 L15 50 Z" stroke="white" strokeWidth="0.5" />
      <path d="M15 50 L85 50 M50 15 L50 85" stroke="white" strokeWidth="0.2" opacity="0.3" />
      <circle cx="50" cy="50" r="20" stroke="red" strokeWidth="4" strokeDasharray="1 10" className={isActive ? 'animate-[spin_20s_linear_infinite]' : ''} />
      <path d="M30 30 L70 70 M70 30 L30 70" stroke="red" strokeWidth="0.5" />
    </svg>
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center p-12 pointer-events-none overflow-hidden">
      {/* Soft vignette to ensure text center is always readable */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/60 z-10" />
      {visuals[index]}
    </div>
  );
};

const Manifesto: React.FC = () => {
  const [currentActiveIndex, setCurrentActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          setCurrentActiveIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToPoint = (index: number) => {
    sectionRefs.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-white/10" aria-label="Manifesto details">
      {/* Enhanced Sticky Navigation Sidebar */}
      <div className="hidden md:block md:col-span-4 sticky top-0 h-screen flex flex-col justify-center">
        <div className="space-y-6">
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500" aria-hidden="true">
            Section 02 // The Case
          </div>
          <h2 className="text-7xl font-black uppercase tracking-tighter leading-[0.85] mb-8">
            Why It <br />
            <span className="text-white/10 italic">Fails</span>
          </h2>
          
          <nav className="space-y-4 pt-4 border-t border-white/5" aria-label="Manifesto points navigation">
            {MANIFESTO_POINTS.map((point, idx) => (
              <button
                key={idx}
                onClick={() => scrollToPoint(idx)}
                aria-current={currentActiveIndex === idx ? 'step' : undefined}
                className={`group flex items-center gap-4 w-full text-left transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 rounded px-2 py-1 ${
                  currentActiveIndex === idx ? 'translate-x-2' : 'opacity-40 hover:opacity-100'
                }`}
              >
                <span className={`font-mono text-sm transition-colors ${currentActiveIndex === idx ? 'text-red-500' : 'text-white/40'}`}>
                  0{idx + 1}
                </span>
                <span className={`uppercase font-black tracking-tighter text-sm transition-colors ${currentActiveIndex === idx ? 'text-white' : 'text-white/40'}`}>
                  {point.title}
                </span>
                {currentActiveIndex === idx && (
                  <div className="flex-1 h-[1px] bg-red-500 animate-[grow_0.3s_ease-out_forwards]"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="pt-8 flex items-center gap-4 opacity-50" aria-hidden="true">
            <div className="flex-1 h-[2px] bg-white/10 relative">
              <div 
                className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-700"
                style={{ width: `${((currentActiveIndex + 1) / MANIFESTO_POINTS.length) * 100}%` }}
              />
            </div>
            <span className="text-white/30 font-mono text-xs">0{currentActiveIndex + 1} / 0{MANIFESTO_POINTS.length}</span>
          </div>
        </div>
      </div>

      {/* Mobile Header (Hidden on Desktop) */}
      <div className="md:hidden pt-20">
        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-2">Section 02 // The Case</div>
        <h2 className="text-5xl font-black uppercase tracking-tighter">Why It Fails</h2>
        <div className="flex gap-2 mt-4 overflow-x-auto pb-4 no-scrollbar">
            {MANIFESTO_POINTS.map((_, idx) => (
                <button 
                    key={idx}
                    onClick={() => scrollToPoint(idx)}
                    className={`min-w-[40px] h-[40px] border flex items-center justify-center font-mono text-sm transition-all ${currentActiveIndex === idx ? 'bg-red-500 border-red-500 text-white scale-110 z-10' : 'border-white/20 text-white/40'}`}
                >
                    {idx + 1}
                </button>
            ))}
        </div>
      </div>

      {/* Sticking Content Points */}
      <div className="md:col-span-8 space-y-0">
        {MANIFESTO_POINTS.map((point, idx) => (
          <div 
            key={idx} 
            data-index={idx}
            ref={(el) => (sectionRefs.current[idx] = el)}
            className="h-[100vh] md:h-[120vh] relative"
          >
            <div className="sticky top-0 h-screen flex flex-col justify-center">
              <div className={`transition-all duration-700 p-8 md:p-16 border-2 group bg-black/90 backdrop-blur-xl relative overflow-hidden ${
                currentActiveIndex === idx 
                  ? 'border-white shadow-[15px_15px_0px_#ef4444] translate-y-0 opacity-100' 
                  : 'border-white/10 opacity-0 translate-y-20 scale-95 pointer-events-none'
              }`}>
                
                {/* Visual Background Illustration */}
                <Visual index={idx} isActive={currentActiveIndex === idx} />

                <div className="relative z-20">
                  <div className="flex justify-between items-start mb-10">
                    <span className="text-xs font-mono text-red-500 font-black uppercase tracking-[0.4em]">
                      Issue_0{idx + 1}
                    </span>
                    <div className="w-10 h-10 rounded-none border border-white/20 flex items-center justify-center text-xs font-black">
                      {idx + 1}
                    </div>
                  </div>
                  
                  <h3 className="text-4xl md:text-6xl font-black uppercase mb-10 tracking-tighter leading-none text-white text-glow">
                    {point.title}
                  </h3>
                  
                  <p className="text-xl md:text-2xl font-medium leading-relaxed text-white/90 max-w-2xl drop-shadow-lg">
                    {point.description}
                  </p>

                  {currentActiveIndex === idx && (
                    <div className="mt-16 pt-10 border-t border-white/10 flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                        {idx === MANIFESTO_POINTS.length - 1 ? "Section complete" : "Keep scrolling"}
                      </span>
                      <div className="flex gap-2">
                         {[...Array(3)].map((_, i) => (
                           <div key={i} className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                         ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @keyframes grow {
            from { transform: scaleX(0); transform-origin: left; }
            to { transform: scaleX(1); transform-origin: left; }
        }
        .bg-radial-gradient {
            background: radial-gradient(circle, var(--tw-gradient-from), var(--tw-gradient-to));
        }
        .no-scrollbar::-webkit-scrollbar {
            display: none;
        }
        .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .text-glow {
            text-shadow: 0 0 15px rgba(255,255,255,0.1);
        }
      `}</style>
    </section>
  );
};

export default Manifesto;
