import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { GraduationCap, Calendar } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Background glow flares */}
      <div 
        className="absolute top-1/2 right-10 w-[450px] h-[450px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#9333ea' }}
      />
      <div 
        className="absolute bottom-10 left-10 w-[450px] h-[450px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Clean Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Academic{' '}
            <span className="text-cosmic-gradient">Education.</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main University Card */}
          <div 
            className="cosmic-panel rounded-3xl p-6 sm:p-10 border-pink-500/25 relative overflow-hidden group shadow-cosmic-md hover:border-pink-500/40 transition-all duration-300"
            onMouseEnter={() => cosmicAudio.playChirp(720, 0.04)}
          >
            {/* Ambient Background Aura */}
            <div 
              className="absolute -right-20 -top-20 w-64 h-64 rounded-full filter blur-3xl opacity-20 pointer-events-none"
              style={{ background: '#ec4899' }}
            />

            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-purple-600 to-pink-600 p-[1px] shadow-cosmic-sm shrink-0">
                  <div className="w-full h-full bg-space-950 rounded-2xl flex items-center justify-center text-pink-400">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                    Tanta University
                  </h3>
                  <p className="text-sm font-mono text-purple-200 mt-0.5">
                    Faculty of Engineering • B.Sc. in Artificial Intelligence
                  </p>
                </div>
              </div>

              {/* GPA & Timeline Badges - Perfectly Symmetrical Rectangles */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="w-48 sm:w-52 h-[124px] p-4 rounded-2xl bg-space-900/90 border border-pink-500/40 text-center shadow-cosmic-sm flex flex-col justify-between items-center">
                  <span className="text-[10px] font-mono text-pink-400 block uppercase tracking-wider">
                    CUMULATIVE GPA
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                    {PERSONAL_INFO.gpa}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 block">
                    / 4.0 SCALE
                  </span>
                </div>

                <div className="w-48 sm:w-52 h-[124px] p-4 rounded-2xl bg-space-900/90 border border-purple-500/30 text-center shadow-cosmic-sm flex flex-col justify-between items-center">
                  <span className="text-[10px] font-mono text-purple-300 block uppercase tracking-wider flex items-center justify-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-pink-400" />
                    <span>TIMELINE</span>
                  </span>
                  <span className="text-2xl sm:text-3xl font-mono font-black text-white">
                    2022 – 2027
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block font-semibold">
                    Expected Graduation
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
