import React, { Fragment } from 'react';
import { ProjectTemplateComponent } from '../components/mini-components/ProjectTemplate.component';
import krubkrongImg from '../public/assets/projects/KrubKrongDesktop.png';
import airbnb from '../public/assets/projects/airbnb.png';
const krubkrong = () => {
  return (
    <Fragment>
      <ProjectTemplateComponent
        imageSrc={airbnb}
        projectTechInBox={[
          {
            tech: 'NextJS',
          },
          {
            tech: 'Tailwind CSS',
          },
          {
            tech: 'Prisma',
          },
          {
            tech: 'MongoDB',
          },
          {
            tech: 'Typescript',
          },
        ]}
        backBtnLink="/#projects"
        projectTech="NextJS / Tailwind / Typescript"
        SourceCodeLinkUrl="https://github.com/CheekyChee/airbnb-clone"
        DemoLinkUrl="https://rent-a-place-e7p583bu1-cheekychees-projects.vercel.app/"
        projectTitle="Airbnb Clone"
        projectDescription="
        Airbnb Clone is a project that I built using NextJS, TailwindCSS, Prisma, and MongoDB. It is a full-stack project that allows users to book and list properties. It also has a user authentication system that allows users to sign up and log in. 
        "
      />
    </Fragment>
  );
};

export default krubkrong;
