import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import PostCard from "../components/PostCard";
import { RiRadioButtonLine } from "react-icons/ri";

export default function GroupPage() {
  return (
    <div className="bg-[#fbfbfb] w-full sm:w-3/4 ">
      <div className="flex flex-row items-start relative ">
        {/* side bar */}
        <div className="flex flex-col w-1/4 px-3 sticky top-16 pt-1">
          {/* profile image */}
          <img
            src="https://miro.medium.com/max/1100/0*PYIfVeHV1Qd32X31"
            alt="nitesh bhagat"
            className="rounded-full w-2/3 aspect-square object-cover"
          />

          {/* details */}
          <div className="flex flex-col p-3 ">
            {/* name */}
            <span class="inline-flex items-center font-medium">
              React Dev Community
              <MdVerified className="text-teal-500" />
            </span>
            {/* bio */}
            <h1 className="text-sm sm:text-base font-base text-slate-500">
              @react.dev
            </h1>

            {/* join button */}
            <button className="bg-teal-500 my-3 p-1 font-medium text-white rounded-lg">
              Join now
            </button>

            {/* members */}
            <div className="flex flex-row items-center text-slate-500 space-x-1">
              <BsFillPeopleFill />
              <span className="text-sm">18.2k members</span>
            </div>
          </div>
        </div>
        {/* main area */}
        <div className="flex flex-col flex-grow px-5 border-x ">
          <PostCard postContent />
          <PostCard postImage />
          <PostCard postContent />
          <PostCard postImage />
          <PostCard postContent />
          <PostCard postImage />
          <PostCard postContent />
          <PostCard postImage />
          <PostCard postContent />
          <PostCard postImage />
        </div>
      </div>
    </div>
  );
}

function UserTile() {
  return (
    <div className="flex flex-row p-2">
      <div className=" w-10 h-10 relative rounded-full border cursor-pointer border-teal-500">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
          alt="nitesh bhagat"
          layout="fill" // required
          objectFit="cover"
          className="rounded-full "
        />
      </div>
      {/* details col */}
      <div className="flex-col flex -space-y-1 px-2">
        <span className="font-medium">Nitesh Bhagat</span>
        <span className="text-sm">@nitesh.bhagat</span>
      </div>
    </div>
  );
}
