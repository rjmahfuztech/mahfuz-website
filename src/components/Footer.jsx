import {
  FaSquareGithub,
  FaLinkedin,
  FaSquareFacebook,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router";
import { GrMapLocation } from "react-icons/gr";
import { MdOutlineMarkEmailRead, MdOutlinePhoneInTalk } from "react-icons/md";

const Footer = () => {
  const contactData = [
    {
      icon: GrMapLocation,
      title: "Address",
      info: "Baya Bazar, Airport Road, Rajshahi",
    },
    {
      icon: MdOutlinePhoneInTalk,
      title: "Let's Talk",
      info: "01712376559",
    },
    {
      icon: MdOutlineMarkEmailRead,
      title: "Send me email",
      info: "rjmahfuz.islam@gmail.com",
    },
  ];

  const mySocial = [
    { icon: FaSquareGithub, link: "https://github.com/rjmahfuztech" },
    { icon: FaLinkedin, link: "https://www.linkedin.com/in/mahfuz-islam/" },
    {
      icon: FaSquareFacebook,
      link: "https://web.facebook.com/mahfuz.islam.350967/",
    },
    { icon: FaSquareXTwitter, link: "https://x.com/mahfuz_islamm" },
  ];

  return (
    <div className="bg-[#02050A]">
      <div className="max-w-[1400px] mx-auto px-4 2xl:px-0">
        <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 md:gap-16 pb-12 md:pb-16">
          {contactData.map((contact, index) => (
            <div key={index} className="flex items-center gap-4 md:gap-8">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full bg-[#55E6A5] flex items-center justify-center">
                <contact.icon className="w-10 md:w-12 h-10 md:h-12 text-gray-800" />
              </div>
              <div>
                <h4 className="text-lg md:text-xl font-bold text-white mb-2">
                  {contact.title}
                </h4>
                <p className="text-[#ccd0e6] text-lg">{contact.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center gap-4 flex-col md:flex-row py-8 border-t border-t-gray-600">
          <p className="text-[#9a9ca8] text-lg">
            © Mahfuz {new Date().getFullYear()} | All Rights Reserved
          </p>
          <div className="flex gap-4 items-center">
            {mySocial.map((social, index) => (
              <Link
                key={index}
                target="_blank"
                to={social.link}
                className="border-2 border-[#282626] p-2 rounded-lg hover:border-slate-200 group hover:bg-slate-200 transition-colors duration-500"
              >
                <social.icon className="w-6 h-6 text-slate-400 group-hover:text-[#282626] transition-colors duration-500" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
