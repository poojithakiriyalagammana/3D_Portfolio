import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <footer
      className={`${styles.paddingX} w-full flex flex-col items-center py-5 bg-primary`}
    >
      <div className="w-full flex flex-col sm:flex-row justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-5 h-5 object-contain" />
          <p className="text-white text-[10px] font-bold cursor-pointer flex">
            Pankaja Kiriyalagammana
          </p>
        </Link>

        <ul className="list-none flex flex-col sm:flex-row gap-10 mt-4 sm:mt-0">
          <li className="text-secondary hover:text-white text-[15px] font-medium cursor-pointer">
            <a href="tel:+94768902002">+94 76 890 2002</a>
          </li>
          <li className="text-secondary hover:text-white text-[13px] font-medium cursor-pointer">
            <a href="https://mail.google.com/mail/u/0/?ogbl#inbox">
              poojithakiriyalagammana@gmail.com
            </a>
          </li>
          <li className="text-secondary hover:text-white text-[14px] font-medium cursor-pointer">
            <a href="https://github.com/poojithakiriyalagammana">GitHub</a>
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center mt-4">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[18px] h-[18px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {toggle && (
            <div className="p-6 bg-primary absolute bottom-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl z-10">
              <ul className="list-none flex justify-end items-start flex-col gap-4">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } hover:text-white text-[16px] font-medium cursor-pointer`}
                    onClick={() => {
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
