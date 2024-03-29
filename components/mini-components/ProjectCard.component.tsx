import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { FC, Fragment } from 'react';
import { Url } from 'url';
import krubkrongImg from '../public/assets/projects/krubkrong-slider.png';
export interface ProjectCardComponentProps {
  imageSrc: StaticImageData | string;
  title: string;
  description: string;
  linkInfoText: string;
  alt: string;
  linkUrl: Url | string;
}

export const ProjectCardComponent: FC<ProjectCardComponentProps> = (props) => {
  return (
    <>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e1] to-[#709dff]">
        <Image
          src={props.imageSrc}
          alt={props.alt}
          className="rounded-xl group-hover:opacity-10"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl text-white tracking-wider text-center">
            {props.title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center">
            {props.description}
          </p>
          <Link href={props.linkUrl}>
            <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-[#5651e1] hover:text-white">
              {props.linkInfoText}
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};
