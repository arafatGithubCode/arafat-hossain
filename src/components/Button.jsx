/* eslint-disable react/prop-types */
import { MdArrowOutward } from "react-icons/md";
import clsx from "clsx";

export default function Button({
  text = "",
  link = "#",
  showIcon = true,
  className = "",
  target = "",
}) {
  return (
    <a
      href={link}
      target={target}
      className={clsx(
        "group relative flex w-fit items-center justify-center overflow-hidden rounded-md border-2 border-slate-900 bg-slate-700 px-4 py-2 font-bold transition-transform ease-out hover:scale-105",
        className
      )}
    >
      <span className="absolute inset-0 z-0 h-full translate-y-9 bg-[#915EFF] text-white transition-transform duration-300 ease-in-out group-hover:translate-y-0" />
      <span className="relative flex items-center justify-center gap-2">
        {text} {showIcon && <MdArrowOutward className="inline-block" />}
      </span>
    </a>
  );
}
