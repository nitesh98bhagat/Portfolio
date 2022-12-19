import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function CreateBlog() {
  const [initData, setInitData] = useState("# Welcome sir,");

  return (
    <>
    <div className="flex flex-row">
      <textarea
        className="bg-black h-screen w-1/2 text-green-600 text-xl p-5"
        value={initData}
        
        onChange={(e) => setInitData(e.target.value)}
      ></textarea>

      

      <ReactMarkdown >{initData}</ReactMarkdown>
      
    </div>
    </>
  );
}
