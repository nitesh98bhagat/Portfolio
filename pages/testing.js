import { useState } from "react";

import { Combobox } from "@headlessui/react";
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward, IoMdClose } from "react-icons/io";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CiSearch } from "react-icons/ci";
import SearchBar from "../components/SearchBar";

export default function Testing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const SwiperButtonNext = () => {
    const swiper = useSwiper();

    return (
      <button
        className=" p-5 text-white bg-slate-900"
        onClick={() => swiper.slideNext()}
      >
        <IoIosArrowForward className="cursor-pointer " />
      </button>
    );
  };

  const SwiperButtonPrep = () => {
    const swiper = useSwiper();

    return (
      <button
        className=" p-5 text-white bg-slate-900"
        onClick={() => swiper.slidePrev()}
      >
        <IoIosArrowBack className="cursor-pointer" />
      </button>
    );
  };

  return (
    <div className=" w-3/4  ">
      <MyCombobox />
      <h1>search bar</h1>
      <SearchBar />
    </div>
  );
}

// ddddddd

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

function MyCombobox() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");

  const handleOnChangeCombobox = (e) => {
    setSelectedPerson(e);
    // router.push(`/${e}`);
  };

  return (
    <div className=" hidden rounded-full px-2  md:flex bg-slate-100 hover:bg-slate-200  items-center ">
      <CiSearch size={25} />
      <Combobox
        value={selectedPerson}
        onChange={(e) => handleOnChangeCombobox(e)}
      >
        <Combobox.Input
          onChange={(event) => setQuery(event.target.value)}
          className="bg-transparent w-full px-2 focus:ring-0 outline-none flex-1 p-2"
          placeholder="Search..."
          type="text"
          autoComplete="off"
        />
        <Combobox.Options className="absolute top-[7rem] w-3/4 ">
          {query === ""
            ? people.id
            : people
                .filter((person) => {
                  return person.name
                    .toLowerCase()
                    .includes(query.toLowerCase());
                })
                .splice(0, 4)
                .map((item) => (
                  <Combobox.Option
                    key={item.id}
                    value={item.name}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 bg-white shadow-lg ${
                        active ? "bg-slate-200 text-slate-900" : "text-gray-900"
                      }`
                    }
                  >
                    {item.name}
                  </Combobox.Option>
                ))}
        </Combobox.Options>
      </Combobox>
      {query !== "" && (
        <button
          onClick={() => setSelectedPerson("")}
          className="text-slate-800 flex p-2  "
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      )}
    </div>
  );
}
