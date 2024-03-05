/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { education } from "../constants";

const EducationCard = ({ education }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#1d1836",
      color: "#fff",
    }}
    contentArrowStyle={{
      borderRight: "9px solid  gray",
    }}
    date={education.date}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={education.img}
          alt={education.institution}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
    iconStyle={{
      background: education.iconBg,
    }}
  >
    <div>
      <div className="flex gap-3">
        <div className="w-[3.5rem]">
          <img
            className="w-full rounded-xl"
            src={education.img}
            alt="Education"
          />
        </div>
        <div className="space-y-1">
          <h3>{education.institution}</h3>
          <p className="text-slate-400" style={{ fontSize: "13px" }}>
            {education.degree}
          </p>
          <p className="text-gray-500" style={{ fontSize: "11.5px" }}>
            {education.date}
          </p>
        </div>
      </div>
      <div className="space-y-2 pt-2">
        <p className="text-white" style={{ fontSize: "15px" }}>
          Grade: {education.grade}
        </p>
        <p className="text-gray-400 text-justify sm:text-left">
          {education.desc}
        </p>
      </div>
      <p style={{ fontSize: "15px" }}>{education.title}</p>
      <ul className="flex flex-wrap gap-1 pt-3 items-center">
        {education.tags.map((tag, index) => (
          <li key={`course-${index}`}>
            <span className={`${tag.color}`}>#{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant}>
        <p className={`${styles.sectionSubText}`}>
          My education has been a journey of self-discovery and growth.I thrive
          as an independent learner
        </p>
        <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
      </motion.div>
      <div className="flex flex-col mt-20">
        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`experience-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "");
