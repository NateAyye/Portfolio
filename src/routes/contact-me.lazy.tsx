import { createLazyFileRoute } from '@tanstack/react-router';
import { icons } from '../icons';

export const Route = createLazyFileRoute('/contact-me')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="border border-accent rounded-lg px-5 py-6">
      <h1 className="text-4xl font-bold">Contact Me</h1>
      <p className="text-lg text-gray-400">
        Feel free to reach out to me via Email, Discord or Instagram. I usually respond within a few
        days
      </p>
      <div className="flex flex-col sm:flex-row justify-around gap-5 mt-5">
        <a
          href="https://discord.gg/bSGCcn9gFj"
          target="_blank"
          className="flex flex-col items-center gap-1 hover:opacity-80"
        >
          <div>{icons.discord.icon(50)}</div>
          <p className="text-xl font-bold">Discord</p>
          <p className="text-md text-gray-400">NateAyye</p>
        </a>
        <a
          href="mailto:nathanacuevas97@gmail.com"
          target="_blank"
          className="flex flex-col items-center gap-1 hover:opacity-80"
        >
          {icons.mail.icon(50)}
          <p className="text-xl font-bold">Email</p>
          <p className="text-md text-gray-400">nathanacuevas97@gmail.com</p>
        </a>
        <a
          href="https://www.instagram.com/nateayye/"
          target="_blank"
          className="flex flex-col items-center gap-1 hover:opacity-80"
        >
          {icons.instagram.icon(50)}
          <p className="text-xl font-bold">Instagram</p>
          <p className="text-md text-gray-400">NateAyye</p>
        </a>
      </div>
    </div>
  );
}
