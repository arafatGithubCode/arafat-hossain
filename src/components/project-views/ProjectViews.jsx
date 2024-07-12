/* eslint-disable react/prop-types */
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "../../utils";
import ProjectShow from "./ProjectShow";

const PROJECTS = [
  "./projectView/view6.jpg",
  "./projectView/view1.jpg",
  "./projectView/view2.jpg",
  "./projectView/view3.jpg",
  "./projectView/view4.jpg",
  "./projectView/view5.jpg",
];

const splitArray = (array, numParts) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    const index = i % numParts;

    if (!result[index]) {
      result[index] = [];
    }
    result[index].push(array[i]);
  }

  return result;
};

const ViewColumn = ({ views, viewClassName, className, msPerPixel }) => {
  const columnRef = useRef(null);
  const [columnHeight, setColumnHeight] = useState(0);

  const duration = `${columnHeight * msPerPixel}ms`;

  useEffect(() => {
    if (!columnRef.current) return;

    const resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current?.offsetHeight ?? 0);
    });

    resizeObserver.observe(columnRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={columnRef}
      className={cn("animate-marquee space-y-8 py-4", className)}
      style={{ "--marquee-duration": duration }}
    >
      {views.concat(views).map((imgSrc, viewIndex) => (
        <View
          key={viewIndex}
          className={viewClassName?.(viewIndex % views.length)}
          imgSrc={imgSrc}
        />
      ))}
    </div>
  );
};

const View = ({ imgSrc, ...props }) => {
  const POSSIBLE_ANIMATION_DELAYS = [
    "0s",
    "0.1s",
    "0.2s",
    "0.3s",
    "0.4s",
    "0.5s",
  ];

  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5"
      )}
      style={{ animationDelay }}
      {...props}
    >
      <ProjectShow imgSrc={imgSrc} />
    </div>
  );
};

const ViewsGrid = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const columns = splitArray(PROJECTS, 3);
  const column1 = columns[0];
  const column2 = columns[1];
  const column3 = splitArray(columns[2], 2);

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-10  grid h-[40rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-3 sm:mt-16 md:grid-cols-2 lg:grid-cols-3 rounded-2xl"
    >
      {isInView ? (
        <>
          <ViewColumn
            views={[...column1, ...column3.flat(), ...column2]}
            viewClassName={(viewIndex) =>
              cn({
                "md:hidden": viewIndex >= column1.length + column3[0].length,
                "lg:hidden": viewIndex >= column1.length,
              })
            }
            msPerPixel={10}
          />

          <ViewColumn
            views={[...column2, ...column3[1]]}
            className="hidden md:block"
            viewClassName={(viewIndex) =>
              viewIndex >= column2.length ? "lg:hidden" : ""
            }
            msPerPixel={15}
          />
          <ViewColumn
            views={column3.flat()}
            className="hidden md:block"
            msPerPixel={10}
          />
        </>
      ) : null}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-400" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-400" />
    </div>
  );
};

const ProjectViews = () => {
  return (
    <div className="relative max-w-5xl bg-slate-900">
      <ViewsGrid />
    </div>
  );
};

export default ProjectViews;
