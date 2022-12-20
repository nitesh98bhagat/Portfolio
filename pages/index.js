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
    <EducationPage key={"education"} />,
    <TechnologyPage key={"technologies"} />,
    <AboutMe key={"aboutme"} />,
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
          {["Project", "Education", "Technologies", "About"].map((e, i) => (
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
          ))}
          <div className="flex-1 border-b-2"></div>
        </div>

        {/* Tab Bar View */}
        <div className="flex flex-col w-full  sm:w-2/3 bg-stone-50  ">
          {tabBarView[currentIndex]}
        </div>
      </div>
    </div>
  );
}
// doc: SECTION
function ProjectPage() {
  return (
    <div>
      <div className=" flex flex-row space-x-3 bg-stone-50 p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are the project that I've built"}</span>
      </div>
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
          icon={<MdStore className="text-6xl text-amber-400" />}
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
      <div className=" flex flex-row space-x-3 bg-stone-50 p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are my educational background"}</span>
      </div>
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

function TechnologyPage() {
  const technologiesList = [
    {
      title: "Flutter",
      subtitle: "Spend 2+ years in Flutter",
      image:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/02/Flutter-Framework-Feature-Image-Background-Colour.png",
    },
    {
      title: "React js",
      subtitle: "1.5 years in React",
      image: "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
    },
    {
      title: "Next js",
      subtitle: "3+ month in React",
      image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
    },
  ];

  return (
    <div className="flex flex-col p-1 space-y-2">
      <div className=" flex flex-row space-x-3 bg-stone-50 p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are the technologies that I've worked on"}</span>
      </div>
      {/* tile */}

      {technologiesList.map((e) => (
        <TechTile
          key={e.image}
          title={e.title}
          subtitle={e.subtitle}
          image={e.image}
        />
      ))}
    </div>
  );
}

function AboutMe() {
  return (
    <div className="flex flex-col p-3 space-y-1">
      <h1 className="text-xl font-medium">About me</h1>
      <p className="text-base sm:text-lg font-light">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
        laboriosam et officiis sunt ad vero assumenda ipsam, ea quia veritatis
        est voluptatibus adipisci perferendis! Aliquam eos saepe exercitationem
        eligendi! Recusandae totam necessitatibus maiores quisquam reiciendis,
        repellendus, debitis soluta commodi natus veniam laudantium saepe
        adipisci placeat, aliquid quam nemo expedita odit.
      </p>

      <h1 className="text-xl font-medium">My Social Links</h1>
      <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-2 ">
        <SiFacebook size={30} />
        <span>facebook.com/nitesh_bhagat</span>
      </div>
      <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-2 ">
        <AiFillInstagram size={30} />
        <span>instagram.com/nitesh_bhagat</span>
      </div>

      <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-2 ">
        <AiFillTwitterCircle size={30} />
        <span>instagram.com/nitesh_bhagat</span>
      </div>
      <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-2 ">
        <AiFillLinkedin size={30} />
        <span>instagram.com/nitesh_bhagat</span>
      </div>
    </div>
  );
}

// doc:COMPONENT
function TechTile({ title, subtitle, image }) {
  return (
    <div className="overflow-hidden justify-between items-center flex flex-row bg-teal-200 h-28 shadow rounded-lg ">
      <div className=" flex flex-col p-5">
        <p className="text-xl sm:text-2xl font-bold">{title ?? "Title"}</p>
        <p className="text-base sm:text-lg">{subtitle ?? "Subtitle"}</p>
      </div>
      <img
        src={
          image ??
          "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png"
        }
        alt="flutter"
        className="w-48 h-40 -mr-10 object-cover rounded-full "
      />
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
        <p className="text-sm sm:text-lg text-slate-600 text-center p-2">
          {title ?? "Project"}
        </p>
      </div>
    </Link>
  );
}
