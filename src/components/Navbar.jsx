import { Link } from "react-router";
import myLogo from "../assets/images/mahfuz-logo.jpeg";
import { useRef, useState } from "react";
import NavSidebar from "./NavSidebar";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const drawerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => {
    if (drawerRef.current) {
      drawerRef.current.checked = false;
    }
  };

  return (
    <>
      <div className="max-w-[1400px] mx-auto relative">
        <div className="navbar justify-between p-0 bg-[#141C27] text-white shadow-sm absolute left-0 right-0 px-4 lg:px-0">
          <div>
            <Link to="/">
              <img
                className="w-32 lg:w-56 p-1 md:p-1"
                src={myLogo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="hidden lg:block uppercase nav-link">
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-semibold mr-12 nav-animation"
              to="/"
            >
              Home
            </Link>
            <a
              href="/#about"
              className="text-sm font-semibold mr-12 nav-animation"
            >
              About
            </a>
            <a
              href="/#service"
              className="text-sm font-semibold mr-12 nav-animation"
            >
              Service
            </a>
            <a
              href="/#skills"
              className="text-sm font-semibold mr-12 nav-animation"
            >
              Skills
            </a>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-semibold mr-12 nav-animation"
              to="/project"
            >
              Project
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-semibold mr-12 nav-animation"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              onClick={() => window.scrollTo(0, 0)}
              className="text-sm font-semibold nav-animation"
              to="/contact"
            >
              Contact
            </Link>
          </div>
          {/* Nav sidebar */}
          <div className="hidden lg:block">
            <NavSidebar
              drawerRef={drawerRef}
              closeDrawer={closeDrawer}
              myLogo={myLogo}
            />
          </div>
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-[#55E6A5] p-2"
            >
              <div className="relative w-5 h-5 flex justify-center items-center">
                <FiMenu
                  className={`absolute text-black transition-opacity duration-300 ${
                    isOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <RxCross2
                  className={`absolute text-black transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* mobile device nav */}
      <div
        className={`transform transition-all duration-500 ease-in-out uppercase nav-link ${
          isOpen
            ? "opacity-100 translate-y-0 scale-100 h-full visible"
            : "opacity-0 -translate-y-5 h-0 scale-95 invisible"
        } lg:hidden text-white mt-16 py-5 space-y-4 border-y border-y-[#55E6A5] bg-[#09101A] text-center`}
      >
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          to="/"
        >
          Home
        </Link>
        <a
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          href="/#about"
        >
          About
        </a>
        <a
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          href="/#service"
        >
          Service
        </a>
        <a
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          href="/#skills"
        >
          Skills
        </a>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          to="/project"
        >
          Project
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          to="/blog"
        >
          Blog
        </Link>
        <Link
          onClick={() => window.scrollTo(0, 0)}
          className="text-sm font-semibold nav-animation block w-32 mx-auto"
          to="/contact"
        >
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
