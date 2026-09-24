import React from 'react';
import { SERVICES } from '../../data/portfolioData';
import { Cpu, Sparkles, Eye, Layers, CheckCircle2 } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const SERVICE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Sparkles,
  Eye,
  Layers
};

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background celestial glow flares */}
      <div 
        className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Here’s what I can actually{' '}
            <span className="text-cosmic-gradient">build for you.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-normal max-w-2xl mx-auto">
            From research and deep models to fully production-ready, containerized AI applications.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {SERVICES.map((srv, idx) => {
            const Icon = SERVICE_ICONS[srv.icon] || Sparkles;

            return (
              <div
                key={srv.number}
                className="cosmic-panel rounded-3xl p-7 sm:p-8 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-cosmic-sm hover:shadow-cosmic-md relative overflow-hidden"
                onMouseEnter={() => cosmicAudio.playChirp(700 + idx * 70, 0.03)}
              >
                {/* Glow accent */}
                <div 
                  className="absolute -right-16 -top-16 w-44 h-44 rounded-full filter blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
                  style={{ backgroundColor: srv.color }}
                />

                <div>
                  {/* Top Bar: Icon & Step Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <div 
                      className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shadow-cosmic-sm"
                      style={{
                        backgroundColor: `${srv.color}15`,
                        borderColor: `${srv.color}45`,
                        color: srv.color
                      }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span 
                      className="text-xs font-mono font-bold px-3 py-1 rounded-full border shadow-sm"
                      style={{
                        borderColor: `${srv.color}40`,
                        color: srv.color,
                        backgroundColor: `${srv.color}10`
                      }}
                    >
                      SERVICE {srv.number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-2xl font-bold font-display text-white group-hover:text-pink-200 transition-colors mb-3">
                    {srv.number} — {srv.title}
                  </h3>

                  {/* Core Description */}
                  <p className="text-base text-slate-200 leading-relaxed font-medium mb-6">
                    {srv.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="space-y-2.5 pt-4 border-t border-white/10">
                    {srv.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 leading-normal">
                        <CheckCircle2 
                          className="w-4 h-4 shrink-0 mt-0.5"
                          style={{ color: srv.color }}
                        />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
