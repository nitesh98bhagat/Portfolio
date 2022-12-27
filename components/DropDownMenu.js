import { Menu, Transition } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { GoGear, GoPerson, GoSignOut } from "react-icons/go";

export default function DropDownMenu({ displayName, displayImage }) {
  const router = useRouter();
  return (
    <div className=" w-full  ">
      <Menu as="div" className="">
        <div>
          <Menu.Button className="flex flex-row items-center  sm:space-x-3">
            <div className="flex-col hidden sm:flex items-start px-1">
              <span className="text-xs">Signed in as</span>
              <span className="text-xs font-medium  line-clamp-1 text-left">
                {displayName}
              </span>
            </div>

            {/* <div className=" w-10 h-10 relative  overflow-hidden  rounded-full border-2 p-1  border-teal-500"> */}
            <Image
              src={displayImage}
              alt="nitesh bhagat"
              width={35}
              height={35}
              // layout="fill" // resquired
              // objectFit="fill"
              className="rounded-full border-2"
            />
            {/* </div> */}
            <BiChevronDown
              className=" h-5 w-5 text-slate-800 hover:text-teal-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        {/* options */}
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute overflow-hidden  right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-[#fbfbfb] shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" ">
              {[
                {
                  title: "My Profile",
                  icon: <GoPerson size={20} />,
                  link: "/profile",
                },
                {
                  title: "Settings",
                  icon: <GoGear size={20} />,
                  link: "/settings",
                },
              ].map((e) => (
                <Menu.Item key={e.title}>
                  {({ active }) => (
                    <button
                      onClick={() => router.push(e.link)}
                      className={`${
                        active ? "bg-teal-500 text-white" : "text-gray-900"
                      } group flex space-x-2  w-full items-center  py-2 px-4 text-sm`}
                    >
                      <span>{e.icon}</span>
                      <span>{e.title}</span>
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
            <div className="">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={signOut}
                    className={`${
                      active ? "bg-teal-500 text-white" : "text-gray-900"
                    } group flex space-x-2  w-full items-center  py-2 px-4 text-sm`}
                  >
                    <span>
                      <GoSignOut size={20} />
                    </span>
                    <span>Sign out</span>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
