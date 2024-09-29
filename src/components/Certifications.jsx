import React from "react";
import Section from "./common/Section";
import { motion } from "framer-motion";
import cert1 from "../assets/cert1.jpg";
import cert2 from "../assets/cert2.jpg";
import cert3 from "../assets/cert3.jpg";
import cert4 from "../assets/cert4.jpg";
import cert5 from "../assets/cert5.jpg";
import cert6 from "../assets/cert6.jpg";
import cert7 from "../assets/cert7.jpg";
import cert8 from "../assets/cert8.png";
import cert9 from "../assets/cert9.png";
import Slider from "./common/Slider";

function Certifications() {
  const images = [
    cert1,
    cert2,
    cert3,
    cert4,
    cert5,
    cert6,
    cert7,
    cert8,
    cert9,
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
        title="Certifications🥇"
        subtitle="These are all some of my certifications"
      >
        <div className="App">
          <Slider images={images} />
        </div>
      </Section>
    </motion.div>
  );
}

export default Certifications;

// const SPRING_OPTIONS = {
//     type: "spring",
//     mass: 3,
//     stiffness: 400,
//     damping: 50,
//   };
