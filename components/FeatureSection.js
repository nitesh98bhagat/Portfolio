export default function FeaturingSection() {
  return (
    <div className="flex flex-col border-slate-100 w-1/3 p-3 ">
      {/* Addmission */}
      <button className="hover:bg-blue-900 px-8 py-3  rounded-lg text-blue-900 border-2 border-blue-900 hover:text-white font-semibold w-full m">
        Apply now
      </button>

      <div className="p-1"></div>

      <button className="hover:bg-green-600 px-8 py-3  rounded-lg text-green-600 border-2 border-green-600 hover:text-white font-semibold w-full ">
        Compare
      </button>

      <div className="p-3"></div>


      <h1 className="text-xl my-3 font-bold">Find us    </h1>

      {/* Map Box */}
      <div className="flex flex-col items-center h-fit  shadow-md ">
        <img
          src="https://geoawesomeness.com/wp-content/uploads/2022/03/maps-broadcom.png"
          alt="map"
        />

        <h1 className="text-base flex flex-row justify-center items-center p-3 ">
          <a href="https://goo.gl/maps/uGJtEB7cssxFHrg88" target="_blank">
            View on map
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </h1>
      </div>
      {/* Openning Hours */}
      <h1 className="text-xl my-5 font-bold">Openning Hours</h1>
      <div className="bg-white flex flex-col">
        <table className=" table-fixed border rounded-xl  ">
          <thead>
            <tr>
              <th className="text-left p-2 bg-slate-100 text-slate-600 px-5  ">
                Day
              </th>
              <th className=" p-2 text-left bg-slate-100 text-slate-600 ">
                Time
              </th>
           
            </tr>
          </thead>
          <tbody>
            {[
              {
                day: "Monday",
                from: "08.00 am",
                to: "06.00 pm",
              },
              {
                day: "Tuesday",
                from: "08.00 am",
                to: "06.00 pm",
              },
              {
                day: "Wednesday",
                from: "08.00 am",
                to: "06.00 pm",
              },
              {
                day: "Thursday",
                from: "08.00 am",
                to: "06.00 pm",
              },
              {
                day: "Friday",
                from: "08.00 am",
                to: "06.00 pm",
              },
              {
                day: "Saturday",
                from: "08.00 am",
                to: "04.00 pm",
              },
              {
                day: "Sunday",
                from: "Off day",
                to: "",
              },
            ].map((e) => (
              <tr className="border-b-2 border-slate-100">
                <td className=" p-2 text-left font-semibold  ">
                  {e.day}
                </td>
                <td className="py-2 px-1 text-left font-normal text-sm text-slate-600">
                  {e.from}-{e.to} 
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
