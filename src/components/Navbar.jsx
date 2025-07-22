import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const { i18n, t } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="navbar py-7 px-6 flex items-center justify-between w-full">
      {/* Logo */}
      <div className="logo">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-15 h-15 ext-3xl font-bold bg-white text-white p-1 md:bg-transparent "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
          />
        </svg>
      </div>

      {/* Nav Menu */}
      <ul
        className={`menu flex items-center sm:gap-10 gap-4 transition-all duration-300 ${
          active ? "opacity-100 top-0" : "opacity-0 -top-10"
        } md:static md:opacity-100 md:top-0 fixed left-1/2 -translate-x-1/2 md:translate-x-0 
  bg-white/30 md:bg-transparent backdrop-blur-md px-4 py-2 rounded-br-2xl rounded-bl-2xl z-40`}
      >
        <li>
          <a href="#" className="sm:text-lg text-base font-medium">
            {t("navbar.home")}
          </a>
        </li>
        <li>
          <a href="#about" className="sm:text-lg text-base font-medium">
            {t("navbar.about")}
          </a>
        </li>
        <li>
          <a href="#projects" className="sm:text-lg text-base font-medium">
            {t("navbar.project")}
          </a>
        </li>
        <li>
          <a href="#contact" className="sm:text-lg text-base font-medium">
            {t("navbar.contacts")}
          </a>
        </li>
      </ul>

      {/* Language Switcher */}
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={(e) => changeLanguage(e.target.checked ? "id" : "en")}
          checked={i18n.language === "id"}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-violet-800 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-violet-800"></div>
        <span className="ml-3 text-sm font-medium text-white">
          {i18n.language === "id" ? "ID" : "EN"}
        </span>
      </label>
    </div>
  );
};

export default Navbar;
