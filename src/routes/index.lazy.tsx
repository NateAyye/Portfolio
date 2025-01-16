import { createLazyFileRoute } from '@tanstack/react-router';
import ExperienceCard from '../components/experienceCard';
import PersonalCard from '../components/personalCard';
import TechMarquee from '../components/techMarquee';
import { info } from '../data';
import { techologyIcons } from '../icons';
import ProjectCard from '../components/projectCard';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const iconsLength = Object.keys(techologyIcons).length;
  const firstHalfIcons = Object.fromEntries(
    Object.entries(techologyIcons).slice(0, iconsLength / 2),
  );
  const secondHalfIcons = Object.fromEntries(Object.entries(techologyIcons).slice(8, iconsLength));
  return (
    <div className="space-y-10">
      <PersonalCard {...info.personal} />
      <section>
        <h2 className="text-4xl font-bold my-5">What I work with</h2>
        <TechMarquee icons={firstHalfIcons} speed={'fast'} />
        <TechMarquee icons={secondHalfIcons} speed={'slow'} />
      </section>
      <section>
        <h2 className="text-4xl font-bold my-5">Experience</h2>
        <div className="space-y-4">
          {info.experience.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-bold my-5">My work</h2>
        <div className="space-y-4">
          {info.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
}
