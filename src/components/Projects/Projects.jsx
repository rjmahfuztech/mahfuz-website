import project1Pic from "../../assets/images/project1.jpeg";
import project2Pic from "../../assets/images/project2.jpeg";
import project3Pic from "../../assets/images/project3.jpeg";
import FadeIn from "../Animation/FadeIn";
import ProjectDetails from "./ProjectDetails";

const Projects = () => {
  const projectInfo = [
    {
      img: project1Pic,
      name: "NestHunt",
      title: "NestHunt - Modern House Rental Platform.",
      description:
        "NestHunt is a full-stack house rental platform where users can list properties or rent others’ homes. With personal dashboards, users can manage ads, bookings, and payments. Admins can approve listings, view rent history, and track platform stats with visual charts. Built for ease of use, security, and performance.",
      features: [
        "JWT auth with login, registration, and Google OAuth.",
        "List houses for rent, manage ads, and booking requests.",
        "Search, filter, and view detailed house pages.",
        "Add to favorites, request rent, and confirm via Stripe payment.",
        "User dashboard to manage profile, ads, and orders.",
        "Admin dashboard with ad approvals, analytics, and user control.",
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
        "A full-stack event management web app using Django’s MVT pattern. Users can RSVP to events, manage profiles, and search or filter events. It features role-based access with Admin, Organizer, and User roles—where Admins control everything and Organizers manage assigned tasks.",
      features: [
        "User authentication (JWT) with login & registration",
        "RSVP to events and view event details.",
        "Search and filter events by date, name and category.",
        "Role-based access control with Admin, Organizer, and User roles.",
        "Admin panel to manage users, events, groups, and permissions.",
        "Organizer dashboard to manage specific events, category.",
        "User dashboard for profile management and event history.",
      ],
      usedTechnology: [
        "MVT Pattern",
        "Javascript",
        "Tailwind CSS",
        "Flowbite",
        "Python3",
        "Django",
        "JWT Authentication",
        "Email Verification",
        "Onrender",
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
    {
      img: project3Pic,
      name: "PhiMart",
      title: "PhiMart – Full-Stack E-commerce Platform",
      description:
        "PhiMart is a production-ready full-stack e-commerce platform featuring a modern React.js frontend and a robust Django REST API backend. It delivers a complete shopping experience with product discovery, cart management, secure checkout, and user-friendly dashboards for both users and admins.",
      features: [
        "JWT Authentication with email verification (Djoser)",
        "Product listing with dynamic filtering and sorting.",
        "Add to cart, checkout, and payment functionality.",
        "Product review system (1 review per user per product).",
        "Order history and profile management for users.",
        "Role-based access: Admin dashboard via API control.",
        "Swagger-powered API documentation with drf-yasg.",
      ],
      usedTechnology: [
        "ReactJs",
        "Tailwind CSS",
        "Daisy UI",
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
          to: "https://github.com/rjmahfuztech/phimart-client",
        },
        { title: "Website Live", to: "https://phimart-ecommerce.vercel.app/" },
        {
          title: "Back-End Code",
          to: "https://github.com/rjmahfuztech/PhiMart",
        },
        {
          title: "API Live",
          to: "https://phimart-server.vercel.app/swagger/",
        },
      ],
    },
  ];

  const isProjectPage = location.pathname === "/project";

  return (
    <div id="project" className="pt-20 md:pt-28">
      <FadeIn y={0} x={-50} duration={2} delay={0.3}>
        <h3 className="md:text-lg text-[#55E6A5] font-semibold mb-2">
          {isProjectPage ? "MY ALL PROJECTS" : "MY RECENT PROJECTS"}
        </h3>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Turning Code and Creativity
          <br /> into Powerful Web Experiences
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 md:mt-14 pb-20 lg:pb-28">
        {projectInfo.map((detail, index) => (
          <FadeIn
            key={index}
            scale={0.8}
            y={0}
            x={-50}
            delay={0.2 * index}
            duration={2}
          >
            <ProjectDetails detail={detail} modalId={`modal_${index}`} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Projects;
