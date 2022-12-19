import Header from "../components/Header";
import LocationCard from "../components/LocationCard";
import SchoolCard, { SchoolCardNew } from "../components/SchoolCard";

// slider
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import dataNew from "../data";
import Link from "next/link";
import { SiFacebook, SiVisualstudiocode } from "react-icons/si";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMediumSquare,
  AiFillTwitterCircle,
} from "react-icons/ai";
import {
  BsFacebook,
  BsFillImageFill,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { MdStore } from "react-icons/md";
import Image from "next/image";
import { useState } from "react";

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const tabBarView = [
    <ProjectPage key={"project"} />,
    <EducationPage key={"education"} />,
    <h1 key={"technologies"}>Technologies</h1>,
  ];

  return (
    <div
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
      }}
      className="flex flex-col h-screen justify-start   items-center   border-x-2"
    >
      <div className="flex flex-col">
        <div className="flex items-center space-x-3 bg-stone-50 p-5">
          <div className="w-44 h-44 relative rounded-full">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full"
            />
          </div>

          <div className="flex-col w-96">
            <h1 className="text-3xl font-bold">Nitesh Bhagat</h1>
            <h1 className="text-base font-base text-slate-500">
              React, Next, Flutter{" "}
            </h1>
            <p className="text-base p-2">
              Hello there, I`m Front-end Engineer who has a bit of experenice in
              the frontend field. All project done by me are listed here.
            </p>
            <div className="flex text-3xl text-slate-600">
              <SiFacebook />
              <AiFillInstagram />
              <AiFillTwitterCircle />
              <AiFillLinkedin />
            </div>
          </div>
        </div>
        {/* Tab bar */}
        <div className="flex flex-row justify-start items-end w-full  bg-stone-50  ">
          {["Project", "Education", "Technologies"].map((e, i) => (
            <p
              key={e}
              onClick={() => setCurrentIndex(i)}
              className={`
              text-lg font-normal border-b-2 p-3 cursor-pointer
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

        {/* menu section */}

        {tabBarView[currentIndex]}
      </div>
    </div>
  );
}

function ProjectPage() {
  return (
    <div className="grid grid-cols-3  gap-4 text-teal-500 bg-stone-50 py-5">
      <ProjectTiile
        title={"VSCODE Clone"}
        link="/vscode"
        icon={<SiVisualstudiocode />}
      />
      <ProjectTiile
        title={"YouTube Clone"}
        link="/vscode"
        icon={<BsYoutube />}
      />
      <ProjectTiile
        title={"Medium Clone"}
        link="/blog"
        icon={<AiFillMediumSquare />}
      />
      <ProjectTiile title={"E-commerce"} link="/store" icon={<MdStore />} />
      <ProjectTiile
        title={"Twitter clone"}
        link="/store"
        icon={<BsTwitter />}
      />

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
      <div className="flex flex-col items-center cursor-pointer text-6xl hover:bg-white  p-5 shadow-md rounded-md">
        {icon ?? <BsFillImageFill />}
        <p className="text-base p-2">{title ?? "Vs Code Clone"}</p>
      </div>
    </Link>
  );
}

/**
 * <div className="relative bg-black  rounded-xl">
              <img
                src={"https://schooldekho.co.in/img/burdwan.png"}
                alt="img"
                className=" rounded-xl opacity-30"
              />
              <div className="absolute top-20  w-full p-5   flex flex-col justify-center items-center rounded-xl">
                <h1 className="text-white text-5xl">{"100+"}</h1>
                <h1 className="text-white text-2xl">
                  {"Explore More Location"}
                </h1>
              </div>
            </div>
 * 
 */

//   <div className=" ">
//   {/* School near you */}
//   <div className=" flex flex-col items-center py-5">
//     <div className="text-center ">
//       <h1 className="text-4xl text-slate-600 font-bold ">
//         Schools Near You
//       </h1>
//       <h1 className="text-xl">
//         Get admitted through School Dekho at no extra cost
//       </h1>
//     </div>

//     <div className="w-full">
//       <Swiper
//         className=""
//         // install Swiper modules
//         modules={[Navigation, Pagination, Autoplay, A11y]}
//         spaceBetween={5}
//         slidesPerView={4}
//         navigation
//         autoplay
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {dataNew.nearSchool.map((e) => (
//           <SwiperSlide className="my-16 mx-5">
//             {/* <SchoolCard props={e} key={e.img} /> */}
//             <SchoolCardNew props={e} key={e.img} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   </div>

//   {/* Admission */}
//   <div className="p-3 flex flex-col items-center">
//     <div className="text-center p-10">
//       <h1 className="text-4xl text-slate-600 font-bold ">
//         Admission Open
//       </h1>
//       <h1 className="text-xl">
//         Get admitted through School Dekho at no extra cost
//       </h1>
//     </div>
//     <div className="w-full">
//       <Swiper
//         className=""
//         // install Swiper modules
//         modules={[Navigation, Pagination, Autoplay, A11y]}
//         spaceBetween={5}
//         slidesPerView={4}
//         navigation
//         autoplay
//         pagination={{ clickable: true }}
//         onSwiper={(swiper) => console.log(swiper)}
//         onSlideChange={() => console.log("slide change")}
//       >
//         {dataNew.nearSchool.map((e) => (
//           <SwiperSlide className="my-20 mx-5">
//             <SchoolCardNew props={e} key={e.img} />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//     <Link href={"/explore-school"}>
//       <button className="px-5 py-3 m-10 text-xl hover:bg-blue-900 hover:text-white rounded-full font-bold border-2 border-blue-900 text-blue-900">
//         View more
//       </button>
//     </Link>
//   </div>
//   {/* location */}
//   <div className="w-3/4 mx-auto mb-10">
//     <div className="text-center p-10 text-slate-900">
//       <h1 className="text-6xl  font-bold ">Location</h1>
//       <h1 className="text-xl">Find schools at your own district</h1>
//     </div>
//     <div className="grid grid-cols-3 gap-4 ">
//       {dataNew.location.map((e) => (
//         <LocationCard e={e} />
//       ))}
//     </div>
//   </div>
// </div>
