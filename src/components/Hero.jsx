import { useState } from "react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { bio } from "../constants/index";
import { heroBanner } from "../assets";

const Hero = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="w-full h-screen relative mx-auto">
      <div
        className={`absolute inset-0 top-[70px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-2`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 h-40 violet-gradient sm:h-80" />
        </div>
        <div className="z-10">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Arafat</span>
          </h1>
          <p className="text-xs text-slate-400 mt-[-0.5rem]">
            Frontend Web Developer
          </p>
          <div className="bg-gradient-to-r from-sky-500 via-pink-500 to-green-500 inline-block text-transparent bg-clip-text">
            <div className="flex gap-3 py-3 sm:py-1 text-md font-semibold sm:text-2xl">
              I&apos;m a
              <Typewriter
                options={{
                  strings: bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
          </div>
          <div className="max-w-xl flex items-end">
            <p
              className={`text-gray-400 text-sm sm:text-md text-justify ${
                isExpanded
                  ? "line-clamp-none bg-gray-300 p-3 rounded-lg text-slate-900"
                  : "line-clamp-2"
              }`}
            >
              {bio.description}
            </p>
            <button
              className="text-xs text-blue-400 hover:font-semibold whitespace-nowrap bg-black py-1 px-2 rounded-xl"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {isExpanded ? "Close" : "Read More"}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`absolute inset-0 top-[270px] max-w-2xl mx-auto ${styles.paddingX} md:mt-2`}
      >
        <img
          className="w-full h-[45vh] rounded-xl"
          src={heroBanner}
          alt="Banner"
        />
      </div>
      <div className="w-full flex justify-center items-center absolute bottom-[1rem] xs:bottom-0 z-10">
        <a href="#about">
          <div className="w-[34px] h-[64px] rounded-xl border-4 border-secondary p-2 flex justify-center items-start">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 bg-secondary rounded-full mx-auto"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
