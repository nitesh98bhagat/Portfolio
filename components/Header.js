import {
  BsFillBriefcaseFill,
  BsFillChatTextFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoMdClose } from "react-icons/io";
import Link from "next/link";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { toggleSearchBar } from "../app/globalConstantSlice";

function Header() {
  // const router = useRouter();

  const isSearchBarOpen = useSelector(
    (state) => state.globalConstants.isSearchBarOpen
  );
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row w-full sm:w-3/4 sticky top-0 z-10  space-x-2 md:space-x-5 ${
        isSearchBarOpen ? "p-2" : "p-3"
      } justify-between items-center bg-white sm:bg-[#fbfbfb]`}
    >
      {isSearchBarOpen ? (
        <div className=" flex flex-row w-full items-center">
          {/* Mobile search Bar that will take full width of screen */}
          <IoIosArrowBack
            size={35}
            onClick={() => dispatch(toggleSearchBar())}
          />
          <div className="flex-grow">
            <SearchBar />
          </div>
        </div>
      ) : (
        <>
          <Link href={"/"}>
            {/* desktop */}
            <h1 className="text-2xl font-black text-black cursor-pointer">
              <span className="bg-teal-600 text-white px-1   rounded-sm mx-1">
                Dev
              </span>
              Hops
            </h1>
          </Link>
          <div className="w-1/2 hidden sm:block">
            <SearchBar />
          </div>

          <div className="flex-row flex space-x-4 sm:space-x-5 items-center text-2xl">
            <Link href={"/"}>
              <GoHome className="cursor-pointer" />
            </Link>

            <BsFillPeopleFill />
            {false ? (
              <>
                <BsFillBriefcaseFill />
                <BsFillChatTextFill />
              </>
            ) : (
              <CiSearch
                className="block sm:hidden "
                onClick={() => dispatch(toggleSearchBar())}
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
