import Container from "../Container";
import SectionLayout from "./Layout/SectionLayout";

export default function About() {
  const aboutText =
    "Here is the details information about my work journey and skills";
  return (
    <SectionLayout title="About" className="">
      <p className="md:w-1/2 w-full m-auto text-gray-500 font-regular md:text-xl text-sm text-center px-5">
        {aboutText}
      </p>
      <Container>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10">
          <div>
            <h2 className="text-cyan-500 font-semibold text-md mb-4">
              About Myself
            </h2>
            <p className="text-gray-500 md:pr-20 pr-0 text-lg">
              Hi, I'm <b>Kazi Masudur Rahman</b>. I am a professional{" "}
              <b>Web Developer</b> and expert in <b>Frontend technology</b>.{" "}
              <p className="mt-5">
                I know how to convert any design using React or React Native or
                Vue js or Angular . I am an expert on <b>React js</b>.
              </p>
              <p className="mt-5">
                I know how to convert any design using react or vue js or
                angular library. I also convert any design to raw code{" "}
                <b>
                  (HTML, CSS, Javascript, Bootstrap, Tailwind, Material UI){" "}
                </b>{" "}
                and <b>integrate</b> prebuild end
                <b> API</b> into the front end. I also have enough knowledge
                about the backend technology{" "}
                <b>(Nodejs, MongoDB, Express js)</b>.
              </p>
            </p>
          </div>
          <div>
            <h2 className="text-cyan-500 font-semibold text-md mb-4">Skills</h2>
            <div className="flex justify-center items-center">
              <div className="inline-block border-2 border-cyan-500 md:p-[70px] p-[60px] rounded-full relative">
                <span className="uppercase bg-cyan-500 text-white absolute py-1 px-5 -left-[25px] top-1/2 -translate-y-1/2 -rotate-45">
                  html
                </span>
                <span className="uppercase bg-cyan-500 text-white absolute py-1 px-5 left-1/2 -bottom-[10px] -translate-x-1/2">
                  css
                </span>
                <span className="uppercase bg-cyan-500 text-white absolute py-1 px-5 -right-[50px] top-1/2 -translate-y-1/2 rotate-45">
                  Javascript
                </span>
                <span className="uppercase bg-cyan-500 text-white absolute py-1 px-5 -top-[10px] left-1/2 -translate-x-1/2">
                  React Js
                </span>
                <div className="w-[100px] h-[100px] bg-cyan-200 rounded-full flex items-center justify-center text-center">
                  <p className="font-bold uppercase text-xl">
                    Web <br /> Dev
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </SectionLayout>
  );
}
