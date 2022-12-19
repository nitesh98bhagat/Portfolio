export default function RatingCard({ name="user1", rating=4, review="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum, vitae?" }) {
    return (
      <div className="flex flex-row justify-start items-start py-5 border-t-2  border-slate-100 mt-4">
        <img
          src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
          alt="user"
          className="w-14 rounded-full mx-4 object-contain"
        />
  
        <div className="flex flex-col">
          <h1 className="text-lg font-semibold">{name}</h1>
          <h1 className="flex flex-row">
            {[...Array(rating)].map((e, i) =>  <svg key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clipRule="evenodd"
                      />
                    </svg>)}
          </h1>
          <h1 className="py-4 text-base">{review}</h1>
        
        </div>
       
  
        
      </div>
    );
  }
  