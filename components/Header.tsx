
import React from 'react';
import SocialShare from './SocialShare';

const Header: React.FC = () => {
  return (
    <header className="pt-20 pb-12 px-6 max-w-6xl mx-auto border-b border-white/10">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold tracking-widest uppercase w-fit">
            Manifesto #01
          </div>
        </div>
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter uppercase">
          Kill the <br />
          <span className="text-white/40">Portfolio</span> <br />
          Presentation
        </h1>
        <p className="text-xl md:text-2xl text-white/60 max-w-2xl font-light leading-relaxed">
          Product design is about solving problems, not building slides. It's time to retire the high-pressure performance theatre of the hiring process.
        </p>
        <SocialShare />
      </div>
    </header>
  );
};

export default Header;
