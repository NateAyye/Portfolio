import React from 'react';
import { Experience } from '../data';

const ExperienceCard: React.FC<Experience> = ({ title, company, date, description }) => {
  return (
    <div className="border rounded-lg p-4">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p>{company}</p>
      <p className='text-sm italic text-accent'>{date}</p>
      <p>{description}</p>
    </div>
  );
};

export default ExperienceCard;
