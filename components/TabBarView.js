import RatingCard from "./RatingCard";
import data from "../data";
import AnouncementCard from "./AnouncementCard";
import FacultyCard from "./FacultyCard";
import ContactPill from "./ContactPill";
import { useState } from "react";

export function OverviewTab() {
  return (
    <div className="px-5  ">
      <h1 className="text-2xl my-4 font-bold">About School</h1>
     
      <p className="text-base text-slate-600 ">
        This seems to be the driving force when Shri R.N. Singh Memorial High
        School came to existence. The school was founded in 1963 by Ms Triveni
        Singh and Sri Ram Narayan Singh, great educationists and visionaries
        with the noble intention of catering to the middle and lower middle
        class students. We believe that one of the most important functions of
        school is to maintain the continuity of social lift by handing down
        traditions, experiences, values and customs of the society; from one
        generation to the other. The progress of the society depends upon the
        transmission of knowledge and skills from one generation to the next.
      </p>
      {/* <hr className="my-2" /> */}
      {/* From principle desk */}
      <h1 className="text-2xl my-8 font-bold">From the Principal's Desk</h1>
      <div className="flex flex-col bg-slate-100  p-5 rounded-xl shadow-md my-5">
        <div className="flex flex-row items-center">
          <img
            src="https://schooldekho.org/storage/principal//ct0zg8l8a28swcgs480gwwook40kskc.jpg"
            alt="principle image"
            className="w-16 h-16 rounded-full"
          />
          <p className="text-2xl font-semibold p-2">Mr. Bikash Mondal</p>
        </div>
        <p className="py-2">A warm welcome to each one who visits the Don Bosco School Park Circus website. It is through this medium that we offer you an insight into the lives and activities of our students and members of the staff. Our school is doing its part by instilling good moral values in our boys. At the same time, we are incorporating the use of technology into our teaching methods to enable our boys to be well equipped to understand as well as take on any challenges they may face as they step out into an ever evolving world.</p>
       
      </div>

      {/* highlight */}
      <h1 className="text-2xl font-bold py-8 mt-3">Highlight</h1>
      <div className="grid grid-cols-2 gap-4  ">
        {[
          "Modern Security System",
          "Well Equipped Laboratories",
          "First Aid Room",
          "Auditorium",
          "Basketball Court",
          "Library",
          "Multipurpose Hall",
          "Activity Room",
          "Music",
          " Dance",
          " Arts",
          "Crafts Room",
          "Additional Extracurricular activities",
        ].map((e) => (
          <ContactPill
            title={e}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <path
                  fillRule="evenodd"
                  d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
                  clipRule="evenodd"
                />
              </svg>
            }
          />
        ))}
      </div>
      {/* Review & Rating */}
      <h1 className="text-2xl font-bold py-8 mt-3">Review & Ratings</h1>
      {/* review snapshot */}
      <div className="flex flex-row justify-between ">
        <div className="bg-blue-900 rounded-lg p-5 flex flex-col items-center justify-center w-32 h-32  ">
          <p className="font-bold text-3xl text-white">4.2</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/*  review grid*/}

        <div className="grid grid-cols-3 ">
          {[
            "Academic: 0/10",

            "Fees: 0/10",

            "Teachers: 0/10",

            "Location: 0/10",

            "Social Life: 0/10",

            "Facilities: 0/10",

            "Accommodation: 0/10",
          ].map((e) => (
            <p className="font-semibold py-2 px-1  text-slate-500">{e}</p>
          ))}
        </div>
      </div>
      {data.review.map((e) => (
        <RatingCard name={e.name} rating={e.ratings} review={e.review} />
      ))}
    </div>
  );
}

export function ReviewRatingTab() {
  return (
    <div className="px-5 flex flex-col">
      {/* Review & Rating */}
      <h1 className="text-xl font-bold py-3 mt-3">Review & Ratings</h1>
      {/* review snapshot */}
      <div className="flex flex-row justify-between">
        <div className="bg-blue-900 rounded-lg p-5 flex flex-col items-center justify-center w-32 h-32  ">
          <p className="font-bold text-3xl text-white">4.2</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10 text-yellow-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        {/*  review grid*/}

        <div className="grid grid-cols-3 ">
          {[
            "Academic: 0/10",

            "Fees: 0/10",

            "Teachers: 0/10",

            "Location: 0/10",

            "Social Life: 0/10",

            "Facilities: 0/10",

            "Accommodation: 0/10",
          ].map((e) => (
            <p className="font-semibold py-2 px-1  text-slate-500">{e}</p>
          ))}
        </div>
      </div>
      {data.review.map((e) => (
        <RatingCard name={e.name} rating={e.ratings} review={e.review} />
      ))}
    </div>
  );
}

export function AnouncementTab() {
  return (
    <div className="flex flex-col">
      <AnouncementCard />
      <AnouncementCard />
      <AnouncementCard />
      <AnouncementCard />
      <AnouncementCard />
      <h1 className="text-xl text-center text-slate-400 p-5">
        no more anouncement!
      </h1>
    </div>
  );
}

export function GalleryTab() {
  return (
    <div className="flex flex-col p-2">
      <h1 className="text-lg  text-slate-600 font-semibold py-3 ">
        School Upload
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {[
          "https://images.collegedunia.com/public/college_data/images/campusimage/14152499974.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/14152499975.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/14152499976.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/141524999710.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/14152499978.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/141524999714.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/145890094014152499971.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/145890094014152499973.JPG?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/15936131401.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/15936131409.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/159361314011.jpg?h=135&w=205&mode=stretch",
        ].map((e) => (
          <img src={e} />
        ))}
      </div>
      <h1 className="text-lg  text-slate-600 font-semibold py-3 ">
        Event Upload
      </h1>
      <div className="grid grid-cols-4 gap-2">
        {[
          "https://images.collegedunia.com/public/college_data/images/campusimage/15936131404.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/159361314010.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/159361314016.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/159361314012.jpg?h=135&w=205&mode=stretch",
          "https://images.collegedunia.com/public/college_data/images/campusimage/159361314010.jpg?h=135&w=205&mode=stretch",
        ].map((e) => (
          <img src={e} />
        ))}
      </div>
    </div>
  );
}

// Information Tab
export function InformationTab() {
  return (
    <div className="flex flex-col p-3">
      {/* Eligibility Criteria  */}
      <EligibilityCriteria />

      {/* Seat Avalibility  */}
      <SeatAvalibility />

      {/* Fees Structure  */}

      <FeesStructure />

      {/* Faculty members */}
      <h1 className="text-xl font-bold text-slate-900 py-4">Faculty Members</h1>

      <div className="grid grid-cols-2 gap-2">
        {data.faculty.map((e) => (
          <FacultyCard props={e} />
        ))}
      </div>
    </div>
  );
}

function FeesStructure() {
  const [openTable, setOpenTable] = useState(false);
  return (
    <div className="flex flex-col">
      <h1
        className="flex flex-row justify-between text-xl hover:bg-slate-50 border font-semibold text-slate-600 p-4 border-slate-100 cursor-pointer"
        onClick={() => setOpenTable(!openTable)}
      >
        Fees Structure
        {openTable ? (
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </h1>
      {openTable && (
        <table className=" table-fixed border rounded-xl  ">
          <thead>
            <tr>
              <th className="text-left p-2 bg-slate-100 text-slate-600 w-1/2 px-10 ">
                Class
              </th>
              <th className="text-left p-2 bg-slate-100 text-slate-600 ">
                Monthly Fees
              </th>
              <th className="text-left p-2 bg-slate-100 text-slate-600 ">
                Exam Fees
              </th>
              <th className="text-left p-2 bg-slate-100 text-slate-600 ">
                Total Fees
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              { class: "Class 1", fees: 1200, examfees: 100 },
              { class: "Class 2", fees: 5400, examfees: 240 },
              { class: "Class 3", fees: 5400, examfees: 240 },
              { class: "Class 4", fees: 5400, examfees: 240 },
              { class: "Class 5", fees: 5400, examfees: 240 },
              { class: "Class 6", fees: 5400, examfees: 240 },
              { class: "Class 7", fees: 5400, examfees: 240 },
              { class: "Class 8", fees: 5400, examfees: 240 },
              { class: "Class 9", fees: 5400, examfees: 240 },
              { class: "Class 10", fees: 5400, examfees: 240 },
            ].map((e) => (
              <tr className="border-b-2 border-slate-100">
                <td className=" p-2 font-semibold px-10 ">{e.class}</td>
                <td className="p-2">{e.fees}/-</td>
                <td className="p-2">{e.examfees}/-</td>
                <td className="p-2 font-bold">{e.examfees + e.fees}/-</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function SeatAvalibility() {
  const [openTable, setOpenTable] = useState(false);
  return (
    <div className="flex flex-col">
      <h1
        className="flex flex-row justify-between text-xl hover:bg-slate-50 border font-semibold text-slate-600 p-4 border-slate-100 cursor-pointer"
        onClick={() => setOpenTable(!openTable)}
      >
        Seat Avalibility
        {openTable ? (
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </h1>
      {openTable && (
        <table className="  table-fixed border rounded-xl  ">
          <thead>
            <tr>
              <th className="text-left p-2 bg-slate-100 text-slate-600 px-20  ">
                Class
              </th>
              <th className=" p-2 bg-slate-100 text-slate-600 ">Seats</th>
            </tr>
          </thead>
          <tbody>
            {[
              { class: "Class 1", seats: 60 },
              { class: "Class 2", seats: 60 },
              { class: "Class 3", seats: 60 },
              { class: "Class 4", seats: 60 },
              { class: "Class 5", seats: 60 },
              { class: "Class 6", seats: 60 },
              { class: "Class 7", seats: 60 },
              { class: "Class 8", seats: 60 },
              { class: "Class 9", seats: 60 },
              { class: "Class 10", seats: 60 },
            ].map((e) => (
              <tr className="border-b-2 border-slate-100">
                <td className=" p-2 font-semibold px-20 ">{e.class}</td>
                <td className="p-2 text-center font-semibold">
                  {e.seats} Seats
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

function EligibilityCriteria() {
  const [openTable, setOpenTable] = useState(false);
  return (
    <div className="flex flex-col">
      <h1
        className="flex flex-row justify-between text-xl hover:bg-slate-50 border font-semibold text-slate-600 p-4 border-slate-100 cursor-pointer"
        onClick={() => setOpenTable(!openTable)}
      >
        Eligibility Criteria
        {openTable ? (
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
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        ) : (
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        )}
      </h1>
      {openTable && (
        <table className=" table-fixed border rounded-xl  ">
          <thead>
            <tr>
              <th className="text-left p-2 bg-slate-100 text-slate-600 px-10  ">
                Class
              </th>
              <th className=" p-2 text-left bg-slate-100 text-slate-600 ">
                Eligibility
              </th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                class: "LKG",
                statement:
                  "Application forms will be available from 13th September 2020 to 30th September, Children born between 01.12.2016 to 31.12.2017",
              },
              {
                class: "UKG",
                statement:
                  "Students should obtain 40% marked in all the subject for promotion. ",
              },
              {
                class: "Class I",
                statement:
                  "	Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child. ",
              },
              {
                class: "Class II",
                statement:
                  "Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class III",
                statement:
                  "Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class IV",
                statement:
                  "Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class V",
                statement:
                  "Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class VI ",
                statement:
                  " Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class VII",
                statement:
                  "Parents who seek admission of their children (Transfer cases only) for Classes I. to VII are requested to submit a written application along with the Progress Report of the child.",
              },
              {
                class: "Class VIII",
                statement:
                  "No new admission will be taken in Classes VIII, IX, X, XII.",
              },
              {
                class: "Class IX",
                statement:
                  "No new admission will be taken in Classes VIII, IX, X, XII.",
              },
              {
                class: "Class X",
                statement:
                  "No new admission will be taken in Classes VIII, IX, X, XII.",
              },
              {
                class: "Class XI",
                statement:
                  "Mary Immaculate School requires 80% of marks in Science in the ICSE Examinations.",
              },
              {
                class: "Class XII",
                statement:
                  "No new admission will be taken in Classes VIII, IX, X, XII.",
              },
            ].map((e) => (
              <tr className="border-b-2 border-slate-100">
                <td className=" p-2 text-left font-semibold px-10 w-40 ">
                  {e.class}
                </td>
                <td className="p-2 text-left font-normal text-base text-slate-600">
                  {e.statement} Seats
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

// About Tab
export function AboutTab() {
  return (
    <div className="flex flex-col p-5">
      <h1 className="text-2xl font-bold py-3 ">About the School</h1>
      <p className="text-base text-slate-600">
        This seems to be the driving force when Shri R.N. Singh Memorial High
        School came to existence. The school was founded in 1963 by Ms Triveni
        Singh and Sri Ram Narayan Singh, great educationists and visionaries
        with the noble intention of catering to the middle and lower middle
        class students. We believe that one of the most important functions of
        school is to maintain the continuity of social lift by handing down
        traditions, experiences, values and customs of the society; from one
        generation to the other. The progress of the society depends upon the
        transmission of knowledge and skills from one generation to the next.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        dolores illum quibusdam beatae qui, fugiat aperiam est atque tenetur
        natus, voluptatum cupiditate saepe nihil? Magnam illum corrupti adipisci
        delectus ullam. Lorem ipsum, dolor sit amet consectetur adipisicing
        elit. Ducimus, voluptatem. Officia laboriosam sapiente fugiat eligendi
        maxime corrupti voluptas debitis alias cumque blanditiis repellendus
        tempora asperiores maiores esse non quia magni saepe ipsum id, eveniet
        fugit ab eius explicabo. Veritatis quam quae similique minus repellendus
        ducimus itaque consequuntur animi dolorum id voluptate, nobis
        necessitatibus! Quo voluptate quae nesciunt modi praesentium at non
        alias eveniet quod? Natus sint, eveniet repellat quis iure eos veniam
        perferendis consequuntur voluptates quos minus omnis tempora modi
        laboriosam minima quia, illo praesentium quidem magni temporibus fuga?
        Magnam nihil laboriosam at obcaecati maiores eos quos consequuntur ut
        molestiae aut. Optio eum pariatur exercitationem iusto quas inventore
        numquam excepturi ab harum magnam. Reiciendis eveniet, at repudiandae
        minus velit veritatis incidunt optio sint odit beatae odio tempore illum
        commodi nulla aut provident illo quo error voluptas nisi quas!
        Distinctio fuga, voluptates unde veniam quidem, quia minus provident ad
        porro dolore laboriosam excepturi quaerat similique sunt eaque
        reprehenderit odit dolorum eius ducimus voluptate commodi omnis autem
        adipisci accusantium! Sequi cupiditate nam sit quis consectetur, rerum
        ea suscipit neque dolorum consequuntur nihil quia officia maxime beatae
        molestiae. Perspiciatis sunt, delectus eligendi tempora optio suscipit
        ullam, vero perferendis earum nisi ipsum nihil maxime?
      </p>
    </div>
  );
}
