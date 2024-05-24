import { Fragment } from 'react';
import { ProjectTemplateComponent } from '../components/mini-components/ProjectTemplate.component';
import gym from '../public/assets/projects/gymwebsite.png';
const krubkrong = () => {
  return (
    <Fragment>
      <ProjectTemplateComponent
        imageSrc={gym}
        projectTechInBox={[
          {
            tech: 'ReactJS',
          },
          {
            tech: 'Tailwind CSS',
          },
          {
            tech: 'Typescript',
          },
        ]}
        backBtnLink="/#projects"
        projectTech="ReactJS / Tailwind / Typescript"
        SourceCodeLinkUrl="https://github.com/CheekyChee/gym-website"
        DemoLinkUrl="https://gym-website-cyan.vercel.app"
        projectTitle="EvoGym Website"
        projectDescription="
        EvoGym is a project that I built using ReactJS and TailwindCSS. It is a front-end project that allows users to view the gym's website and book a class. 
        "
      />
    </Fragment>
  );
};

export default krubkrong;
