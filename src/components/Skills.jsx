import React from "react";
import Section from "./common/Section";
import html from "../assets/html5-1.png";
import css from "../assets/css3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: html,
      title: "HTML",
    },
    {
      id: 2,
      image: css,
      title: "CSS",
    },
    {
      id: 3,
      image: tailwind,
      title: "Tailwind",
    },
    {
      id: 4,
      image: javascript,
      title: "JavaScript",
    },
    {
      id: 5,
      image: react,
      title: "React",
    },
    {
      id: 6,
      image: github,
      title: "GitHub",
    },
  ];

  return (
    <Section
      title="Skills💡"
      subtitle="I build interactive webpages seamlessly using the following technologies."
    >
      <div className="grid gap-4 lg:gap-10 grid-cols-3 lg:grid-cols-3">
        {skills.map(({ id, image, title }) => (
          <div
            key={id}
            className="flex flex-col items-center justify-center p-3 lg:p-5 shadow-md dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
          >
            <img
              src={image}
              alt={title}
              className="w-8 h-8 md:w-20 md:h-20 object-contain"
            />
            <h3 className="mt-4 text-sm lg:text-base">{title}</h3>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
