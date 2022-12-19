import Link from "next/link";

export default function SchoolCard({ props }) {
  const { type, name, address, rating, img } = props;

  return (
    <Link href="/school_page">
      <a>
        <div className="bg-white shadow-md h-96 rounded-xl flex flex-col   cursor-pointer">
          <img
            src={img ?? "https://www.tibs.org.tw/images/default.jpg"}
            alt="schooliMage"
            className=" h-48 rounded-t-lg"
          />
          <div className="flex flex-col px-3 py-2">
            <h1 className="text-sm font-semibold text-slate-500">
              {type ?? "xCo-Ed"}
            </h1>
            <h1 className="text-base font-semibold py-2">
              {name.substring(0, 35) + "..." ??
                "   St. Thomas' Boys' School (Kolkata)"}
            </h1>
            <h1 className="text-sm w-full text-gray-500 mb-5">
              {" "}
              {address.substring(0, 60) + "..." ?? "address"}
            </h1>

            <h1 className="text-xs  font-bold text-slate-500">Rating</h1>
            <div className="flex flex-row ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
              <h1 className="font-bold">{rating ?? 0.0}</h1>

              <h1 className="text-sm flex flex-row justify-center ml-auto p-1 items-center">
                <p className="pr-3">Visit School</p>
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
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </h1>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}

export function SchoolCardNew({ props }) {
  const { type, name, address, rating, img } = props;

  return (
    <div className="flex flex-col items-center justify-center border p-5 hover:scale-105 rounded-xl h-96">
      <div className="flex flex-row justify-between w-full">
        <h1 className="text-sm font-semibold text-center ">{type}</h1>
        <div className="mx-auto"></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6 text-yellow-400"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="font-bold">{rating ?? 0.0}</h1>
      </div>
      <img
        src={img}
        alt="school image"
        className="object-contain w-full h-40  p-5"
      />

      <div className="my-auto">
        {" "}
        <h1 className="text-lg text-center font-semibold">{name}</h1>
        <h1 className="text-xs font-medium text-slate-600 text-center">
          {address}
        </h1>
      </div>
      <Link href={"/school-page"}>
        <button className=" hover:bg-blue-800 w-full my-5 text-blue-900 border border-blue-900 hover:text-white p-2 rounded-md">
          Visit School
        </button>
      </Link>
    </div>
  );
}
