import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Projects from "../components/Projects/Projects";
import Service from "../components/Home/Service";
import Skills from "../components/Skills/Skills";
import MyContact from "../components/Contact/MyContact";

const Home = () => {
  return (
    <>
      <Banner />
      <div className="bg-[#02050A]">
        <div className="max-w-[1400px] mx-auto px-4 xl:px-0">
          <Service />
          <About />
          <Projects />
        </div>
      </div>
      <Skills />
      <div className="bg-[#02050A]">
        <div className="max-w-[1400px] mx-auto px-4 xl:px-0">
          <MyContact />
        </div>
      </div>
    </>
  );
};

export default Home;
