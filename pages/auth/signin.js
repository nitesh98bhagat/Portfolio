import { signIn } from "next-auth/react";
import React from "react";

function SignInPage() {
  return (
    <div className=" w-full bg-black/30 h-screen flex flex-col items-center justify-center">
      {/* card */}
      <div className="flex-col flex h-1/2 w-1/4 items-center justify-center border bg-[#fbfbfb] p-5 rounded-lg shadow-lg">
        <h1 className="text-4xl font-black     text-black cursor-pointer">
          <span className="bg-teal-600 text-white px-1   rounded-sm ">Cs</span>
          Punk
        </h1>
        <h1 className="p-2 text-xl font-sans mt-2 mb-5 leading-3">
          Home of Devs
        </h1>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "https://nitesh-bhagat.vercel.app/",
            })
          }
          className="p-2 border w-full hover:bg-slate-200 rounded-lg hover:font-semibold"
        >
          Continue with Google
        </button>
        <button className="my-2">back</button>
        <span className="text-slate-400">
          By continuing, you`re agreed to the{" "}
          <span className="font-semibold text-slate-600">Terms of Use</span> &{" "}
          <span className="font-semibold text-slate-600">
            Privacy and Policy
          </span>
        </span>
      </div>
    </div>
  );
}

export default SignInPage;
