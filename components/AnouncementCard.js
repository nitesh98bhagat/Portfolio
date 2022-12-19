export default function AnouncementCard() {


  // const {schoolName, post, time} = props;


  var post = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur         veniam tempore illum impedit explicabo! Atque natus periam minus        inventore doloremque quia enim libero quas magni temporibus blanditiis         iure odit modi aut hic, consequatur quibusdam maxime qui! At veritatis          impedit officiis, consequuntur quis corrupti? Magnam voluptate ratione         sit eveniet temporibus, at ullam cupiditate repudiandae dolor non error.         Aspernatur odit illum veritatis fuga recusandae voluptatum officia nobis         mollitia corrupti sit fugiat eligendi nam atque dolore, velit illo rerum        ratione expedita nesciunt quo laboriosam quas! Facere obcaecati velit        consequatur perferendis fugiat modi optio dolores, beatae eaque quisquam         id accusantium. Natus dolores necessitatibus labore.";
  return (
    <div className="flex flex-col p-3">
      <div className="flex flex-row justify-between ">
        <h1 className="text-md font-semibold bg-yellow-100 rounded-full px-2 py-1">{"Anouncement"}</h1>
        <h1 className="text-sm font-normal text-gray-400">{"26 Aug, 2022"}</h1>
      </div>
      <h1 className="text-base font-normal py-4 border-b-2 border-slate-100">
      {post.substring(0,200)}
      <span className="hover:text-blue-900 hover:font-semibold cursor-pointer">... See more</span>
      </h1>
    </div>
  );
}
