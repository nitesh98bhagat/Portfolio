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

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const router = useRouter();

  const handleBackBtn = () => {
    router.back();
    setShowSearch(false);
  };

  return (
    <div
      className={`flex flex-row w-full sm:w-3/4 sticky top-0 z-10  space-x-2 md:space-x-5 ${
        showSearch ? "p-2" : "p-3"
      } justify-between items-center bg-white sm:bg-[#fbfbfb]`}
    >
      {showSearch ? (
        <div className=" flex flex-row w-full items-center">
          <IoIosArrowBack size={35} onClick={handleBackBtn} />
          <div className="flex-grow">
            <SearchBar />
          </div>
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
          <div className="w-1/2 hidden sm:block">
            <SearchBar />
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
