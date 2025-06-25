import { CgEditBlackPoint } from "react-icons/cg";
import { Link } from "react-router";
import MyContact from "../components/Contact/MyContact";

const Contact = () => {
  return (
    <div className="bg-[#02050A]">
      <div className="bg-[#09101A]">
        <div className="max-w-[1400px] mx-auto px-4 2xl:px-0">
          <div className="pt-32 pb-20 md:pb-36 md:pt-60">
            <div className="flex md:items-center flex-col md:flex-row md:justify-between">
              <h1 className="text-3xl md:text-5xl font-bold text-white">
                Contact
              </h1>
              <div className="mt-6 md:mt-0 flex items-center gap-3 nav-link">
                <Link
                  to="/"
                  className="text-white text-lg md:text-xl font-bold nav-animation"
                >
                  Home
                </Link>
                <CgEditBlackPoint className="text-[#55E6A5] w-6 h-6" />
                <Link className="text-white text-lg md:text-xl font-bold hover:text-[#55E6A5] transition-colors duration-300">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <MyContact />
      </div>
    </div>
  );
};

export default Contact;
