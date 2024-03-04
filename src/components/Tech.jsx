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
              <div className="flex flex-wrap gap-5 items-center border border-teal-500 rounded-xl p-3">
                {skill.technologies.map((item, index_x) => (
                  <motion.div
                    variants={fadeIn("right", "tween", 0.5 * index_x, 0.85)}
                    key={`skill-x${index_x}`}
                    className="flex items-center gap-2"
                  >
                    <img
                      className="rounded-full w-[3rem]"
                      src={item.icon}
                      alt={item.name}
                    />
                    <div className="mt-1 ml-1 bg-gradient-to-r from-sky-500 via-pink-500 to-green-500 inline-block text-transparent bg-clip-text text-lg font-bold border-b border-gray-500 relative whitespace-pre-line">
                      {item.name}
                      <motion.div
                        animate={{
                          x: [0, 64, 0],
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          repeatType: "loop",
                        }}
                        className="w-10 h-5 bg-slate-300/10 absolute top-0 rounded-xl"
                      />
                    </div>
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
