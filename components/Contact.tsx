/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import cvphoto from '../public/assets/projects/cv photo.png';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { ContactIcons } from './mini-components/ContactIcons.component';
const Contact = () => {
  return (
    <div className="w-full p-4 lg:h-screen " id="contact">
      {/* container */}
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e1]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        {/* Grid system */}
        <div className="grid gap-8 lg:grid-cols-5">
          {/* left contact card*/}
          <div className="w-full h-full col-span-3 p-4 shadow-xl lg:col-span-2 shadow-gray-400 rounded-xl">
            <div className="h-full lg:p-4">
              <div>
                <img
                  className="duration-300 ease-in rounded-xl hover:scale-105"
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
                <p>Phone: +85568 711447 / +85511 784160</p>
                <p>
                  Email:{' '}
                  <a href="mailto:chhaysocheret73@gmail.com">
                    chhaysocheret73@gmail.com
                  </a>
                </p>
              </div>
              {/* connect with me */}
              <div>
                <p className="pt-8 uppercase">Connect With Me</p>
                <div>
                  <div className="flex items-center justify-between py-4">
                    <ContactIcons />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-auto col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              {/* form */}
              <form>
                <div className="grid w-full gap-4 py-2 md:grid-cols-2">
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">Name</label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="py-2 text-sm uppercase">
                      Phone Number
                    </label>
                    <input
                      className="flex p-3 border-2 border-gray-300 rounded-lg"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Email</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Subject</label>
                  <input
                    className="flex p-3 border-2 border-gray-300 rounded-lg"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="py-2 text-sm uppercase">Message</label>
                  <textarea
                    className="p-3 border-2 border-gray-300 rounded-lg"
                    rows={10}
                  ></textarea>
                </div>
                <button className="w-full p-4 mt-4 text-gray-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* link */}
        <div className="flex justify-center py-12 ">
          <Link href={'/'}>
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer shadow-gray-400 hover:scale-105">
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
