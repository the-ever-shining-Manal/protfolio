import React, { useState } from 'react';
import { ConstellationCanvas } from '../canvas/ConstellationCanvas';
import { HeroSphere } from '../canvas/HeroSphere';
import { cosmicAudio } from '../../utils/audio';

const CATEGORIES = [
  'All',
  'AI & Machine Learning',
  'Programming',
  'Frameworks & Tools',
  'Cloud & Platforms',
  'Engineering & Workflow'
];

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden">
      {/* Ambient background flares */}
      <div 
        className="absolute top-1/4 left-1/4 w-[550px] h-[550px] rounded-full filter blur-[140px] opacity-15 pointer-events-none"
        style={{ background: '#7e22ce' }}
      />
      <div 
        className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full filter blur-[130px] opacity-15 pointer-events-none"
        style={{ background: '#ec4899' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* =========================================================================
            PART 1: THE CELESTIAL AI PLANET SHOWCASE
           ========================================================================= */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight">
              Top Skills &{' '}
              <span className="text-cosmic-gradient">AI Core Modules.</span>
            </h2>
          </div>

          <div className="flex items-center justify-center max-w-xl mx-auto">
            {/* The Rotating Celestial Planet / AI Core Sphere */}
            <div className="w-full max-w-[460px]">
              <HeroSphere />
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: INTERACTIVE AI CONSTELLATION MAP
           ========================================================================= */}
        <div className="pt-12">
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight">
              Skill <span className="text-cosmic-gradient">Constellation.</span>
            </h3>
          </div>

          {/* Category Sector Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    cosmicAudio.playChirp(700, 0.03);
                  }}
                  className={`px-4 py-2 rounded-full text-xs font-mono transition-all duration-300 border ${
                    isSelected
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white border-pink-400 shadow-cosmic-sm scale-105'
                      : 'bg-space-900/70 hover:bg-space-850 text-slate-300 hover:text-white border-white/10 hover:border-purple-500/40'
                  }`}
                >
                  {cat === 'All' ? '● ALL SECTORS' : cat}
                </button>
              );
            })}
          </div>

          {/* Constellation Canvas & Holographic Dossier */}
          <ConstellationCanvas selectedCategory={selectedCategory} />
        </div>

      </div>
    </section>
  );
};
