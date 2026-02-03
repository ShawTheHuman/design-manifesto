
import React, { useState } from 'react';
import SocialShare from './SocialShare';

interface PetitionFormProps {
  onSign: (firstName: string, lastName: string, location: string) => void;
  isSigned: boolean;
}

const PetitionForm: React.FC<PetitionFormProps> = ({ onSign, isSigned }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName.trim() && lastName.trim() && location.trim()) {
      onSign(firstName, lastName, location);
    }
  };

  if (isSigned) {
    return (
      <div className="brutalist-border bg-white text-black p-12 text-center relative overflow-hidden animate-pop-in">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none">
          <div className="text-[12rem] font-black uppercase leading-none">DONE</div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-6 inline-block border-4 border-red-500 text-red-500 px-6 py-2 text-4xl font-black uppercase tracking-tighter animate-stamp">
            Verified
          </div>
          
          <h3 className="text-4xl font-black uppercase tracking-tighter mb-4">You're on the list.</h3>
          <p className="text-black/60 mb-8 max-w-sm font-medium">
            Your voice has been added to the movement. 
            Now, let's make sure they hear it.
          </p>
          
          <div className="w-full max-w-xs p-1 bg-black/5 rounded">
            <SocialShare />
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="mt-8 text-[10px] font-black uppercase tracking-widest hover:underline"
          >
            Read the manifesto again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 p-8 md:p-12 brutalist-border">
      <div className="flex justify-between items-start mb-8">
        <h3 className="text-4xl font-black uppercase tracking-tighter">Sign the <br/>petition</h3>
        <div className="w-12 h-12 border-2 border-white/20 flex items-center justify-center">
            <span className="text-xs font-bold">ACT</span>
        </div>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase font-black text-white/40 tracking-widest">First Name</label>
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="bg-black border-2 border-white/20 p-4 focus:border-red-500 focus:bg-red-500/5 outline-none transition-all text-lg font-bold"
              placeholder="Jan"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs uppercase font-black text-white/40 tracking-widest">Last Name</label>
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="bg-black border-2 border-white/20 p-4 focus:border-red-500 focus:bg-red-500/5 outline-none transition-all text-lg font-bold"
              placeholder="Design"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-xs uppercase font-black text-white/40 tracking-widest">Location (City, Country)</label>
          <input
            type="text"
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-black border-2 border-white/20 p-4 focus:border-red-500 focus:bg-red-500/5 outline-none transition-all text-lg font-bold"
            placeholder="New York, USA"
          />
        </div>
        
        <button
          type="submit"
          className="group relative w-full bg-white text-black font-black uppercase py-6 text-2xl transition-all active:translate-y-1 overflow-hidden"
          style={{ boxShadow: '8px 8px 0px #ef4444' }}
        >
          <span className="relative z-10 group-hover:tracking-[0.1em] transition-all">Join the movement</span>
          <div className="absolute inset-0 bg-red-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>
        
        <p className="text-[10px] text-white/30 uppercase font-bold tracking-widest text-center mt-4">
          Public identification: First name + Last initial + Location
        </p>
      </form>
    </div>
  );
};

export default PetitionForm;
