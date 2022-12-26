import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="flex flex-wrap  bg-white sm:bg-[#fbfbfb] space-x-5 p-3 items-center  justify-center">
      {[
        { title: "About", link: "about" },
        { title: "Blog", link: "blogs" },
        { title: "Help Center", link: "help-center" },
        { title: "Term of Use", link: "terms-of-use" },
        { title: "Privacy & Policy", link: "privacy-policy" },
      ].map((e) => (
        <Link key={e.title} href={e.link}>
          <p className="text-slate-500 cursor-pointer hover:underline">
            {e.title}
          </p>
        </Link>
      ))}
    </div>
  );
}

export default Footer;
