/* eslint-disable react/prop-types */
import React, { useState } from "react";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants/index";
import ProjectCard from "./card/ProjectCard";
import ProjectViews from "./project-views/ProjectViews";

const Works = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My Works</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>

      <div className="w-full flex">
        <p className="mt-3 text-secondary text-[17px] leading-[30px] max-w-3xl">
          Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described{" "}
          <span className="text-green-500">with links to code</span>{" "}
          repositories and <span className="text-red-500">live demos</span> in
          it. It reflects my ability to solve complex problems, work with
          different technologies, and manage projects effectively.
        </p>
      </div>

      <ProjectViews />

      <div className="flex flex-wrap justify-center md:justify-between items-center border-2 border-[#854CE6] rounded-xl px-2 md:px-4 gap-3 font-medium text-sm xs:text-lg md:text-xl text-[#854CE6] mt-12 max-w-xl mx-auto">
        {["all", "mern", "react", "nextjs", "raw css & js"].map((item) => (
          <React.Fragment key={item}>
            <button
              className={`${
                toggle === item
                  ? "bg-[#854CE6] bg-opacity-30 px-2 md:px-4 rounded-md text-white"
                  : ""
              } py-1`}
              value={item}
              onClick={() => setToggle(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
            {item !== "raw css & js" && (
              <div className="hidden md:block w-[3px] h-8 bg-[#854CE6]" />
            )}
          </React.Fragment>
        ))}
      </div>

      <p className="text-center mt-5 uppercase text-slate-400 text-sm">{`Showing ${toggle} web apps`}</p>
      <div className="mt-14 flex flex-wrap gap-6 justify-center">
        {toggle === "all"
          ? projects.map((project) => (
              <ProjectCard key={project.id} {...project} project={project} />
            ))
          : projects
              .filter((item) => item.category === toggle)
              .map((project) => (
                <ProjectCard key={project.id} {...project} project={project} />
              ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "project");
