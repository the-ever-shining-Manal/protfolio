import React from 'react';
import { MISSIONS } from '../../data/portfolioData';
import { Calendar, CheckCircle2 } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">
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
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Mission Timeline &{' '}
            <span className="text-cosmic-gradient">Flight Path.</span>
          </h2>
        </div>

        {/* Vertical Spaceflight Mission Route - Wide Card Layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing flight trajectory line on the left */}
          <div 
            className="absolute left-4 sm:left-6 top-6 bottom-6 w-0.5 -translate-x-1/2"
            style={{
              background: 'linear-gradient(180deg, #ec4899 0%, #a855f7 35%, #06b6d4 75%, #f97316 100%)'
            }}
          />

          <div className="space-y-10 sm:space-y-12">
            {MISSIONS.map((mission, index) => {
              return (
                <div 
                  key={mission.missionNumber}
                  className="relative flex items-start"
                  onMouseEnter={() => cosmicAudio.playChirp(600 + index * 50, 0.03)}
                >
                  {/* Waypoint Beacon Node on the flight line */}
                  <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-7 z-20 flex items-center justify-center">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-space-950 border-2 border-pink-400 flex items-center justify-center shadow-cosmic-sm">
                      <div className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                    </div>
                  </div>

                  {/* Wide Mission Card */}
                  <div className="w-full pl-10 sm:pl-16">
                    <div className="cosmic-panel rounded-2xl sm:rounded-3xl p-6 sm:p-8 border-purple-500/25 hover:border-pink-500/40 transition-all duration-300 group shadow-cosmic-sm hover:shadow-cosmic-md">
                      
                      {/* Top Header Row */}
                      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                          <span className="telemetry-tag text-purple-300 font-bold">
                            {mission.missionNumber}
                          </span>
                          <span className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${mission.badgeColor}`}>
                            {mission.status}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs font-mono text-purple-200/90 bg-space-900/80 px-3 py-1 rounded-full border border-purple-500/20">
                          <Calendar className="w-3.5 h-3.5 text-pink-400" />
                          <span>{mission.period}</span>
                        </div>
                      </div>

                      {/* Role & Org */}
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-white group-hover:text-pink-200 transition-colors">
                        {mission.role}
                      </h3>
                      <p className="text-sm font-semibold text-purple-300 mt-1 mb-3">
                        {mission.organization} • <span className="font-normal text-slate-400">{mission.location}</span>
                      </p>

                      {/* Summary */}
                      <p className="text-sm sm:text-base text-slate-300 mb-4 leading-relaxed">
                        {mission.summary}
                      </p>

                      {/* Bullet points */}
                      <div className="space-y-2 mb-5">
                        {mission.bulletPoints.map((bp, i) => (
                          <div 
                            key={i} 
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal"
                          >
                            <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                            <span>{bp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Technology Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {mission.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-space-850 border border-white/10 text-slate-300"
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
