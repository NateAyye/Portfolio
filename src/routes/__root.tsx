import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <header>
          <div className="flex flex-col sm:flex-row gap-3 py-2 justify-between max-w-screen-xl mx-auto px-8 overflow-hidden">
            <Link className="font-bold text-lg sm:underline underline-offset-2" to="/">
              Nathan Cuevas
            </Link>
            <hr className="w-[150%] -translate-x-[25%] visible sm:sr-only" />
            <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-3 sm:gap-6 ">
              <Link to="/myWork" className="[&.active]:font-bold">
                My Work
              </Link>
              <Link to="/contact-me" className="[&.active]:font-bold">
                Contact Me
              </Link>
            </div>
            <p>English</p>
          </div>
          <hr />
        </header>
        <main className="max-w-screen-md mx-auto px-8 py-12">
          <Outlet />
        </main>
        <hr className="border-accent " />
        <footer className="  max-w-screen-xl text-center mx-auto px-8 py-4">
          <p>© {new Date().getFullYear()} Nathan Cuevas</p>
          <p>
            Built with
            <span className="inline-block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M47.6 300.4 228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6.0 115.2.0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
              </svg>
              <span className="sr-only">love</span>
            </span>
            using{' '}
            <span className="inline-flex">
              <a
                href="https://vite.dev/"
                target="_blank"
                rel="noopener"
                className="relative text-secondary inline-block group/linkihate"
              >
                <span className="relative z-10">
                  Vite
                  <span className="absolute bottom-[0px] left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover/linkihate:scale-x-100"></span>
                </span>
              </a>
              .
            </span>{' '}
            Come check out some of my projects on{' '}
            <span className="inline-flex">
              <a
                href="https://github.com/NateAyye"
                target="_blank"
                rel="noopener"
                className="relative text-secondary inline-block group/linkihate"
              >
                <span className="relative z-10">
                  GitHub
                  <span className="absolute bottom-[0px] left-0 w-full h-0.5 bg-accent origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover/linkihate:scale-x-100"></span>
                </span>
              </a>
              .
            </span>
          </p>
        </footer>
        {process.env.NODE_ENV === 'development' ? <TanStackRouterDevtools /> : <> </>}
      </div>
    );
  },
});
