import Image from 'next/image';
import React from 'react';
import { SkillCardComponent } from './mini-components/SkillCard.component';

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      {/* main container */}
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        {/* skill container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* the card container */}
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/html.png"
            title="HTML"
          />
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/css.png"
            title="CSS"
          />
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/javascript.png"
            title="JavaScript"
          />
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/react.png"
            title="React"
          />
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/tailwind.png"
            title="Tailwind"
          />
          <SkillCardComponent
            imageAlt="/"
            imageSrc="/../public/assets/skills/github1.png"
            title="GitHub"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
