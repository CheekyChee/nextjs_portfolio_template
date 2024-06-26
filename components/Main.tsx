/* eslint-disable react/no-unescaped-entities */
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { NextPage } from 'next';
import Image from 'next/image';
import { ContactIcons } from './mini-components/ContactIcons.component';
import cvphoto from '../public/assets/projects/cv photo.png';
const Main: NextPage = () => {
  const screens = useBreakpoint();

  return (
    // main container
    <div className="w-full h-screen text-center " id="/">
      {/* secondary container */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* first Text */}
        <div>
          <Image
            className=" rounded-md border-1 border-[#5651e5]"
            src={cvphoto}
            alt="avatar"
            height={screens.sm ? 150 : 80}
            width={screens.sm ? 115 : 80}
          />
          <p className="pt-2 text-sm tracking-widest text-gray-600 uppercase ">
            {"LET'S BUILD SOMETHING GREAT TOGETHER!"}
          </p>
          <h1 className="py-2 text-gray-700 sm:py-4">
            Hello, I'm <span className="text-[#5651e5]">{'Socheret'}</span>
          </h1>
          <h1 className="py-2 text-gray-700 sm:py-4">
            {' '}
            A {'Front-End Web Developer'}
          </h1>
          <p className="sm:py-4 py-2  text-gray-600 max-w-[70%] m-auto">
            {' '}
            I'm a frontend web developer who focuses on creating (and, on
            sometimes, designing) amazing digital experiences. At the moment,
            I'm concentrating on developing responsive point-of-sale systems.
          </p>
          {/* info contact fox */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <ContactIcons />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
