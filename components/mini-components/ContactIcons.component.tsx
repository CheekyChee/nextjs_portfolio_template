import { FC, Fragment } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

export interface ContactIconsProps {}

export const ContactIcons: FC<ContactIconsProps> = () => {
  return (
    <Fragment>
      <div
        onClick={() => {
          window.location.assign('https://www.linkedin.com/in/chhay-socheret/');
        }}
        className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 "
      >
        <FaLinkedinIn size={20} />
      </div>
      <div
        onClick={() => {
          window.location.assign('https://github.com/CheekyChee');
        }}
        className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 "
      >
        <FaGithub size={20} />
      </div>
      {/* <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
        <AiOutlineMail size={20} />
      </div>
      <div className="p-6 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
        <BsFillPersonLinesFill size={20} />
      </div> */}
    </Fragment>
  );
};
