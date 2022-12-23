import React from "react";

function SearchPage() {
  return (
    <div className="flex flex-row w-full sm:w-2/3 h-screen">
      {/* Category */}
      <div className="flex-col flex  border-r ">
        {["Recruiter", "Candidates", "Group", "Company"].map((e) => (
          <p
            key={e}
            className="py-2 px-8 cursor-pointer hover:bg-stone-100 text-base"
          >
            {e}
          </p>
        ))}
      </div>
      {/* main content */}
      <div className="flex flex-1 flex-col bg-[#fbfbfb]">
        <h1 className="text-3xl">Man</h1>
      </div>
    </div>
  );
}

export default SearchPage;
