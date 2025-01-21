import React from 'react';
import { icons } from '../icons';

interface TechMarqueeProps {
  icons: typeof icons;
  speed: 'slow' | 'normal' | 'fast';
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ icons, speed }) => {
  const marqueeRef = React.useRef<HTMLDivElement>(null);

  return (
    <div
      ref={marqueeRef}
      draggable={false}
      className={`group flex overflow-hidden p-2 ${speed === 'slow' ? '[--duration:33s]' : speed === 'normal' ? '[--duration:30s]' : '[--duration:28s]'} [--gap:1rem] [gap:var(--gap)] flex-row relative`}
    >
      <div
        draggable={false}
        className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
      >
        {Object.entries(icons).map(([name, icon]) => {
          return (
            <div
              draggable={false}
              key={name}
              className="flex items-center gap-1 pointer-events-none select-none"
            >
              <div draggable={false} className="w-8 h-8 pointer-events-none select-none">
                {icon.icon()}
              </div>
              <p draggable={false} className="font-semibold pointer-events-none select-none">
                {icon.name}
              </p>
            </div>
          );
        })}
      </div>
      <div
        draggable={false}
        className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]"
      >
        {Object.entries(icons).map(([name, icon]) => {
          return (
            <div
              draggable={false}
              key={name}
              className="flex items-center gap-1 pointer-events-none select-none"
            >
              <div draggable={false} className="w-8 h-8 pointer-events-none select-none">
                {icon.icon()}
              </div>
              <p draggable={false} className="font-semibold pointer-events-none select-none">
                {icon.name}
              </p>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-background"></div>
    </div>
  );
};

export default TechMarquee;
