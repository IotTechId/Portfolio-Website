import { useTranslation } from "react-i18next";

const skill = [
  { name: "HTML/CSS", level: "93", category: "Web Development" },
  { name: "JavaScript", level: "85", category: "Web Development" },
  { name: "React", level: "70", category: "Web Development" },
  { name: "Tailwind-css", level: "71", category: "Web Development" },
  { name: "Next.Js", level: "72", category: "Web Development" },
  { name: "C++", level: "45", category: "IoT Programming" },
  { name: "ESP-Series", level: "80", category: "IoT Devices" },
  { name: "Dart", level: "55", category: "Mobile App Development" },
  { name: "Flutter", level: "50", category: "Mobile App Development" },
  { name: "Git", level: "71", category: "Version Control" },
  { name: "VS Code", level: "89", category: "Development Tools" },
];

const Skill = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto w-full">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t("Skill.tittle")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skill.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 100}
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {item.name}
              </h3>
              <div className="w-full">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-500 h-2.5 rounded-full transition-all duration-500"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <p className="text-sm text-gray-400">{item.category}</p>
                  <p className="text-sm text-white font-medium">
                    {item.level}%
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
