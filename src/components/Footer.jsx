import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, duration: 10, delay: 0.4 },
  },
};

const Footer = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-fit flex flex-col justify-start items-center py-16 px-3"
    >
      <p className="max-w-xl font-light text-gray-500 mb-10">
        © 2024 SANUSI RASHEED
      </p>
    </motion.section>
  );
};

export default Footer;
