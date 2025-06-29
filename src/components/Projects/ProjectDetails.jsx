import { FiLink } from "react-icons/fi";
import { Link } from "react-router";
import { MdLabelImportant } from "react-icons/md";
import { GrTechnology } from "react-icons/gr";
import { SiLinksys } from "react-icons/si";
import { FaLinkSlash } from "react-icons/fa6";

const ProjectDetails = ({ detail, modalId }) => {
  return (
    <div className="project-img h-[400px] lg:h-[500px] relative group">
      <img src={detail.img} alt="Scrolling Image" />
      <div className="absolute text-center bottom-0 left-0 right-0 py-6 px-4 text-white bg-black/80 backdrop-blur-sm bg-gradient-to-t from-black to-transparent md:translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
        <h4 className="text-lg md:text-xl font-semibold">{detail.title}</h4>
        <div className="flex items-center justify-center gap-4 mt-4">
          <div>
            {/* open modal button to show details */}
            <button
              className="btn btn-success"
              onClick={() => document.getElementById(modalId).showModal()}
            >
              See Details
            </button>
            <dialog
              id={modalId}
              className="modal backdrop-blur-sm bg-transparent"
            >
              <div className="modal-box max-w-[40rem] bg-[#141C27]">
                <form method="dialog">
                  {/* close modal */}
                  <button className="btn btn-sm btn-circle btn-ghost border absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <h3 className="font-bold text-lg md:text-xl">{detail.name}</h3>
                <div className="text-left mt-5">
                  <p className="text-[#ccd0e6] font-semibold border-l-2 border-l-[#55E6A5] pl-2 pb-1">
                    {detail.description}
                  </p>
                  <h4 className="text-lg font-semibold flex items-center mt-3 gap-2">
                    <MdLabelImportant className="text-[#55E6A5]" />
                    <span>Key Features:</span>
                  </h4>
                  <ul className="list-disc ml-8 mt-1 text-[#ccd0e6]">
                    {detail.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <h4 className="text-lg font-semibold flex items-center mt-3 gap-2">
                    <GrTechnology className="text-[#55E6A5]" />
                    <span>Tech Stack:</span>
                  </h4>
                  <div className="flex items-center gap-2 flex-wrap mt-2">
                    {detail.usedTechnology.map((tech, index) => (
                      <span
                        className="bg-[#02050A] px-3 py-1 rounded-md text-gray-300"
                        key={index}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <h4 className="text-lg font-semibold flex items-center mt-3 gap-2">
                    <SiLinksys className="text-[#55E6A5] w-4 h-4" />
                    <span>Links:</span>
                  </h4>
                  <div className="w-[350px]">
                    <div className="flex items-center gap-4 mt-2 ml-4 flex-wrap">
                      {detail.links.map((link, index) => (
                        <Link
                          key={index}
                          target="_blank"
                          to={link.to}
                          className="btn btn-sm flex items-center gap-2"
                        >
                          <FaLinkSlash />
                          <span>{link.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>
          <Link
            target="_blank"
            to={detail.links[1]?.to}
            className="btn btn-outline btn-success text-white flex items-center gap-2"
          >
            <FiLink /> <span>Visit Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
