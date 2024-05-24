import { Fragment } from 'react';
import { ProjectTemplateComponent } from '../components/mini-components/ProjectTemplate.component';
import fengshui from '../public/assets/projects/fengshui.png';
const krubkrong = () => {
  return (
    <Fragment>
      <ProjectTemplateComponent
        imageSrc={fengshui}
        projectTechInBox={[
          {
            tech: 'NextJS',
          },
          {
            tech: 'Tailwind CSS',
          },
          {
            tech: 'OpenAI',
          },
          {
            tech: 'Prisma',
          },
          {
            tech: 'MongoDB',
          },
          {
            tech: 'Clerk Auth',
          },
          {
            tech: 'Typescript',
          },
        ]}
        backBtnLink="/#projects"
        projectTech="NextJS / Tailwind / Typescript / OpenAI"
        SourceCodeLinkUrl="https://github.com/CheekyChee/ai-saas-project"
        DemoLinkUrl="https://ai-saas-project-r65k.vercel.app"
        projectTitle="Feng Shui AI"
        projectDescription=" 
        Feng Shui AI is a project that I built using NextJS, TailwindCSS, Prisma, and MongoDB. It is a full-stack project that allows users to Talk, Generate Picture, Music with AI. It also has a user authentication system that allows users to sign up and log in.
        "
      />
    </Fragment>
  );
};

export default krubkrong;
