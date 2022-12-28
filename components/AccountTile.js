import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationOn, MdVerified } from "react-icons/md";

export default function AccountTile() {
  return (
    <Link href={"/alex.chacon"}>
      <div className="overflow-hidden  items-center flex flex-row  h-24 border border-slate-100 rounded-2xl hover:bg-stone-100 cursor-pointer ">
        {/* profile picture */}
        <img
          src={"https://miro.medium.com/max/1100/0*PYIfVeHV1Qd32X31"}
          alt="flutter"
          className="w-1/3 sm:w-1/6 aspect-square -ml-5 object-cover rounded-full "
        />
        {/* details */}
        <div className="flex flex-col p-2 justify-start items-start">
          <h1 className="text-lg  font-bold flex flex-row items-center space-x-1">
            <span>Nitesh Bhagat</span>
            <MdVerified className="text-teal-500" />
          </h1>
          <h1 className="text-sm  font-base text-slate-500">
            Software Developer
          </h1>
          {/* location */}
          <div className="flex flex-row items-center text-slate-500 space-x-1">
            <MdLocationOn />
            <span className="text-sm">Kolkata, India</span>
          </div>
          {/* email */}
        </div>
      </div>
    </Link>
  );
}
