import React from 'react';
import { Personal } from '../data';
import { icons } from '../icons';
import { CustomDropdownMenu } from './dropdown';

const PersonalCard: React.FC<Personal> = ({
  name,
  email,
  github,
  linkedin,
  location,
  description,
}) => {
  return (
    <section className="border border-accent rounded-lg p-4">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-2xl sm:text-4xl font-bold">{name}</h1>
        <div className="p-2 gap-3 hidden sm:flex">
          <a
            href={`mailto:${email}`}
            title="email"
            target="_blank"
            className="inline-flex justify-center border border-accent p-1 rounded-lg items-center w-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {icons.mail.icon()}
          </a>
          <a
            href={github.link}
            title="github"
            target="_blank"
            className="inline-flex justify-center border border-accent p-1 rounded-lg items-center w-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {icons.github.icon()}
          </a>
          <a
            href={linkedin.link}
            title="github"
            target="_blank"
            className="inline-flex justify-center border border-accent p-1 rounded-lg items-center w-full text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {icons.linkedin.icon()}
          </a>
        </div>
        <CustomDropdownMenu title="Links" className="block sm:hidden">
          <div className="space-y-1">
            <a
              href={`mailto:${email}`}
              title="email"
              target="_blank"
              className="flex items-center gap-1 hover:bg-accent/80 rounded p-0.5"
            >
              {icons.mail.icon()} Email
            </a>
            <a
              href={github.link}
              title="github"
              target="_blank"
              className="flex items-center gap-1 hover:bg-accent/80 rounded p-0.5"
            >
              {icons.github.icon()} Github
            </a>
            <a
              href={linkedin.link}
              title="github"
              target="_blank"
              className="flex items-center gap-1 hover:bg-accent/80 rounded p-0.5"
            >
              {icons.linkedin.icon()} Linked In
            </a>
          </div>
        </CustomDropdownMenu>
      </div>
      <p className="flex items-center gap-1">
        {icons.locationPin.icon()}
        {location}
      </p>
      <p className="pt-3">{description}</p>
    </section>
  );
};

export default PersonalCard;
