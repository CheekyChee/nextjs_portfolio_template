/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { ContactIcons } from './mini-components/ContactIcons.component';
const Contact = () => {
  return (
    <div className="w-full lg:h-screen p-4 " id="contact">
      {/* container */}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        {/* Grid system */}
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left contact card*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
                  alt="/contact"
                />
              </div>
              <div>
                <h2 className="py-2">Chhay Socheret</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  Interested? Contact me and let's have a chat{' '}
                </p>
              </div>
              {/* connect with me */}
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div>
                  <div className="flex items-center justify-between py-4">
                    <ContactIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400  rounded-xl lg:p-4">
            <div className="p-4">
              {/* form */}
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* link */}
        <div className="flex justify-center py-12 ">
          <Link href={'/'}>
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
              <HiOutlineChevronDoubleUp
                size={30}
                className="m-auto text-[#5651e5]"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
