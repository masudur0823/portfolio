import { useRef } from "react";
import About from "../component/Home/About";
import Banner from "../component/Home/Banner";
import Contact from "../component/Home/Contact";
import Projects from "../component/Home/Projects";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
