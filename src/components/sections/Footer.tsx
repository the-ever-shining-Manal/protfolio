import React from 'react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { Linkedin, Github } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-space-950/90 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
              <span className="font-display font-bold text-white text-base tracking-wider">
                {PERSONAL_INFO.name}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-pulse" />
            </div>
            <p className="text-xs font-mono text-slate-400">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Core Brand Quote */}
          <div className="text-center">
            <p className="text-sm font-medium text-slate-300 italic">
              “{PERSONAL_INFO.quote}”
            </p>
            <span className="text-[10px] font-mono text-purple-400/80 mt-1 block">
              MANAL’S UNIVERSE // SECTOR {PERSONAL_INFO.coordinates}
            </span>
          </div>

          {/* Social Icons & Copyright */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-space-900 border border-white/10 hover:border-pink-500/50 hover:text-white transition-colors"
              aria-label="Manal Anwer on LinkedIn"
              onClick={() => cosmicAudio.playChirp(700, 0.03)}
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-space-900 border border-white/10 hover:border-pink-500/50 hover:text-white transition-colors"
              aria-label="Manal Anwer on GitHub"
              onClick={() => cosmicAudio.playChirp(750, 0.03)}
            >
              <Github className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center text-xs font-mono text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Manal Anwer. All rights reserved.</span>
          <span>Engineered with React, TypeScript & Deep Space Aesthetics.</span>
        </div>
      </div>
    </footer>
  );
};
