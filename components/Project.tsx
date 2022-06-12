/* eslint-disable react/no-unescaped-entities */
import krubkrongImg from '../public/assets/projects/krubkrong-slider.png';
import { ProjectCardComponent } from './mini-components/ProjectCard.component';
import { NextPage } from 'next';
const Project: NextPage = () => {
  // md:grid-cols-2 means anything above medium screen will span 2 col and anything below medium screen will span 1 col
  return (
    <div id="projects" className="w-full lg:h-screen p-4">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Projects
        </p>
        <h2 className="py-4">What I've Contributed</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectCardComponent
            imageSrc={krubkrongImg}
            alt="/krubkrong"
            linkUrl={'/KrubKrongProject'}
            title="KrubKrong SMS"
            description="ReactJS"
            linkInfoText="More Info"
          />
          <ProjectCardComponent
            imageSrc={krubkrongImg}
            alt="/gogym"
            linkUrl={'/GoGymProject'}
            title="GoGym POS"
            description="ReactJS"
            linkInfoText="More Info"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
