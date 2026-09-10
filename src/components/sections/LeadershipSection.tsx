import React from 'react';
import { LEADERSHIP_ATTRIBUTES } from '../../data/portfolioData';
import { Users, Palette, Shield, Sparkles, MessageSquare, Layers, CheckCircle2 } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const ATTRIBUTE_ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Shield,
  Users,
  MessageSquare,
  Layers,
  Sparkles
};

export const LeadershipSection: React.FC = () => {
  return (
    <section id="leadership" className="relative py-24 sm:py-32 overflow-hidden border-t border-purple-500/15">
      {/* Background glow flares */}
      <div 
        className="absolute top-1/2 right-1/4 w-[450px] h-[450px] rounded-full filter blur-[130px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-mono mb-4">
            <Users className="w-3.5 h-3.5 text-pink-400" />
            <span>HUMAN CONSTELLATION & COMMUNITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Beyond the{' '}
            <span className="text-cosmic-gradient">Code.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Great technology never exists in isolation. It thrives where empathy, artistic creativity, and disciplined leadership intersect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-6xl mx-auto">
          
          {/* Main Leadership Role Spotlight */}
          <div className="lg:col-span-6 cosmic-panel rounded-2xl p-6 sm:p-8 border-pink-500/30 flex flex-col justify-between relative overflow-hidden">
            {/* Background ambient badge */}
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none text-pink-400">
              <Palette className="w-32 h-32" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="telemetry-tag text-purple-300">STUDENT UNION BOARD</span>
                <span className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-pink-500/30 text-pink-300 bg-pink-500/10">
                  2025 – 2026
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-2">
                Head of Arts Committee
              </h3>
              <p className="text-sm font-mono text-purple-300/90 mb-6">
                Tanta Engineering Students’ Union
              </p>

              <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                <p>
                  Led the Arts Committee within the Student Union executive board, designing, organizing, and executing large-scale campus events, artistic showcases, and cultural initiatives for thousands of engineering students.
                </p>
                <p>
                  Coordinated cross-committee collaboration between technical, logistics, and media teams, managing schedules, budgets, and volunteer forces to create transformative communal experiences.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Executive board strategy & event orchestration</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Cross-functional alignment across 100+ student volunteers</span>
              </div>
            </div>
          </div>

          {/* Constellation of People: 5 Core Leadership Dimensions */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-3.5">
            {LEADERSHIP_ATTRIBUTES.map((attr, idx) => {
              const Icon = ATTRIBUTE_ICONS[attr.icon] || Sparkles;
              return (
                <div
                  key={idx}
                  className="cosmic-panel rounded-xl p-4 border-white/10 hover:border-pink-500/40 transition-all duration-300 flex items-start gap-4 group"
                  onMouseEnter={() => cosmicAudio.playChirp(750 + idx * 40, 0.03)}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-tr from-purple-900/60 to-pink-900/40 border border-purple-500/30 flex items-center justify-center text-pink-300 group-hover:scale-110 group-hover:text-white transition-all shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base group-hover:text-pink-200 transition-colors">
                      {attr.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 mt-0.5 leading-normal">
                      {attr.description}
                    </p>
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
