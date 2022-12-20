// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Link from "next/link";
import { SiFacebook, SiVisualstudiocode } from "react-icons/si";
import {
  AiFillInfoCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterCircle,
} from "react-icons/ai";
import { BsFillImageFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdStore } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabBarView = [
    <ProjectPage key={"project"} />,
    <h1 key={"skill"}>Skill</h1>,
    <EducationPage key={"education"} />,
    <h1 key={"technologies"}>Technologies</h1>,
    <h1 key={"about"}>About</h1>,
  ];

  return (
    <div
      className=" flex flex-col bg-repeat "
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
      }}
    >
      <div className="flex flex-col  items-center ">
        {/* Profle Bar */}
        <div className="flex flex-row w-full sm:w-2/3  space-x-2 p-3 justify-center bg-stone-50">
          {/* image */}
          <div className=" w-20 h-20 sm:w-44 sm:h-44 relative rounded-full">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          {/* details */}
          <div className="flex flex-col w-64 md:w-72 sm:w-96 ">
            <h1 className="text-lg sm:text-2xl font-bold">Nitesh Bhagat</h1>
            <h1 className="text-sm sm:text-base font-base text-slate-500">
              React, Next, Flutter
            </h1>
            <p className="text-sm sm:text-base p-1">
              Hello there, I`m Front-end Engineer who has a bit of experenice in
              the frontend field. All project done by me are listed here.
            </p>
            <div className="sm:flex hidden text-3xl text-slate-600">
              <SiFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <AiFillLinkedin />
            </div>
          </div>
        </div>

        {/* Tab bar */}
        <div className="flex flex-row justify-start  sticky top-0 items-end w-full overflow-x-auto sm:w-2/3  bg-stone-50  ">
          {["Project", "Skills", "Education", "Technologies", "About"].map(
            (e, i) => (
              <p
                key={e}
                onClick={() => setCurrentIndex(i)}
                className={`
              text-base sm:text-lg font-normal border-b-2 p-3 cursor-pointer
              ${
                currentIndex === i
                  ? "text-teal-700   border-teal-500 font-medium"
                  : "text-slate-700"
              }`}
              >
                {e}
              </p>
            )
          )}
          <div className="flex-1 border-b-2"></div>
        </div>

        <div className=" flex flex-row space-x-3 bg-stone-50 p-2 text-slate-500 text-sm sm:hidden">
          <AiFillInfoCircle size={30} />
          <span>
            Please view these projects on the large screen to get the whole
            experience
          </span>
        </div>

        {/* Tab Bar View */}
        <div className="flex flex-col w-full  sm:w-2/3 bg-stone-50 ">
          {tabBarView[currentIndex]}
        </div>
      </div>
    </div>
  );
}

function ProjectPage() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4  gap-4  text-teal-500  py-5">
      <ProjectTiile
        title={"VSCODE Clone"}
        link="/vscode"
        icon={<SiVisualstudiocode className="text-6xl  text-sky-400" />}
      />
      <ProjectTiile
        title={"YouTube Clone"}
        link="/vscode"
        icon={<BsYoutube className="text-6xl text-red-600 " />}
      />
      <ProjectTiile
        title={"Medium Clone"}
        link="/blog"
        icon={<AiFillMediumSquare className="text-6xl text-black " />}
      />
      <ProjectTiile
        title={"E-commerce"}
        link="/store"
        icon={<MdStore className="text-6xl text-gray-400" />}
      />
      <ProjectTiile
        title={"Twitter clone"}
        link="/store"
        icon={<BsTwitter className="text-6xl text-sky-400 " />}
      />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />
      <ProjectTiile link={"/testing"} />

      {/* BsTwitter */}
    </div>
  );
}

function EducationPage() {
  return (
    <div className="flex flex-col w-full">
      <EducationTle
        year={"2004-2014"}
        school="Vidya Vikash High School Garifa"
        degree={"Secondary Education"}
      />
      <EducationTle
        year={"2004-2014"}
        school="Vidya Vikash High School Garifa"
        degree={"Secondary Education"}
      />
      <EducationTle
        year={"2004-2014"}
        school="Vidya Vikash High School Garifa"
        degree={"Secondary Education"}
      />
    </div>
  );
}

function EducationTle({ school, year, degree, subtitle }) {
  return (
    <div className="flex bg-stone-50 p-5 space-x-8 border-b border-slate-200">
      <div className="flex flex-col ">
        <span class="font-semibold title-font text-gray-700">YEAR</span>
        <span class="mt-1 text-gray-500 text-sm">{year ?? "2004-2014"}</span>
      </div>
      <div className="flex flex-col ">
        <h2 class="text-xl font-medium text-gray-900 title-font w-[70vh]">
          {degree ?? "Lorem ipsum dolor sit amet."}
        </h2>
        <span class="font-semibold title-font text-gray-700">
          {school ?? "YEAR"}
        </span>
        <p className="text-base w-[70vh] ">{subtitle}</p>
      </div>
    </div>
  );
}

function ProjectTiile({ title, icon, link }) {
  return (
    <Link href={link}>
      <div className="flex flex-col   items-center cursor-pointer  hover:bg-white  p-2 sm:p-5 shadow-md rounded-md">
        {icon ?? <BsFillImageFill className="text-6xl text-gray-400" />}
        <p className="p-2">{title ?? "Vs Code Clone"}</p>
      </div>
    </Link>
  );
}
