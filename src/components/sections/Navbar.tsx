import React, { useState } from 'react';
import { Volume2, VolumeX, Menu, X } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' }
];

export const Navbar: React.FC = () => {
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const active = cosmicAudio.toggleAmbient();
    setAudioActive(active);
  };

  const handleNavClick = () => {
    setMobileMenuOpen(false);
    cosmicAudio.playChirp(840, 0.04);
  };

  return (
    <header className="fixed top-4 sm:top-5 left-0 right-0 z-50 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        
        {/* Floating Capsule Bar (Desktop Nav Links) */}
        <nav className="hidden md:flex items-center gap-1 px-4 py-2 rounded-full bg-space-950/85 border border-purple-500/25 backdrop-blur-xl shadow-cosmic-md mx-auto">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-purple-500/15 hover:shadow-cosmic-sm transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Right side controls: Audio Toggle & Mobile Menu Button */}
        <div className="flex items-center gap-2 ml-auto md:ml-0">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`relative group p-2.5 rounded-full border backdrop-blur-xl transition-all duration-300 flex items-center justify-center ${
              audioActive
                ? 'bg-pink-500/20 border-pink-400 text-pink-300 shadow-cosmic-md scale-105'
                : 'bg-space-950/80 border-purple-500/25 text-slate-300 hover:text-white hover:border-pink-500/50 hover:bg-space-900'
            }`}
            aria-label="Toggle ambient cosmic soundscape"
            title={audioActive ? "Cosmic Soundscape Active (Click to Mute)" : "Enable Ambient Soundscape"}
          >
            {audioActive && (
              <span className="absolute -inset-1 rounded-full bg-pink-500/30 animate-ping pointer-events-none" />
            )}

            {audioActive ? (
              <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4 group-hover:scale-110 transition-transform" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              cosmicAudio.playChirp(700, 0.03);
            }}
            className="md:hidden p-2.5 rounded-full bg-space-950/85 border border-purple-500/25 text-slate-300 hover:text-white backdrop-blur-xl transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-sm mx-auto p-3 rounded-2xl bg-space-950/95 border border-purple-500/30 backdrop-blur-2xl shadow-cosmic-lg animate-fade-in flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-white hover:bg-purple-500/20 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
