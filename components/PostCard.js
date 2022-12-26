import Image from "next/image";
import React from "react";

export default function PostCard({
  profilePicture,
  postImage,
  postContent,
  userName,
  time,
}) {
  return (
    <div className="flex flex-row p-1 border-b py-2">
      {/* profile page */}
      <div className=" w-12 h-12 relative z-10 rounded-full border-2  border-teal-500">
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
          alt="nitesh bhagat"
          layout="fill" // required
          objectFit="cover"
          className="rounded-full "
        />
      </div>
      {/* content area */}
      <div className="flex flex-col px-2  flex-1 justify-start items-start">
        <p className="text-base font-bold">Nitesh Bhagat</p>
        <p className="text-xs font-normal">2 day ago</p>
        {/* caption */}
        {postContent ? (
          <h1 className="text-sm py-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            repellat!
          </h1>
        ) : (
          <></>
        )}
        {postImage ? (
          <img
            src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
            alt="postImage"
            className="py-2 rounded-3xl aspect-square w-full h-72  object-cover"
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
