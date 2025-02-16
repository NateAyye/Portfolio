import svgenImage from './assets/images/projects/svgen/svgen.png';
import vsCodeThemeImage from './assets/images/projects/vscodeTheme/vscodeTheme.png';
import { Info } from './types';

export const info: Info = {
  personal: {
    name: 'Nathan Cuevas',
    location: 'California, United States',
    description:
      "I'm a Full-Stack Web Developer. I specialize in React, TypeScript, and Node.js. I'm always learning and keeping up with new technologies.",
    email: 'nathanacuevas97@gmail.com',
    github: {
      name: 'NateAyye',
      icon: 'github',
      link: 'https://github.com/NateAyye',
    },
    linkedin: {
      name: 'Nathan Cuevas',
      icon: 'linkedin',
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
        icon: 'github',
        link: 'https://github.com/NateAyye/custom-github-dark-theme',
      },
      links: [
        {
          name: 'VS Code Marketplace',
          icon: 'vscode',
          link: 'https://marketplace.visualstudio.com/items?itemName=NathanCuevas.custom-github-dark-dimmed',
        },
      ],
    },
    {
      title: 'SVG Placeholder Generator',
      description:
        'A simple svg logo generator based on only 4 simple questions. Used this project to learn more about npm and publish my own package.',
      tech: ['github', 'javascript', 'nodejs', 'npm', 'jest'],
      imageUrl: svgenImage,
      repository: {
        name: 'SVG Placeholder Generator',
        icon: 'github',
        link: 'https://github.com/NateAyye/svg-logo-maker',
      },
      links: [
        {
          name: 'NPM Package',
          icon: 'npm',
          link: 'https://www.npmjs.com/package/svg-logo-maker',
        },
      ],
      
    },
  ],
};
