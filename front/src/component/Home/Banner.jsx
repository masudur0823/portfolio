import React from "react";
import { Link } from "react-scroll";
import Button from "../Button";
import img from "../../assets/images/masud.png";

function Banner() {
  const first = "Masudur".split("");
  const last = "Rahman".split("");

  return (
    <div
      name="home"
      className="bg-cyan-50 flex justify-center items-center px-5 py-10"
      style={{ minHeight: "calc(100vh - 4rem)" }}
    >
      <div className="lg:w-[60rem] md:w-[50rem] flex md:flex-row flex-col-reverse justify-between gap-5 ">
        <div>
          <h1 className="text-2xl text-cyan-500 font-medium mb-2">I'am</h1>
          <div>
            {first?.map((item, i) => (
              <span
                key={i}
                className="inline-block lg:text-7xl sm:text-5xl text-4xl font-bold rotate-0 first:rotate-45 first:text-cyan-500 transition-all hover:rotate-45 hover:text-cyan-500 "
              >
                {item}
              </span>
            ))}
          </div>

          <div className="mt-1">
            {last?.map((item, i) => (
              <span
                key={i}
                className="inline-block lg:text-7xl sm:text-5xl text-4xl font-bold rotate-0 transition-all hover:rotate-45 hover:text-cyan-500 last:rotate-45 last:text-cyan-500"
              >
                {item}
              </span>
            ))}
          </div>

          <h1 className="text-gray-400 sm:text-xl text-sm font-normal my-4">
            A passonate <span>Software Developer</span>
            {/* <span>Frontend Developer</span> <span>FullStack Developer</span> */}
          </h1>
          <Button onClick={()=> scroll.scrollTo(100)}>
            {" "}
            {/* <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-65}
              duration={500}
            > */}
              View Projects
            {/* </Link> */}
          </Button>
        </div>
        <div>
          <div className="sm:h-80 sm:w-80 w-40 h-40 sm:m-0 m-auto rounded-lg overflow-hidden z-0 relative after:content-[''] after:w-80 after:h-80 after:bg-cyan-500 after:absolute after:left-5 after:top-5 after:-z-[1]">
            <img
              src={img}
              className="w-full h-full object-cover "
              alt="masudur rahman"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
