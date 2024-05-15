/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import Image from 'next/image';
import React from 'react';

const About = () => {
  return (
    // container
    <div
      id="about"
      className="flex items-center w-full p-2 px-4 py-16 md:h-screen"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">// I am a Junior Developer</p>
          <p className="py-2 text-gray-600">
            I am passionate about creating high-quality software that benefits
            everyone around me. I specialize in developing software for a wide
            range of clients, from individuals to small enterprises to large
            organizations.
          </p>
          <p className="py-2 text-gray-600">
            I was immediately intrigued to learn more about programming because
            of how complex it can be. I began learning JavaScript and became
            even more enthusiastic about creating interactive websites. Now I
            spend my time studying new technologies and creating apps with
            ReactJS or NextJS.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            {' '}
            Checkout out some of the projects I've built
          </p>
        </div>
        <div className="flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105">
          <img
            src="https://images.unsplash.com/photo-1608306448197-e83633f1261c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            alt="/"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
