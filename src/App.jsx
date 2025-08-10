import DataImage from "./data";
import { listTools } from "./data";
import { listProyek } from "./data";
import { listLabs } from "./data";
import Skill from "./components/Skill.jsx";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <>
      {/* Language Switcher */}
      <div className="hero grid lg:grid-cols-2 items-center xl:gap-[15rem] gap-6 sm:grid-cols-1 pt-6 xl:pt-0">
        <div className="animate__animated animate__fadeInUp animate__delay-3s gap-3">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              className="w-10 rounded-md"
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Tanned"
            />
            <q>{t("hero.quote")}</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">{t("hero.title")}</h1>
          <p className="text-base/loose mb-6 opacity-50 w-2xl gap-3">
            {t("hero.description")}
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-800 p-4 rounded-2xl hover:bg-transparent transition-all text-white font-medium text-base"
            >
              {t("hero.download_resume")}{" "}
              <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#projects"
              className="bg-zinc-800 p-4 rounded-2xl hover:bg-transparent transition-all text-white font-medium text-base"
            >
              {t("hero.see_projects")}{" "}
              <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-4s"
          src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Tanned"
        />
      </div>
      {/* About */}
      <div className="About mt-32 py-10" id="about">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
        >
          <p className="text-base/loose mb-10 opacity-50">
            {t("about.description")}
          </p>
          <div className="flex items-center justify-between">
            <img
              src="https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Tanned"
              alt="Image/tools"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            {/* <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.projects_done")}</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  4<span className="text-violet-500">+</span>
                </h1>
                <p>{t("about.years_experience")}</p>
              </div>
            </div> */}
          </div>
        </div>

        <div id="about" className="tools mt-32 ">
          <h1
            className="text-4xl/snug font-bold mb-4 text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            {t("about.tools_title")}
          </h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50 text-center mx-auto">
            {t("about.tools_description")}
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-zinc-600 group hover:bg-zinc-800"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-950"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Skills */}
      <Skill />
      {/* Skills */}

      {/* Projects */}
      <div className="projects mt-32 py-10" id="projects">
        <h1
          className="text-center text-4-xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("projects.title")}
        </h1>
        <p className="text-base/loose text-center opacity-50">
          {t("projects.subtitle")}
        </p>
        <div className="projects-box mt-14 grid lg:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="project-item p-4 bg-zinc-800 rounded-lg"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
            >
              <img src={proyek.gambar} alt="proyek-images" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tools, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 rounded-md font-semibold bg-zinc-500"
                      key={index}
                    >
                      {tools}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    className="bg-violet-800 p-4 rounded-lg block border border-zinc-600 hover:bg-violet-500"
                    href="#"
                  >
                    {t("projects.see_more")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Labs */}
      <div className="projects mt-32 py-10" id="labs">
        <h1
          className="text-center text-4-xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("labs.title")}
        </h1>
        <p className="text-base/loose text-center opacity-50">
          {t("labs.subtitle")}
        </p>
        <div className="projects-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listLabs.map((labs) => (
            <div
              key={labs.id}
              className="project-item p-4 bg-zinc-800 rounded-lg flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={labs.dad}
            >
              <img src={labs.gambar} alt={labs.nama} loading="lazy" />
              <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-bold my-4">{labs.nama}</h1>
                <p className="text-base/loose mb-4 flex-1">{t(labs.desk)}</p>
                <div className="mt-auto text-center">
                  <a
                    className="bg-violet-800 p-4 rounded-lg block border border-zinc-600 hover:bg-violet-500"
                    href={labs.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("labs.see_more")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact */}
      <div className="kontak mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4-xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {t("contact.title")}
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          {t("contact.subtitle")}
        </p>
        <form
          className="bg-zinc-800 p-10 rounded-md sm:w-fit lg:w-2/3 md:w-fit mx-auto"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.full_name")}</label>
              <input
                type="text"
                name="nama"
                placeholder={t("contact.placeholder_name")}
                className="border border-zinc-600 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.email")}</label>
              <input
                type="email"
                name="email"
                placeholder={t("contact.placeholder_email")}
                className="border border-zinc-600 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">{t("contact.message")}</label>
              <textarea
                name="pesan"
                rows="7"
                placeholder={t("contact.placeholder_message")}
                className="border border-zinc-600 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                className="bg-violet-800 p-4 cursor-pointer w-full rounded-lg block border border-zinc-600 hover:bg-violet-500"
                type="submit"
              >
                {t("contact.send")}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
