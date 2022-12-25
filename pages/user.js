import { useState } from "react";
import AccountTile from "../components/AccountTile";

export default function UserPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="flex flex-col sm:flex-row w-full sm:w-3/4 bg-[#fbfbfb]  ">
      {/* Category */}
      <div className="relative  sm:border-r sm:w-1/6 ">
        <div className="flex flex-row overflow-hidden hover:overflow-x-auto sm:flex-col sticky top-14 bg-white sm:bg-[#fbfbfb]">
          <span className="p-2 font-medium hidden sm:block text-slate-500">
            Look for
          </span>
          {["Candidates", "Recruiter", "Group", "Company"].map((e, i) => (
            <p
              key={e}
              className={`py-3 px-5 sm:px-8 cursor-pointer border-b-2 sm:border-b-0 ${
                currentIndex === i
                  ? "font-bold text-teal-500 bg-transparent border-teal-500 sm:bg-teal-100 sm:hover:bg-teal-100  "
                  : "hover:bg-stone-100"
              }  text-base`}
              onClick={() => setCurrentIndex(i)}
            >
              {e}
            </p>
          ))}
        </div>
      </div>
      {/* main content */}
      <div className="flex flex-1 flex-col bg-white sm:bg-[#fbfbfb] p-2 space-y-2">
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
        <AccountTile />
      </div>
    </div>
  );
}
