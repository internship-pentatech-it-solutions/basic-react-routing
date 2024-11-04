import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import slider1 from "../assets/images/slide1.jpg";
import slider2 from "../assets/images/slide2.jpg";
import slider3 from "../assets/images/slide3.jpg";
import slider4 from "../assets/images/slide4.jpg";

const HomeSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const slideVariants = {
    hiddenRight: {
      x: "100%",
      //   opacity: 0,
    },
    hiddenLeft: {
      x: "-100%",
      //   opacity: 0,
    },
    visible: {
      x: "0",
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      //   scale: 0.8,
      transition: {
        duration: 0.1,
      },
    },
  };

  const slidersVariants = {
    hover: {
      scale: 1.2,
      backgroundColor: "#ff00008e",
    },
  };

  const dotsVariants = {
    initial: {
      y: 0,
    },
    animate: {
      scale: 1.1,
      //   transition: { type: "spring", stiffness: 1000, damping: "10" },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.1 },
    },
  };

  const handleNext = () => {
    setDirection("right");
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setDirection("left");

    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection("right");
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="custom-width overflow-hidden relative mt-[13rem]">
      <AnimatePresence>
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          initial={direction === "right" ? "hiddenRight" : "hiddenLeft"}
          animate="visible"
          exit="exit"
          variants={slideVariants}
          className="w-full h-full z-[-1] rounded"
        />
      </AnimatePresence>

      <div className="">
        <motion.button
          variants={slidersVariants}
          whileHover="hover"
          className="size-7 rounded-[50%] flex items-center justify-center absolute left-0 top-[50%] bg-[rgb(117,106,103)]"
          onClick={handlePrevious}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20">
            <path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z" />
          </svg> */}
          <IoIosArrowBack className="text-white" />
        </motion.button>

        <motion.button
          variants={slidersVariants}
          whileHover="hover"
          className="size-7 rounded-[50%] flex items-center justify-center absolute right-0 top-[50%] bg-[rgb(117,106,103)]"
          onClick={handleNext}>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            viewBox="0 96 960 960"
            width="20">
            <path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z" />
          </svg> */}
          <IoIosArrowForward className="text-white" />
        </motion.button>
      </div>

      <div className="flex justify-center items-center gap-4 w-full absolute bottom-0">
        {images.map((_, index) => (
          <motion.div
            key={index}
            className={`bg-slate-400 size-4 rounded-[50%] ${
              currentIndex === index ? "bg-red-600" : ""
            }`}
            onClick={() => handleDotClick(index)}
            initial="initial"
            animate={currentIndex === index ? "animate" : ""}
            whileHover="hover"
            variants={dotsVariants}></motion.div>
        ))}
      </div>
    </div>
  );
};

export default HomeSlider;

const images = [slider1, slider2, slider3, slider4];
