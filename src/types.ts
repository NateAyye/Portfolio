export interface Icon {
  name: string;
  icon: (size?: number) => JSX.Element;
}

export interface Link {
  name: string;
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
  tech: string[];
  imageUrl: string;
  repository: Link;
  link1?: Link;
  link2?: Link;
}

export interface Info {
  personal: Personal;
  experience: Experience[];
  projects: Project[];
}
