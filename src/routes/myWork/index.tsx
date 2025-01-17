import { Client } from '@notionhq/client';
import { createFileRoute } from '@tanstack/react-router';
import ExperienceCard from '../../components/experienceCard';
import ProjectCard from '../../components/projectCard';
import { info } from '../../data';

export const Route = createFileRoute('/myWork/')({
  component: RouteComponent,
});

function RouteComponent() {
  const notion = new Client({  auth: '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' });

  (async () => {
    const databaseId = '17efaa279a60806fbb91d3d026ca15f6';
    const response = await notion.databases.retrieve({ database_id: databaseId });
    console.log(response);
  })();
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
