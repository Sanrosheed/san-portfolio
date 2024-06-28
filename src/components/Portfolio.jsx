import React from "react";
import Section from "./common/Section";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p1,
      title: "BitMedics",
      github: "https://github.com/Oyedunmade1/BitMedics-React",
      demo: "https://bitmedics-app.vercel.app/",
    },
    {
      id: 2,
      image: p2,
      title: "NewsGrid Website",
      github: "https://github.com/Sanrosheed/news_grid_website",
      demo: "https://news-grid-website-rho.vercel.app/",
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
      title: "Scholarship Website",
      github: "https://github.com/Sanrosheed/scholarship_website",
      demo: "https://scholarship-website-plum.vercel.app/",
    },
    {
      id: 5,
      image: p5,
      title: "Old Portfolio",
      github: "https://github.com/Sanrosheed/my-portfolio-tailwind",
      demo: "https://my-portfolio-tailwind-red.vercel.app/",
    },
    {
      id: 6,
      image: p6,
      title: "EdgeLedger Website",
      github: "https://github.com/Sanrosheed/EdgeLedger",
      demo: "https://edge-ledger-two.vercel.app/",
    },
  ];

  return (
    <Section
      title="Portfolio📑"
      subtitle="These are all some of the projects that i have worked on. These were built for practice."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
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
  );
};

export default Portfolio;
