import React from "react";
import { FcSettings } from "react-icons/fc";

function Settngs() {
  return (
    <div className="bg-[#fbfbfb] w-3/4 h-screen flex flex-col items-center justify-center">
      <FcSettings size={50} />
      <span className="text-4xl font-bold">Settings</span>
    </div>
  );
}

export default Settngs;
