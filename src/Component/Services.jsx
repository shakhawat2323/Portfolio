import React from "react";
import { LuBox } from "react-icons/lu";
import { RiGraduationCapFill } from "react-icons/ri";
import { PiCubeFocusFill } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import Shakhawat from "../assets/icon/shakhawat.png";
const Services = () => {
  return (
    <div className="text  w-11/12 mx-auto ">
      <p className="text-3xl font-bold text-center py-15">About Me</p>
      <div className="flex items-center shadow-2xl gap-5">
        <div className="flex-col border-2 border-[#0C4F47] rounded-2xl w-full min-h-[530px]">
          <div>
            <div className="flex items-center">
              <div className="avatar p-5">
                <div className="w-24  rounded-full border-2 border-[#32cd32]  ">
                  <img className="w-20 " src={Shakhawat} alt="" />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-[600]">Shakhawat Islam</h1>
                <p className="text-xl">shakhawathossain208@gmail.com</p>
              </div>
            </div>
            <div>
              <p className="px-3 text-[rgba(192,192,192,0.78)]">
                Hello! I’m Sakhawat, a passionate and dedicated MERN Stack
                Developer with a deep love for web development. I specialize in
                building dynamic, user-friendly, and scalable web applications
                using MongoDB, Express.js, React.js, and Node.js.
              </p>
              <h1 className="text-xl font-[500] px-3 py-3">𝙈𝙮 𝙅𝙤𝙪𝙧𝙣𝙚𝙮 🚀</h1>
              <p className="px-3 py-3 text-[rgba(192,192,192,0.78)]">
                I have completed my Frontend Development training from
                Programming Hero, where I honed my skills in crafting responsive
                and interactive web interfaces. My learning journey has been
                fueled by curiosity, problem-solving, and a strong commitment to
                continuous growth in the field of web development. Currently, I
                am exploring full-stack development to enhance my ability to
                create seamless digital experiences, from backend logic to
                frontend design.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col  w-full min-h-[500px]">
          <div className="grid grid-cols-2  gap-5 border-[#0C4F47] rounded-2xl">
            <div className="border-2 px-3 py-2 w-full h-full p-2 border-[#0C4F47] rounded-2xl ">
              <LuBox className="text-4xl  text-[#32cd32]" />
              <p className="text-xl font-[600] py-2 text-[#32cd32]">
                Full-Stack Expertise
              </p>
              <p className="text-[rgba(192,192,192,0.78)]">
                I specialize in MERN stack development, building scalable web
                applications with React.js, Node.js, Express.js, Firebase,
                Redux, Tailwind CSS and MongoDB.
              </p>
            </div>
            <div className="border-2 px-3 py-2 w-full h-full p-2 border-[#0C4F47] rounded-2xl ">
              <RiGraduationCapFill className="text-4xl  text-[#32cd32]" />
              <p className="text-xl font-[600] py-2 text-[#32cd32]">
                Educational Background
              </p>
              <p className=" text-[rgba(192,192,192,0.78)]">
                Currently pursuing a diploma at Dinajpur Polytechnic Institute.
              </p>
            </div>
            <div className="border-2 px-3 py-2 w-full h-full p-2 border-[#0C4F47] rounded-2xl ">
              <PiCubeFocusFill className="text-4xl  text-[#32cd32]" />
              <p className="text-xl font-[600] py-2 text-[#32cd32]">
                Full-Stack Expertise
              </p>
              <p className=" text-[rgba(192,192,192,0.78)]">
                Focused on modern front-end development with React, Tailwind
                CSS, Redux, and Next.js TypeScript, MongoDB,Mongoose and Docker,
              </p>
            </div>
            <div className="border-2 px-3 py-2 w-full h-full p-2 border-[#0C4F47] rounded-2xl ">
              <IoBookOutline className="text-4xl  text-[#32cd32]" />
              <p className="text-xl font-[600] py-2 text-[#32cd32]">
                Continuous Learner
              </p>
              <p className="text-[rgba(192,192,192,0.78)]">
                I aim to master modern technologies like PostgreSQL, Prisma,
                GraphQL, and Docker to enhance my skills in backend development,
                data management, and containerization for scalable applications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
