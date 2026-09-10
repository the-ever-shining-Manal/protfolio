import React from 'react';
import { SpaceBackground } from './components/canvas/SpaceBackground';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { AboutSection } from './components/sections/AboutSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsConstellation } from './components/sections/SkillsConstellation';
import { ExperienceTimeline } from './components/sections/ExperienceTimeline';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { CertificationsSection } from './components/sections/CertificationsSection';
import { HowIWorkSection } from './components/sections/HowIWorkSection';
import { ContactSection } from './components/sections/ContactSection';
import { Footer } from './components/sections/Footer';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-space-950 text-slate-100 selection:bg-pink-500 selection:text-white font-sans overflow-x-hidden">
      {/* Dynamic Cosmic Canvas Background */}
      <SpaceBackground />

      {/* Futuristic HUD Navigation Header with Voice / Audio Toggle */}
      <Navbar />

      {/* Main Body Content */}
      <main className="relative z-10">
        {/* 1. Hero Section (Clean Portrait beside Headline & CTAs) */}
        <Hero />

        {/* 2. Unified About Me (Sci-Fi Origin Story + AI Engineering Profile + Core Mission) */}
        <AboutSection />

        {/* 3. Academic Education (Tanta University, B.Sc. in AI, GPA 3.613 / 4.0) */}
        <EducationSection />

        {/* 4. Top Skills & Celestial AI Core Planet + Skill Constellation underneath */}
        <SkillsConstellation />

        {/* 5. Space Mission Experience Timeline */}
        <ExperienceTimeline />

        {/* 6. Planetary Projects Showcase */}
        <ProjectsSection />

        {/* 7. Certifications & Advanced Programs */}
        <CertificationsSection />

        {/* 8. How I Build (Methodology & Workflow) */}
        <HowIWorkSection />

        {/* 9. Contact / Event Horizon Destination */}
        <ContactSection />
      </main>

      {/* Minimal Futuristic Footer */}
      <Footer />
    </div>
  );
};

export default App;
