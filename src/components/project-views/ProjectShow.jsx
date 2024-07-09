/* eslint-disable react/prop-types */
import { cn } from "../../utils/index";

const ProjectShow = ({ imgSrc, className, ...props }) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="bg-black">
        <img
          className="object-cover min-w-full min-h-full rounded-lg"
          src={imgSrc}
          alt="overlaying project image"
        />
      </div>
    </div>
  );
};

export default ProjectShow;
