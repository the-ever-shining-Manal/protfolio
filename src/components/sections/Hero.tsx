import React from 'react';
import { ArrowRight, Send } from 'lucide-react';
import { cosmicAudio } from '../../utils/audio';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 sm:pt-24 pb-16 overflow-hidden">
      {/* Background glow flares */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[450px] rounded-full pointer-events-none filter blur-[130px] opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(168,85,247,0.5) 0%, rgba(236,72,153,0.3) 40%, rgba(249,115,22,0.15) 80%, transparent 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">

            {/* Large Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              I’m building the future,{' '}
              <span className="text-cosmic-gradient block mt-1">
                one intelligent system at a time.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed font-normal">
              AI Engineering student turning curiosity, creativity, and engineering into practical AI solutions.
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              {/* Primary Button */}
              <a
                href="#projects"
                onClick={() => cosmicAudio.playChirp(880, 0.06)}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-medium text-sm transition-all duration-300 shadow-cosmic-md hover:shadow-cosmic-lg transform hover:-translate-y-0.5"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Secondary Button */}
              <a
                href="#contact"
                onClick={() => cosmicAudio.playChirp(700, 0.05)}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-space-900/80 hover:bg-space-800 text-slate-200 hover:text-white font-medium text-sm border border-purple-500/30 hover:border-pink-500/50 transition-all duration-300 backdrop-blur-md"
              >
                <Send className="w-4 h-4 text-pink-400" />
                <span>Let’s Connect</span>
              </a>
            </div>
          </div>

          {/* Right Column: Clean Portrait with Elegant Cosmic Aura */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative group select-none">
              
              {/* Outer Atmospheric Cosmic Glow */}
              <div 
                className="absolute -inset-4 rounded-3xl filter blur-2xl opacity-40 group-hover:opacity-65 transition-opacity duration-700 pointer-events-none animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(236,72,153,0.45) 0%, rgba(147,51,234,0.35) 45%, rgba(249,115,22,0.15) 80%, transparent 100%)'
                }}
              />

              {/* Subtle Cosmic Ring Accent */}
              <div className="absolute -inset-5 rounded-full border border-purple-500/20 border-dashed animate-spin-very-slow pointer-events-none" />

              {/* Image Frame Container */}
              <div className="relative w-72 sm:w-80 md:w-96 rounded-3xl p-[2px] bg-gradient-to-tr from-purple-600 via-pink-500 to-orange-400 shadow-cosmic-lg overflow-hidden transition-transform duration-500 group-hover:scale-[1.01]">
                
                {/* Image Inner Wrapper */}
                <div className="relative w-full h-[400px] sm:h-[460px] md:h-[510px] rounded-[22px] overflow-hidden bg-space-950">
                  <img
                    src="/manal-anwer.jpg"
                    alt="Manal Anwer — Artificial Intelligence Engineer"
                    className="w-full h-full object-cover object-center filter brightness-[1.02] contrast-[1.03] transition-all duration-700 group-hover:scale-105"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-space-950 to-transparent pointer-events-none" />
    </section>
  );
};
