import svgenImage from './assets/images/svgen.png';
import vsCodeThemeImage from './assets/images/vscodeTheme.png';
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

export const info: Info = {
  personal: {
    name: 'Nathan Cuevas',
    location: 'California, United States',
    description:
      "I'm a Full-Stack Web Developer. I specialize in React, TypeScript, and Node.js. I'm always learning and keeping up with new technologies.",
    email: 'nathanacuevas97@gmail.com',
    github: {
      name: 'NateAyye',
      link: 'https://github.com/NateAyye',
    },
    linkedin: {
      name: 'Nathan Cuevas',
      link: 'https://www.linkedin.com/in/nathan-cuevas',
    },
  },
  experience: [
    {
      title: 'Full-Stack Web Developer',
      company: 'UC Davis',
      date: 'Mar 2023 - Sept 2023',
      description:
        'Working within a team of other developers to come up with a real life web application using the agile methodology to guide a team towards and MVP(minimum viable product). Being put on a deadline with a team really pushed me to gain control of everybodies workflow to make sure we are working together and not against each other.',
    },
    {
      title: 'Open Source Contributor',
      company: 'Github',
      date: 'Jan 2022 - Present',
      description:
        'Contributing to open source projects on Github. I always try to help out with issues and pull requests to help the community and learn from others.',
    },
  ],
  projects: [
    {
      title: 'Custom VS Code Theme',
      description:
        'My custom VS Code theme that I use for my self and have published on the visual studio marketplace with over 1,200 installs.',
      tech: ['github', 'vscode', 'nodejs'],
      imageUrl: vsCodeThemeImage,
      repository: {
        name: 'Custom VS Code Theme',
        link: 'https://github.com/NateAyye/custom-github-dark-theme',
      },
      link1: {
        name: 'VS Code Marketplace',
        link: 'https://marketplace.visualstudio.com/items?itemName=NathanCuevas.custom-github-dark-dimmed',
      },
    },
    {
      title: 'SVG Placeholder Generator',
      description:
        'A simple svg logo generator based on only 4 simple questions. Used this project to learn more about npm and publish my own package.',
      tech: ['github', 'javascript', 'nodejs', 'npm', 'jest'],
      imageUrl: svgenImage,
      repository: {
        name: 'SVG Placeholder Generator',
        link: 'https://github.com/NateAyye/svg-logo-maker',
      },
      link1: {
        name: 'NPM Package',
        link: 'https://www.npmjs.com/package/svg-logo-maker',
      },
    },
  ],
};
