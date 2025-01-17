import { createFileRoute } from '@tanstack/react-router'
import { info } from '../../data'
import { techologyIcons } from '../../icons'

export const Route = createFileRoute('/myWork/$projectId')({
  component: RouteComponent,
})

function RouteComponent() {
  const { projectId } = Route.useParams()
  const project = info.projects.find((p) => p.title === projectId)
  if (!project) {
    return <div>Project not found</div>
  }
  return (
    <div className="space-y-4">
      <img
        className="rounded-lg shadow-lg"
        src={project.imageUrl}
        alt={project.title}
      />
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
    </div>
  )
}
