import React from "react";
import Button from "../Button";
import img from "../../assets/images/masud.png";

function Banner() {

  const first = "Masudur".split("");
  const last = "Rahman".split("");

  return (
    <div
      className="bg-cyan-50 flex justify-center items-center"
      style={{ height: "calc(100vh - 4rem)" }}
    >
      <div className="w-[70%] flex justify-between">
        <div>
          <h1 className="text-2xl text-cyan-500 font-medium mb-2">I'am</h1>
          {first?.map((item, i) => (
            <span key={i} className="inline-block text-7xl font-bold rotate-0 transition-all hover:rotate-45 hover:text-cyan-500">
              {item}
            </span>
          ))}
          <br />
          {last?.map((item, i) => (
            <span key={i} className="inline-block text-7xl font-bold rotate-0 transition-all hover:rotate-45 hover:text-cyan-500">
              {item}
            </span>
          ))}

     
          <h1 className="text-gray-400 text-xl font-normal my-4">
            A passonate <span>Software Developer</span>
            {/* <span>Frontend Developer</span> <span>FullStack Developer</span> */}
          </h1>
          <Button >Download Cv</Button>
        </div>
        <div>
          <div className="h-80 w-80 rounded-lg overflow-hidden z-0 relative after:content-[''] after:w-80 after:h-80 after:bg-cyan-500 after:absolute after:left-5 after:top-5 after:-z-[1]">
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
