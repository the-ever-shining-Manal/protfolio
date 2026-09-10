import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Sparkles, Network, Database, Bot } from 'lucide-react';

interface SystemModule {
  id: string;
  name: string;
  code: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  angle: number; // in degrees
  distance: number; // orbit radius percentage
  speed: number;
  glowColor: string;
}

const SYSTEM_MODULES: SystemModule[] = [
  { id: 'ml', name: 'Machine Learning', code: 'MOD-01', category: 'PREDICTIVE CORE', icon: Cpu, angle: 0, distance: 48, speed: 0.25, glowColor: '#f97316' },
  { id: 'genai', name: 'Generative AI', code: 'MOD-02', category: 'SYNTHESIS ENGINE', icon: Sparkles, angle: 60, distance: 48, speed: 0.25, glowColor: '#ec4899' },
  { id: 'cv', name: 'Computer Vision', code: 'MOD-03', category: 'OPTICAL SENSORS', icon: Brain, angle: 120, distance: 48, speed: 0.25, glowColor: '#06b6d4' },
  { id: 'nlp', name: 'NLP', code: 'MOD-04', category: 'LINGUISTIC DECODER', icon: Network, angle: 180, distance: 48, speed: 0.25, glowColor: '#c084fc' },
  { id: 'rag', name: 'RAG', code: 'MOD-05', category: 'HYBRID RETRIEVAL', icon: Database, angle: 240, distance: 48, speed: 0.25, glowColor: '#d946ef' },
  { id: 'agentic', name: 'Agentic AI', code: 'MOD-06', category: 'AUTONOMOUS AGENTS', icon: Bot, angle: 300, distance: 48, speed: 0.25, glowColor: '#a855f7' },
];

export const HeroSphere: React.FC = () => {
  const [rotation, setRotation] = useState(0);
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setRotation(prev => (prev + 0.15) % 360);
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;
    setMouseOffset({ x, y });
  };

  const handleMouseLeave = () => {
    setMouseOffset({ x: 0, y: 0 });
  };

  return (
    <div
      className="relative w-full max-w-[560px] aspect-square mx-auto flex items-center justify-center select-none"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: '1200px',
        transform: `rotateY(${mouseOffset.x * 0.8}deg) rotateX(${-mouseOffset.y * 0.8}deg)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      {/* Outer Atmospheric Glow */}
      <div 
        className="absolute w-[80%] h-[80%] rounded-full pointer-events-none filter blur-[60px] opacity-40 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.35) 0%, rgba(147,51,234,0.3) 40%, rgba(249,115,22,0.15) 75%, transparent 100%)'
        }}
      />

      {/* Orbital Ring 1 - Inclined 70deg */}
      <div 
        className="absolute w-[92%] h-[92%] rounded-full border border-purple-500/20 border-dashed pointer-events-none"
        style={{
          transform: `rotateX(72deg) rotateZ(${rotation * 0.6}deg)`,
          boxShadow: '0 0 25px rgba(168, 85, 247, 0.15)'
        }}
      />

      {/* Orbital Ring 2 - Reverse tilt */}
      <div 
        className="absolute w-[84%] h-[84%] rounded-full border border-pink-500/20 pointer-events-none"
        style={{
          transform: `rotateX(-65deg) rotateY(25deg) rotateZ(${-rotation * 0.4}deg)`,
          boxShadow: '0 0 20px rgba(236, 72, 153, 0.12)'
        }}
      />

      {/* Orbital Ring 3 - Horizontal Equator */}
      <div 
        className="absolute w-[98%] h-[98%] rounded-full border border-cyan-500/15 pointer-events-none"
        style={{
          transform: `rotateX(82deg) rotateZ(${rotation}deg)`,
        }}
      />

      {/* Central Glowing AI Celestial Core / Planet */}
      <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full flex items-center justify-center shadow-cosmic-lg overflow-hidden group">
        {/* Deep Planet Texture & Shading */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #f472b6 0%, #a855f7 30%, #4c1d95 65%, #08031a 100%)',
          }}
        />

        {/* Shimmering Grid Overlay */}
        <div 
          className="absolute inset-0 rounded-full opacity-30 mix-blend-overlay"
          style={{
            backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: '14px 14px',
            transform: `rotate(${rotation * 0.5}deg)`
          }}
        />

        {/* Volumetric Internal Atmosphere Shadow */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            boxShadow: 'inset -20px -20px 45px rgba(3, 2, 8, 0.95), inset 15px 15px 35px rgba(255, 255, 255, 0.4)'
          }}
        />

        {/* Central Core Emblem */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center p-4">
          <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center mb-1 shadow-inner">
            <Brain className="w-5 h-5 text-pink-300 animate-pulse" />
          </div>
          <span className="text-[10px] font-mono tracking-widest text-pink-200/90 font-semibold uppercase">
            AI CORE
          </span>
          <span className="text-[8px] font-mono text-purple-300/70 tracking-tight">
            ORBIT-ACTIVE
          </span>
        </div>
      </div>

      {/* Orbiting Technical Modules */}
      {SYSTEM_MODULES.map((mod) => {
        // Calculate orbit position
        const currentAngle = (mod.angle + rotation * 0.6) * (Math.PI / 180);
        // Elliptical perspective orbit
        const radiusX = 46; // percent
        const radiusY = 32; // percent
        const x = 50 + radiusX * Math.cos(currentAngle);
        const y = 50 + radiusY * Math.sin(currentAngle);
        
        // Depth factor based on sin
        const depth = Math.sin(currentAngle); // -1 (back) to +1 (front)
        const scale = 0.85 + 0.25 * ((depth + 1) / 2);
        const opacity = 0.65 + 0.35 * ((depth + 1) / 2);
        const zIndex = depth > 0 ? 30 : 5;
        const IconComponent = mod.icon;
        const isHovered = activeModule === mod.id;

        return (
          <div
            key={mod.id}
            className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-100 ease-linear group"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: `translate(-50%, -50%) scale(${isHovered ? scale * 1.15 : scale})`,
              opacity: isHovered ? 1 : opacity,
              zIndex: isHovered ? 50 : zIndex,
            }}
            onMouseEnter={() => setActiveModule(mod.id)}
            onMouseLeave={() => setActiveModule(null)}
          >
            <div 
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: 'rgba(10, 7, 29, 0.85)',
                borderColor: isHovered ? mod.glowColor : 'rgba(147, 51, 234, 0.35)',
                boxShadow: isHovered 
                  ? `0 0 20px ${mod.glowColor}, inset 0 0 10px ${mod.glowColor}40` 
                  : '0 4px 15px rgba(0,0,0,0.5)',
              }}
            >
              {/* Telemetry Status Indicator */}
              <span 
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: mod.glowColor }}
              />
              
              <IconComponent className="w-3.5 h-3.5 text-slate-200" />
              
              <span className="text-xs font-semibold text-slate-100 whitespace-nowrap group-hover:text-white transition-colors">
                {mod.name}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
