import Link from "next/link";
import React from "react";
import { FaHeartBroken } from "react-icons/fa";
import { GoHome } from "react-icons/go";

function Error() {
  return (
    <div className="h-screen bg-[#fbfbfb] w-full sm:w-3/4 flex flex-col text-slate-400 items-center justify-center">
      <FaHeartBroken size={105} />
      <h1 className="text-6xl font-black">PAGE NOT FOUND!!!</h1>
      <h1 className="text-3xl">{"We can't find what you are looking for."}</h1>
      <Link href="/">
        <button className="p-3 flex flex-row text-2xl space-x-3 items-center  bg-teal-400 my-4 rounded-lg text-white font-bold hover:bg-teal-500">
          <GoHome size={35} />
          <span>Go to home</span>
        </button>
      </Link>
    </div>
  );
}

export default Error;
