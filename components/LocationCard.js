

export default function LocationCard({e}) {
  return (
    <div className="relative w-full" key={e.img}>
    <img
      src={e.img ?? "https://www.lifewire.com/thmb/6DrtO40qnoND20afLabJ8MHUN4w=/1614x1105/filters:fill(auto,1)/Maplocation_-5a492a4e482c52003601ea25.jpg"}
      alt="img"
      className=" rounded-xl"
    />
    <div className="absolute inset-0 p-5 bg-gradient-to-t from-black   flex flex-col justify-end rounded-xl">
      <h1 className="text-white text-3xl">
        {e.place ?? "Dargiling"}
      </h1>
      <h1 className="text-white text-lg">
        {e.subPlace ?? "West Bengal, India"}
      </h1>
    </div>
  </div>
  )
}
