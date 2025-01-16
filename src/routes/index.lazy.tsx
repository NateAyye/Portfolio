import { createLazyFileRoute } from '@tanstack/react-router';
import TechMarquee from '../components/techMarquee';
import { icons, techologyIcons } from '../icons';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  return (
    <div className="space-y-10">
      <section className="border rounded-lg p-4">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto">
          <h1 className="text-4xl font-bold">Nathan Cuevas</h1>
          <div className="p-2 flex gap-3">
            <div className="border rounded-lg p-1">
              <a href="mailto:nathanacuevas97@gmail.com" target="_blank">
                {icons.mail.icon}
              </a>
            </div>
            <div className="border rounded-lg p-1">
              <a href="https://github.com/NateAyye" target="_blank">
                {icons.github.icon}
              </a>
            </div>
          </div>
        </div>
        <p className="flex items-center gap-1">
          {icons.locationPin.icon}
          California, USA
        </p>
        <p className="pt-3">
          I'm a Full-Stack Web Developer. I specialize in React, TypeScript, and Node.js. I'm always
          learning and keeping up with new technologies.
        </p>
      </section>
      <section>
        <h2 className="text-4xl font-bold">What I work with</h2>
        <TechMarquee icons={techologyIcons} />
      </section>
    </div>
  );
}
