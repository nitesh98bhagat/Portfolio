import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { MdVerified } from "react-icons/md";

export default function GroupPage() {
  return (
    <div className="bg-[#fbfbfb] w-3/4">
      <div className="flex flex-row">
        {/* side bar */}
        <div className="flex flex-col w-1/4">
          {/* profile image */}
          <img
            src="https://miro.medium.com/max/1100/0*PYIfVeHV1Qd32X31"
            alt="nitesh bhagat"
            className="rounded-full w-40 aspect-square object-cover"
          />

          {/* details */}
          <div className="flex flex-col p-2 ">
            {/* name */}
            <span class="inline-flex items-center ">
              <span className="text-lg sm:text-xl font-bold">
                React Native Community
              </span>
              <MdVerified className="text-teal-500" />
            </span>
            {/* bio */}
            <h1 className="text-sm sm:text-base font-base text-slate-500">
              Software Developer
            </h1>

            {/* email */}
            <div className="flex flex-row items-center text-slate-500 space-x-1">
              <AiOutlineMail />
              <span className="text-sm">nikubh1998@gmail.com</span>
            </div>
          </div>
        </div>
        {/* main area */}
        <div className="flex flex-col flex-grow">main</div>
      </div>
    </div>
  );
}
