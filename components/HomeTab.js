import Image from "next/image";

export default function HomeTab() {
  return (
    <div className="flex flex-col p-3 items-start  ">
      <div className="flex flex-row ">
        {/* profile page */}
        <div className=" w-12 h-12 relative rounded-full border-2  border-teal-500">
          <Image
            src="https://firebasestorage.googleapis.com/v0/b/fleeke-ebe0e.appspot.com/o/webAssets%2FWhatsApp%20Image%202020-02-17%20at%2011.44.18%20AM.jpeg?alt=media&token=ed3e9338-bbdd-4b6e-94db-8822931e6b83"
            alt="nitesh bhagat"
            layout="fill" // required
            objectFit="cover"
            className="rounded-full "
          />
        </div>
        {/* content area */}
        <div className="flex flex-col px-2  flex-1">
          <p className="text-base font-bold">Nitesh Bhagat</p>
          <p className="text-xs font-normal">2 day ago</p>
          {/* caption */}
          <h1 className="text-base py-1">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda,
            repellat!
          </h1>
          <img
            src="https://png.pngtree.com/png-vector/20190120/ourlarge/pngtree-gallery-vector-icon-png-image_470660.jpg"
            alt="postImage"
            className="py-2 rounded-2xl"
          />
        </div>
      </div>

      {/* <TbMoodEmpty size={100} />
        <h1 className="text-4xl text-center">It feels so empty in here</h1> */}
    </div>
  );
}
