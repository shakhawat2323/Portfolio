import Typewriter from "typewriter-effect";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";

import { FaWhatsapp } from "react-icons/fa";
import { PiReadCvLogoBold } from "react-icons/pi";
import { LuContact } from "react-icons/lu";
import SHakhawat from "../assets/icon/shakhawat.png";
const Bannar = () => {
  return (
    <div className=" w-10/12 mx-auto lg:mt-20 flex items-center  justify-between">
      <div>
        <div className="">
          <div>
            <p className="text-xm text-[#8294b3] py-2  font-bold">
              {" "}
              Hi <span className="text-[#00ff00]">,</span> I am
            </p>
            <p className="text-2xl  text-[#c3dfe7] py-2  font-[600]">
              𝙎𝙃𝘼𝙆𝙃𝘼𝙒𝘼𝙏 𝙄𝙎𝙇𝘼𝙈
            </p>
          </div>
        </div>

        <div className="mt-2">
          <Typewriter
            options={{
              strings: [
                "Junior MERN Stack Developer .",
                "Junior Full Stack Developer .",
                "Junior Developer .",
                "Junior Front End Developer .",
                "Junior React Developer .",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
          <div className="py-5">
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
            <ul className="flex items-center gap-5 py-10">
              <li className="btns  ">
                <p>Download CV</p>
                <PiReadCvLogoBold className="text-2xl   font-bold" />
              </li>
              {/* <li className="btns  ">
              <p>Contact me</p>
              <LuContact className="text-2xl   font-bold" />
            </li> */}
            </ul>
          </div>
        </div>
      </div>
      <div>
        {/* avatar */}
        <div className="home-img">
          <div className="w-72 rounded-full img-box">
            <div className="img-item">
              <img className="" src={SHakhawat} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
