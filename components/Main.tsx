/* eslint-disable react/no-unescaped-entities */
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import { NextPage } from 'next';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedin, FaLinkedinIn } from 'react-icons/fa';

const Main: NextPage = () => {
  const screens = useBreakpoint();

  return (
    // main container
    <div className="w-full h-screen text-center ">
      {/* secondary container */}
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        {/* first Text */}
        <div>
          <Image
            className=" rounded-full border-1 border-[#5651e5]"
            src="https://avatars.githubusercontent.com/u/37738641?v=4"
            alt="avatar"
            height={screens.sm ? 115 : 80}
            width={screens.sm ? 115 : 80}
          />
          <p className=" pt-2 uppercase text-sm text-gray-600 tracking-widest">
            {"LET'S BUILD SOMETHING GREAT TOGETHER!"}
          </p>
          <h1 className="sm:py-4 py-1 text-gray-700">
            Hello, I'm <span className="text-[#5651e5]">{'Socheret'}</span>
          </h1>
          <h1 className="sm:py-4 py-1  text-gray-700">
            {' '}
            A {'Front-End Web Developer'}
          </h1>
          <p className="sm:py-4 py-1  text-gray-600 max-w-[70%] m-auto">
            {' '}
            I'm a frontend web developer who focuses on creating (and, on
            sometimes, designing) amazing digital experiences. At the moment,
            I'm concentrating on developing responsive point-of-sale systems.
          </p>
          {/* info contact fox */}
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <FaLinkedinIn size={20} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <FaGithub size={20} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <AiOutlineMail size={20} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 ">
              <BsFillPersonLinesFill size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
