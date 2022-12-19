import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-col p-5 border-t-2 items-center">
      <div className="flex flex-row justify-around w-full py-10">
        <img
          src="https://schooldekho.org/assets/images/logo.png"
          alt="img"
          className="object-contain"
        />

        <div className="grid grid-rows-3 grid-flow-col gap-8  ">
          {[
            { title: "Home", url: "/home" },
            { title: "Blogs", url: "/blog" },
            { title: "About", url: "/about-us" },
            { title: "F.A.Qs", url: "/faq" },
            { title: "Privacy & Policy", url: "/privacy-policy" },
            { title: "Terms & Conditions", url: "/terms-conditions" },
            { title: "Register a school", url: "/register-school" },
            { title: "Contact Us", url: "/contact-us" },
          ].map((e) => (
            <FooterLink key={e.title} title={e.title} url={e.url} />
          ))}
        </div>
      </div>
      <h1 className="text-md text-gray-400 ">
        © 2021 School Dekho. All Rights Reserved
      </h1>
    </div>
  );
}

function FooterLink({ title, url }) {
  return (
    <Link href={`${url}`}>
      <p className="text-lg hover:text-blue-900 scale-105 font-semibold cursor-pointer px-5">
        {title ?? "Footer Link"}
      </p>
    </Link>
  );
}
