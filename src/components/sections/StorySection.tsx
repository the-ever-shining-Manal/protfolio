import React, { useState } from 'react';
import { STORY_WAYPOINTS } from '../../data/portfolioData';
import { Sparkles, Compass, Cpu, Brain, Rocket, Orbit, Quote, ArrowRight } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Compass,
  Cpu,
  Brain,
  Rocket,
  Orbit
};

export const StorySection: React.FC = () => {
  const [activeWaypoint, setActiveWaypoint] = useState(0);

  const current = STORY_WAYPOINTS[activeWaypoint];
  const CurrentIcon = ICONS[current.iconName] || Orbit;

  return (
    <section id="story" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/2 left-0 w-96 h-96 rounded-full filter blur-[100px] opacity-15 pointer-events-none"
        style={{ background: '#9333ea' }}
      />
      <div 
        className="absolute top-1/3 right-0 w-96 h-96 rounded-full filter blur-[100px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Orbit className="w-3.5 h-3.5 text-pink-400" />
            <span>ORIGIN STORY & TRAJECTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-6">
            It started with{' '}
            <span className="text-cosmic-gradient">science fiction.</span>
          </h2>
        </div>

        {/* Story Quote Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="cosmic-panel rounded-2xl p-6 sm:p-10 border-pink-500/20 relative">
            <Quote className="w-10 h-10 text-pink-500/30 absolute top-6 right-6 pointer-events-none" />
            
            <div className="space-y-4 text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              <p>
                I’ve always been fascinated by the future. Growing up watching sci-fi like <span className="text-pink-300 font-semibold">Star Wars</span> and <span className="text-purple-300 font-semibold">Uninhabited Planet Survive</span>, I would often find myself wondering, <span className="italic text-white font-medium">“How did they make this, and could I actually make something like it?”</span>
              </p>
              <p>
                That curiosity naturally drew me toward engineering, and eventually I discovered AI—the technology that made some of those futuristic ideas feel possible.
              </p>
              <p className="text-white font-medium">
                Today, I’m still driven by the same curiosity: understanding how things work, imagining what could be better, and building technology that makes people’s lives easier.
              </p>
            </div>
          </div>
        </div>

        {/* Visual Animated Orbital Journey: SCI-FI → CURIOSITY → ENGINEERING → AI → REAL PROJECTS → THE FUTURE */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <span className="telemetry-tag text-slate-400">
              ORBITAL FLIGHT PATH // SELECT WAYPOINT TO EXPLORE
            </span>
          </div>

          {/* Stepper Waypoint Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
            {STORY_WAYPOINTS.map((wp, index) => {
              const Icon = ICONS[wp.iconName] || Orbit;
              const isActive = activeWaypoint === index;
              return (
                <button
                  key={wp.epoch}
                  onClick={() => {
                    setActiveWaypoint(index);
                    cosmicAudio.playChirp(700 + index * 60, 0.04);
                  }}
                  className={`flex flex-col items-center text-center p-3.5 rounded-xl border transition-all duration-300 relative group ${
                    isActive
                      ? 'bg-space-850 border-pink-500 shadow-cosmic-md scale-105 z-20'
                      : 'bg-space-900/60 border-purple-500/20 hover:border-purple-500/50 opacity-75 hover:opacity-100'
                  }`}
                >
                  <span className="text-[9px] font-mono text-slate-400 mb-1">
                    EPOCH {wp.epoch}
                  </span>
                  
                  <div 
                    className={`w-9 h-9 rounded-full flex items-center justify-center mb-2 transition-colors ${
                      isActive ? 'bg-pink-500 text-white shadow-cosmic-sm' : 'bg-purple-950/60 text-purple-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>

                  <span className={`text-xs font-display font-bold tracking-wide ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {wp.title}
                  </span>

                  {/* Connecting Arrow for Desktop */}
                  {index < STORY_WAYPOINTS.length - 1 && (
                    <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-30 pointer-events-none text-purple-500/40">
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Waypoint Detail Dossier */}
          <div className="cosmic-panel rounded-2xl p-6 sm:p-8 border-purple-500/30 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-4 mb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-purple-600 to-pink-600 flex items-center justify-center text-white shadow-cosmic-sm">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <div>
                  <span className="telemetry-tag text-purple-300">
                    {current.coordinates} • STAGE {current.epoch}/06
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                    {current.title} — {current.subtitle}
                  </h3>
                </div>
              </div>

              {current.quote && (
                <div className="px-3.5 py-1.5 rounded-lg bg-pink-500/10 border border-pink-500/30 text-pink-300 font-mono text-xs italic">
                  {current.quote}
                </div>
              )}
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-3xl">
              {current.description}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
