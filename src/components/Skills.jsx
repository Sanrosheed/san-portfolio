import React from "react";
import Section from "./common/Section";
import html from "../assets/html5-1.png";
import css from "../assets/css3.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nextjs from "../assets/nextjs.png";
import git from "../assets/git logo.png";
import typescript from "../assets/TypeScript logo.png";
import node from "../assets/nodejs.png";
import express from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import firebase from "../assets/Firebase.png";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    {
      id: 1,
      image: html,
      title: "HTML5",
    },
    {
      id: 2,
      image: css,
      title: "CSS3",
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
      title: "ReactJs",
    },

    {
      id: 6,
      image: git,
      title: "Git",
    },
    {
      id: 7,
      image: nextjs,
      title: "NextJS",
    },

    {
      id: 8,
      image: typescript,
      title: "TypeScript",
    },
    {
      id: 9,
      image: firebase,
      title: "Firebase",
    },
    {
      id: 10,
      image: node,
      title: "NodeJS",
    },
    {
      id: 11,
      image: express,
      title: "ExpressJS",
    },
    {
      id: 12,
      image: mongodb,
      title: "MongoDB",
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
    </motion.div>
  );
};

export default Skills;
