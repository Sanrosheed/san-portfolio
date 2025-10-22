import React, { useEffect, useState } from "react";
import Section from "./common/Section";
import p1 from "../assets/Ace-web-dark.png";
import p1b from "../assets/Ace-web-light.png";
import p2 from "../assets/Fhemfel.png";
import p2b from "../assets/FhemfelHover.png";
import p3 from "../assets/PIHC.png";
import p3b from "../assets/PIHCHover.png";
import p4 from "../assets/Apartment.png";
import p4b from "../assets/ApartmentHover.png";
import p5 from "../assets/Fhemfel-group.png";
import p6 from "../assets/Fhemfel Laundry-Admin-Dashboard.png";
import p6b from "../assets/Fhemfel-Laundry-Messages.png";
import { motion } from "framer-motion";

const Products = () => {
  const [toggleImage, setToggleImage] = useState(false);
  const projects = [
    {
      id: 1,
      image: p1,
      hoverImage: p1b,
      title: "Ace Initiative Hub (AI Hub)",
      tags: ["Software", "Technology"],
      info: "A creative tech agency specializing in crafting digital experiences that seamlessly blend aesthetics, usability and storytelling.",
      demo: "https://aceinnovationshub.vercel.app/",
      transition: true,
    },
    {
      id: 2,
      image: p3,
      hoverImage: p3b,
      title: "People in Healthecare (PIHC)",
      tags: ["Healthcare", "Staff management"],
      info: "A medical support platform improving accessibility to healthcare information, patient management, and care delivery.",
      demo: "",
    },
    {
      id: 3,
      image: p2,
      hoverImage: p2b,
      title: "Fhemfel Homes",
      tags: ["Real estate", "Property"],
      info: "A digital solution that simplifies property search, investment, and management for homeowners and investors.",
      demo: "",
    },
    {
      id: 4,
      image: p4,
      hoverImage: p4b,
      title: "Fhemfel Luxury Apartments",
      tags: ["Airbnb", "Short-stay service", "Hospitality"],
      info: "A reimagined platform tailored for unique local stays, bridging culture, comfort, and convenience.",
      demo: "",
    },
    {
      id: 5,
      image: p5,
      hoverImage: p5,
      title: "Fhemfel Group",
      tags: ["Real estate", "Property"],
      info: "A dynamic and innovative company with a vision to provide exceptional services across multiple industries.",
      demo: "https://fhemfel-group-web.vercel.app/",
    },
    {
      id: 6,
      image: p6,
      hoverImage: p6b,
      title: "Fhemfel Laundry",
      tags: ["Laundry", "Cleaning", "Garment care"],
      info: "A platform that provides premium laundry services, including cleaning and garment care",
      demo: "",
      transition: true,
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

  useEffect(() => {
    const interval = setInterval(() => setToggleImage((prev) => !prev), 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Section
        title="Products📑"
        subtitle="These are some of the products that i have built for clients."
      >
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
          {projects.map(
            ({
              id,
              image,
              title,
              info,
              demo,
              hoverImage,
              tags,
              transition,
            }) => (
              <div
                key={id}
                className="max-w-lg flex flex-col shadow-md cursor-pointer shadow-gray-300 rounded-2xl overflow-hidden"
              >
                <div className="relative group">
                  <img
                    src={
                      transition ? (toggleImage ? hoverImage : image) : image
                    }
                    alt={title}
                    className="lg:h-80 w-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                  />
                  <img
                    src={hoverImage}
                    alt={title}
                    className="lg:h-80 w-full object-cover absolute inset-0 transition-opacity duration-700 ease-in-out opacity-0 group-hover:opacity-100 group-hover:z-10"
                  />
                </div>
                <div className="flex justify-between items-center mt-5 mb-3 mx-3">
                  <div className="flex flex-wrap gap-2 flex-1">
                    {tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#002B4D] text-white font-nova px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {demo && (
                    <a
                      href={demo}
                      target="_blank"
                      rel="noreferrer"
                      className="font-nova underline text-sm whitespace-nowrap"
                    >
                      Visit website
                    </a>
                  )}
                </div>
                <p className="mb-4 mx-3 text-sm">{info}</p>
              </div>
            )
          )}
        </div>
      </Section>
    </motion.div>
  );
};

export default Products;
