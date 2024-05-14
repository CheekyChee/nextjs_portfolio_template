import Image from 'next/image';
import React from 'react';
import { SkillCardComponent } from './mini-components/SkillCard.component';
import htmlImage from '../public/assets/skills/html.png';
import cssImage from '../public/assets/skills/css.png';
import jsImage from '../public/assets/skills/javascript.png';
import reactImage from '../public/assets/skills/react.png';
import tailwindImage from '../public/assets/skills/tailwind.png';
import githubImage from '../public/assets/skills/github1.png';
const Skills = () => {
  const skillsets = [
    {
      imageSrc: htmlImage,
      title: 'HTML',
    },
    {
      imageSrc: cssImage,
      title: 'CSS',
    },
    {
      imageSrc: jsImage,
      title: 'JavaScript',
    },
    {
      imageSrc: reactImage,
      title: 'React',
    },
    {
      imageSrc: tailwindImage,
      title: 'Tailwind',
    },
    {
      imageSrc: githubImage,
      title: 'GitHub',
    },
  ];

  return (
    <div id="skills" className="w-full p-2 lg:h-screen">
      {/* main container */}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        {/* skill container */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* the card container */}
          {skillsets.map((skill, index) => (
            <SkillCardComponent
              key={index}
              imageAlt={skill.title}
              imageSrc={skill.imageSrc}
              title={skill.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
