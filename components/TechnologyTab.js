import { AiFillInfoCircle } from "react-icons/ai";

export default function TechnologyTab() {
  const technologiesList = [
    {
      title: "Flutter",
      subtitle: "Cross Platfrom Mobile App Development",
      image:
        "https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/02/Flutter-Framework-Feature-Image-Background-Colour.png",
    },
    {
      title: "React js",
      subtitle: "Frontend Framework",
      image: "https://www.ritechpune.com/backend/courseicon/ReactJS.png",
    },
    {
      title: "Next js",
      subtitle: "Full-Stack Framework",
      image: "https://miro.medium.com/max/1000/1*htbUdWgFQ3a94PMEvBr_hQ.png",
    },
    {
      title: "Express js",
      subtitle: "Backend Framework",
      image:
        "https://www.edureka.co/blog/wp-content/uploads/2019/07/express-logo.png",
    },
    {
      title: "Tailwind Css",
      subtitle: "CSS Framework",
      image:
        "https://yt3.ggpht.com/ikv41jMTr1uHGdILrJhvbfVJcDt4oqhwApKX37TjAleF_cRPbF2W-waj7uMnS5JySvnlvAlTCg=s900-c-k-c0x00ffffff-no-rj",
    },
    {
      title: "MongoDB",
      subtitle: "NoSQL Database",
      image:
        "https://www.commvault.com/wp-content/uploads/2019/08/mongodb-logo2.jpg?quality=80&w=930",
    },
    {
      title: "Firebase",
      subtitle: "Backend platform",
      image: "https://firebase.google.com/images/social.png",
    },
  ];

  return (
    <div className="flex flex-col p-1 space-y-2 ">
      <div className=" flex flex-row space-x-3  p-2 text-slate-500 text-sm ">
        <AiFillInfoCircle size={20} />
        <span>{"These are the technologies that I've worked on"}</span>
      </div>
      {/* tile */}

      {technologiesList.map((e) => (
        <TechTile
          key={e.image}
          title={e.title}
          subtitle={e.subtitle}
          image={e.image}
        />
      ))}
    </div>
  );
}

function TechTile({ title, subtitle, image }) {
  return (
    <div className="overflow-hidden justify-between items-center flex flex-row bg-teal-200 h-28 shadow rounded-lg ">
      <div className=" flex flex-col p-5">
        <p className="text-xl sm:text-2xl font-bold">{title ?? "Title"}</p>
        <p className="text-base sm:text-lg">{subtitle ?? "Subtitle"}</p>
      </div>
      <img
        src={
          image ??
          "https://winaero.com/blog/wp-content/uploads/2019/11/Photos-new-icon.png"
        }
        alt="flutter"
        className="w-48 h-40 -mr-10 object-cover rounded-full "
      />
    </div>
  );
}
