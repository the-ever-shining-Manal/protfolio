import React, { useState } from 'react';
import { ConstellationCanvas } from '../canvas/ConstellationCanvas';
import { HeroSphere } from '../canvas/HeroSphere';
import { Brain, Sparkles, Database, Bot, Eye, Layers } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const CATEGORIES = [
  'All',
  'AI & Machine Learning',
  'Programming',
  'Frameworks & Tools',
  'Cloud & Platforms',
  'Engineering & Workflow'
];

const TOP_SKILL_MODULES = [
  {
    id: "ml",
    icon: Brain,
    title: "Machine Learning & Neural Nets",
    color: "#f97316",
    summary: "Supervised/unsupervised algorithms, feature engineering, Scikit-learn, XGBoost, TensorFlow, and deep learning architectures."
  },
  {
    id: "genai",
    icon: Sparkles,
    title: "Generative AI & Multimodal LLMs",
    color: "#ec4899",
    summary: "Prompt engineering, GPT-4o-mini vision ingestion, synthetic dataset creation, and multimodal vision-language systems."
  },
  {
    id: "rag",
    icon: Database,
    title: "RAG & Vector Retrieval",
    color: "#d946ef",
    summary: "Hybrid dense/sparse search (BGE-M3 + BM25), FAISS indexing, hallucination control boundaries, and Arabic NLP."
  },
  {
    id: "agentic",
    icon: Bot,
    title: "Agentic AI & Multi-Agent Systems",
    color: "#a855f7",
    summary: "Cognitive memory architectures, autonomous multi-agent tool calling, decision workflows, and n8n orchestration."
  },
  {
    id: "cv",
    icon: Eye,
    title: "Computer Vision & Audio Discovery",
    color: "#06b6d4",
    summary: "Medical image symptom triage, acoustic feature extraction, harmonic clustering, and audio pattern discovery."
  },
  {
    id: "cloud",
    icon: Layers,
    title: "Production Engineering & Cloud",
    color: "#10b981",
    summary: "FastAPI asynchronous microservices, Docker containerization, AWS, Google Cloud Vertex AI, and SQL schema normalization."
  }
];

export const SkillsConstellation: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <section id="skills" className="relative py-20 sm:py-28 overflow-hidden border-t border-purple-500/15">
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
            PART 1: THE CELESTIAL AI PLANET & TOP SKILLS SHOWCASE
           ========================================================================= */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
              Top Skills &{' '}
              <span className="text-cosmic-gradient">AI Core Modules.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
              The primary architectural modules powering my intelligent systems — from neural architectures to autonomous multi-agent pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* The Rotating Celestial Planet / AI Core Sphere */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[420px]">
                <HeroSphere />
              </div>
            </div>

            {/* Top Skills Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {TOP_SKILL_MODULES.map((mod, idx) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.id}
                    className="cosmic-panel rounded-2xl p-5 border-white/10 hover:border-pink-500/40 transition-all duration-300 group hover:-translate-y-0.5 shadow-sm"
                    onMouseEnter={() => cosmicAudio.playChirp(680 + idx * 45, 0.03)}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110 shrink-0"
                        style={{
                          backgroundColor: `${mod.color}15`,
                          borderColor: `${mod.color}40`,
                          color: mod.color
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="text-base font-bold font-display text-white group-hover:text-pink-200 transition-colors">
                        {mod.title}
                      </h3>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {mod.summary}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            PART 2: INTERACTIVE AI CONSTELLATION MAP
           ========================================================================= */}
        <div className="pt-12 border-t border-purple-500/20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h3 className="text-3xl sm:text-4xl font-extrabold font-display text-white tracking-tight mb-3">
              Skill <span className="text-cosmic-gradient">Constellation.</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Hover over any star node to reveal its technical dossier and connected skills. Click to lock node telemetry.
            </p>
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
