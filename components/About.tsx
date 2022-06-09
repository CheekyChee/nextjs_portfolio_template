/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';

const About = () => {
  return (
    // container
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p>About</p>
          <h2>Who I Am</h2>
          <p>// I am a junior developer</p>
          <p>
            I am passionate about creating high-quality software that benefits
            everyone around me. I specialize in developing software for a wide
            range of clients, from individuals to small enterprises to large
            organizations. What would you do if you had access to a software
            specialist at any time?
          </p>
          <p></p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
