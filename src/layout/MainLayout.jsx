import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import { MdArrowDropUp } from "react-icons/md";

const MainLayout = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) setIsScroll(true);
      else setIsScroll(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navigation bar */}
      <div className="lg:px-4 xl:px-0 fixed left-0 right-0 z-50">
        <Navbar />
      </div>
      {/* Main content */}
      <Outlet />
      {/* Footer */}
      <Footer />
      {/* scroll to top fixed button */}
      <button
        onClick={() => window.scrollTo(0, 0)}
        className={`fixed z-20 right-4 md:right-6 btn btn-success w-8 h-8 md:w-10 md:h-10 p-0 rounded-full transition-all duration-300 ease-in-out transform ${
          isScroll
            ? "bottom-8 opacity-100 translate-y-0"
            : " bottom-0 opacity-0 translate-y-5 pointer-events-none"
        }`}
      >
        <MdArrowDropUp className="size-8 md:size-10" />
      </button>
    </div>
  );
};

export default MainLayout;
