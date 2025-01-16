import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/my-work')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/my-work"!</div>
}
