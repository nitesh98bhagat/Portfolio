import Image from "next/image";
import Footer from "./Footer";
import GroupTile from "./GroupTile";
import PostCard from "./PostCard";

export default function HomeTab() {
  return (
    <div className="flex flex-row w-full space-x-2 sm:p-2  bg-white sm:bg-[#fbfbfb]">
      {/* feed */}
      <div className="flex-col flex w-full sm:w-3/5">
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
        ].map((e) => (
          <PostCard key={e.postImage} props={e} />
        ))}
      </div>
      {/* groups */}
      <div className="relative flex-1">
        <div className="flex-col hidden space-y-1 sm:flex  bg-[#fbfbfb]  sticky top-28  rounded-lg p-1 ">
          <h1 className="text-xl p-1 font-medium">Groups</h1>
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
