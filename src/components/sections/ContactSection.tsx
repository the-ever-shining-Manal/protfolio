import React, { useState } from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Linkedin, Github, Mail, Phone, Copy, Check } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const ContactSection: React.FC = () => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    cosmicAudio.playChirp(950, 0.05);
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden border-t border-purple-500/20">
      {/* Deep space horizon glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] rounded-t-full filter blur-[140px] opacity-20 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(147,51,234,0.3) 40%, rgba(249,115,22,0.15) 70%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        

        {/* Large Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold font-display text-white tracking-tight mb-6 max-w-4xl mx-auto">
          Let’s build something{' '}
          <span className="text-cosmic-gradient block sm:inline">from the future.</span>
        </h2>

        {/* Supporting Text */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-14 leading-relaxed">
          Have an idea, a problem worth solving, or just want to talk AI? Let’s connect.
        </p>

        {/* Four Elegant Communication Portals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-16">
          
          {/* LinkedIn Portal */}
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cosmicAudio.playChirp(800, 0.05)}
            className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1 shadow-sm hover:shadow-cosmic-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-[#0077B5]/20 border border-[#0077B5]/40 flex items-center justify-center text-[#0077B5] group-hover:scale-110 group-hover:bg-[#0077B5] group-hover:text-white transition-all mb-4">
              <Linkedin className="w-6 h-6" />
            </div>
            <div>
              <span className="telemetry-tag text-purple-300 block mb-1">PROFESSIONAL NETWORK</span>
              <h3 className="font-display font-bold text-white text-lg mb-1">LinkedIn</h3>
              <span className="text-xs font-mono text-slate-400 group-hover:text-pink-300 transition-colors">
                manalanwar →
              </span>
            </div>
          </a>

          {/* GitHub Portal */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => cosmicAudio.playChirp(850, 0.05)}
            className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1 shadow-sm hover:shadow-cosmic-md"
          >
            <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-white group-hover:text-space-950 transition-all mb-4">
              <Github className="w-6 h-6" />
            </div>
            <div>
              <span className="telemetry-tag text-purple-300 block mb-1">SOURCE REPOSITORIES</span>
              <h3 className="font-display font-bold text-white text-lg mb-1">GitHub</h3>
              <span className="text-xs font-mono text-slate-400 group-hover:text-pink-300 transition-colors">
                the-ever-shining-Manal →
              </span>
            </div>
          </a>

          {/* Email Portal */}
          <div className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1 shadow-sm hover:shadow-cosmic-md relative">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <div className="w-full">
              <span className="telemetry-tag text-purple-300 block mb-1">DIRECT TRANSMISSION</span>
              <h3 className="font-display font-bold text-white text-lg mb-1">Email</h3>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-xs font-mono text-slate-400 group-hover:text-pink-300 transition-colors block truncate max-w-[200px] mx-auto mb-2"
                onClick={() => cosmicAudio.playChirp(900, 0.05)}
              >
                {PERSONAL_INFO.email}
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-space-900 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone Portal */}
          <div className="cosmic-panel rounded-2xl p-6 border-purple-500/25 hover:border-pink-500/50 transition-all duration-300 flex flex-col items-center justify-between text-center group hover:-translate-y-1 shadow-sm hover:shadow-cosmic-md relative">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <div className="w-full">
              <span className="telemetry-tag text-purple-300 block mb-1">DIRECT AUDIO LINE</span>
              <h3 className="font-display font-bold text-white text-lg mb-1">Phone</h3>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="text-xs font-mono text-slate-400 group-hover:text-emerald-300 transition-colors block mb-2"
                onClick={() => cosmicAudio.playChirp(900, 0.05)}
              >
                {PERSONAL_INFO.phone}
              </a>
              <button
                onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded bg-space-900 border border-white/10 text-slate-300 hover:text-white transition-colors"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
