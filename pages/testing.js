import { useState } from "react";

import Image from "next/image";
import { SiFacebook } from "react-icons/si";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

export default function Testing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div
      className=" flex flex-col h-screen w-screen items-center bg-repeat"
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
      }}
    >
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
      <div className="flex flex-row justify-start items-end w-full overflow-x-auto sm:w-2/3  bg-stone-50  ">
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

     

      {/* Tab Bar View */}
      <div className="flex flex-col w-full sm:w-2/3 bg-stone-50 ">
        {/* {tabBarView[currentIndex]} */}
      </div>
    </div>
  );
}
