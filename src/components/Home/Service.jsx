import { BiServer } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";
import { RiStackFill } from "react-icons/ri";

const Service = () => {
  const serviceData = [
    {
      icon: FaLaptopCode,
      title: "Front-End Development",
      description:
        "I build responsive and interactive user interfaces that blend modern design with smooth functionality to deliver seamless web experiences.",
    },
    {
      icon: BiServer,
      title: "Back-End Development",
      description:
        "I develop robust, secure, and scalable server-side systems using Python and Django to power logic, databases, and APIs efficiently.",
    },
    {
      icon: RiStackFill,
      title: "Full-Stack Development",
      description:
        "From frontend to backend, I handle the complete web development cycle to deliver fully functional, end-to-end digital solutions.",
    },
  ];
  return (
    <div id="service" className="pt-20 md:pt-28">
      <div className="text-center pb-16 xl:pb-28">
        <h3 className="md:text-lg text-[#55E6A5] font-semibold mb-2">
          MY SERVICE
        </h3>
        <h2 className="text-2xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
          Transforming Ideas into <br /> Scalable Web Solutions
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="border-4 border-[#191919] px-4 py-8 md:px-6 text-center mt-10 xl:mt-0"
          >
            <service.icon
              strokeWidth={1}
              className="text-[#55E6A5] size-20 lg:size-32 mx-auto -mt-20 xl:-mt-24 mb-10"
            />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {service.title}
            </h3>
            <p className="text-[#a1a3af] text-lg mt-4 md:mt-6">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
