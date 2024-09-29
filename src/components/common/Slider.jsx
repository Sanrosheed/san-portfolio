import React from "react";
import { useState, useEffect } from "react";

function Slider({ images, title }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const [activeSlide, setActiveSlide] = useState(images[slideIndex]);

  function setSlider(number) {
    console.log("number", number);
    console.log("index", slideIndex);

    if (slideIndex === 0 && number === -1) {
      setSlideIndex(images.length - 1);
      return;
    }

    if (slideIndex === images.length - 1 && number === 1) {
      setSlideIndex(0);
      return;
    }

    let newNumber = slideIndex + number;
    setSlideIndex(newNumber);
    return;
  }

  useEffect(() => {
    setActiveSlide(images[slideIndex]);
  }, [slideIndex, images]);

  return (
    <div id="slider" className="flex flex-col items-center justify-center">
      {images && (
        <>
          <div className="slider-container relative flex flex-col items-center justify-center w-screen h-full">
            <div className="slider-img max-w-screen-md w-10/12 rounded-md overflow-hidden shadow-md shadow-gray-300 flex justify-center items-center h-full py-10">
              <img
                className="object-cover w-full h-1/3 md:w-2/3 md:h-2/3"
                src={activeSlide}
                alt={title}
              />
              <div>
                <button
                  className="btn-prev absolute bg-gray-900 left-5 sm:left-10 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer shadow-sm shadow-gray-300"
                  onClick={() => setSlider(-1)}
                >
                  &lt;
                </button>
                <button
                  className="btn-next absolute bg-gray-900 right-5 sm:right-10 p-2 rounded-full w-10 h-10 flex justify-center items-center hover:cursor-pointer shadow-sm shadow-gray-300"
                  onClick={() => setSlider(1)}
                >
                  &gt;
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Slider;
