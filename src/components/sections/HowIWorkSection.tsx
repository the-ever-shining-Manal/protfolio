import React from 'react';
import { Headphones, Compass, Cpu, Orbit, RotateCw } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const CYCLE_STEPS = [
  {
    step: '01',
    name: 'Listen',
    tagline: 'Understand the human problem.',
    icon: Headphones,
    color: '#ec4899'
  },
  {
    step: '02',
    name: 'Plan',
    tagline: 'Architect the AI roadmap.',
    icon: Compass,
    color: '#a855f7'
  },
  {
    step: '03',
    name: 'Build',
    tagline: 'Train models & write clean code.',
    icon: Cpu,
    color: '#06b6d4'
  },
  {
    step: '04',
    name: 'Improve',
    tagline: 'Benchmark, evaluate & iterate.',
    icon: Orbit,
    color: '#f97316'
  }
];

export const HowIWorkSection: React.FC = () => {
  return (
    <section id="how-i-build" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            How I{' '}
            <span className="text-cosmic-gradient">Build.</span>
          </h2>
        </div>

        {/* The Continuous Orbital Cycle */}
        <div className="relative max-w-5xl mx-auto mb-10">
          {/* Connecting gradient trajectory on desktop */}
          <div 
            className="hidden lg:block absolute top-[52px] left-16 right-16 h-0.5 -translate-y-1/2 z-0 opacity-40"
            style={{
              background: 'linear-gradient(90deg, #ec4899 0%, #a855f7 33%, #06b6d4 66%, #f97316 100%)'
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {CYCLE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-1 shadow-sm hover:shadow-cosmic-md relative"
                  onMouseEnter={() => cosmicAudio.playChirp(650 + idx * 75, 0.03)}
                >
                  {/* Step capsule icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-110 mb-4 shadow-cosmic-sm relative z-10"
                    style={{
                      backgroundColor: `${step.color}15`,
                      borderColor: `${step.color}40`,
                      color: step.color
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="telemetry-tag text-purple-300 block mb-1">
                    PHASE {step.step}
                  </span>

                  <h3 className="text-xl font-bold font-display text-white group-hover:text-pink-200 transition-colors mb-1.5">
                    {step.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 font-medium leading-snug">
                    {step.tagline}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Cyclical Orbit Return Indicator */}
          <div className="flex items-center justify-center gap-2 text-xs font-mono text-purple-300/80 mt-8">
            <RotateCw className="w-3.5 h-3.5 text-pink-400 animate-spin-very-slow" />
            <span>CONTINUOUS ITERATIVE ORBIT // ALWAYS EVOLVING</span>
          </div>
        </div>

        {/* Minimal Identity Matrix */}
        <div className="max-w-3xl mx-auto cosmic-panel rounded-full py-3.5 px-6 border-pink-500/25 text-center">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-mono font-bold tracking-wider text-slate-200">
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
