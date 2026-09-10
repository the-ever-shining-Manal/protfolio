import React from 'react';
import { CERTIFICATIONS } from '../../data/portfolioData';
import { ExternalLink, Award } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="relative py-16 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
            Certifications &{' '}
            <span className="text-cosmic-gradient">Credentials.</span>
          </h2>
        </div>

        {/* 4 Compact Summarized Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group shadow-cosmic-sm hover:shadow-cosmic-md hover:-translate-y-0.5"
              onMouseEnter={() => cosmicAudio.playChirp(700 + idx * 60, 0.03)}
            >
              <div>
                {/* Header with Issuer */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 font-semibold flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{cert.badge}</span>
                  </span>
                  {cert.year && (
                    <span className="text-xs font-mono text-purple-300">
                      {cert.year}
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-pink-200 transition-colors mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-purple-300/90 mb-3">
                  ISSUED BY: <strong className="text-white">{cert.issuer}</strong>
                </p>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {cert.description}
                </p>
              </div>

              {/* Verified Credential Link */}
              {cert.credentialUrl && (
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => cosmicAudio.playChirp(880, 0.04)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-400 hover:text-pink-300 font-semibold transition-colors group/link"
                  >
                    <span>View Verified Credential</span>
                    <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
