
import React from 'react';

const RECOMMENDATIONS = [
  {
    id: "01",
    title: "THE RAW FILE WALKTHROUGH",
    subtitle: "Messy is meaningful.",
    description: "Instead of a polished deck, ask the candidate to walk through a real Figma file. Seeing the failed iterations, the naming conventions (or lack thereof), and how they organized their thoughts is 10x more valuable than a curated presentation.",
    tip: "Look for: Decision-making logic, tool proficiency, and how they handle edge cases."
  },
  {
    id: "02",
    title: "COLLABORATIVE WHITEBOARDING",
    subtitle: "Partnership, not performance.",
    description: "Solve a real (or simulated) business problem together. This shouldn't be a test of 'can they draw a circle', but 'can they think with us'. Treat it like a 1:1 working session.",
    tip: "Look for: Active listening, ability to pivot, and how they ask clarifying questions."
  },
  {
    id: "03",
    title: "THE PAID CONSULTING DAY",
    subtitle: "Real work, real pay.",
    description: "Bring a final-stage candidate in for a half-day or full-day of work on a real ticket. Pay them their market rate. This is the ultimate test of cultural and technical fit.",
    tip: "Look for: Communication styles, speed of context acquisition, and output quality."
  },
  {
    id: "04",
    title: "TECHNICAL DEEP-DIVE",
    subtitle: "Into the weeds.",
    description: "A focused interview on the technicalities of design: Design systems, accessibility, dev handoff, and component logic. Skip the 'tell me about a time' questions and ask 'how did you build this component for screen readers?'",
    tip: "Look for: Technical depth, systematic thinking, and engineering empathy."
  }
];

const CallForRealism: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto border-b border-white/10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
        <div className="md:col-span-5">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-4 block">Section 04 // The Call for Realism</span>
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85]">
                Replace <br />
                <span className="text-white/20">Theatre</span> <br />
                With <br />
                <span className="text-white">Craft</span>
            </h2>
        </div>
        <div className="md:col-span-7 flex flex-col justify-end">
            <p className="text-2xl md:text-3xl font-light text-white/60 leading-tight border-l-4 border-red-500 pl-8 py-4">
                We aren't just saying presentations are bad—we're saying they're an <span className="text-white font-bold">obsolete assessment tool</span>. Here is how hiring managers can actually evaluate design talent with integrity.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-1px bg-white/10 border border-white/10">
        {RECOMMENDATIONS.map((rec) => (
          <div key={rec.id} className="bg-black p-10 group hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl font-black text-red-500 font-mono leading-none">{rec.id}</span>
                <div className="h-[2px] flex-1 bg-white/10 group-hover:bg-red-500/50 transition-colors"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">{rec.title}</h3>
            <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-8">{rec.subtitle}</p>
            
            <p className="text-lg text-white/70 font-medium leading-relaxed mb-8">
              {rec.description}
            </p>
            
            <div className="p-4 bg-white/5 border border-white/10">
                <span className="text-[10px] font-black uppercase text-white/40 block mb-2 tracking-widest">Hiring Manager Tip:</span>
                <p className="text-sm font-bold italic text-white/90">
                    {rec.tip}
                </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 p-8 border-4 border-white text-center">
        <h4 className="text-xl font-black uppercase tracking-widest mb-4">Hiring Manager Playbook</h4>
        <p className="text-white/60 max-w-2xl mx-auto">
            These methods aren't just 'nicer'—they provide significantly higher quality data for your hiring decisions. Stop guessing based on a rehearsal and start knowing based on collaboration.
        </p>
      </div>
    </section>
  );
};

export default CallForRealism;
