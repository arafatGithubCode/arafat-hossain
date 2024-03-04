/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";
import { bio } from "../constants/index";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center"
      >
        <img className="w-16 h-16 object-contain" src={icon} alt={title} />
        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>Introduction</p>
            <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="max-w-3xl text-[17px] leading-[30px] text-secondary mt-4 text-justify"
          >
            I&apos;m a skilled web developer with experience in Javascript, CSS,
            HTML, and TypeScript and expertise in frameworks like React,
            Node.js, and Express.js. I&apos;m a quick learner and collaborate
            closely with clients to create efficient, scalable, and
            user-friendly solutions that solve real-world problems. Let&apos;s
            work together to bring your ideas to life!
          </motion.p>
        </div>
        <div className="flex flex-col justify-center items-center gap-10">
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 0.5)}
            className="w-[70%]"
          >
            <Tilt>
              <img className="w-full" src={bio.profileImg} alt="profile" />
            </Tilt>
          </motion.div>
          <a
            className="bg-pink-500 px-10 py-3 rounded-xl text-xl font-semibold hover:bg-pink-600 hover:scale-105 transition duration-200 ease-in-out"
            href={bio.resume}
            target="display"
          >
            Check Resume
          </a>
        </div>
      </div>
      <div className="mt-14 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
