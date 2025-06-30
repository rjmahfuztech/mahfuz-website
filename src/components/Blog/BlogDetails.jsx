import { FaUserCircle } from "react-icons/fa";
import { FaComments } from "react-icons/fa6";

const BlogDetails = ({ blog }) => {
  return (
    <div className="relative group">
      <div className="h-[350px] z-10 overflow-hidden">
        <img
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          src={blog.img}
          alt="Blog Picture"
        />
      </div>
      <div className="bg-[#09101A] w-[90%] md:w-[85%] lg:w-[90%] 2xl:w-[85%] mx-auto py-5 md:py-8 px-4 md:px-10 lg:px-4 2xl:px-10 relative z-20 shadow-md -mt-10 p-3">
        <p className="font-medium w-[80%] mx-auto -mt-12 md:-mt-16 mb-5 bg-[#55E6A5] p-2 md:p-4 text-center">
          {blog.date}
        </p>
        <div className="flex justify-between gap-2">
          <h4 className="font-semibold flex items-center gap-2 text-[#a1a3af]">
            <FaUserCircle className="text-[#55E6A5] w-5 h-5" />
            <span>By Mahfuz</span>
          </h4>
          <h4 className="font-semibold flex items-center gap-2 text-[#a1a3af]">
            <FaComments className="text-[#55E6A5] w-5 h-5" />
            <span>Comments (0)</span>
          </h4>
        </div>
        <h3 className="text-xl md:text-2xl mt-3 text-center text-white font-semibold hover:text-[#55E6A5] transition-colors duration-500 cursor-pointer">
          {blog.title}
        </h3>
      </div>
    </div>
  );
};

export default BlogDetails;
