import { BiSearch } from "react-icons/bi";

function HelpCenter() {
  return (
    <div className="bg-[#fbfbfb] w-full sm:w-3/4 flex flex-col p-3 space-y-3 relative">
      <div className="flex-col sticky top-0 bg-[#fbfbfb] space-y-3">
        <h1 className="text-4xl font-black">Help center</h1>
        <div className="flex-row flex bg-slate-200 rounded-lg items-center justify-center px-2">
          <BiSearch size={25} />
          <input
            type="text"
            placeholder="Ask your queston?"
            className=" flex-1 px-2 focus:ring-0   outline-none bg-transparent p-2"
          />
        </div>
      </div>

      {/* question */}
      <QuetionTile />
      <QuetionTile />
      <QuetionTile />
      <QuetionTile />
      <QuetionTile />
      <QuetionTile />
    </div>
  );
}

export default HelpCenter;

function QuetionTile() {
  return (
    <div className="flex-col flex p-2 border-b">
      <h1 className="text-xl font-medium">
        <span className="font-black">Q. </span>Lorem ipsum, dolor sit amet
        consectetur adipisicing elit. Molestias blanditiis ipsum aut.
      </h1>
      <p className="text-lg">
        <span className="text-slate-600 font-semibold">Answer:</span>
        <br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos sunt
        quia quaerat temporibus sapiente ullam consequatur fugit vel corporis
        odit nam odio placeat nobis ab vero aliquid earum deleniti rerum
        officiis, totam eum iste? Nulla temporibus nihil iusto ut corporis amet,
        fugit ducimus tempore maxime dolor ipsum non impedit voluptatem.
      </p>
    </div>
  );
}
