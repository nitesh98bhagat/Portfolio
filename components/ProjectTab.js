import { AiFillInfoCircle } from "react-icons/ai";

export default function ProjectTab() {
  const projectList = [
    {
      image: "image",
      title: "E-commerce app",
      subtitle: "An e-commerce app built with Next.js, Tailwind.Css",
    },
    {
      image: "image",
      title: "Zeeoro Startup Landing page",
      subtitle: "A website built with React",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
    {
      image: "image",
      title: "Lorem ipsum dolor sit amet.",
      subtitle:
        "      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, tenetur.      ",
    },
  ];

  return (
    <div>
      <div className=" flex flex-row space-x-3 bg-white sm:bg-[#fbfbfb] p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are the project that I've built"}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4  gap-2    p-2">
        {projectList.map((e) => (
          <ProjectTile key={e.title} e={e} />
        ))}
      </div>
    </div>
  );
}

function ProjectTile({ e }) {
  return (
    <div className="flex flex-col hover:bg-slate-50 cursor-pointer border  border-slate-200 rounded-xl overflow-hidden">
      <img
        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
        alt="postImage"
        className=" aspect-square w-full h-32  object-cover"
      />
      <div className=" p-3  ">
        <h1 className="text-base font-medium">{e.title ?? "Title"}</h1>
        <p className="text-sm text-slate-500 ">{e.subtitle ?? "Subtitle"}</p>
      </div>
    </div>
  );
}
