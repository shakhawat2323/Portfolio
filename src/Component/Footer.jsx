import React from "react";
import { FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import SM from "../assets/icon/smsm.png";
const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 border-t-1 border-[rgba(220,220,220,0.59)] text-base-content p-10">
      <aside className="flex flex-col items-center">
        <img className="w-20" src={SM} alt="" />
        <p className="text-2xl font-bold ">Shakhawat islam</p>
      </aside>
      <nav>
        <ul className="flex  items-center gap-5">
          <li className="sosal">
            <LuGithub className="text-3xl" />
          </li>
          <li className="sosal">
            <FaFacebookF className="text-3xl" />
          </li>
          <li className="sosal">
            <FaWhatsapp className="text-3xl" />
          </li>
          <li className="sosal">
            <FaLinkedinIn className="text-3xl" />
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
