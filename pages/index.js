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
        {[
          {
            id: "eyeyeyeyeyye",
            postImage:
              "https://therenegadecoder.com/wp-content/uploads/2020/05/python-input-output.png",
            postContent: "New Design",
            userName: "Jared Dunn",
          },
          {
            id: "hdhdkd",
            postContent: "Js is the new trend",
          },
          {
            id: "whejeirpokcdkd",
            postContent: "Flutter is Great, But feels a little janky ",
          },
          {
            id: "1ttu38wssji",
            postContent:
              "What I’ve achieved at @getstream_io in 2022. Contributed to increasing monthly downloads of Stream Android SDK by more than 6 times. Published new 12 open-source libraries & projects. Published 13 global blog posts and 8 regional blog posts. Attended 9 conferences.",
          },
          {
            id: "shwjhwjhjks",
            postContent: "Writing Readme is an art.",
          },
        ].map((e) => (
          <PostCard key={e.postImage} props={e} />
        ))}
      </div>

      {/* sidebar */}
      <div className="relative hidden sm:block sm:w-1/3 ">
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
          {[
            {
              groupName: "React Developer Community",
              groupId: "dgheheufjd",
              groupDp: "https://miro.medium.com/max/1100/0*PYIfVeHV1Qd32X31",
              members: "1,545",
            },
          ].map((e) => (
            <GroupTile key={e.groupId} props={e} />
          ))}

          <div className="flex flex-wrap w-full   bg-white sm:bg-[#fbfbfb] space-x-5 p-1 items-center  justify-center">
            {[
              { link: "about", title: "About" },
              { link: "testing", title: "Testing" },
              { link: "blogs", title: "Blogs" },
              { link: "help-center", title: "Help Center" },
              { link: "terms-of-use", title: "Term of Use" },
              { link: "privacy-&-policy", title: "Privacy & Policy" },
            ].map((e) => (
              <Link key={e.title} href={`/${e.link}`}>
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
