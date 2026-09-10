import React, { useState, useRef, useEffect, useMemo } from 'react';
import { SKILL_NODES } from '../../data/portfolioData';
import { SkillCategory, SkillNode } from '../../types/portfolio';
import { Sparkles, Layers } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const CATEGORY_COLORS: Record<SkillCategory, { text: string; bg: string; border: string; glow: string; hex: string }> = {
  'Programming': { text: 'text-cyan-400', bg: 'bg-cyan-500/15', border: 'border-cyan-500/40', glow: 'rgba(6, 182, 212, 0.6)', hex: '#06b6d4' },
  'AI & Machine Learning': { text: 'text-pink-400', bg: 'bg-pink-500/15', border: 'border-pink-500/40', glow: 'rgba(236, 72, 153, 0.6)', hex: '#ec4899' },
  'Frameworks & Tools': { text: 'text-purple-400', bg: 'bg-purple-500/15', border: 'border-purple-500/40', glow: 'rgba(168, 85, 247, 0.6)', hex: '#a855f7' },
  'Cloud & Platforms': { text: 'text-orange-400', bg: 'bg-orange-500/15', border: 'border-orange-500/40', glow: 'rgba(249, 115, 22, 0.6)', hex: '#f97316' },
  'Engineering & Workflow': { text: 'text-emerald-400', bg: 'bg-emerald-500/15', border: 'border-emerald-500/40', glow: 'rgba(16, 185, 129, 0.6)', hex: '#10b981' }
};

interface ConstellationCanvasProps {
  selectedCategory: string;
}

export const ConstellationCanvas: React.FC<ConstellationCanvasProps> = ({ selectedCategory }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<SkillNode | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [dimensions, setDimensions] = useState({ width: 900, height: 550 });

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') return SKILL_NODES;
    return SKILL_NODES.filter(s => s.category === selectedCategory);
  }, [selectedCategory]);

  const activeSkill = hoveredSkill || selectedSkill || filteredSkills[0];

  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { clientWidth } = containerRef.current;
        const width = clientWidth;
        const height = Math.max(450, Math.min(620, clientWidth * 0.58));
        setDimensions({ width, height });
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Draw constellation lines
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    ctx.clearRect(0, 0, dimensions.width, dimensions.height);

    const activeNodeId = activeSkill?.id;

    // Draw lines between connected nodes
    SKILL_NODES.forEach((node) => {
      const nodeVisible = selectedCategory === 'All' || node.category === selectedCategory;
      const x1 = (node.x / 100) * dimensions.width;
      const y1 = (node.y / 100) * dimensions.height;

      node.connections.forEach((targetId) => {
        const target = SKILL_NODES.find(n => n.id === targetId);
        if (!target) return;

        const targetVisible = selectedCategory === 'All' || target.category === selectedCategory;
        const x2 = (target.x / 100) * dimensions.width;
        const y2 = (target.y / 100) * dimensions.height;

        const isHighlighted = activeNodeId === node.id || activeNodeId === target.id;

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);

        if (isHighlighted) {
          ctx.strokeStyle = 'rgba(236, 72, 153, 0.75)';
          ctx.lineWidth = 1.8;
          ctx.shadowColor = 'rgba(236, 72, 153, 0.8)';
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = (nodeVisible && targetVisible)
            ? 'rgba(147, 51, 234, 0.22)' 
            : 'rgba(255, 255, 255, 0.05)';
          ctx.lineWidth = 1;
          ctx.shadowBlur = 0;
        }

        ctx.stroke();
      });
    });

    // Reset shadow
    ctx.shadowBlur = 0;
  }, [dimensions, selectedCategory, activeSkill]);

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
      {/* Interactive Constellation Star Map */}
      <div 
        ref={containerRef}
        className="relative lg:col-span-8 cosmic-panel rounded-2xl p-4 md:p-6 overflow-hidden min-h-[460px] md:min-h-[550px] flex items-center justify-center select-none"
      >
        {/* Subtle grid backdrop */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(147,51,234,0.4) 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }}
        />

        {/* Constellation Lines Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Interactive Star Nodes */}
        <div className="absolute inset-0">
          {SKILL_NODES.map((skill) => {
            const isVisible = selectedCategory === 'All' || skill.category === selectedCategory;
            const isHovered = hoveredSkill?.id === skill.id;
            const isSelected = selectedSkill?.id === skill.id;
            const isConnectedToActive = activeSkill?.connections.includes(skill.id);
            const styleColor = CATEGORY_COLORS[skill.category];

            return (
              <div
                key={skill.id}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 group"
                style={{
                  left: `${skill.x}%`,
                  top: `${skill.y}%`,
                  opacity: isVisible ? 1 : 0.25,
                  transform: `translate(-50%, -50%) scale(${isHovered || isSelected ? 1.3 : 1})`,
                  zIndex: isHovered || isSelected ? 40 : 20,
                }}
                onMouseEnter={() => {
                  setHoveredSkill(skill);
                  cosmicAudio.playChirp(750, 0.04);
                }}
                onMouseLeave={() => setHoveredSkill(null)}
                onClick={() => {
                  setSelectedSkill(skill);
                  cosmicAudio.playChirp(900, 0.06);
                }}
              >
                {/* Outer pulsing beacon ring */}
                {(isHovered || isSelected || isConnectedToActive) && (
                  <span 
                    className="absolute -inset-2 rounded-full animate-ping pointer-events-none opacity-60"
                    style={{ backgroundColor: styleColor.hex }}
                  />
                )}

                {/* Star Point */}
                <div 
                  className="w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: isHovered || isSelected ? '#ffffff' : styleColor.hex,
                    borderColor: '#ffffff',
                    boxShadow: isHovered || isSelected 
                      ? `0 0 16px #ffffff, 0 0 30px ${styleColor.glow}`
                      : `0 0 8px ${styleColor.glow}`,
                  }}
                >
                  <div className="w-1 h-1 rounded-full bg-space-950" />
                </div>

                {/* Star Label */}
                <span 
                  className={`absolute left-1/2 top-4 -translate-x-1/2 whitespace-nowrap text-[10px] md:text-xs font-mono font-medium tracking-wide transition-all duration-200 pointer-events-none ${
                    isHovered || isSelected 
                      ? 'text-white font-semibold scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]' 
                      : 'text-slate-300 opacity-80 group-hover:opacity-100'
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Constellation Sector HUD overlay */}
        <div className="absolute top-4 left-4 pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="telemetry-tag text-slate-400">
            SECTOR: <strong className="text-purple-300">{selectedCategory.toUpperCase()}</strong>
          </span>
        </div>

        <div className="absolute bottom-4 right-4 pointer-events-none text-right">
          <span className="text-[10px] font-mono text-slate-500">
            HOVER STAR TO DECODE // CLICK TO LOCK
          </span>
        </div>
      </div>

      {/* Holographic Star Dossier Panel */}
      <div className="lg:col-span-4 cosmic-panel rounded-2xl p-6 border-pink-500/20 relative overflow-hidden">
        {/* Glow ambient accent */}
        <div 
          className="absolute -right-12 -top-12 w-36 h-36 rounded-full filter blur-3xl opacity-20 pointer-events-none"
          style={{ backgroundColor: activeSkill ? CATEGORY_COLORS[activeSkill.category].hex : '#ec4899' }}
        />

        <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-pink-400 animate-pulse" />
            <span className="telemetry-tag text-purple-300">STAR DOSSIER</span>
          </div>
          {activeSkill && (
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[activeSkill.category].border} ${CATEGORY_COLORS[activeSkill.category].text} ${CATEGORY_COLORS[activeSkill.category].bg}`}>
              {activeSkill.category}
            </span>
          )}
        </div>

        {activeSkill ? (
          <div className="space-y-4">
            <div>
              <div className="flex items-baseline justify-between">
                <h4 className="text-2xl font-bold font-display text-white tracking-wide">
                  {activeSkill.name}
                </h4>
                <span className="text-xs font-mono text-emerald-400 font-medium">
                  {activeSkill.level}
                </span>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-1">
                SYSTEM NODE ID: #{activeSkill.id.toUpperCase()}
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-space-900/80 border border-white/5">
              <p className="text-sm text-slate-200 leading-relaxed">
                {activeSkill.description}
              </p>
            </div>


            {/* Connected Nodes */}
            <div>
              <div className="flex items-center gap-1.5 mb-2 text-xs font-mono text-slate-400">
                <Layers className="w-3.5 h-3.5" />
                <span>ORBITAL CONNECTIONS</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {activeSkill.connections.map((cId) => {
                  const node = SKILL_NODES.find(n => n.id === cId);
                  if (!node) return null;
                  return (
                    <button
                      key={cId}
                      onClick={() => setSelectedSkill(node)}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-space-850 hover:bg-space-700 text-slate-300 border border-white/10 hover:border-pink-500/40 transition-colors"
                    >
                      +{node.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ) : (
          <div className="py-12 text-center text-slate-500 font-mono text-xs">
            Awaiting constellation lock...
          </div>
        )}
      </div>
    </div>
  );
};
