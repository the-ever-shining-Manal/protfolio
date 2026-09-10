import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const Navbar: React.FC = () => {
  const [audioActive, setAudioActive] = useState(false);

  const toggleSound = () => {
    const active = cosmicAudio.toggleAmbient();
    setAudioActive(active);
  };

  return (
    <div className="fixed top-5 right-5 sm:top-6 sm:right-8 z-50">
      <button
        onClick={toggleSound}
        className={`relative group p-3 rounded-full border backdrop-blur-xl transition-all duration-300 flex items-center justify-center ${
          audioActive
            ? 'bg-pink-500/20 border-pink-400 text-pink-300 shadow-cosmic-md scale-105'
            : 'bg-space-900/70 border-white/15 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-space-850'
        }`}
        aria-label="Toggle ambient cosmic soundscape"
        title={audioActive ? "Cosmic Soundscape Active (Click to Mute)" : "Enable Ambient Soundscape"}
      >
        {/* Subtle glowing ping when audio is on */}
        {audioActive && (
          <span className="absolute -inset-1 rounded-full bg-pink-500/30 animate-ping pointer-events-none" />
        )}

        {audioActive ? (
          <Volume2 className="w-5 h-5 text-pink-400 animate-pulse" />
        ) : (
          <VolumeX className="w-5 h-5 group-hover:scale-110 transition-transform" />
        )}

        {/* Minimal hover tooltip */}
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-lg bg-space-950/90 border border-white/10 text-[10px] font-mono text-slate-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
          {audioActive ? "AUDIO ON" : "AUDIO OFF"}
        </span>
      </button>
    </div>
  );
};
