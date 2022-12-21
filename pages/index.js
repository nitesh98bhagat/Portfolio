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
  AiOutlineMail,
  AiFillTwitterCircle,
  AiFillGithub,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillImageFill, BsTwitter, BsYoutube } from "react-icons/bs";
import { MdStore, MdLocationOn } from "react-icons/md";

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
        className="flex flex-col  items-center sm:px-10 "
        style={{ minHeight: "100vh" }}
      >
        {/* Profle Bar */}
        <div className="flex flex-row w-full sm:w-2/3  space-x-2 md:space-x-5 p-3 justify-start items-end bg-white sm:bg-stone-50">
          {/* image */}
          <div className=" w-24 h-24 relative rounded-full">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          {/* details */}
          <div className="flex flex-col  ">
            <h1 className="text-lg sm:text-2xl font-bold">Nitesh Bhagat</h1>
            <h1 className="text-sm sm:text-base font-base text-slate-500">
              React, Next, Flutter
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

        <div className="flex flex-col bg-white sm:bg-stone-50  sm:w-2/3 ">
          <p className="text-sm sm:text-base p-1 sm:w-1/2">
            Hello there, I`m a professional Day-Dreamer, who happens to be a
            Software Engineer.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex flex-row justify-start  sticky top-0 items-end w-full overflow-hidden hover:overflow-x-auto sm:w-2/3  bg-white sm:bg-stone-50  ">
          {["Projects", "Education", "Technologies", "About"].map((e, i) => (
            <p
              key={e}
              onClick={() => setCurrentIndex(i)}
              className={`
              text-base sm:text-lg font-normal border-b-2 py-2 px-3 cursor-pointer
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
        <div className="flex flex-col w-full  sm:w-2/3 bg-white sm:bg-stone-50  ">
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
      <div className=" flex flex-row space-x-3 bg-white sm:bg-stone-50 p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are the project that I've built"}</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4  gap-2  text-teal-500  pt-5">
        <ProjectTile
          title={"VSCODE Clone"}
          link="/vscode"
          icon={<SiVisualstudiocode className="text-6xl  text-sky-400" />}
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
      subtitle: "Class 1 - Class 10",
    },
    {
      degree: "Higher Secondary Education",
      year: "2014-2016",
      institute: "Dum Dum K.L.S Hindi Vidyalaya",
      subtitle: "Science | Class 11 - Class 12",
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
      <div className=" flex flex-row space-x-3 bg-white sm:bg-stone-50 p-2 text-slate-500 text-sm ">
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
      subtitle: "Cross Platfrom Mobile App Development",
      image:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/02/Flutter-Framework-Feature-Image-Background-Colour.png",
    },
    {
      title: "React js",
      subtitle: "Frontend Framework",
      image: "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
    },
    {
      title: "Next js",
      subtitle: "Full-Stack Framework",
      image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
    },
    {
      title: "Express js",
      subtitle: "Backend Framework",
      image:
        "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
    },
    {
      title: "Tailwind Css",
      subtitle: "CSS Framework",
      image:
        "https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "MongoDB",
      subtitle: "NoSQL Database",
      image:
        "https://www.commvault.com/wp-content/uploads/2019/08/mongodb-logo2.jpg?quality=80&w=930",
    },
    {
      title: "Firebase",
      subtitle: "Backend platform",
      image: "https://firebase.google.com/images/social.png",
    },
  ];

  return (
    <div className="flex flex-col p-1 space-y-2">
      <div className=" flex flex-row space-x-3 bg-white sm:bg-stone-50 p-2 text-slate-500 text-sm ">
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
      <h1 className="text-xl font-medium py-2">About me</h1>
      <p className="text-base sm:text-lg font-light  flex flex-col space-y-2">
        <span>
          I`m a full-stack developer who has experience in various aspects of
          web development ranging from Frontend (React, Next) to Backend
          (Express js) alongside Databases such as MongoDB, Firebase-Firestore &
          Postgress.
        </span>
        <span>
          Apart from Web-Development I`ve also spent a reasonable amount of time
          in Cross-Platform Mobile App Development with Google`s Flutter. To
          know more about
          <a
            href="https://flutter.dev/"
            className=" text-sm  px-2 text-blue-500"
          >
            [Click here]
          </a>
        </span>

        <span>
          Coming up to my interest & hobbies, I like designing User Interfaces
          of various systems like Web-apps, Mobile apps & Desktop apps with
          Adobe XD & Figma.
        </span>
      </p>

      <div className=" flex flex-col">
        <h1 className="text-xl font-medium py-2">Soft Skill</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>Team work</li>
            <li>Quick Learner</li>
            <li>Active Listener</li>
          </ul>
        </p>
      </div>

      <div className=" flex flex-col">
        <h1 className="text-xl font-medium py-2">Hobby & Interest</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>UI/UX Design</li>
            <li>Logo Design</li>
            <li>Content Writing</li>
            <li>Making Youtube Videos</li>
          </ul>
        </p>
      </div>

      {/* Language */}
      <div className="flex-col">
        <h1 className="text-xl font-medium py-2">Languages</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>Hindi</li>
            <li>English</li>
            <li>Bengali</li>
          </ul>
        </p>
      </div>

      {/* Awards */}
      {/* https://i.pinimg.com/736x/bf/f2/99/bff299d82bf83afe21af7d13bd9996ca.jpg */}
      <div
        className="flex-col text-white rounded-lg p-5 "
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1194169140/vector/abstract-blue-geometric-shape-background.jpg?s=170667a&w=0&k=20&c=NgsfYIH_OVerFpR-aiaoRdDtF63M6T6rRxV_c_6d72c=)`,
        }}
      >
        <h1 className="text-xl font-medium sm:py-1 ">Awards</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc font-bold  space-y-2">
            <li>Won a 1st prize in Business</li>
            <li>Won a 2nd prize in Model Making</li>
          </ul>
        </p>
      </div>

      <h1 className="text-xl font-medium py-3 sm:py-1">My Social Links</h1>
      <a
        href="https://www.facebook.com/nitesh.bhagat.775"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <SiFacebook size={30} />
          <span>facebook.com/nitesh.bhagat.775</span>
        </div>
      </a>
      <a
        href="https://www.instagram.com/_nitesh_bhagat_/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillInstagram size={30} />
          <span>instagram.com/_nitesh_bhagat_</span>
        </div>
      </a>
      <a
        href="https://twitter.com/myself_nitesh"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillTwitterCircle size={30} />
          <span>twitter.com/myself_nitesh</span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/nitesh-bhagat-a8b996137/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillLinkedin size={30} />
          <span>linkedin.com/in/nitesh-bhagat-a8b996137</span>
        </div>
      </a>
      <a
        href="https://github.com/nitesh98bhagat"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillGithub size={30} />
          <span>github.com/nitesh98bhagat</span>
        </div>
      </a>
      <a
        href="https://www.youtube.com/@Nitesh_Bhagat"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillYoutube size={30} />
          <span>youtube.com/@Nitesh_Bhagat</span>
        </div>
      </a>
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
    <div className="flex flex-row justify-start space-x-5 sm:space-x-16 bg-white sm:bg-stone-50 p-5  border-b border-slate-200">
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
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}

function ProjectTile({ title, icon, link }) {
  return (
    <Link href={link}>
      <div className="flex flex-col   items-center cursor-pointer bg-white sm:bg-stone-50 hover:bg-white  p-2 sm:p-5 shadow-sm hover:shadow-md rounded-md">
        {icon ?? <BsFillImageFill className="text-6xl text-gray-400" />}
        <p className="text-sm sm:text-lg text-slate-600 text-center p-2">
          {title ?? "Project"}
        </p>
        <div className="flex-1"></div>
        <span className="text-[10px] sm:text-xs text-slate-500">
          *Large Screen only
        </span>
      </div>
    </Link>
  );
}
