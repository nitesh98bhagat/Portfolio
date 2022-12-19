import Link from "next/link";
import { useState } from "react";
import dataNew from "../data";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div className="flex flex-row justify-between px-5 items-center shadow-sm fixed bg-white w-full z-10 ">
      {/* Logo */}
      <Link href="/">
        <a>
          {" "}
          <img
            src="https://schooldekho.org/assets/images/logo.png"
            alt="logo"
            className="w-44 object-contain mx-5"
          />
        </a>
      </Link>

      {/* search */}
      <div className="bg-slate-100 hover:bg-slate-200 rounded-full w-1/2 flex flex-row px-3 py-2 mx-3">
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
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent w-full px-2 focus:ring-0 outline-none"
          placeholder="Search more than 300+ schools"
        />
      </div>
      {/* floating pallte */}

      {!searchInput.length == 0 && (
        <div className="bg-white fixed top-16 h-1/3 overflow-y-auto inset-x-80 w-1/2 border max-auto shadow-md">
          {dataNew.nearSchool
            .filter((e) => e.name.toLowerCase().includes(searchInput))
            .map((e) => {
              return (
                <div className="flex flex-row items-center">
                  <img src={e.img} alt="image" className="w-20 h-20" />
                  <div className="flex flex-col p-3">
                    <h1 className="text-xl font-bold">{e.name}</h1>
                    <h1 className="text-sm w-1/2">{e.address}</h1>
                  </div>
                  <div className="mx-auto"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mr-3"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </div>
              );
            })}
        </div>
      )}

      {/* Login /Signup */}
      <div className="flex flex-row">
        <button
          className="bg-slate-500  px-5 text-white font-semibold my-3 rounded-xl flex flex-row justify-between items-center"
          // onClick={() => setOpenPopup(!OpenPopup)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path d="M18.75 12.75h1.5a.75.75 0 000-1.5h-1.5a.75.75 0 000 1.5zM12 6a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 6zM12 18a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 0112 18zM3.75 6.75h1.5a.75.75 0 100-1.5h-1.5a.75.75 0 000 1.5zM5.25 18.75h-1.5a.75.75 0 010-1.5h1.5a.75.75 0 010 1.5zM3 12a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5A.75.75 0 013 12zM9 3.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12.75 12a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0zM9 15.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
          </svg>
          Compare
        </button>

        <button
          className="bg-purple-800 px-3  py-2 text-white font-semibold m-3 rounded-xl flex flex-row justify-between items-center"
          // onClick={() => setOpenPopup(!OpenPopup)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
            />
          </svg>
          Sign In
        </button>
      </div>

      {/* end */}
    </div>
  );
}
