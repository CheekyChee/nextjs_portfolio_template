/* eslint-disable react/no-unescaped-entities */
import krubkrongImg from '../public/assets/projects/krubkrong-slider.png';
import airbnb from '../public/assets/projects/airbnb.png';
import gym from '../public/assets/projects/gymwebsite.png';
import fengshui from '../public/assets/projects/fengshui.png';
import { ProjectCardComponent } from './mini-components/ProjectCard.component';
import { NextPage } from 'next';
const Project: NextPage = () => {
  // md:grid-cols-2 means anything above medium screen will span 2 col and anything below medium screen will span 1 col
  return (
    <div id="projects" className="w-full p-4 md:mb-48 mb-28 lg:h-screen">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Projects
        </p>
        <h2 className="py-4">What I've Contributed</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <ProjectCardComponent
            imageSrc={airbnb}
            alt="/airbnb"
            linkUrl={'/AirbnbProject'}
            title="Airbnb Clone"
            description="NextJS, TailwindCSS, Prisma"
            linkInfoText="More Info"
          />
          <ProjectCardComponent
            imageSrc={fengshui}
            alt="/fengshuiai"
            linkUrl={'/AiSaas'}
            title="Feng Shui AI"
            description="NextJS, TailwindCSS, OpenAI"
            linkInfoText="More Info"
          />
          <ProjectCardComponent
            imageSrc={gym}
            alt="/gymwebsite"
            linkUrl={'/GymWebsite'}
            title="EvoGym Website"
            description="ReactJS"
            linkInfoText="More Info"
          />
          <ProjectCardComponent
            imageSrc={krubkrongImg}
            alt="/krubkrong"
            linkUrl={'/'}
            title="KrubKrong SMS"
            description="ReactJS"
            linkInfoText="More Info"
          />
          {/* <ProjectCardComponent
            imageSrc={krubkrongImg}
            alt="/gogym"
            linkUrl={'/GoGymProject'}
            title="GoGym POS"
            description="ReactJS"
            linkInfoText="More Info"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Project;
