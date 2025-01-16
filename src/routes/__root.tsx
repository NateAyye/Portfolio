import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <header>
          <div className="flex items-center justify-between max-w-screen-xl mx-auto px-8">
            <Link to="/">Nathan Cuevas</Link>
            <div className="p-2 flex gap-6">
              <Link to="/my-work" className="[&.active]:font-bold">
                My Work
              </Link>
              <Link to="/projects" className="[&.active]:font-bold">
                Projects
              </Link>
              <Link to="/contact-me" className="[&.active]:font-bold">
                Contact Me
              </Link>
            </div>
            <p>English</p>
          </div>
          <hr />
        </header>
        <main className="max-w-screen-sm mx-auto px-8 py-12">
          <Outlet />
        </main>
        {process.env.NODE_ENV === 'development' ? <TanStackRouterDevtools /> : <> </>}
      </div>
    );
  },
});
