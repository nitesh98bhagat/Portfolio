import Image from "next/image";
import Footer from "./Footer";
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
        <div className="flex-col hidden space-y-1 sm:flex  bg-[#fbfbfb]  sticky top-28  rounded-lg p-1 ">
          <h1 className="text-xl p-1 font-medium">Groups</h1>
          {/* group tile */}
          <GroupTile />
          <GroupTile />
          <GroupTile />
          {/* <div className="flex flex-wrap w-full   bg-white sm:bg-[#fbfbfb] space-x-5 p-3 items-center  justify-center">
            {[
              { title: "About" },
              { title: "Blog" },
              { title: "Help Center" },
              { title: "Term of Use" },
              { title: "Privacy & Policy" },
            ].map((e) => (
              <p key={e.title} className="text-slate-500 ">
                {e.title}
              </p>
            ))}
          </div> */}
          <Footer />
        </div>
      </div>
    </div>
  );
}
