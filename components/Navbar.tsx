import React, { useState } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const screens = useBreakpoint();
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]">
      <div className="flex justify-between items-center w-full h-full px-3 2xl:px-16">
        <Image
          alt="logo"
          src={'/../public/assets/SocheretLogo.png'}
          width={screens.md ? '100' : '50'}
          height={screens.md ? '50' : '25'}
        />
        {/* navbar list items */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Contact
              </li>
            </Link>
          </ul>
          {/* menu */}
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      {/* side draw menu  */}
      <div
        className={
          isNavOpen
            ? ' md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        {/* section container */}
        <div
          className={
            isNavOpen
              ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
              : 'fixed left-[-100%] top-0  p-10 ease-in duration-500'
          }
        >
          {/* top section */}
          <div className="flex w-full items-center justify-between">
            <Image
              src={'/../public/assets/SocheretLogo.png'}
              alt="logo"
              width={'70'}
              height="35"
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          {/* sidebar main text */}
          <div className="border-b border-gray-300 my-4">
            <p className="w-[85%] md:w-[90%] py-4">
              {"Let's build something cool together"}
            </p>
          </div>
          {/* sidebar menu */}
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">About</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/">
                <li className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            {/* contact sidrbar text  */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {"Let's Connect!"}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
