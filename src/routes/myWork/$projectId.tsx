import { createFileRoute, Link } from '@tanstack/react-router';
import { info } from '../../data';
import { icons, techologyIcons } from '../../icons';

export const Route = createFileRoute('/myWork/$projectId')({
  loader: ({ params }) => info.projects.find((p) => p.title === params.projectId) ?? null,
  component: RouteComponent,
  notFoundComponent: NotFoundComponent,
});

function RouteComponent() {
  const project = Route.useLoaderData();
  if (!project) return NotFoundComponent();
  return (
    <div className="space-y-4">
      <img className="rounded-lg shadow-lg" src={project.imageUrl} alt={project.title} />
      <h1 className="text-2xl font-bold">{project.title}</h1>
      <span>{project.description}</span>
      <div className="flex gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className=" text-sm flex justify-center items-center gap-1 border border-accent p-1 rounded-lg"
          >
            <span className="inline-block">{techologyIcons[t]?.icon()}</span>{' '}
            {techologyIcons[t]?.name}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-6">
        <a
          href={project.repository.link}
          target="_blank"
          rel="noopener"
          className="flex text-secondary group/linkihate text-lg font-medium items-center relative z-10 gap-1 w-min pb-1 "
        >
          <span>{icons.gitBranch.icon(24)}</span> Repo
          <span className="absolute text-foreground -right-3 top-1">
            {icons.externalLink.icon(10)}
          </span>
          <span className="absolute bottom-[0px] left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover/linkihate:scale-x-100"></span>
        </a>
        {project.links ? (
          project.links.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener"
              className="flex text-secondary group/linkihate text-lg font-medium items-center relative z-10 gap-1 w-min pb-1 "
            >
              <span>{techologyIcons.vscode.icon(24)}</span> {link.name}
              <span className="absolute text-foreground -right-3 top-1">
                {icons.externalLink.icon(10)}
              </span>
              <span className="absolute bottom-[0px] left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover/linkihate:scale-x-100"></span>
            </a>
          ))
        ) : (
          <> </>
        )}
      </div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <div className="text-center space-y-4">
      <h1 className="font-bold text-2xl">Project not found</h1>
      <small className="text-accent">Check the URL and try again</small>
      <p>Or</p>
      <span>
        go back to the{' '}
        <Link to="/myWork" className="text-secondary group/linkihate">
          <span className="relative z-10">
            projects page
            <span className="absolute bottom-[0px] left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover/linkihate:scale-x-100"></span>
          </span>
        </Link>
      </span>
    </div>
  );
}
