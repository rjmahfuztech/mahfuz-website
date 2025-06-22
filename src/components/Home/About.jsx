import { HiDownload } from "react-icons/hi";
import personalPic from "../../assets/images/mahfuz.jpeg";
import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";

const About = () => {
  const mySocial = [
    { icon: FaSquareGithub, link: "https://github.com/rjmahfuztech" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/mahfuz-islam/" },
    {
      icon: FaSquareFacebook,
      link: "https://web.facebook.com/mahfuz.islam.350967/",
    },
    { icon: FaSquareXTwitter, link: "https://x.com/MahfuzI87236451" },
  ];
  return (
    <div
      id="about"
      className="pt-20 md:pt-32 flex gap-10 md:gap-20 xl:gap-28 flex-col md:flex-row pb-32"
    >
      <div className="lg:max-w-3xl">
        <div className="">
          <h3 className="text-lg text-[#55E6A5] font-semibold mb-2">
            ABOUT ME
          </h3>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
            Building the Web with
            <br /> Purpose and Precision
          </h2>
        </div>
        <div className="flex gap-4 mt-8 md:mt-14">
          <hr className="w-60 mt-2 h-1 bg-[#55E6A5]" />
          <div>
            <p className="text-[#a1a3af] text-lg">
              I'm a self-taught web developer who enjoys learning by building
              real projects. I like solving problems, trying new tools, and
              turning ideas into working websites and applications. Whether it's
              frontend, backend, or full-stack work, I'm always ready to learn
              more and take on new challenges.
            </p>
            <div className="flex gap-4 items-center">
              {mySocial.map((social, index) => (
                <Link
                  key={index}
                  target="_blank"
                  to={social.link}
                  className="border-2 border-[#282626] p-2 mt-8 rounded-lg hover:border-slate-200 group hover:bg-slate-200 transition-colors duration-500"
                >
                  <social.icon className="w-6 h-6 text-slate-400 group-hover:text-[#282626] transition-colors duration-500" />
                </Link>
              ))}
            </div>
            <button className="px-4 mt-10 md:px-6 py-2 md:py-4 flex items-center gap-2 cursor-pointer bg-[#55E6A5] text-black font-semibold md:text-lg hover:bg-[#141C27] hover:text-white transition-colors duration-500 border-none nav-animation">
              <span>Download CV</span> <HiDownload strokeWidth={0.7} />
            </button>
          </div>
        </div>
      </div>
      <div className="ok">
        <img src={personalPic} alt="Person Picture" />
      </div>
    </div>
  );
};

export default About;
