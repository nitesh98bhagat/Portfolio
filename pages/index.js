import Link from "next/link";
import React from "react";
import GroupTile from "../components/GroupTile";
import PostCard from "../components/PostCard";

function HomePage() {
  return (
    <div className="flex flex-row w-full space-x-2 sm:px-2 sm:w-3/4 bg-white sm:bg-[#fbfbfb]">
      {/* feed */}
      <div className="flex-col flex w-full sm:w-3/5">
        <PostCard postImage />
        <PostCard postContent />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard postContent postImage />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard postContent postImage />
        <PostCard postContent />
        <PostCard postImage />
      </div>
      {/* groups */}
      <div className="relative flex-1">
        <div className="flex-col hidden space-y-1 sm:flex  bg-[#fbfbfb]  sticky top-16  rounded-lg p-1 ">
          <h1 className="text-xl p-1 font-medium">Groups</h1>
          {/* group tile */}
          <GroupTile />
          <GroupTile />
          <GroupTile />
          <div className="flex flex-wrap w-full   bg-white sm:bg-[#fbfbfb] space-x-5 p-3 items-center  justify-center">
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
