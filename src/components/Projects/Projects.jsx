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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:mt-14 pb-20 lg:pb-28">
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
