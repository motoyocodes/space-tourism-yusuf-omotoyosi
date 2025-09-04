import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/pages/crew/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/pages/crew/"!</div>
}
