import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";

const MainLayout = () => {
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
    </div>
  );
};

export default MainLayout;
