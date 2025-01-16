import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <div>
        <header>
          <div className="flex flex-col sm:flex-row gap-3 py-2 justify-between max-w-screen-xl mx-auto px-8">
            <Link className="font-bold text-lg sm:underline underline-offset-2" to="/">
              Nathan Cuevas
            </Link>
            <hr className="w-[150%] -translate-x-[25%] visible sm:sr-only" />
            <div className="flex items-start sm:items-center justify-between flex-col sm:flex-row gap-3 sm:gap-6 ">
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
        <main className="max-w-screen-md mx-auto px-8 py-12">
          <Outlet />
        </main>
        <hr className="border-accent " />
        <footer className="max-w-screen-xl text-center mx-auto px-8 py-4">
          <p>© {new Date().getFullYear()} Nathan Cuevas</p>
          <div className="flex gap-2 items-center justify-center">
            <p className="">Built with</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M47.6 300.4 228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6.0 115.2.0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
            </svg>
            <p>
              using{' '}
              <a href="https://vite.dev/" target="_blank" className="text-teal-600 cursor-pointer">
                Vite
              </a>
              . Come look at some of my projects on{' '}
              <a
                href="https://github.com/NateAyye"
                className="text-teal-600 cursor-pointer"
                target="_blank"
              >
                Github
              </a>
              .
            </p>
          </div>
        </footer>
        {process.env.NODE_ENV === 'development' ? <TanStackRouterDevtools /> : <> </>}
      </div>
    );
  },
});
