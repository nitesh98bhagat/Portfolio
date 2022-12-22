// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { SiFacebook } from "react-icons/si";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineMail,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsHammer, BsFillChatSquareTextFill } from "react-icons/bs";
import { MdLocationOn, MdVerified } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";
import { GiWhiteBook } from "react-icons/gi";
import { GoHome } from "react-icons/go";

import Image from "next/image";
import { useState } from "react";
import HomeTab from "../components/HomeTab";
import ProjectTab from "../components/ProjectTab";
import EducationTab from "../components/EducationTab";
import TechnologyTab from "../components/TechnologyTab";
import AboutTab from "../components/About";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabBarView = [
    <HomeTab key={"home"} />,
    <ProjectTab key={"project"} />,
    <EducationTab key={"education"} />,
    <TechnologyTab key={"technologies"} />,
    <AboutTab key={"AboutTab"} />,
  ];

  return (
    <div className="w-full sm:w-2/3">
      {/* Profle Bar */}
      <div className="flex flex-row w-full  space-x-2 md:space-x-5 p-2 justify-start items-end bg-white sm:bg-[#fbfbfb]">
        {/* image */}

        <div className=" w-24 h-24 relative rounded-full border-4 border-teal-500">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
            alt="nitesh bhagat"
            layout="fill" // required
            objectFit="cover"
            className="rounded-full "
          />
        </div>

        {/* details */}
        <div className="flex flex-col  ">
          <h1 className="text-lg sm:text-2xl font-bold flex flex-row items-center space-x-1">
            <span>Nitesh Bhagat</span>
            <MdVerified className="text-teal-500" />
          </h1>
          <h1 className="text-sm sm:text-base font-base text-slate-500">
            Software Developer
          </h1>
          {/* location */}
          <div className="flex flex-row items-center text-slate-500 space-x-1">
            <MdLocationOn />
            <span className="text-sm">Kolkata, India</span>
          </div>
          {/* email */}
          <div className="flex flex-row items-center text-slate-500 space-x-1">
            <AiOutlineMail />
            <span className="text-sm">nikubh1998@gmail.com</span>
          </div>
        </div>

        <div className="flex-1"></div>

        {/* social link */}
        <div className="sm:flex hidden  space-x-2 text-2xl text-slate-600">
          <a
            href="https://www.facebook.com/nitesh.bhagat.775"
            target="_blank"
            rel="noreferrer"
          >
            <SiFacebook />
          </a>

          <a
            href="https://www.instagram.com/_nitesh_bhagat_/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
          <a
            href="https://twitter.com/myself_nitesh"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle />
          </a>
          <a
            href="https://www.linkedin.com/in/nitesh-bhagat-a8b996137/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="flex flex-col bg-white sm:bg-[#fbfbfb]  ">
        <p className="text-sm sm:text-base px-4 sm:w-1/2">
          Hello there, I`m a professional Day-Dreamer, who happens to be a
          Software Engineer.
        </p>
      </div>

      {/* Tab bar */}
      <div className="flex flex-row justify-start z-20 sticky top-[47px] sm:top-[53px] items-end w-full overflow-hidden hover:overflow-x-auto   bg-white sm:bg-[#fbfbfb]  ">
        {[
          { title: "Home", icon: <GoHome /> },
          { title: "Projects", icon: <FaProjectDiagram /> },
          { title: "Education", icon: <GiWhiteBook /> },
          { title: "Technologies", icon: <BsHammer /> },
          { title: "About", icon: <BsFillChatSquareTextFill /> },
        ].map((e, i) => (
          <p
            key={e.title}
            onClick={() => setCurrentIndex(i)}
            className={`
              text-base font-medium  flex items-center  border-b-2 py-3 px-4 space-x-1  cursor-pointer
              ${
                currentIndex === i
                  ? "text-teal-700   border-teal-500 font-medium"
                  : "text-slate-700"
              }`}
          >
            <span>{e.icon}</span>
            <span>{e.title}</span>
          </p>
        ))}
        <div className="flex-1 border-b-2"></div>
      </div>

      {/* Tab Bar View */}
      <div className="flex flex-col w-full  bg-white sm:bg-[#fbfbfb]  ">
        {tabBarView[currentIndex]}
      </div>
    </div>
  );
}
