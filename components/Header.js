import {
  BsFillBriefcaseFill,
  BsFillChatTextFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div
      className={`flex flex-row w-full sm:w-2/3 sticky top-0 z-10  space-x-2 md:space-x-5 ${
        showSearch ? "p-2" : "p-3"
      } justify-between items-center bg-white sm:bg-[#fbfbfb]`}
    >
      {showSearch ? (
        <div className="flex flex-row w-full bg-slate-100 rounded-full items-center hover:bg-slate-200 p-2">
          <CiSearch size={30} />
          <input
            type="text"
            className="bg-transparent w-full px-2 focus:ring-0 outline-none flex-1"
            placeholder="Search Read.me"
          />
          <IoMdClose size={25} onClick={() => setShowSearch(false)} />
        </div>
      ) : (
        <>
          <Link href={"/"}>
            <h1 className="text-2xl font-black text-black cursor-pointer">
              <span className="bg-teal-600 text-white px-1   rounded-sm mx-1">
                Dev
              </span>
              knot
            </h1>
          </Link>
          <div className="bg-slate-100 hover:bg-slate-200 rounded-full w-1/2  sm:flex flex-row px-3 py-2 mx-3 hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6   text-slate-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>

            <input
              type="text"
              className="bg-transparent w-full px-2 focus:ring-0 outline-none"
              placeholder="Search Read.me"
            />
          </div>

          <div className="flex-row flex space-x-4 sm:space-x-5 items-center text-2xl">
            <Link href={"/"}>
              <GoHome className="cursor-pointer" />
            </Link>

            {false ? (
              <>
                <BsFillPeopleFill />
                <BsFillBriefcaseFill />
                <BsFillChatTextFill />
              </>
            ) : (
              <CiSearch
                className="block sm:hidden "
                onClick={() => setShowSearch(true)}
              />
            )}
            <Link href={"/profile"}>
              <div className=" bg-teal-500 text-xs sm:text-base font-medium rounded-full px-3 text-white py-2 sm:py-1 cursor-pointer">
                Sign in
              </div>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Header;
