import Image, { StaticImageData } from 'next/image';
import { FC, Fragment } from 'react';

export interface SkillCardComponentProps {
  imageSrc: string | StaticImageData;
  title: string;
  imageAlt: string;
}

export const SkillCardComponent: FC<SkillCardComponentProps> = (props) => {
  return (
    <Fragment>
      <div className="p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105">
        {/* card grid */}
        <div className="grid items-center justify-center grid-cols-2">
          <div className="m-auto">
            <Image
              alt={props.imageAlt}
              src={props.imageSrc}
              width={'64px'}
              height={'64px'}
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3>{props.title}</h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
