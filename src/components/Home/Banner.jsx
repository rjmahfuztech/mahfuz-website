import { HiDownload } from "react-icons/hi";
import bannerBg from "../../assets/images/banner-bg.jpeg";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import FadeIn from "../Animation/FadeIn";
import { Link } from "react-router";

const Banner = () => {
  const texts = ["DEVELOPER", "CODER", "LEARNER", "PROGRAMMER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="hero min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-content text-neutral-content max-w-[1400px] mx-auto">
        <div className="flex sm:gap-10 flex-col lg:flex-row md:gap-20 lg:items-center">
          <div className="mt-24 lg:mt-4 md:w-2/3">
            <FadeIn y={0} x={-50} duration={2} delay={0.2}>
              <div>
                <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold leading-tight">
                  HI, I'M MAHFUZ!
                  <br />
                  CREATIVE{" "}
                  <span className="text-[#55E6A5] inline-block">
                    <TextTransition springConfig={presets.wobbly}>
                      {texts[index % texts.length]}
                    </TextTransition>
                  </span>
                </h1>
                <p className="text-[#a1a3af] text-lg mt-5 md:mt-8">
                  I'm a passionate full-stack web developer specializing in
                  backend development with Python and Django, and experienced in
                  building responsive front-ends using React.js. With a strong
                  foundation in Data Structures, Algorithms, and OOP, I focus on
                  writing clean, maintainable code and crafting user-friendly
                  digital experiences using modern web technologies.
                </p>
                <div className="mt-10 md:mt-12 flex items-center gap-2 md:gap-6">
                  <Link
                    target="_blank"
                    to="https://drive.google.com/file/d/1_CDWWhLjyiVYSaptNkIudhadczAq19Ab/view?usp=sharing"
                    className="px-4 md:px-6 py-2 md:py-4 flex items-center gap-2 cursor-pointer bg-[#55E6A5] text-black font-semibold md:text-lg hover:bg-[#141C27] hover:text-white transition-colors duration-500 border-none nav-animation"
                  >
                    <span>Download CV</span> <HiDownload strokeWidth={0.7} />
                  </Link>
                  <button className="flex items-center gap-2 cursor-pointer group">
                    <MdOutlinePlayCircleFilled className="w-10 h-10 md:w-15 md:h-15 text-[#55E6A5]" />{" "}
                    <span className="md:text-lg text-white transition-colors duration-300 group-hover:text-[#55E6A5] font-semibold">
                      Watch The Video
                    </span>
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
          <div className="mt-10 md:mt-0">
            <FadeIn y={0} x={50} duration={2} delay={0.2}>
              <DotLottieReact
                src="https://lottie.host/83870dfe-7b21-444b-bf2c-75835de93046/tmnkqDujqd.lottie"
                loop
                autoplay
                className="size-72 sm:size-96 lg:size-[35rem] mx-auto"
              />
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
