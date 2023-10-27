import React from "react";

function SectionLayout({ title, children, className }) {
  const letters = title.split("");
  return (
    <div name={title.toLowerCase()} className={`min-h-calc md:py-16 py-7 ${className}`}>
      <div className="flex justify-center">
        <div className="mb-9 relative after:content-[''] after:w-[3rem] md:after:h-2 after:h-1 after:bg-cyan-500 after:absolute after:left-1/2 md:after:-bottom-4 after:-bottom-3 after:-translate-x-1/2 ">
          {letters?.map((letter, i) => (
            <span className="inline-block lg:text-5xl sm:text-3xl text-2xl font-bold uppercase tracking-widest transition-all duration-300  first:rotate-45 first:text-cyan-500 hover:rotate-45 hover:text-cyan-500 ">
              {letter}
            </span>
          ))}
        </div>
      </div>
      {children}
    </div>
  );
}

export default SectionLayout;
