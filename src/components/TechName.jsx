import React, { useLayoutEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: "Framer", color: "purple" },
  { name: "GSAP", color: "yellow" },
  { name: "THREE.JS", color: "pink" },
  { name: "React", color: "yellow" },
  { name: "Next.JS", color: "white" },
  { name: "React", color: "green" },
];

const TechName = () => {
  const component = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          pin: true,
          start: "top bottom",
          end: "bottom top",
          scrub: 4,
        },
      });

      tl.fromTo(
        ".tech-row",
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(600, 400)
              : gsap.utils.random(-600, -400);
          },
        },
        {
          x: (index) => {
            return index % 2 === 0
              ? gsap.utils.random(-600, -400)
              : gsap.utils.random(600, 400);
          },
          ease: "power1.inOut",
        }
      );
    }, component);
    return () => ctx.revert(); // cleanup!
  }, []);

  return (
    <section className="overflow-hidden" ref={component}>
      {technologies.map(({ name, color }, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-600"
          aria-label={name || ""}
        >
          {Array.from({ length: 15 }, (_, idx) => (
            <React.Fragment key={idx}>
              <span
                className="tech-item text-8xl font-extrabold uppercase tracking-tighter"
                style={{
                  color: idx === 7 ? color : "gray",
                }}
              >
                {name}
              </span>
              <span className="text-3xl">
                <MdCircle className="text-slate-900" />
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
};

export default TechName;
