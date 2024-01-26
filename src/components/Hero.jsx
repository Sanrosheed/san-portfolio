import React from "react";
import { FaLinkedin, FaGithub, FaArrowDown } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa6";
import avatar from "../assets/avatar2.png";

const Hero = () => {
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
      link: "https://github.com/Sanrosheed",
      icon: <FaGithub />,
    },
    {
      id: 3,
      link: "https://github.com/Sanrosheed",
      icon: <FaMedium />,
    },
  ];

  window.addEventListener("scroll", function () {
    const downArrow = document.querySelector(".down-arrow");

    if (this.scrollY >= 500) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
  });

  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 uppercase font-bold">
        Sanusi Rasheed
      </h2>
      <h3 className="py-3 text-2xl">Frontend Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>, Welcome to my
        world. I am a Frontend Developer. I love building websites and creating
        solutions.
      </p>

      {/* Social  icons*/}
      <div className="flex justify-evenly py-8 lg:py-16 text-xl lg:text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* avatar and resume */}
      <div>
        <img
          src={avatar}
          alt="avatar"
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-rose-500 rounded-xl pt-5"
        />
        <a
          href="/Sanusi Rasheed CV.pdf"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
