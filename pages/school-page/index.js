import { useState } from "react";
import FeaturingSection from "../../components/FeatureSection";
import SchoolCard, { SchoolCardNew } from "../../components/SchoolCard";
import SideBar from "../../components/SideBar";

// slider
import { Navigation, Pagination, Autoplay, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {
  GalleryTab,
  AnouncementTab,
  OverviewTab,
  ReviewRatingTab,
  InformationTab,
  AboutTab,
} from "../../components/TabBarView";
import dataNew from "../../data";

export default function SchoolPage() {
  const [navIndex, setNavIndex] = useState(0);

  function getTabView(index) {
    switch (index) {
      case 0:
        return <OverviewTab />;
      case 1:
        return <AnouncementTab />;
      case 2:
        return <InformationTab />;
      case 3:
        return <GalleryTab />;
      case 4:
        return <ReviewRatingTab />;

      case 5:
        return <AboutTab />;

      default:
        return <h1>hmm, not sure what you`re looking for...</h1>;
    }
  }

  function NavPill({ title, index }) {
    return (
      <p
        onClick={() => setNavIndex(index)}
        className={`py-3  text-base font- cursor-pointer ${
          navIndex === index && "text-blue-900 font-bold border-b-2 border-blue-900 "
        } hover:text-blue-700 text-slate-600`}
      >
        {title ?? "Home" + index}
      </p>
    );
  }

  return (
    <div className="flex flex-col ">
      {/* <img src="https://redox-uat.s3.ap-south-1.amazonaws.com/mps/2020/Jul/22/I1KNb0jHkXwxUdkMCh6i.jpg" alt="banner" className="h-64 w-full object-cover" /> */}
      <div className="flex flex-row  w-full px-5">
        {/* Sidebar-profile */}
        <SideBar />
        {/* feed */}
        <div className="w-10/12 ">
          {/* <img src="https://redox-uat.s3.ap-south-1.amazonaws.com/mps/2020/Jul/22/I1KNb0jHkXwxUdkMCh6i.jpg" alt="banner" className="h-60 w-full object-cover" /> */}
          <div className=" border-slate-100 border-x-2 border-b-2">
            <div className="flex flex-row justify-around border-b-2 border-slate-100 px-3 sticky top-16 bg-white">
              <NavPill title={"Overview"} index={0} />
              <NavPill title={"Anoucement"} index={1} />
              <NavPill title={"Information"} index={2} />
              <NavPill title={"Gallery"} index={3} />
              <NavPill title={"Ratings & Reviews"} index={4} />
              <NavPill title={"About "} index={5} />
            </div>

            {getTabView(navIndex)}
          </div>
        </div>
        {/* Map view */}
        <FeaturingSection />
      </div>
      <div className="p-3 flex flex-col items-center">
        <div className="text-center py-5 ">
          <h1 className="text-4xl text-slate-600 font-bold ">
            Similar Schools You may Be Interested in
          </h1>
          <h1 className="text-xl">
            The schools with excellent educational values and top facilities
          </h1>
        </div>
        <div className="w-full">
          <Swiper
            className=""
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={5}
            slidesPerView={4}
            navigation
            autoplay
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {dataNew.nearSchool.map((e) => (
              <SwiperSlide key={e.id} className="my-16 mx-5">
                <SchoolCardNew props={e} key={e.img} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <button className="px-5 py-3 m-10 text-xl hover:bg-blue-900 hover:text-white rounded-full font-bold border-2 border-blue-900 text-blue-900">
          View more
        </button>
      </div>
    </div>
  );
}
