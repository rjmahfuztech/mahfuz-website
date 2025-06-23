import SkillDetails from "./SkillDetails";

const Skills = () => {
  const educationsInfo = [
    {
      duration: "January(2021) - Auguest(2021)",
      certificate:
        "https://drive.google.com/file/d/1sp92qnrXGINFyPBDYOcpHsrJ1w5C-WpM/view?usp=sharing",
      title: "Front-End Developer",
      description:
        "Completed web development course from Programming Hero by Jhankar Mahbub. Learned frontend (HTML, CSS, JavaScript, React) and backend basics of (Node.js, Express, MongoDB) through project-based learning. Focused on building real-world applications, mastering Git, API integration, and deployment.",
    },
    {
      duration: "April(2024) - May(2025)",
      certificate:
        "https://drive.google.com/file/d/1sp92qnrXGINFyPBDYOcpHsrJ1w5C-WpM/view?usp=sharing",
      title: "CSE Fundamentals with Phitron",
      description:
        "Completed Phitron’s structured CSE and Backend course track. Learned core CSE fundamentals including data structures, algorithms, and problem solving with C++. Built backend skills developing real-world projects.",
    },
  ];

  const techSkills = [
    {
      title: "Front-End",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript (ES6)",
        "ReactJs",
        "Tailwind Css",
        "Bootstrap5",
      ],
    },
    {
      title: "Back-End",
      skills: [
        "Python3",
        "Django",
        "MVT Pattern",
        "DRF(Django Rest Framework)",
        "OOP Concepts",
        "MySQL",
        "JWT Authentication",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Vs Code",
        "Git",
        "Vercel",
        "Supabase",
        "Netlify",
        "Firebase",
        "Npm",
      ],
    },
    {
      title: "Others",
      skills: ["C++", "Basics of DSA", "Adobe Illustrator"],
    },
  ];

  return (
    <div id="skills" className="bg-[#09101A] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-4 xl:px-0">
        <div className="text-center pb-16 xl:pb-24">
          <h3 className="text-lg text-[#55E6A5] font-semibold mb-2">
            EDUCATION & SKILL
          </h3>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-white leading-tight">
            From Fundamentals to <br /> Real-World Skills
          </h2>
        </div>
        {/* Skill details */}
        <SkillDetails educationsInfo={educationsInfo} techSkills={techSkills} />
      </div>
    </div>
  );
};

export default Skills;
