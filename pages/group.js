import Image from "next/image";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import PostCard from "../components/PostCard";

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
      </div>
    </div>
  );
}
