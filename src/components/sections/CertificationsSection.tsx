import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { cosmicAudio } from '../../utils/audio';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-20 sm:py-24 overflow-hidden border-t border-purple-500/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-4">
            Certifications &{' '}
            <span className="text-cosmic-gradient">Advanced Programs.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Rigorous credentials from global leaders in cloud artificial intelligence, GPU acceleration, and mathematical machine learning.
          </p>
        </div>

        {/* 3 Orbital Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="cosmic-panel rounded-2xl p-6 sm:p-7 border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group"
              onMouseEnter={() => cosmicAudio.playChirp(700 + idx * 60, 0.03)}
            >
              <div>
                {/* Header with Issuer */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 font-semibold">
                    {cert.badge}
                  </span>
                  {cert.year && (
                    <span className="text-xs font-mono text-purple-300">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold font-display text-white group-hover:text-pink-200 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-4">
                  ISSUED BY: <strong className="text-purple-300">{cert.issuer}</strong>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {cert.description}
                </p>
              </div>

              {/* Topics Covered */}
              <div className="pt-4 border-t border-white/10">
                <span className="telemetry-tag text-slate-400 block mb-2">CURRICULUM MODULES</span>
                <div className="flex flex-wrap gap-1.5">
                  {cert.keyTopics.map((topic, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-850 border border-white/5 text-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
