import React, { useState, useEffect } from 'react';
import useBreakpoint from 'antd/lib/grid/hooks/useBreakpoint';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import csLogoWhitepng from '../public/assets/csLogoWhite.png';
import socheretpng from '../public/assets/SocheretLogo.png';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>('#ecf0f3');
  const [linkColor, setLinkColor] = useState<string>('#1f2937');
  const [csLogoWhite, setIsMainPicWhite] = useState<boolean>(false);
  const router = useRouter();
  const screens = useBreakpoint();
  const handleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    if (
      router.asPath === '/GoGymProject' ||
      router.asPath === '/KrubKrongProject'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
      setIsMainPicWhite(true);
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
      setIsMainPicWhite(false);
    }
  }, [router]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{
        backgroundColor: `${navBg}`,
      }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300 '
          : 'fixed w-full h-20 z-[100] '
      }
    >
      <div className="flex items-center justify-between w-full h-full px-3 2xl:px-16">
        <Link href="/">
          <Image
            alt="logo"
            src={csLogoWhite ? csLogoWhitepng : socheretpng}
            width={screens.md ? '100' : '50'}
            height={screens.md ? '50' : '25'}
            className="cursor-pointer"
          />
        </Link>

        {/* navbar list items */}
        <div>
          <ul
            style={{
              color: `${linkColor}`,
            }}
            className="hidden md:flex"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b border-[#5651e5] ease-in-out duration-200">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
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

          <div className="flex items-center justify-between w-full">
            <Link href={'/'}>
              <Image
                src={socheretpng}
                alt="logo"
                width={'70'}
                height="35"
                className="cursor-pointer"
              />
            </Link>

            <div
              onClick={handleNav}
              className="p-3 rounded-full shadow-lg cursor-pointer shadow-gray-400"
            >
              <AiOutlineClose size={25} />
            </div>
          </div>
          {/* sidebar main text */}
          <div className="my-4 border-b border-gray-300">
            <p className="w-[85%] md:w-[90%] py-4">
              {"Let's build something cool together"}
            </p>
          </div>
          {/* sidebar menu */}
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link onClick={() => setIsNavOpen(false)} href="/#skills">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setIsNavOpen(false)}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            {/* contact sidrbar text  */}
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                {"Let's Connect!"}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <FaLinkedinIn />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <FaGithub />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
                  <AiOutlineMail />
                </div>
                <div className="p-3 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105 ">
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
