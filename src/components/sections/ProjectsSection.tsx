import React, { useState } from 'react';
import { PROJECTS } from '../../data/portfolioData';
import { Project } from '../../types/portfolio';
import { ProjectModal } from '../ProjectModal';
import { Github, Sparkles, Eye } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const CATEGORIES = [
  'All',
  'Generative AI & RAG',
  'Machine Learning',
  'Data Engineering'
];

export const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background celestial glow */}
      <div 
        className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#d946ef' }}
      />
      <div 
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full filter blur-[120px] opacity-15 pointer-events-none"
        style={{ background: '#f97316' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
            Things I’ve{' '}
            <span className="text-cosmic-gradient">Built.</span>
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  cosmicAudio.playChirp(750, 0.03);
                }}
                className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-pink-400 shadow-cosmic-sm scale-105'
                    : 'bg-space-900/60 hover:bg-space-850 text-slate-300 hover:text-white border-white/10 hover:border-purple-500/40'
                }`}
              >
                {cat === 'All' ? 'ALL SYSTEMS' : cat}
              </button>
            );
          })}
        </div>

        {/* Planetary Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((proj) => {
            return (
              <div
                key={proj.id}
                className="cosmic-panel rounded-2xl overflow-hidden border-purple-500/20 hover:border-pink-500/40 transition-all duration-300 flex flex-col group cursor-pointer"
                onClick={() => {
                  setSelectedProject(proj);
                  cosmicAudio.playChirp(850, 0.05);
                }}
              >
                {/* Planet Visual Header Bar */}
                <div 
                  className="p-5 relative overflow-hidden flex items-center justify-between border-b border-white/10"
                  style={{
                    background: `linear-gradient(135deg, rgba(10, 7, 29, 0.9) 0%, ${proj.glowColor} 200%)`
                  }}
                >
                  <div className="flex items-center gap-3">
                    {/* Abstract Mini Planet Sphere */}
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center border border-white/20 shadow-inner relative overflow-hidden"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, #ffffff 0%, ${proj.accentColor} 60%, #030208 100%)`
                      }}
                    >
                      {/* Orbital ring */}
                      <div className="absolute inset-0 border border-white/40 rounded-full transform rotate-45 scale-125 pointer-events-none" />
                    </div>

                    <div>
                      <span className="telemetry-tag text-purple-300 font-bold block">
                        {proj.number}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        {proj.planetType.toUpperCase()} CLASS
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full border border-pink-500/30 text-pink-300 bg-pink-500/10">
                      {proj.category}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold font-display text-white group-hover:text-pink-300 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs font-mono text-purple-300/90 mt-0.5 mb-3 font-semibold">
                      {proj.subtitle}
                    </p>
                    <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1">
                    {proj.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                        <Sparkles className="w-3 h-3 text-pink-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {proj.technologies.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-space-850 border border-white/5 text-purple-200"
                      >
                        `{tech}`
                      </span>
                    ))}
                    {proj.technologies.length > 5 && (
                      <span className="text-[10px] font-mono px-1.5 py-0.5 text-slate-500">
                        +{proj.technologies.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-pink-400 group-hover:text-pink-300 font-semibold"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>INSPECT DOSSIER →</span>
                    </button>

                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Expandable Project Dossier Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
