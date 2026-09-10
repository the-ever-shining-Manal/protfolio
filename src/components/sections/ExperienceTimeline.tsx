import React from 'react';
import { MISSIONS } from '../../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/3 right-10 w-96 h-96 rounded-full filter blur-[120px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />
      <div 
        className="absolute bottom-1/4 left-10 w-96 h-96 rounded-full filter blur-[120px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Mission Timeline &{' '}
            <span className="text-cosmic-gradient">Flight Path.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From foundational software engineering to leading-edge agentic workflows and multimodal generative AI systems.
          </p>
        </div>

        {/* Vertical Spaceflight Mission Route */}
        <div className="relative max-w-4xl mx-auto">
          {/* Central glowing flight trajectory line */}
          <div 
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #ec4899 0%, #a855f7 35%, #06b6d4 75%, #f97316 100%)'
            }}
          />

          <div className="space-y-12 sm:space-y-16">
            {MISSIONS.map((mission, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={mission.missionNumber}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                  onMouseEnter={() => cosmicAudio.playChirp(600 + index * 50, 0.03)}
                >
                  {/* Waypoint Beacon Node in Center */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                    <div className="relative w-8 h-8 rounded-full bg-space-950 border-2 border-pink-400 flex items-center justify-center shadow-cosmic-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    </div>
                  </div>

                  {/* Mission Card */}
                  <div className={`w-full sm:w-[calc(50%-2rem)] pl-12 sm:pl-0 ${
                    isEven ? 'sm:text-right sm:pr-8' : 'sm:pl-8'
                  }`}>
                    <div className="cosmic-panel rounded-2xl p-6 sm:p-7 border-purple-500/25 hover:border-pink-500/40 transition-all duration-300 group">
                      
                      {/* Mission Status Header */}
                      <div className={`flex items-center gap-2 mb-3 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span className="telemetry-tag text-purple-300 font-bold">
                          {mission.missionNumber}
                        </span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${mission.badgeColor}`}>
                          {mission.status}
                        </span>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-pink-200 transition-colors">
                        {mission.role}
                      </h3>
                      <div className={`flex flex-wrap items-center gap-3 text-xs font-mono text-purple-300/90 mt-1 mb-4 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        <span className="font-semibold text-slate-200">{mission.organization}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-pink-400" />
                          {mission.period}
                        </span>
                      </div>

                      {/* Summary */}
                      <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                        {mission.summary}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2 mb-5">
                        {mission.bulletPoints.map((bp, i) => (
                          <div 
                            key={i} 
                            className={`flex items-start gap-2 text-xs sm:text-sm text-slate-300 leading-normal ${
                              isEven ? 'sm:flex-row-reverse sm:text-right' : 'text-left'
                            }`}
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0 mt-0.5" />
                            <span>{bp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Transition note for Mission 04 */}
                      {mission.missionNumber === 'MISSION 04' && (
                        <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-[11px] font-mono text-cyan-200 mb-4 text-left">
                          ⚡ <strong className="text-cyan-300">TRANSITION HORIZON:</strong> Key turning point bridging robust software engineering architecture directly into AI systems development.
                        </div>
                      )}

                      {/* Technology Badges */}
                      <div className={`flex flex-wrap gap-1.5 ${isEven ? 'sm:justify-end' : 'justify-start'}`}>
                        {mission.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-850 border border-white/10 text-slate-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
