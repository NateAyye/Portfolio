import { createFileRoute } from '@tanstack/react-router';
import ProjectCard from '../../components/projectCard';
import { info } from '../../data';

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <section>
      <h2 className="text-4xl font-bold my-5">My Projects</h2>
      <div className="space-y-4">
        {info.projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
}
