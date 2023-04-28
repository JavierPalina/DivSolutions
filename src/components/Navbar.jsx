import { useState } from "react";

import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Div Solutions" className="w-[70px] h-[70px]" />

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        <li>
          <a href="#home" className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}>{t("home")}</a>
        </li>
        <li>
          <a href="#Servicios" className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}>{t("servicios")}</a>
        </li>
        <li>
          <a href="#Aplicaciones" className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}>{t("aplicaciones")}</a>
        </li>
        <li>
          <a href="#Contacto" className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10`}>{t("contacto")}</a>
        </li>
        <li className={`font-poppins font-normal cursor-pointer text-[16px] text-white ml-10 select`}>
          <select className="select" onChange={(e) => changeLanguage(e.target.value)}>
            <option value="es">ES</option>
            <option value="en">EN</option>
            <option value="it">IT</option>
          </select>
        </li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
        />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-medium cursor-pointer text-[16px] ${
                  active === nav.title ? "text-white" : "text-dimWhite"
                } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
