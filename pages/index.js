import React from "react";
import GroupTile from "../components/GroupTile";
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
        <div className="flex-col hidden space-y-1 sm:flex h-52 bg-[#fbfbfb] sticky top-16  rounded-lg p-1 ">
          <h1 className="text-xl p-1 font-medium">Groups</h1>
          {/* group tile */}
          <div className="overflow-hidden justify-between items-center flex flex-row  h-20 shadow rounded-lg ">
            <div className=" flex flex-col p-5 flex-1">
              <p className="text-base font-bold pb-1">{"React Developers"}</p>
              <div className="flex flex-row items-center">
                <div className="flex-row flex -space-x-2">
                  {[
                    "https://www.simplilearn.com/ice9/free_resources_article_thumb/tester-or-developer-what-suits-you-the-most.jpg",
                    "https://www.zdnet.com/a/img/resize/adcb2eb2cc3f5562f7e80931308e2a08b01947ce/2019/08/19/4a663776-f4a9-4f89-9bee-2d07ee052f5b/istock-1147195672-11.jpg?auto=webp&fit=crop&height=900&width=1200",
                    "https://w10.naukri.com/mailers/2021/naukri-learning/oct/27oct-v2/What-is-Android-Developer.jpg",
                  ].map((e) => (
                    <img
                      key={e}
                      src={e}
                      alt="userpic"
                      className="w-5 aspect-square rounded-full border-white border-2"
                    />
                  ))}
                </div>
                <span className="text-sm">1.4k members</span>
              </div>
            </div>
            <img
              src={"https://miro.medium.com/max/1100/0*PYIfVeHV1Qd32X31"}
              alt="flutter"
              className="h-32 aspect-square -mr-3 object-cover rounded-full "
            />
          </div>
          <GroupTile />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
