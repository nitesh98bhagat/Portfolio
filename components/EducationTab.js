import { AiFillInfoCircle } from "react-icons/ai";

export default function EducationTab() {
  const educationList = [
    {
      degree: "Secondary Education",
      year: "2004-2014",
      institute: "Vidya Vikash High School Garifa",
      subtitle: "Class 1 - Class 10",
    },
    {
      degree: "Higher Secondary Education",
      year: "2014-2016",
      institute: "Dum Dum K.L.S Hindi Vidyalaya",
      subtitle: "Science | Class 11 - Class 12",
    },
    {
      degree: "B.Sc",
      year: "2016-2017",
      institute: "Serampore College",
      subtitle: "Dropped out",
    },
    {
      degree: "Diploma in Coumputer Science",
      year: "2017-2020",
      institute: "Regent Institute Science & Technology",
      subtitle: "",
    },
    {
      degree: "B.Tech in Computer Science",
      year: "2020-2023",
      institute: "Regent Education and Research Foundation",
      subtitle: "",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className=" flex flex-row space-x-3 bg-white sm:bg-[#fbfbfb] p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are my educational background"}</span>
      </div>
      {educationList
        .map((e) => (
          <EducationTile
            key={e.degree}
            year={e.year}
            school={e.institute}
            degree={e.degree}
            subtitle={e.subtitle}
          />
        ))
        .reverse()}
    </div>
  );
}

function EducationTile({ school, year, degree, subtitle }) {
  return (
    <div className="flex flex-row  justify-start space-x-5 sm:space-x-16 bg-white sm:bg-[#fbfbfb] p-5  border-b border-slate-200">
      <div className="flex flex-col  ">
        <span class="font-semibold title-font text-gray-700 text-sm ">
          YEAR
        </span>
        <span class="mt-1 text-gray-500 text-sm">{year ?? "2004-2014"}</span>
      </div>
      <div className="flex flex-col ">
        <h2 class="text-base sm:text-xl font-medium text-gray-900">
          {degree ?? "Lorem ipsum dolor sit amet."}
        </h2>
        <span class="font-normal text-sm text-gray-500">
          {school ?? "YEAR"}
        </span>
        <p className="text-sm text-slate-400">{subtitle}</p>
      </div>
    </div>
  );
}
