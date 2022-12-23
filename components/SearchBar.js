import { Combobox } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
  { id: 6, name: "Christen Wales" },
  { id: 7, name: "Ana Medis" },
  { id: 8, name: "Tylor Grey" },
  { id: 9, name: "Jack Hughings" },
  { id: 10, name: "Laila Burtcher" },
  { id: 11, name: "Nitesh Bhagat" },
  { id: 12, name: "Rayman Siemens" },
];

export default function SearchBar() {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleOnChangeCombobox = (e) => {
    setSelectedPerson(e);
    router.push(`/user?${e}`);
  };

  return (
    <div className=" flex  rounded-full px-2   relative  bg-slate-100 hover:bg-slate-200  items-center justify-center ">
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
        <Combobox.Options className="absolute top-11 w-full  ">
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
                      `relative cursor-default select-none py-2 pl-10 pr-4 bg-[#fbfbfb] shadow-xl ${
                        active ? "bg-teal-100 text-slate-900" : "text-gray-900"
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
