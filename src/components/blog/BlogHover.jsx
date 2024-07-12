import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdArrowOutward } from "react-icons/md";
import { blogs } from "../../constants";

gsap.registerPlugin(ScrollTrigger);

const BlogHover = () => {
  const component = useRef(null);
  const itemsRef = useRef([]);

  const revealRef = useRef(null);
  const [currentItem, setCurrentItem] = useState(null);
  const [hovering, setHovering] = useState(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Animate list-items in with a stagger
    let ctx = gsap.context(() => {
      itemsRef.current.forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.3,
            ease: "elastic.out(1, 0.3)",
            stagger: 0.2,
            scrollTrigger: {
              trigger: item,
              start: "top bottom-=100px",
              end: "bottom center",
              toggleActions: "play none none none",
            },
          }
        );
      });

      return () => ctx.revert(); // cleanup!
    }, component);
  }, []);

  useEffect(() => {
    // Mouse move event listener
    const handleMouseMove = (e) => {
      const mousePos = { x: e.clientX, y: e.clientY + window.scrollY };
      const speed = Math.sqrt(Math.pow(mousePos.x - lastMousePos.current.x, 2));

      let ctx = gsap.context(() => {
        if (currentItem !== null) {
          const maxY = window.scrollY + window.innerHeight - 350;
          const maxX = window.innerWidth - 250;

          gsap.to(revealRef.current, {
            x: gsap.utils.clamp(0, maxX, mousePos.x - 110),
            y: gsap.utils.clamp(0, maxY, mousePos.y - 160),
            rotation: speed * (mousePos.x > lastMousePos.current.x ? 1 : -1),
            ease: "back.out(2)",
            duration: 1.3,
          });
          gsap.to(revealRef.current, {
            opacity: hovering ? 1 : 0,
            visibility: "visible",
            ease: "power3.out",
            duration: 0.4,
          });
        }
        lastMousePos.current = mousePos;
        return () => ctx.revert(); // cleanup!
      }, component);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [hovering, currentItem]);

  const onMouseEnter = (index) => {
    setCurrentItem(index);
    if (!hovering) setHovering(true);
  };

  const onMouseLeave = () => {
    setHovering(false);
    setCurrentItem(null);
  };

  const contentImages = blogs.map(
    (item) => item.postImage || item.fallbackImage
  );

  // Preload images
  useEffect(() => {
    contentImages.forEach((url) => {
      if (!url) return;
      const img = new Image();
      img.src = url;
    });
  }, [contentImages]);

  return (
    <>
      <ul
        ref={component}
        className="grid border-b border-b-slate-100 border-t border-t-slate-100 px-5"
        onMouseLeave={onMouseLeave}
      >
        {blogs.map((post, index) => (
          <li
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            onMouseEnter={() => onMouseEnter(index)}
            className="list-item opacity-0"
          >
            <a
              href={post.link}
              target="_blank"
              className="flex flex-col justify-between py-10 text-slate-200 md:flex-row"
              aria-label={post.title || ""}
            >
              <div className="flex flex-col">
                <span className="text-3xl font-bold">{post.title}</span>
                <div className="flex gap-3 text-yellow-400">
                  {post.tags.map((tag, index) => (
                    <span key={index} className="text-lg font-bold">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <span className="ml-auto flex items-center gap-2 text-xl font-medium md:ml-0">
                {post.linkText} <MdArrowOutward />
              </span>
            </a>
          </li>
        ))}

        {/* Hover element */}

        <div
          className="hover-reveal pointer-events-none absolute left-0 top-0 -z-10 h-[320px] w-[190px] rounded-lg bg-cover bg-center opacity-0 transition-[background] duration-300"
          style={{
            backgroundImage:
              currentItem !== null ? `url(${contentImages[currentItem]})` : "",
          }}
          ref={revealRef}
        ></div>
      </ul>
    </>
  );
};

export default BlogHover;
