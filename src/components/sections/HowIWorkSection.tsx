import React from 'react';
import { HOW_I_BUILD_STAGES } from '../../data/portfolioData';
import { Headphones, Compass, Cpu, Orbit } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const STEP_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Headphones,
  Compass,
  Cpu,
  Orbit
};

export const HowIWorkSection: React.FC = () => {
  return (
    <section id="how-i-build" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            How I{' '}
            <span className="text-cosmic-gradient">Build.</span>
          </h2>
        </div>

        {/* 4 Connected Orbital Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative">
          {HOW_I_BUILD_STAGES.map((stage, idx) => {
            const Icon = STEP_ICONS[stage.icon] || Cpu;
            return (
              <div
                key={stage.step}
                className="cosmic-panel rounded-2xl p-6 sm:p-7 border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                onMouseEnter={() => cosmicAudio.playChirp(650 + idx * 70, 0.03)}
              >
                {/* Step indicator watermark */}
                <span className="absolute -top-3 -right-2 font-display font-black text-6xl text-purple-500/10 pointer-events-none group-hover:text-pink-500/15 transition-colors">
                  {stage.step}
                </span>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-950/80 border border-purple-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="telemetry-tag text-purple-300 font-bold">
                      STAGE {stage.step}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-pink-200 transition-colors mb-1">
                    {stage.name}
                  </h3>
                  <p className="text-xs font-mono text-purple-300 mb-4 font-medium">
                    {stage.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Identity Matrix Banner */}
        <div className="max-w-4xl mx-auto cosmic-panel rounded-2xl p-6 sm:p-8 border-pink-500/30 text-center">
          <span className="telemetry-tag text-purple-300 block mb-2">SYSTEM TRAITS SUMMARY</span>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-sm sm:text-base font-mono font-bold tracking-wider text-slate-200">
            <span className="text-pink-300">CREATIVE</span>
            <span className="text-slate-600">•</span>
            <span className="text-purple-300">ORGANIZED</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300">TECHNICAL</span>
            <span className="text-slate-600">•</span>
            <span className="text-orange-300">COLLABORATIVE</span>
          </div>
        </div>

      </div>
    </section>
  );
};
