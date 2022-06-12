import { FC, Fragment } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export interface ContactIconsProps {}

export const ContactIcons: FC<ContactIconsProps> = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
