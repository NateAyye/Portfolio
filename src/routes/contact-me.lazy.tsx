import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/contact-me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/contact-me"!</div>
}
