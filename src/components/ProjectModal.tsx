import React, { useEffect } from 'react';
import { Project } from '../types/portfolio';
import { X, ExternalLink, Github, CheckCircle2, Globe, Cpu } from 'lucide-react';
import { cosmicAudio } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-space-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-3xl cosmic-panel rounded-2xl overflow-hidden border-purple-500/30 shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow accent */}
        <div 
          className="absolute -right-20 -top-20 w-56 h-56 rounded-full filter blur-3xl opacity-25 pointer-events-none"
          style={{ backgroundColor: project.accentColor }}
        />

        {/* Header telemetry bar */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <span 
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: project.accentColor }}
            />
            <span className="telemetry-tag text-purple-300 font-mono text-xs">
              {project.number} // PLANET CLASSIFICATION: {project.planetType.toUpperCase()}
            </span>
          </div>

          <button
            onClick={() => {
              cosmicAudio.playChirp(500, 0.04);
              onClose();
            }}
            className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            aria-label="Close project dossier"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Title and Category */}
        <div className="mb-6">
          <div className="inline-block px-3 py-1 rounded-full text-xs font-mono mb-2 border border-pink-500/30 text-pink-300 bg-pink-500/10">
            {project.category}
          </div>
          <h3 className="text-3xl sm:text-4xl font-bold font-display text-white mb-2">
            {project.title}
          </h3>
          <p className="text-lg text-purple-200/90 font-medium">
            {project.subtitle}
          </p>
        </div>

        {/* Overview Box */}
        <div className="p-4 sm:p-5 rounded-xl bg-space-900/90 border border-white/10 mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2 flex items-center gap-2">
            <Globe className="w-4 h-4 text-pink-400" />
            MISSION BRIEF & ARCHITECTURE
          </h4>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
            {project.fullOverview}
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-6">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3 flex items-center gap-2">
            <Cpu className="w-4 h-4 text-cyan-400" />
            ENGINEERING HIGHLIGHTS & CAPABILITIES
          </h4>
          <div className="space-y-2.5">
            {project.keyFeatures.map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Matrix */}
        <div className="mb-8">
          <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2.5">
            DEPLOYED TECH STACK
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3 py-1.5 rounded-lg bg-space-850 border border-purple-500/25 text-purple-200"
              >
                `{tech}`
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-space-800 hover:bg-space-700 text-white font-medium text-sm border border-white/15 transition-all shadow-sm"
              onClick={() => cosmicAudio.playChirp(800, 0.05)}
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository →</span>
            </a>
          )}

          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium text-sm transition-all shadow-cosmic-md"
              onClick={() => cosmicAudio.playChirp(900, 0.05)}
            >
              <ExternalLink className="w-4 h-4" />
              <span>View Live Mission →</span>
            </a>
          )}

          <button
            onClick={onClose}
            className="ml-auto text-xs font-mono text-slate-400 hover:text-white px-3 py-2 transition-colors"
          >
            [ESC] CLOSE
          </button>
        </div>
      </div>
    </div>
  );
};
