import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";

export default function AboutTab() {
  return (
    <div className="flex flex-col p-3 space-y-1">
      <h1 className="text-xl font-medium py-2">About me</h1>
      <p className="text-base sm:text-lg font-light  flex flex-col space-y-2">
        <span>
          I`m a full-stack developer who has experience in various aspects of
          web development ranging from Frontend (React, Next) to Backend
          (Express js) alongside Databases such as MongoDB, Firebase-Firestore &
          Postgress.
        </span>
        <span>
          Apart from Web-Development I`ve also spent a reasonable amount of time
          in Cross-Platform Mobile App Development with Google`s Flutter. To
          know more about flutter
          <a
            href="https://flutter.dev/"
            className=" text-sm  px-2 text-blue-500"
          >
            [Click here]
          </a>
        </span>

        <span>
          Coming up to my interest & hobbies, I like designing User Interfaces
          of various systems like Web-apps, Mobile apps & Desktop apps with
          Adobe XD & Figma.
        </span>
        <span>
          I`ve also made couple of youtube videos explaining technologies in
          English as well as in Hindi.
          <br />
          <a
            href="https://www.youtube.com/watch?v=BKNaqmpU2Rk"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
              <AiFillYoutube size={30} />
              <span>Library vs Framework Explained</span>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=fxbomirnsFw"
            target="_blank"
            rel="noreferrer"
          >
            <div className="flex flex-row text-sm text-slate-600 items-center space-x-2 py-1 hover:underline ">
              <AiFillYoutube size={30} x />
              <span>How Does Internet Works Explaind in Hindi </span>
            </div>
          </a>
        </span>
      </p>

      <div className=" flex flex-col">
        <h1 className="text-xl font-medium py-2">Soft Skill</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>Team work</li>
            <li>Quick Learner</li>
            <li>Active Listener</li>
            <li>Problem Solver</li>
          </ul>
        </p>
      </div>

      <div className=" flex flex-col">
        <h1 className="text-xl font-medium py-2">Hobby & Interest</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>UI/UX Design</li>
            <li>Logo Design</li>
            <li>Content Writing</li>
            <li>Making Youtube Videos</li>
          </ul>
        </p>
      </div>

      {/* Language */}
      <div className="flex-col">
        <h1 className="text-xl font-medium py-2">Languages</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc space-y-2">
            <li>
              <div className="flex flex-col">
                <span className="font-medium">Hindi</span>
                <span>Fluent in Reading, Writiing & Speaking </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span className="font-medium">English</span>
                <span>Fluent in Reading, Writiing & Speaking </span>
              </div>
            </li>
            <li>
              <div className="flex flex-col">
                <span className="font-medium">Bengali</span>
                <span>Familiar in Speaking </span>
              </div>
            </li>
          </ul>
        </p>
      </div>

      {/* Awards */}
      {/* https://i.pinimg.com/736x/bf/f2/99/bff299d82bf83afe21af7d13bd9996ca.jpg */}
      <div
        className="flex-col text-white rounded-lg p-5 "
        style={{
          backgroundImage: `url(https://media.istockphoto.com/id/1194169140/vector/abstract-blue-geometric-shape-background.jpg?s=170667a&w=0&k=20&c=NgsfYIH_OVerFpR-aiaoRdDtF63M6T6rRxV_c_6d72c=)`,
        }}
      >
        <h1 className="text-xl font-medium sm:py-1 ">Awards</h1>
        <p className="text-base sm:text-lg font-light px-5 py-2">
          <ul className="list-disc font-bold  space-y-2">
            <li>Won a 1st prize in Business</li>
            <li>Won a 2nd prize in Model Making</li>
          </ul>
        </p>
      </div>

      <h1 className="text-xl font-medium py-3 sm:py-1">My Social Links</h1>
      <a
        href="https://www.facebook.com/nitesh.bhagat.775"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <SiFacebook size={30} />
          <span>facebook.com/nitesh.bhagat.775</span>
        </div>
      </a>
      <a
        href="https://www.instagram.com/_nitesh_bhagat_/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillInstagram size={30} />
          <span>instagram.com/_nitesh_bhagat_</span>
        </div>
      </a>
      <a
        href="https://twitter.com/myself_nitesh"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillTwitterCircle size={30} />
          <span>twitter.com/myself_nitesh</span>
        </div>
      </a>
      <a
        href="https://www.linkedin.com/in/nitesh-bhagat-a8b996137/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillLinkedin size={30} />
          <span>linkedin.com/in/nitesh-bhagat-a8b996137</span>
        </div>
      </a>
      <a
        href="https://github.com/nitesh98bhagat"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillGithub size={30} />
          <span>github.com/nitesh98bhagat</span>
        </div>
      </a>
      <a
        href="https://www.youtube.com/@Nitesh_Bhagat"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-row text-base text-slate-600 items-center space-x-2 py-1 hover:underline ">
          <AiFillYoutube size={30} />
          <span>youtube.com/@Nitesh_Bhagat</span>
        </div>
      </a>
    </div>
  );
}
