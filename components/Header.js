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
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";

function Header() {
  // const router = useRouter();
  const { data: session, status } = useSession();

  const isSearchBarOpen = useSelector(
    (state) => state.globalConstants.isSearchBarOpen
  );
  const dispatch = useDispatch();

  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div
      className={`flex flex-row w-full sm:w-3/4 sm:px-8  sticky top-0 z-10  sm:border-b space-x-2 md:space-x-5 ${
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
            <h1 className="text-2xl font-black sm:w-40 text-black cursor-pointer">
              <span className="bg-teal-600 text-white px-1   rounded-sm ">
                Cs
              </span>
              Punk
            </h1>
          </Link>
          <div className="w-1/2 hidden sm:block">
            <SearchBar />
          </div>

          <div className="flex-row flex space-x-6 sm:space-x-5 items-center text-2xl">
            <Link href={"/"}>
              <GoHome className="cursor-pointer" />
            </Link>

            <BsFillPeopleFill />
            {session ? (
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
            {session ? (
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="flex flex-row w-40  space-x-1 items-center cursor-pointer"
              >
                <div className="flex-col flex">
                  <span className="text-xs">Signed in as</span>
                  <span className="text-xs font-medium">
                    {session.user.name}
                  </span>
                </div>

                <div className=" w-9 h-9 relative overflow-hidden rounded-full border-2 p-1  border-teal-500">
                  <Image
                    src={session.user.image}
                    alt="nitesh bhagat"
                    layout="fill" // required
                    objectFit="cover"
                    className="rounded-full "
                  />
                </div>
              </div>
            ) : (
              <div
                onClick={signIn}
                className=" bg-teal-500 text-xs sm:text-base font-medium rounded-full px-3 text-white py-2 sm:py-1 cursor-pointer"
              >
                Sign in
              </div>
            )}
          </div>
        </>
      )}

      {openMenu && (
        <div className="flex-col bg-[#fbfbfb] shadow-lg flex absolute right-20 top-16 w-1/6 rounded-lg ">
          {[
            {
              title: "My Profile",
              icon: "icon",
              link: "/profile",
            },
            {
              title: "Settings",
              icon: "icon",
              link: "/profile",
            },
            {
              title: "Signout",
              icon: "icon",
              link: "/profile",
            },
          ].map((e) => (
            <p className="text-base p-2" key={e.title}>
              {e.title}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Header;
