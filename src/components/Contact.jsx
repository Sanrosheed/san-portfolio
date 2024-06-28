import React from "react";
import Section from "./common/Section";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

import contact from "../assets/mobile.png";

const Contact = () => {
  const SOCIAL = [
    {
      id: 1,
      link: "https://twitter.com/SanRush_Heed",
      icon: <FaSquareXTwitter />,
    },
    {
      id: 2,
      link: "http://www.linkedin.com/in/sanusi-rasheed-755558185",
      icon: <FaLinkedin />,
    },
    {
      id: 3,
      link: "https://www.instagram.com/sanrosheed/",
      icon: <FaInstagram />,
    },
  ];

  return (
    <Section
      title="Contact📞"
      subtitle="Contact me below and let's work together"
    >
      <div className="flex flex-col items-center justify-center gap-8 text-center">
        <div>
          <img src={contact} alt="contact info" className="w-32 h-32" />
        </div>
        <div>
          <p className="max-w-xs md:max-w-lg font-extralight">
            I am open to frelancing gigs or full-time opportunities. Feel free
            to reach out to me using your preferred medium
          </p>
        </div>
        <div className="flex w-full items-center justify-evenly text-3xl">
          {SOCIAL.map(({ id, link, icon }) => (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="duration-200 ease-in-out hover:text-rose-600"
            >
              {icon}
            </a>
          ))}
        </div>

        {/* bottom form */}
        <div className="p-8 text-left w-full flex items-center justify-center">
          <form
            action="https://getform.io/f/53e3dd4e-7c3b-4865-8c0b-6937850f39e7"
            method="POST"
          >
            <div className="w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                />
              </div>

              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">
                  message
                </label>
                <textarea
                  name="message"
                  rows="10"
                  className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button className="my-8 bg-gradient-to-r from-rose-600 to-teal-500 text-white px-6 py-3 uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
