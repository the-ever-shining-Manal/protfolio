import React from 'react';
import { Quote, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Section Heading (no small pill headers) */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Engineering intelligence with{' '}
            <span className="text-cosmic-gradient">purpose and empathy.</span>
          </h2>
        </div>

        {/* ONE Master Unified Card */}
        <div className="max-w-4xl mx-auto">
          <div className="cosmic-panel rounded-3xl p-8 sm:p-12 border-pink-500/25 relative overflow-hidden shadow-cosmic-md">
            <Quote className="w-12 h-12 text-pink-500/15 absolute top-8 right-8 pointer-events-none" />

            <div className="flex items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                  It started with science fiction.
                </h3>
              </div>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-pink-500/15 text-pink-300 border border-pink-500/30 font-semibold shrink-0">
                AI Engineer
              </span>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              <p>
                I’ve always been fascinated by the future. Growing up watching sci-fi like <strong className="text-pink-300 font-semibold">Star Wars</strong> and <strong className="text-purple-300 font-semibold">Uninhabited Planet Survive</strong>, I would often find myself wondering, <span className="italic text-white font-medium">“How did they make this, and could I actually make something like it?”</span>
              </p>

              <p>
                That curiosity naturally drew me toward engineering, and eventually I discovered AI—the technology that made some of those futuristic ideas feel possible.
              </p>

              <p>
                Today, I’m still driven by the same curiosity: understanding how things work, imagining what could be better, and building technology that makes people’s lives easier.
              </p>
            </div>

            {/* Embedded Core Mission Statement */}
            <div className="mt-8 pt-6 border-t border-white/10 p-5 rounded-2xl bg-gradient-to-r from-purple-950/60 to-pink-950/40 border border-pink-500/30">
              <span className="text-xs font-mono text-pink-400 block mb-1 uppercase tracking-wider font-semibold">
                CORE MISSION STATEMENT
              </span>
              <p className="text-lg sm:text-xl font-display font-bold text-white tracking-wide">
                “My goal is simple: Use technology to make human life easier.”
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
