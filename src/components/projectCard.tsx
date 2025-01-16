import { Link } from '@tanstack/react-router';
import React from 'react';
import { Project } from '../data';
import { techologyIcons } from '../icons';

const ProjectCard: React.FC<Project> = ({ imageUrl, title, tech }) => {
  return (
    <div className="overflow-hidden relative rounded-lg group">
      <Link to={'/projects/$projectId'} params={{ projectId: title }} className="block">
        <div
          style={{ backgroundImage: `url(${imageUrl})` }}
          className="shadow-accent/80 shadow-[inset_0_-40px_70px_10px] bg-cover bg-center bg-no-repeat h-96  group-hover:scale-105 transform transition-transform duration-300 ease-in-out"
        />
        <div className="absolute bottom-0 left-0">
          <div className="p-2">
            <p className="text-2xl font-bold">{title}</p>
            <div className="flex gap-2">
              {tech.map((t) => (
                <span
                  key={t}
                  className=" text-sm flex justify-center items-center gap-1 border border-accent p-1 rounded-lg"
                >
                  <span className="inline-block">{techologyIcons[t]?.icon()}</span>{' '}
                  {techologyIcons[t]?.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
