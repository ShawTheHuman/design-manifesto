
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Manifesto from './components/Manifesto';
import Stories from './components/Stories';
import CallForRealism from './components/CallForRealism';
import PetitionForm from './components/PetitionForm';
import SignerList from './components/SignerList';
import StickyCTA from './components/StickyCTA';
import { Signer } from './types';
import { INITIAL_SIGNERS } from './constants';

const App: React.FC = () => {
  const [signers, setSigners] = useState<Signer[]>([]);
  const [isSigned, setIsSigned] = useState(false);

  useEffect(() => {
    // Initialize with some data and check local storage
    const stored = localStorage.getItem('ux_manifesto_signers');
    const localIsSigned = localStorage.getItem('ux_manifesto_signed_status');
    
    if (stored) {
      setSigners(JSON.parse(stored));
    } else {
      setSigners(INITIAL_SIGNERS);
    }
    
    if (localIsSigned === 'true') {
      setIsSigned(true);
    }
  }, []);

  const handleSign = (firstName: string, lastName: string, location: string) => {
    const newSigner: Signer = {
      id: Date.now().toString(),
      firstName: firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase(),
      lastInitial: lastName.charAt(0).toUpperCase(),
      location: location.trim(),
      signedAt: Date.now()
    };
    
    const updatedSigners = [...signers, newSigner];
    setSigners(updatedSigners);
    setIsSigned(true);
    
    localStorage.setItem('ux_manifesto_signers', JSON.stringify(updatedSigners));
    localStorage.setItem('ux_manifesto_signed_status', 'true');
  };

  return (
    <div className="min-h-screen selection:bg-red-500 selection:text-white">
      <Header />
      
      <main className="pb-32 relative">
        <Manifesto />
        
        <Stories />

        <CallForRealism />
        
        <section id="sign" className="py-20 px-6 max-w-4xl mx-auto">
          <PetitionForm onSign={handleSign} isSigned={isSigned} />
          <SignerList signers={signers} />
        </section>

        <section className="px-6 max-w-6xl mx-auto py-20 border-t border-white/10 text-center">
            <p className="text-white/20 uppercase tracking-widest text-xs font-bold mb-4">A movement by designers, for designers.</p>
            <div className="flex justify-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all cursor-not-allowed">
                <span className="font-black text-2xl italic tracking-tighter">DESIGN.</span>
                <span className="font-black text-2xl italic tracking-tighter">BUILD.</span>
                <span className="font-black text-2xl italic tracking-tighter">SOLVE.</span>
            </div>
        </section>

        <StickyCTA isSigned={isSigned} />
      </main>

      <footer className="fixed bottom-0 left-0 w-full bg-white text-black py-2 px-6 flex justify-between items-center z-50">
        <div className="text-[10px] font-black uppercase tracking-tighter">
          Signatures: {signers.length} / Goal: 1,000
        </div>
        <div className="text-[10px] font-black uppercase tracking-tighter animate-pulse">
            Status: Active Movement
        </div>
      </footer>
    </div>
  );
};

export default App;
