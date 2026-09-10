export type SkillCategory = 
  | 'Programming'
  | 'AI & Machine Learning'
  | 'Frameworks & Tools'
  | 'Cloud & Platforms'
  | 'Engineering & Workflow';

export interface SkillNode {
  id: string;
  name: string;
  category: SkillCategory;
  level: 'Expert' | 'Advanced' | 'Intermediate';
  description: string;
  relatedProjects: string[];
  x: number; // 0 to 100 for constellation positioning
  y: number; // 0 to 100
  connections: string[]; // ids of connected skill nodes
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview: string;
  keyFeatures: string[];
  category: 'Generative AI & RAG' | 'Machine Learning' | 'Data Engineering' | 'Computer Vision & Audio';
  technologies: string[];
  planetType: 'Gas Giant' | 'Terrestrial' | 'Ice World' | 'Oceanic' | 'Molten' | 'Ringed' | 'Dwarf' | 'Plasma';
  glowColor: string;
  accentColor: string;
  githubUrl?: string;
  liveUrl?: string;
  highlights: string[];
}

export interface MissionExperience {
  missionNumber: string;
  role: string;
  organization: string;
  period: string;
  location: string;
  summary: string;
  bulletPoints: string[];
  technologies: string[];
  status: 'CURRENT MISSION' | 'COMPLETED ORBIT';
  badgeColor: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  badge: string;
  description: string;
  keyTopics: string[];
  credentialUrl?: string;
}

export interface StoryWaypoint {
  epoch: string;
  title: string;
  subtitle: string;
  description: string;
  quote?: string;
  coordinates: string;
  iconName: string;
}

export interface HowIWorkStage {
  step: string;
  name: string;
  tagline: string;
  description: string;
  details: string[];
  icon: string;
}
