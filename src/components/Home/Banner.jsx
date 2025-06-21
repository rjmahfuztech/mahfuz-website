import { HiDownload } from "react-icons/hi";
import bannerBg from "../../assets/images/banner-bg.jpeg";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import TextTransition, { presets } from "react-text-transition";
import { useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Banner = () => {
  const texts = ["DEVELOPER", "CODER", "LEARNER", "PROGRAMMER"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${bannerBg})`,
      }}
    >
      <div className="hero-content text-neutral-content max-w-[1400px] mx-auto">
        <div className="flex sm:gap-10 flex-col lg:flex-row md:gap-20 lg:items-center">
          <div className="mt-24 lg:mt-4 md:w-2/3">
            <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold leading-tight">
              HI, I'M MAHFUZ!
              <br />
              CREATIVE{" "}
              <span className="text-[#55E6A5] inline-block">
                <TextTransition springConfig={presets.wobbly}>
                  {texts[index % texts.length]}
                </TextTransition>
              </span>
            </h1>
            <p className="text-[#a1a3af] text-lg mt-6 md:mt-8">
              I'm a passionate full-stack web developer with a focus on backend
              development using Python and Django also ReactJs for Front-end.
              With a strong foundation in design principles and a love for clean
              code, I craft intuitive, responsive, and user-friendly digital
              experiences using ReactJS and modern web tools.
            </p>
            <div className="mt-10 md:mt-12 flex items-center gap-2 md:gap-6">
              <button className="px-4 md:px-6 py-2 md:py-4 flex items-center gap-2 cursor-pointer bg-[#55E6A5] text-black font-semibold md:text-lg hover:bg-[#141C27] hover:text-white transition-colors duration-500 border-none nav-animation">
                <span>Download CV</span> <HiDownload strokeWidth={0.7} />
              </button>
              <button className="flex items-center gap-2 cursor-pointer group">
                <MdOutlinePlayCircleFilled className="w-10 h-10 md:w-15 md:h-15 text-[#55E6A5]" />{" "}
                <span className="md:text-lg text-white transition-colors duration-300 group-hover:text-[#55E6A5] font-semibold">
                  Watch The Video
                </span>
              </button>
            </div>
          </div>
          <div className="mt-10 md:mt-0">
            <DotLottieReact
              src="https://lottie.host/83870dfe-7b21-444b-bf2c-75835de93046/tmnkqDujqd.lottie"
              loop
              autoplay
              className="size-80 sm:size-96 lg:size-[35rem] mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
