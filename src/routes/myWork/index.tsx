import { createFileRoute } from '@tanstack/react-router';
import ExperienceCard from '../../components/experienceCard';
import ProjectCard from '../../components/projectCard';
import { info } from '../../data';

export const Route = createFileRoute('/myWork/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <section>
        <h2 className="text-4xl font-bold my-5">Experience</h2>
        <div className="space-y-4">
          {info.experience.map((experience) => (
            <ExperienceCard key={experience.title} {...experience} />
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-4xl font-bold my-5">Projects</h2>
        <div className="space-y-4">
          {info.projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>
    </>
  );
}
