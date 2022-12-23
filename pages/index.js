import React from "react";
import PostCard from "../components/PostCard";

function HomePage() {
  return (
    <div className="flex flex-row w-full space-x-2 sm:px-2 sm:w-2/3 bg-white sm:bg-[#fbfbfb]">
      {/* feed */}
      <div className="flex-col flex w-full sm:w-3/5">
        <PostCard postImage />
        <PostCard postContent />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard postContent />
        <PostCard postContent />
        <PostCard postImage />
        <PostCard postImage />
        <PostCard postContent />
        <PostCard postContent />
        <PostCard postImage />
      </div>
      {/* groups */}
      <div className="relative flex-1">
        <div className="flex-col hidden sm:flex h-52 border sticky top-16 border-slate-100 bg-stone-100 rounded-lg p-2 ">
          d
        </div>
      </div>
    </div>
  );
}

export default HomePage;
