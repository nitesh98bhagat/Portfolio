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
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
      }}
    >
      <div
        className="flex flex-col  items-center "
        style={{ minHeight: "100vh" }}
      >
        {/* Profle Bar */}
        <div className="flex flex-row w-full sm:w-2/3  space-x-2 md:space-x-10 p-3 justify-start bg-stone-50">
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
          <div className="flex flex-col w-64 md:w-1/2  sm:w-96 ">
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
        <div className="flex flex-row justify-start  sticky top-0 items-end w-full overflow-hidden hover:overflow-x-auto sm:w-2/3  bg-stone-50  ">
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
        <div className="flex flex-col w-full  sm:w-2/3 bg-stone-50  ">
          {tabBarView[currentIndex]}
        </div>
      </div>
    </div>
  );
}

function ProjectPage() {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4  gap-2  text-teal-500  py-5">
      <ProjectTile
        title={"VSCODE Clone"}
        link="/vscode"
        icon={<SiVisualstudiocode className="text-6xl  text-sky-400" />}
      />
      <ProjectTile
        title={"YouTube Clone"}
        link="/vscode"
        icon={<BsYoutube className="text-6xl text-red-600 " />}
      />
      <ProjectTile
        title={"Medium Clone"}
        link="/blog"
        icon={<AiFillMediumSquare className="text-6xl text-black " />}
      />
      <ProjectTile
        title={"E-commerce"}
        link="/store"
        icon={<MdStore className="text-6xl text-gray-400" />}
      />
      <ProjectTile
        title={"Twitter clone"}
        link="/store"
        icon={<BsTwitter className="text-6xl text-sky-400 " />}
      />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />
      <ProjectTile link={"/testing"} />

      {/* BsTwitter */}
    </div>
  );
}

function EducationPage() {
  const educationList = [
    {
      degree: "Secondary Education",
      year: "2004-2014",
      institute: "Vidya Vikash High School Garifa",
      subtitle: "",
    },
    {
      degree: "Higher Secondary Education",
      year: "2014-2016",
      institute: "Dum Dum K.L.S Hindi Vidyalaya",
      subtitle: "Science",
    },
    {
      degree: "B.Sc",
      year: "2016-2017",
      institute: "Serampore College",
      subtitle: "Dropped out",
    },
    {
      degree: "Diploma in Coumputer Science",
      year: "2017-2020",
      institute: "Regent Institute Science & Technology",
      subtitle: "",
    },
    {
      degree: "B.Tech in Computer Science",
      year: "2020-2023",
      institute: "Regent Education and Research Foundation",
      subtitle: "",
    },
  ];

  return (
    <div className="flex flex-col">
      {educationList
        .map((e) => (
          <EducationTile
            key={e.degree}
            year={e.year}
            school={e.institute}
            degree={e.degree}
            subtitle={e.subtitle}
          />
        ))
        .reverse()}
    </div>
  );
}

function EducationTile({ school, year, degree, subtitle }) {
  return (
    <div className="flex flex-row justify-start space-x-5 sm:space-x-16 bg-stone-50 p-5  border-b border-slate-200">
      <div className="flex flex-col  ">
        <span class="font-semibold title-font text-gray-700 text-sm ">
          YEAR
        </span>
        <span class="mt-1 text-gray-500 text-sm">{year ?? "2004-2014"}</span>
      </div>
      <div className="flex flex-col ">
        <h2 class="text-base sm:text-xl font-medium text-gray-900">
          {degree ?? "Lorem ipsum dolor sit amet."}
        </h2>
        <span class="font-normal text-sm text-gray-500">
          {school ?? "YEAR"}
        </span>
        <p className="text-sm ">{subtitle}</p>
      </div>
    </div>
  );
}

function ProjectTile({ title, icon, link }) {
  return (
    <Link href={link}>
      <div className="flex flex-col   items-center cursor-pointer bg-stone-50 hover:bg-white  p-2 sm:p-5 shadow-sm hover:shadow-md rounded-md">
        {icon ?? <BsFillImageFill className="text-6xl text-gray-400" />}
        <p className="p-2">{title ?? "Vs Code Clone"}</p>
      </div>
    </Link>
  );
}
