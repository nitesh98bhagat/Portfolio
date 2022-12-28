import Image from "next/image";
import { useEffect, useState } from "react";
import { AiFillCaretUp, AiOutlineCaretDown } from "react-icons/ai";
import { BsFillChatFill } from "react-icons/bs";
import { FiMoreHorizontal } from "react-icons/fi";
import { HiArrowPath } from "react-icons/hi2";

export default function PostCard({ props }) {
  const { postImage, postContent, userName, time } = props;
  const [upbit, setUpbit] = useState("none");

  return (
    <div className="flex flex-row pb-3 mb-3 border-b  space-x-2">
      {/* content area */}
      <div className="flex flex-col  flex-1 justify-start items-start space-y-1">
        {/* profile header */}
        <div className=" flex flex-row   items-center w-full space-x-2">
          <div className=" w-8 h-8 relative z-10 rounded-full border  border-teal-500">
            <Image
              src={
                "https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
              }
              alt="nitesh bhagat"
              layout="fill" // required
              objectFit="cover"
              className="rounded-full "
            />
          </div>
          <div className="flex-col flex flex-1 ">
            <span className="text-sm font-medium">
              {userName ?? "Nitesh Bhagat"}
            </span>
            <p className="text-xs font-light -my-1">{time ?? "2 day ago"}</p>
          </div>

          {/* repost button */}
          <HiArrowPath size={25} className="text-slate-600 " />
          <div className="px-0.5" />
          {/* more options */}
          <FiMoreHorizontal size={25} className="text-slate-600" />
        </div>

        {/* Caption */}
        {postContent && (
          <h1 className="text-base sm:text-base py-2">{postContent ?? ""}</h1>
        )}

        {/* Post Picture */}
        {postImage && (
          <img
            src={
              postImage ??
              "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            }
            alt="postImage"
            className=" rounded-3xl aspect-square w-full h-72  object-cover"
          />
        )}

        {/* Comment section */}
        <div className=" text-slate-600 w-full py-1 flex flex-row items-center">
          <BsFillChatFill />
          <span className="text-sm px-1">124</span>
          <input
            type="text"
            className="bg-transparent w-full py-1 px-3 mx-1 focus:ring-0 rounded-md text-sm bg-slate-50 hover:bg-slate-100 focus:bg-slate-200 outline-none flex-1 "
            placeholder="// add comment"
          />
        </div>
      </div>
      {/* Upbit/downbit */}
      <div className="flex-col justify-center border rounded-lg items-center flex cursor-pointer overflow-hidden text-slate-500">
        {/* upbit */}
        <div
          className={`flex flex-col items-center justify-center flex-1 p-1 ${
            upbit === true ? "bg-green-100 text-green-500" : ""
          }`}
          onClick={() => setUpbit(true)}
        >
          <AiFillCaretUp className="py-auto" size={25} />
          <span className="text-xs ">25.6k</span>
        </div>
        {/* divider */}
        <div className=" border w-full" />
        {/* downbit */}
        <div
          className={`flex flex-col items-center justify-center flex-1 p-1 cursor-pointer ${
            upbit === false ? "bg-red-100 text-red-500" : ""
          }`}
          onClick={() => setUpbit(false)}
        >
          <span className="text-xs ">1.21k</span>
          <AiOutlineCaretDown size={25} />
        </div>
      </div>
    </div>
  );
}
