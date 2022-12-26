import Link from "next/link";
import React from "react";
import { AiFillFire } from "react-icons/ai";
import { BsFillPeopleFill } from "react-icons/bs";
import GroupTile from "../components/GroupTile";
import PostCard from "../components/PostCard";

function HomePage() {
  return (
    <div className="flex flex-row w-full sm:w-3/4 space-x-2   bg-white sm:bg-[#fbfbfb] p-2">
      {/* feed */}
      <div className="flex-col flex w-full sm:w-3/5 ">
        <PostCard postImage />

        <PostCard
          postContent={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem?"
          }
        />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard
          postImage
          postContent={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem?"
          }
        />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard
          postImage
          postContent={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, autem?"
          }
        />
        <PostCard postContent />
        <PostCard postImage />
      </div>

      {/* sidebar */}
      <div className="relative w-1/3 ">
        {/* buzzing */}
        <div className="flex-col hidden space-y-1 sm:flex  bg-[#fbfbfb]  sticky top-5 rounded-lg p-1 h-[750px]">
          <h1 className="text-xl py-1 font-medium flex flex-row items-center">
            <AiFillFire className="text-amber-400" /> Buzzing
          </h1>

          {[
            "Next.js 13 new release",
            "React's useMemo rewrite",
            "Flutter GPay Crash",
            "GitHub new policy update",
            "Google new attempt at Social media",
          ].map((e, i) => (
            <p
              key={e}
              className="text-base text-slate-600 p-1  font-medium cursor-pointer hover:underline"
            >
              <span className="p-1">{i + 1}</span>

              <span>{e}</span>
            </p>
          ))}

          {/* group */}
          <h1 className="text-xl py-1 font-medium flex flex-row items-center space-x-2">
            <BsFillPeopleFill /> <span>Group</span>
          </h1>
          {/* group tile */}
          <GroupTile />
          <GroupTile />
          <GroupTile />
          <div className="flex flex-wrap w-full   bg-white sm:bg-[#fbfbfb] space-x-5 p-1 items-center  justify-center">
            {[
              { title: "About" },
              { title: "Testing" },
              { title: "Blog" },
              { title: "Help Center" },
              { title: "Term of Use" },
              { title: "Privacy & Policy" },
            ].map((e) => (
              <Link key={e.title} href={`/${e.title.toLowerCase()}`}>
                <p className="text-slate-500 cursor-pointer ">{e.title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;

// <div className="flex-col hidden space-y-1 sm:flex     rounded-xl bg-slate-100/60 p-3  ">
// <h1 className="text-xl py-1 font-medium flex flex-row items-center">
//   <AiFillFire className="text-amber-400" /> Buzzing
// </h1>
// {/* Buzzing */}

// {[
//   "Next.js 13 new release",
//   "React's useMemo rewrite",
//   "Flutter GPay Crash",
//   "GitHub new policy update",
//   "Google new attempt at Social media",
// ].map((e, i) => (
//   <p
//     key={e}
//     className="text-base text-slate-600 p-1  font-medium cursor-pointer hover:underline"
//   >
//     <span className="p-1">{i + 1}</span>

//     <span>{e}</span>
//   </p>
// ))}
// </div>
