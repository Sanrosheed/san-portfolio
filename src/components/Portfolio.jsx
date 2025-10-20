import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/p1.png";
import p2 from "../assets/stackJuniorWeb1.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/SanminaretWeb.png";
import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p2,
      title: "StackJunior",
      github: "https://github.com/Sanrosheed/stack-junior",
      demo: "https://stack-junior.vercel.app/",
    },
    {
      id: 2,
      image: p1,
      title: "BitMedics",
      github: "https://github.com/Oyedunmade1/BitMedics-React",
      demo: "https://bitmedics-app.vercel.app/",
    },
    {
      id: 3,
      image: p3,
      title: "CookieYum",
      github: "https://github.com/Sanrosheed/CookieYum",
      demo: "https://cookie-yum.vercel.app/",
    },
    {
      id: 4,
      image: p4,
      title: "Jewelry Empire",
      github: "https://github.com/Sanrosheed/jewelry_empire",
      demo: "https://jewelry-empire.vercel.app/",
    },
    {
      id: 5,
      image: p6,
      title: "San Minaret Hospital",
      github: "https://github.com/Sanrosheed/sanminarethospital",
      demo: "https://sanminarethospital.vercel.app/",
    },
    {
      id: 6,
      image: p5,
      title: "Old Portfolio",
      github: "https://github.com/Sanrosheed/my-portfolio-tailwind",
      demo: "https://my-portfolio-tailwind-red.vercel.app/",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 75 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Section
        title="Personal Projects📑"
        subtitle="These are some of the projects that i have worked on."
      >
        {/* Some were built for practice while the recorded ones are private projects. */}
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {/* Private Projects */}
          {/* <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
      <iframe
        src="https://player.vimeo.com/video/1085075153?h=ec7212a991&badge=0&autopause=0&player_id=0&app_id=58479"
        title="Partner in Health Care (PIHC)"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
        allowFullScreen
        className="absolute top-0 left-0 w-full h-full border-0"
      ></iframe>
    </div> */}
          {/* <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
            <iframe
              src="https://player.vimeo.com/video/1086802501?h=d635308555&badge=0&autopause=0&player_id=0&app_id=58479"
              title="Real estate website"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full border-0"
            ></iframe>
          </div> */}

          {/* Public Projects */}
          {projects.map(({ id, image, title, github, demo }) => (
            <div
              key={id}
              className="max-w-lg flex shadow-md shadow-gray-300 rounded-2xl overflow-hidden"
            >
              <img src={image} alt={title} className="w-2/3" />
              <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                <h2>{title}</h2>
                <a
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaExternalLinkSquareAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Portfolio;
