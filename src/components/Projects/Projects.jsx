import project1Pic from "../../assets/images/project1.jpeg";
import project2Pic from "../../assets/images/project2.jpeg";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const projectInfo = [
    {
      img: project1Pic,
      name: "NestHunt",
      title: "NestHunt - Modern House Rental Platform.",
      description:
        "A full-stack house rental web application where users can browse, filter, rent house and book houses. Built with a focus on usability, security, and performance.",
      features: [
        "User authentication (JWT) with login & register also Google authentication.",
        "House listing, filtering, and detail view.",
        "Add to favorites, rent house, book house, or contact owner.",
        "Admin and User panel to manage houses, listings & users etc.",
      ],
      usedTechnology: [
        "ReactJs",
        "Tailwind CSS",
        "Material Tailwind",
        "Python3",
        "Django",
        "DRF",
        "JWT Authentication",
        "Supabase",
        "Payment Stripe",
        "Vercel",
      ],
      links: [
        {
          title: "Front-End Code",
          to: "https://github.com/rjmahfuztech/nesthunt-client",
        },
        { title: "Website Live", to: "https://nesthunt.vercel.app/" },
        {
          title: "Back-End Code",
          to: "https://github.com/rjmahfuztech/nesthunt",
        },
        {
          title: "API Live",
          to: "https://nesthunt-server.vercel.app/swagger/",
        },
      ],
    },
    {
      img: project2Pic,
      name: "EventManager",
      title: "EventManager - Smart Event Planning Platform.",
      description:
        "A full-stack house rental web application where users can browse, filter, rent house and book houses. Built with a focus on usability, security, and performance.",
      features: [
        "User authentication (JWT) with login & register also Google authentication.",
        "House listing, filtering, and detail view.",
        "Add to favorites, rent house, book house, or contact owner.",
        "Admin and User panel to manage houses, listings & users etc.",
      ],
      usedTechnology: [
        "ReactJs",
        "Tailwind CSS",
        "Material Tailwind",
        "Python3",
        "Django",
        "DRF",
        "JWT Authentication",
        "Supabase",
        "Payment Stripe",
        "Vercel",
      ],
      links: [
        {
          title: "Website Code",
          to: "https://github.com/rjmahfuztech/event-management",
        },
        {
          title: "Website Live",
          to: "https://event-manager-ie3m.onrender.com/",
        },
      ],
    },
  ];

  return (
    <div id="project" className="pt-20 md:pt-28">
      <div>
        <h3 className="text-lg text-[#55E6A5] font-semibold mb-2">
          MY RECENT PROJECTS
        </h3>
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Turning Code and Creativity
          <br /> into Powerful Web Experiences
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-14 pb-20">
        {projectInfo.map((detail, index) => (
          <ProjectDetails
            key={index}
            detail={detail}
            modalId={`modal_${index}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
