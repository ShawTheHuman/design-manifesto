
import React from 'react';
import { Signer } from '../types';

interface SignerListProps {
  signers: Signer[];
}

const SignerList: React.FC<SignerListProps> = ({ signers }) => {
  const sortedSigners = signers.slice().reverse();
  
  return (
    <div className="mt-20">
      <div className="flex items-end justify-between mb-12 border-b-2 border-white/10 pb-6">
        <div>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-2 block">Live Register</span>
            <h3 className="text-4xl font-black uppercase tracking-tighter">Public Registry</h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-end">
            <span className="text-5xl font-black text-white leading-none">{signers.length}</span>
            <span className="text-[10px] uppercase font-black text-white/30 tracking-widest">Signatures</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedSigners.map((signer, index) => {
          // If it's the most recent signer (at index 0 after reverse), we add the pop-in animation
          const isLatest = index === 0 && (Date.now() - signer.signedAt < 5000);
          
          return (
            <div 
              key={signer.id} 
              className={`bg-white/5 border border-white/10 p-5 flex flex-col gap-2 transition-all hover:bg-white hover:text-black hover:scale-105 hover:z-10 cursor-default ${
                isLatest ? 'animate-pop-in border-red-500 bg-red-500/10' : ''
              }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-xl font-black uppercase leading-none">{signer.firstName}</span>
                  <span className="text-xs font-bold text-red-500 mt-1">{signer.lastInitial}.</span>
                </div>
                {isLatest && (
                    <span className="text-[9px] font-black uppercase bg-red-500 text-white px-1 leading-tight">NEW</span>
                )}
              </div>
              
              <div className="text-[10px] uppercase font-bold text-white/40 tracking-wider mt-2 line-clamp-1">
                {signer.location}
              </div>

              <div className="mt-auto pt-4 border-t border-white/10 flex justify-between items-center">
                <span className="text-[9px] font-mono text-white/30 uppercase">
                  #{parseInt(signer.id) > 100000 ? signer.id.slice(-6) : signer.id}
                </span>
                <span className="text-[9px] font-mono text-white/20">
                  {new Date(signer.signedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {signers.length > 20 && (
          <div className="mt-12 text-center">
              <button className="text-[10px] font-black uppercase tracking-widest text-white/30 hover:text-white transition-colors">
                  Load all {signers.length} signers
              </button>
          </div>
      )}
    </div>
  );
};

export default SignerList;
