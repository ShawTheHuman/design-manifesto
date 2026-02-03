
import React from 'react';

const ANECDOTES = [
  {
    title: "The Performance Trap",
    quote: "I spent three days rehearsing my 'spontaneous' storytelling beats. By the time the interview started, I wasn't a designer anymore—I was a bad actor. I got the job, but they hired the speaker, not the problem solver.",
    author: "Senior Product Designer, NYC"
  },
  {
    title: "NDA Paranoia",
    quote: "I had to black out 70% of my most impactful work to avoid a lawsuit. The interviewers called my process 'vague.' I couldn't tell them that the 'vague' part was where I actually saved the company $2M.",
    author: "UX Lead, London"
  },
  {
    title: "The Unpaid Week",
    quote: "They asked for a 45-minute deep dive on a specific platform I'd never worked on. I spent 20 hours of my own time prepping slides for a role I didn't even get. That was time I should have spent with my kids.",
    author: "Product Designer, Berlin"
  }
];

const Stories: React.FC = () => {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto border-b border-white/10">
      <div className="mb-16">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-red-500 mb-4 block">Section 03 // The Human Cost</span>
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          More than just <br />
          <span className="text-white/20">Bad Process</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {ANECDOTES.map((story, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div className="h-1 w-12 bg-white/20"></div>
            <h3 className="text-xl font-bold uppercase tracking-tight">{story.title}</h3>
            <p className="text-white/60 italic leading-relaxed text-lg">
              "{story.quote}"
            </p>
            <div className="mt-auto pt-4">
              <span className="text-[10px] font-mono uppercase text-white/40">— {story.author}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-24 p-12 bg-red-500/5 border-2 border-dashed border-red-500/30 text-center">
        <p className="text-2xl md:text-3xl font-light text-white/80 max-w-3xl mx-auto">
          "The portfolio presentation is a vestige of a time when we valued <span className="text-white font-bold uppercase">theatre</span> over <span className="text-white font-bold uppercase">thought</span>. It's time to build a hiring process that respects the craft."
        </p>
      </div>
    </section>
  );
};

export default Stories;
