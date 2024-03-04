/* eslint-disable react/prop-types */
import { MdClose } from "react-icons/md";

const ProjectModal = ({ project, visible, onClose }) => {
  const {
    name,
    description,
    tags,
    image,
    source_code_link,
    live_app,
    features,
  } = project;

  if (!visible) return null;

  const handleClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleClose}
      className="bg-white fixed inset-0 bg-opacity-[0.01] backdrop-blur-sm flex justify-center items-center z-50 overflow-y-scroll"
    >
      <div className="w-[80%] flex flex-col bg-black p-3 pt-0 rounded-xl mt-80 md:w-[50%]">
        <MdClose
          onClick={onClose}
          className="self-end cursor-pointer text-3xl bg-black rounded-full hover:scale-105"
        />
        <div>
          <img className="w-full max-h-[350px]" src={image} alt={name} />
        </div>
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          <p className="mt-2 text-[14px] text-secondary">{description}</p>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <p
              className={`text-[14px] ${tag.color}`}
              key={`${tag.name}-${index}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        <ul className="list-disc marker:text-blue-500 text-sm mt-3 ml-5 text-slate-300">
          <li>{features.one}</li>
          <li>{features.two}</li>
          <li>{features.three}</li>
          <li>{features.four}</li>
          <li>{features.five}</li>
        </ul>
        <div className="flex justify-between mt-3">
          <a
            href={source_code_link}
            target="_blank"
            className="border border-teal-500 px-5 py-1 rounded-xl hover:scale-105"
          >
            Source Code
          </a>
          <a
            href={live_app}
            target="_blank"
            className="border border-teal-500 px-5 py-1 rounded-xl bg-pink-500 hover:bg-pink-600 hover:scale-105"
          >
            Live View
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
