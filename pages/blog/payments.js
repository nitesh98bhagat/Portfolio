import Link from "next/link";
import { useState } from "react";

export default function PaymentPage() {
  const [plan, setPlan] = useState(0);

  return (
    <div className="flex flex-col  items-center h-screen absolute inset-0 ">
    <h1 className="text-5xl font-bold  pt-3 text-center text-slate-900">
      Read.me
    </h1>
    <h1 className="text-2xl text-slate-500 font-semibold mb-5 text-center">
      Choose Your Plan
    </h1>

    {/* Choose plan */}
    <div className="flex flex-row ">
      {/* plan-1 */}
      <div className="flex flex-col rounded-lg shadow-md border p-5 bg-white ">
        <h1 className="text-2xl font-bold pb-5">Beginners plan</h1>
        {[
          "Get Unlimited Articles",
          "Asked Directly to Author",
          "Lorem ipsum dolor",
          " sit amet consectetur adipisicing elit.",
        ].map((e) => (
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-purple-500"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-base  text-slate-500 px-2">{e}</p>
          </div>
        ))}
        <div className="my-auto"></div>

        <h1 className="text-2xl font-bold py-5">Free</h1>

        <h1
          className={`text-xl text-white text-center rounded-lg p-2 cursor-pointer ${
            plan === 0 ? "bg-purple-800 " : " border-2 text-purple-800"
          } `}
          onClick={() => setPlan(0)}
        >
          {plan === 0 ? "Selected" : "Select"}
        </h1>
      </div>
      <div className="mx-2"></div>
      {/* plan-2 */}
      <div className="flex flex-col rounded-lg shadow-md p-5 border bg-white ">
        <h1 className="text-2xl font-bold pb-5">Pro plan</h1>
        {[
          "Get Unlimited Articles",
          "Asked Directly to Author",
          "Lorem ipsum dolor",
          " sit amet consectetur adipisicing elit.",
          "Lorem ipsum dolor",
          " sit amet consectetur adipisicing elit.",
        ].map((e) => (
          <div className="flex ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-purple-500"
            >
              <path
                fillRule="evenodd"
                d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-base  text-slate-500 px-2">{e}</p>
          </div>
        ))}
        <div className="my-auto"></div>

        <h1 className="text-2xl font-bold py-5">$50/year</h1>

        <h1
          className={`text-xl text-white text-center rounded-lg p-2 cursor-pointer ${
            plan === 1 ? "bg-purple-800 " : " border-2 text-purple-800"
          } `}
          onClick={() => setPlan(1)}
        >
          {plan === 1 ? "Selected" : "Select"}
        </h1>
      </div>
    </div>

    <h1
      className={`text-xl text-white bg-black text-center w-1/2 rounded-lg p-3  m-5 cursor-pointer `}
      
    >
      Continue
    </h1>
    <Link href={"/blog"}>
      <h1 className="text-xl cursor-pointer text-cancel font-semibold  text-center">
        Cancel
      </h1>
    </Link>
  </div>
  );
}
