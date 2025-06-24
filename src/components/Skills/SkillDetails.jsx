import { GrTechnology } from "react-icons/gr";
import { Link } from "react-router";
import FadeIn from "../Animation/FadeIn";

const SkillDetails = ({ educationsInfo, techSkills }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 text-white">
      <div>
        <FadeIn y={0} x={-50} duration={2} delay={0.3}>
          {educationsInfo.map((info, index) => (
            <div key={index} className={`${index == 1 && "mt-8"}`}>
              <div className="flex items-center gap-4">
                <span className="py-2 px-4 font-semibold border-2 text-xs lg:text-sm text-[#55E6A5] border-[#55E6A5]">
                  {info.duration}
                </span>
                <Link
                  target="_blank"
                  to={info.certificate}
                  className="btn btn-link lg:text-lg btn-neutral text-[#55E6A5] hover:text-[#64ae8d] transition-colors duration-300"
                >
                  Certificate
                </Link>
              </div>
              <h3 className="text-xl lg:text-3xl font-bold mt-5">
                {info.title}
              </h3>
              <p className="text-[#a1a3af] text-lg mt-3">{info.description}</p>
            </div>
          ))}
        </FadeIn>
      </div>
      <div className="border-l-2 border-l-[#55E6A5]">
        <FadeIn y={0} x={50} duration={2.3} delay={0.3}>
          <div className="ml-3">
            <h3 className="text-xl font-semibold flex items-center justify-center gap-3">
              <GrTechnology className="text-[#55E6A5]" /> <span>Skills</span>
            </h3>
            {/* skill list */}
            {techSkills.map((tech, index) => (
              <div key={index} className="mt-5">
                <h3 className="text-lg font-semibold mb-3">{tech.title}:</h3>
                <div className="flex items-center flex-wrap gap-2">
                  {tech.skills.map((skill, index) => (
                    <span
                      className="bg-[#02050A] px-3 py-1 rounded-md text-gray-300"
                      key={index}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default SkillDetails;
