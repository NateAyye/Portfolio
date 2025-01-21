import { icons, techologyIcons } from './icons';

export type TechIconKey = keyof typeof techologyIcons;

export type IconKey = keyof typeof icons;
export interface Link {
  name: string;
  icon: TechIconKey | IconKey;
  link: string;
}

export interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
}

export interface Personal {
  name: string;
  location: string;
  description: string;
  email: string;
  github: Link;
  linkedin: Link;
}

export interface Project {
  title: string;
  description: string;
  tech: TechIconKey[];
  imageUrl: string;
  repository: Link;
  links?: Link[];
}

export interface Info {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
}
