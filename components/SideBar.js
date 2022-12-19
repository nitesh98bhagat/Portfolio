import ContactPill from "./ContactPill";

export default function SideBar() {
  return (
    <div className=" w-1/3 flex flex-col px-3 pt-3 ">
      <img
        src="https://image.shutterstock.com/image-vector/bachelor-hat-leaf-book-crown-260nw-1947294373.jpg"
        alt="schoolImage"
        className="border-4 rounded-xl w-72 object-cover h-56"
      />

      <div className="px-2">
        <h1 className="text-xl font-bold pt-3">
          Sri Ram Narayan Singh Memorial High School (Kolkata)
        </h1>
        <h1 className="text-sm mt-5 font-semibold">Address:</h1>

        <h1 className="text-base text-slate-600">
          10, Dr. Narayan Roy Sarani,Simla Street, Vivekananda Rd, Sreemani
          Bazar, Machuabazar. , Kolkata , WE - 700006
        </h1>

        <hr className="my-5" />
        {/* Co-ed / Board / Mediuem */}
        <div className="flex flex-row justify-around">
          <div className="">
            <h1 className="text-sm  font-semibold text-slate-500">Type</h1>
            <h1 className="text-lg font-semibold">Co-Ed</h1>
          </div>
          <div className="">
            <h1 className="text-sm  font-semibold text-slate-500">Medium</h1>
            <h1 className="text-lg font-semibold">English</h1>
          </div>
          <div className="">
            {" "}
            <h1 className="text-sm  font-semibold text-slate-500">Board</h1>
            <h1 className="text-lg font-semibold">WBBSE</h1>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center bg-slate-100 rounded-md my-3 text-slate-500">
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
              d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
            />
          </svg>
          <p className="font-bold py-2 px-5">Private School</p>
        </div>

        <hr className="my-5" />

        <ContactPill
          title={"nitshbhgt1998@gmail.com"}
          icon={
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
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          }
        />
        <ContactPill
          title={"+91-9123751640"}
          icon={
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
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
          }
        />

      
      </div>
    </div>
  );
}
