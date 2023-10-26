import About from "../component/Home/About";
import Banner from "../component/Home/Banner";
import Contact from "../component/Home/Contact";
import Projects from "../component/Home/Projects";
import Footer from "../component/Footer";
import Header from "../component/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}
