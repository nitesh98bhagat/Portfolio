import Link from "next/link";
import { useState } from "react";

export default function Blog() {
  const [TabIndex, setTabIndex] = useState(0);
  const [OpenPopup, setOpenPopup] = useState(false);

  function getTabView(index) {
    switch (index) {
      case 0:
        return (
          <div className="">
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center ">
              You need to Log in
            </h1>

            <img
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
              alt="signin_image"
              className="w-1/3"
            />

            <div className="flex flex-row items-center">
              <button className="rounded-xl bg-purple-800 text-white py-3 px-12 font-semibold text-xl">
                Log In
              </button>
              <p className="text-3xl font-bold p-3 text-slate-500">Or</p>
              <button className="rounded-xl bg-black text-white py-3 px-12 font-semibold text-xl">
                Sign up
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center">
            <h1 className="text-5xl font-bold text-center ">
              You need to Log in
            </h1>

            <img
              src="https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg"
              alt="signin_image"
              className="w-1/3"
            />

            <div className="flex flex-row items-center">
              <button className="rounded-xl bg-purple-800 text-white py-3 px-12 font-semibold text-xl">
                Log In
              </button>
              <p className="text-3xl font-bold p-3 text-slate-500">Or</p>
              <button className="rounded-xl bg-black text-white py-3 px-12 font-semibold text-xl">
                Sign up
              </button>
            </div>
          </div>
        );

      default:
        return <h1>hmm, not sure what you're looking for...</h1>;
    }
  }

  function Tab({title, index, }) {
    return  <h1
    className={` text-base px-5 py-2 ${
      TabIndex === index
        ? "border-t border-l border-r font-semibold"
        : "border-b text-slate-500 font-normal"
    } cursor-pointer rounded-t-md `}
    onClick={() => setTabIndex(index)}
  >
    {title??"Recommended articles"}
  </h1>
  }

  return (
    <div className="flex flex-col relative">
      {/* popup */}
      {OpenPopup && (
        <div className="fixed w-screen h-screen flex flex-col items-center justify-center backdrop-brightness-50  z-10  ">
          <div className="w-1/3 ">
            {/* log in */}
            <div className="bg-white  shadow-lg rounded-xl  flex flex-col items-start p-5">
              <h1 className="text-3xl w-full font-bold text-center  flex flex-row items-center justify-between">
                <p></p>
                <p>Login</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => setOpenPopup(false)}
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </h1>
              <p className="text-md font-semibold text-slate-600 my-2">Email</p>
              <input
                type="text"
                className="bg-slate-100 p-2 w-full rounded-md"
                placeholder="some@email.com"
              />
              <p className="text-md font-semibold text-slate-600  my-2">
                Password
              </p>
              <input
                type="password"
                className="bg-slate-100 p-2 w-full rounded-md"
                placeholder="******"
              />
              <h1 className="p-3 text-center w-full">Or</h1>

              <button className=" w-full font-bold rounded-xl  text-gray-800 text-xl p-2 border flex flex-row justify-center ">
                <img
                  src="https://pbs.twimg.com/profile_images/1455185376876826625/s1AjSxph_400x400.jpg"
                  alt="google"
                  className="w-8  "
                />

                <p className="px-3 text-lg">Continue with Google</p>
              </button>

              <div className="flex flex-row  m-4 text-lg font-semibold">
                <p>Don't have an account, just</p>
                <Link href={"/signup"}>
                  <p className=" font-semibold text-blue-600  cursor-pointer mx-1">
                    {"Sign up "}
                  </p>
                </Link>
                <p> here</p>
              </div>

              <button className="bg-purple-800 w-full font-bold rounded-xl  text-white text-xl p-3 ">
                Login
              </button>
            </div>
          </div>
        </div>
      )}
      {/* header */}
      <div className="flex flex-row justify-between px-5 items-center  ">
        <div className="flex flex-row items-center justify-around mx-4">
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          {/* search */}
          <div className="bg-slate-50 hover:bg-slate-100 rounded-full flex flex-row px-3 py-2 mx-3">
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
         
           

          {/* <svg
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
              d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
            />
          </svg> */}
        </div>

        <h2 className="text-3xl font-extrabold  ">{"<Read.me />"} </h2>

        <div className="flex flex-row">
          <button
            className="bg-purple-800 py-3 px-5 text-white font-semibold m-3"
            onClick={() => setOpenPopup(!OpenPopup)}
          >
            Login
          </button>
          <button className="bg-black py-3 px-5 text-white font-semibold m-3">
            Sign up
          </button>
        </div>
      </div>

      {/* Topics  */}
      <div className="flex flex-row items-center px-16 p-3 sticky top-0 bg-white shadow-sm">
        {[
          "Latest",
          "Tech",
          "Startup",
          "Business",
          "Finance",
          "Coding",
          "Programming",
          "Banking",
          "Design",
          "Stock Market",
          "Art",
          "Youtube",
        ].map((e) => (
          <p className="py-1 cursor-pointer rounded-full  text-slate-500 px-3 font-base mx-1 text-base">
            {e}
          </p>
        ))}
        <p className="py-1 cursor-pointer rounded-full  px-5 font-normal mx-1">
          + see more
        </p>
      </div>
      {/* Main Section*/}
      <div className="flex flex-row ">
        <div className="w-full flex flex-col px-20 py-3">
          {/* Tab Bar*/}
          <div className="flex flex-row my-4 ">
           
           
            <Tab title={"Recommended articles"} index={0} />
            
            <Tab title={"Followed authors"} index={1} />
            
            <Tab title={"Saved articles"} index={2} />
            <div className="border-b flex-1"></div>
          </div>
          {/* Tab Bar View*/}
          {getTabView(TabIndex)}
        </div>
        {/* Features area */}
        <div className="w-1/2 py-5 pr-10 flex flex-col">
          {/* get unlimited access */}
          <div className="bg-slate-50 rounded-xl shadow-md flex flex-row p-5 justify-around">
            <div className="flex flex-col items-start">
              <h1 className="text-xl font-bold">
                Get Unlimited Access to Read.me pro{" "}
              </h1>
              <h1 className="text-sm py-2 text-slate-500">
                Plans strating from $5/month
              </h1>
              <Link href={"/blog/payments"}>
                <button className="rounded-xl bg-slate-200 p-2 font-semibold text-sm">
                  Get Unlimited Access
                </button>
              </Link>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-24 h-24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
          </div>
          {/* Top Stories */}
          <h1 className="text-2xl font-bold py-3">Top Stories</h1>
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <BlogTile />
          <div className="flex flex-wrap justify-items-start text-slate-400 items-start">
            {[
              "Help",

              "Status",

              "Writers",

              "Blog",

              "Careers",

              "Privacy",

              "Terms",

              "About",

              "Knowable",
            ].map((e) => (
              <p className="p-2 hover:text-slate-600 cursor-pointer">{e}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}





export function BlogTile() {
  return (
    <div className="flex flex-col border-b py-2">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h1 className=" text-md py-2 font-semibold cursor-pointer">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </h1>
          <p className="text-slate-500 text-sm font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </p>
        </div>
        <img
          src="https://d12tbd6xzgxi73.cloudfront.net/app/uploads/2021/04/how-laptops.jpg"
          alt="blogimg"
          className="h-24 w-32 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

function BlogCard() {
  return (
    <div className="flex flex-col border-b py-3">
      <div className="flex flex-row items-center">
        <img
          src="https://webshop.elsevier.com/images/one-person.jpg"
          alt="authorimage"
          className="w-10 h-10 object-cover rounded-full"
        />
        <div className="flex flex-col px-4">
          <p className="text-sm font-semibold ">Author</p>
          <p className="text-xs font-normal text-slate-400 ">
            CEO Treaveller | 16 Aug, 2022
          </p>
        </div>
        <div className="mx-auto"></div>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col">
          <Link href={"/blog/create"}>
            <h1 className=" text-xl py-2 cursor-pointer hover:underline">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui,
              saepe!
            </h1>
          </Link>

          <p className="text-slate-500 text-base font-normal">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro odio
            voluptates perferendis, eveniet voluptas, exercitationem corrupti
            qui debitis deserunt consequatur dolore ad velit, sed optio? A
            minima culpa cumque atque neque
          </p>

          <div className="flex flex-row py-3">
            <p className="py-1 cursor-pointer text-sm rounded-full bg-slate-100 px-3 font-semibold ">
              15,250 Like
            </p>
          </div>
        </div>
        <div className="mx-8"></div>
        <img
          src="https://d12tbd6xzgxi73.cloudfront.net/app/uploads/2021/04/how-laptops.jpg"
          alt="blogimg"
          className="h-40  w-52 rounded-xl object-cover"
        />
      </div>
    </div>
  );
}


