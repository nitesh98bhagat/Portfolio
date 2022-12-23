import Image from "next/image";
import GroupTile from "./GroupTile";
import PostCard from "./PostCard";

export default function HomeTab() {
  return (
    <div className="flex flex-row w-full space-x-2 sm:p-2  bg-white sm:bg-[#fbfbfb]">
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
        <div className="flex-col hidden sm:flex space-y-1  border sticky top-28 border-slate-100  rounded-lg p-3 ">
          <span className="text-base font-semibold pb-2">
            Recommended groups
          </span>
          <GroupTile />
          <GroupTile />
          <GroupTile />
        </div>
      </div>
    </div>
  );
}
