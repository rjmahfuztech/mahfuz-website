import { FiMenu } from "react-icons/fi";
import { TbXboxXFilled } from "react-icons/tb";
import { Link } from "react-router";
import { useSendMail } from "./useSendMail";

const NavSidebar = ({ drawerRef, closeDrawer, myLogo }) => {
  const { form, sendEmail } = useSendMail();
  return (
    <div className="drawer drawer-end">
      <input
        id="my-drawer-4"
        type="checkbox"
        className="drawer-toggle"
        ref={drawerRef}
      />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-4"
          className="drawer-button px-6 pt-6 pb-7 bg-[#55E6A5] mr-1 cursor-pointer"
        >
          <FiMenu
            strokeWidth={2}
            className="size-6 text-black inline-block w-9 h-9"
          />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" bg-[#09101A] text-white min-h-full w-[26rem] p-0">
          <div className="flex justify-between items-center gap-2 bg-[#141C27] p-6">
            <Link to="/">
              <img className="w-32" src={myLogo} alt="Logo" />
            </Link>
            <TbXboxXFilled
              onClick={closeDrawer}
              className="w-11 h-11 text-[#55E6A5] transition-colors duration-500 cursor-pointer  hover:text-white rounded-full"
            />
          </div>
          {/* Sidebar content here */}
          <div className="px-7 mt-16 mb-8">
            <h3 className="text-xl font-semibold">ABOUT ME</h3>
            <p className="text-[#a1a3af] mt-6 font-semibold">
              I'm a self-taught web developer who loves building real projects
              and solving problems. I enjoy working across the stack and
              constantly exploring new tools and challenges.
            </p>
            {/* Form */}
            <h3 className="text-xl font-semibold mt-20">GET IN TOUCH</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                className="input input-lg mt-4 px-4 py-8 bg-[#09101A] border-[#55E6A5] border-x-2 rounded-none w-full"
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-lg mt-4 px-4 py-8 bg-[#09101A] border-[#55E6A5] border-x-2 rounded-none w-full"
              />
              <textarea
                required
                placeholder="Message"
                name="message"
                className="textarea textarea-lg mt-4 px-4 py-6 bg-[#09101A] border-[#55E6A5] border-x-2 rounded-none w-full"
                rows={5}
              ></textarea>
              <input
                type="submit"
                value="Submit Now"
                className="mt-4 px-6 py-4 cursor-pointer bg-[#55E6A5] text-black font-semibold text-lg hover:bg-[#141C27] hover:text-white transition-colors duration-500 border-none nav-animation"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSidebar;
