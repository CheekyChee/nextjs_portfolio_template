import React, { Fragment } from 'react';
import { ProjectTemplateComponent } from '../components/mini-components/ProjectTemplate.component';
import krubkrongImg from '../public/assets/projects/KrubKrongDesktop.png';
const krubkrong = () => {
  return (
    <Fragment>
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
            tech: 'NX',
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
        hideSourceCodeBtn
        DemoLinkUrl="https://krubkrong.app"
        projectTitle="KrobKrong Stock Management System"
        projectDescription="This app was built using React JS and NestJS. It is used for as a stock management system for small businesses ranging from online sellers to productions."
      />
    </Fragment>
  );
};

export default krubkrong;
