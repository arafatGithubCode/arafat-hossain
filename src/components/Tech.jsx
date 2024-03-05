import { SectionWrapper } from "../hoc";
import { skills } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Tilt from "react-parallax-tilt";

const Tech = () => {
  return (
    <div>
      <h2 className={`${styles.sectionHeadText}`}>Skills.</h2>
      <p className="text-sm sm:text-md text-slate-300 mb-20">
        Here are some of my skills on which I have been working on for the past
        2 years.
      </p>
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 justify-center">
        {skills.map((skill, index) => (
          <Tilt key={`skill-${index}`}>
            <motion.div
              variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
              key={`skill-${index}`}
            >
              <h2 className="text-center pb-5 text-2xl">{skill.title}</h2>
              <div className="flex flex-wrap gap-3 items-center justify-center border border-teal-900 rounded-xl p-3 bg-tertiary bg-opacity-65 hover:shadow-md hover:shadow-pink-200">
                {skill.technologies.map((item, index_x) => (
                  <motion.div
                    variants={fadeIn("right", "tween", 0.5 * index_x, 0.85)}
                    key={`skill-x${index_x}`}
                    className="flex items-center gap-1 border border-gray-600 p-1 rounded-2xl"
                  >
                    <img
                      className="rounded-full w-[2rem]"
                      src={item.icon}
                      alt={item.name}
                    />
                    <span className="mt-1 ml-1 bg-gradient-to-r from-sky-500 via-pink-500 to-green-500 inline-block text-transparent bg-clip-text text-md sm:text-lg font-bold relative whitespace-pre-line">
                      {item.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "skill");
