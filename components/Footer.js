import React from "react";

function Footer() {
  return (
    <div className="flex flex-wrap w-full sm:w-2/3  bg-white sm:bg-[#fbfbfb] space-x-5 p-5 items-center  justify-center">
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
    </div>
  );
}

export default Footer;
