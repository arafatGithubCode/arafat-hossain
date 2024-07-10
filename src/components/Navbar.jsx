import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks, bio } from "../constants";
import { styles } from "../styles";
import { close, menu, github } from "../assets";
import Button from "./Button";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-50 -mt-4 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] cursor-pointer font-bold flex whitespace-nowrap items-center justify-center gap-1">
            <span className="text-[32px] text-[#854CE6]">&lt;</span>Web{" "}
            <span className="text-[#854CE6]">/</span> Developer
            <span className="text-[32px] text-[#854CE6]">&gt;</span>
          </p>
        </Link>
        <ul className="list-none hidden md:flex flex-row gap-6 lg:gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              onClick={() => setActive(nav.title)}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <Button
          text="Github Profile"
          link="https://github.com/arafatGithubCode"
          showIcon={true}
          className="hidden lg:block"
        />

        <a
          href={bio.github}
          target="_blank"
          className="hidden md:inline w-[2.5rem] lg:hidden hover:scale-105"
        >
          <img className="w-full" src={github} alt="Github" />
        </a>
        <div className="md:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col flex-1 gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                  className={`font-poppins font-medium text-[16px] cursor-pointer hover:text-white ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <Button
                text="Github Profile"
                link="https://github.com/arafatGithubCode"
                showIcon={true}
              />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
