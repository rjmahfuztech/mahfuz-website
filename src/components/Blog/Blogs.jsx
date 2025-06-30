import blog1 from "../../assets/images/blog1.jpeg";
import blog2 from "../../assets/images/blog2.jpeg";
import blog3 from "../../assets/images/blog3.jpeg";
import FadeIn from "../Animation/FadeIn";
import BlogDetails from "./BlogDetails";

const MyBlog = () => {
  const isBlogPage = location.pathname === "/blog";
  const blogInfo = [
    {
      img: blog1,
      date: "June 29, 2025",
      title: "This is my blog card. Blog will come soon!",
    },
    {
      img: blog2,
      date: "June 29, 2025",
      title: "This is my blog card. Blog will come soon!",
    },
    {
      img: blog3,
      date: "June 29, 2025",
      title: "This is my blog card. Blog will come soon!",
    },
  ];
  return (
    <div className="pt-20 md:pt-28 max-w-[1400px] mx-auto px-4">
      <FadeIn y={0} x={-50} duration={2} delay={0.3}>
        <h3 className="md:text-lg text-[#55E6A5] font-semibold mb-2">
          MY BLOG
        </h3>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Sharing Insights, Code & Growth
        </h2>
      </FadeIn>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14 ${
          isBlogPage && "pb-20 lg:pb-28"
        }`}
      >
        {blogInfo.map((blog, index) => (
          <FadeIn
            key={index}
            scale={0.8}
            y={0}
            x={-50}
            delay={0.2 * index}
            duration={2}
          >
            <BlogDetails blog={blog} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default MyBlog;
