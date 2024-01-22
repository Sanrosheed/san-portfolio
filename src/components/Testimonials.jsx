import React from "react";
import Section from "./common/Section";
import avatar from "../assets/avatar.png";

const Testimonials = () => {
  const TESTIMONIALS = [
    {
      id: 1,
      image: avatar,
      name: "Paul Oluwatosin",
      comment: "Sanusi is a hardworking, creative and determined person",
    },
    {
      id: 2,
      image: avatar,
      name: "Rufai Azeezat",
      comment:
        "San is an unwaveringly dedicated individual, exemplifying a relentless commitment to excellence.",
    },
    {
      id: 3,
      image: avatar,
      name: "Oguntan Praise",
      comment: "Sanusi is a hardworking, creative and determined person",
    },
  ];

  return (
    <Section
      title="Testimonials 💭"
      subtitle="This is what friends and colleagues have to say about me"
    >
      <div className="max-w-xl flex flex-col gap-8">
        {TESTIMONIALS.map(({ id, image, name, comment }) => (
          <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300">
            <div className="w-1/3">
              <img
                src={image}
                alt={name}
                className="w-20 h-20 object-cover object-top pt-2"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
              <h3 className="text-xl font-semibold">{name}</h3>
              <p className="text-sm font-extralight">{comment}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
