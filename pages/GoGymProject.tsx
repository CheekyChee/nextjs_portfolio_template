import React from 'react';
import { ProjectTemplateComponent } from '../components/mini-components/ProjectTemplate.component';
import krubkrongImg from '../public/assets/projects/KrubKrongDesktop.png';

const GoGymProject = () => {
  return (
    <ProjectTemplateComponent
      imageSrc={krubkrongImg}
      projectTechInBox={[
        {
          tech: 'React JS',
        },
        {
          tech: 'Tailwind CSS',
        },
        {
          tech: 'Ant Design',
        },
        {
          tech: 'Typescript',
        },
        {
          tech: 'NestJS',
        },
      ]}
      backBtnLink="/#projects"
      projectTech="ReactJS / Tailwind / NestJS"
      projectTitle="GOGym Point of Sale System"
      hideSourceCodeBtn
      hideDemoBtn
      projectDescription="This app was built using React JS and NestJS. It is used for as a point of sale system for a internal management for a local high-end gym."
    />
  );
};

export default GoGymProject;
