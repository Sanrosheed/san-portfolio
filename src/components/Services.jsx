import React from "react";
import Section from "./common/Section";
import commerce from "../assets/commerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";
import { motion } from "framer-motion";
const Services = () => {
  const services = [
    {
      id: 1,
      image: commerce,
      title: "ECommerce Website",
    },
    {
      id: 2,
      image: web,
      title: "Web Development",
    },
    {
      id: 3,
      image: mobile,
      title: "Technical Writing",
    },
    {
      id: 4,
      image: research,
      title: "Research and Development",
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
        title="Services🛠"
        subtitle="Here are the services that i provide to my clients. I hope I offer the service that you are looking for. If you don't find something that you are looking for, then please send an email."
      >
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-2">
          {services.map(({ id, image, title }) => (
            <div
              key={id}
              className="flex flex-col items-center justify-center p-5 shadow-md dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110"
            >
              <img
                src={image}
                alt={title}
                className="w-36 h-36 md:w-44 md:h-44 object-contain"
              />
              <h3 className="mt-5 text-base">{title}</h3>
            </div>
          ))}
        </div>
      </Section>
    </motion.div>
  );
};

export default Services;
