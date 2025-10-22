import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Slider({ images, title }) {
  const [slideIndex, setSlideIndex] = useState(0);

  function setSlider(direction) {
    if (slideIndex === 0 && direction === -1) {
      setSlideIndex(images.length - 1);
      return;
    }

    if (slideIndex === images.length - 1 && direction === 1) {
      setSlideIndex(0);
      return;
    }

    setSlideIndex((prev) => prev + direction);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSlider(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideIndex]);

  const slideVariants = {
    initial: { opacity: 0, x: 0, scale: 1 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -100, scale: 1 },
  };

  return (
    <div
      id="slider"
      className="flex flex-col items-center justify-center w-full"
    >
      {images && (
        <div className="slider-container relative flex flex-col items-center justify-center w-screen h-full">
          <div className="slider-img max-w-screen-md w-10/12 rounded-2xl overflow-hidden shadow-lg shadow-gray-400 flex justify-center items-center h-full py-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[slideIndex]}
                src={images[slideIndex]}
                alt={title}
                className="object-contain w-full h-64 sm:h-80 md:h-96 transition-all duration-700 ease-in-out"
                variants={slideVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>

            {/* Navigation buttons */}
            <button
              className="btn-prev absolute bg-gray-900/70 text-white left-5 sm:left-10 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 transition-transform duration-200 shadow-sm shadow-gray-300"
              onClick={() => setSlider(-1)}
            >
              &lt;
            </button>
            <button
              className="btn-next absolute bg-gray-900/70 text-white right-5 sm:right-10 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:scale-110 transition-transform duration-200 shadow-sm shadow-gray-300"
              onClick={() => setSlider(1)}
            >
              &gt;
            </button>
          </div>

          <div className="flex mt-4 gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setSlideIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === slideIndex ? "bg-gray-900" : "bg-gray-400"
                } transition-all duration-300`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;
