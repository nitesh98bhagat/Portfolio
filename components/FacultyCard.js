export default function FacultyCard({ props }) {
  const { name, designation, img } = props;
  return (
    <div className="flex flex-row border-2 p-2 rounded-xl border-slate-50 hover:bg-slate-200 ">
      <img
        src={
          img ??
          "https://schooldekho.co.in/portal/uploaddata/81941624615165Sr-Neetha-Joseph1.jpg"
        }
        alt="img"
        className="rounded-full w-14 h-14 object-cover"
      />
      <div className="flex flex-col px-5">
        <h1 className="text-lg font-semibold">{name ?? "Name"}</h1>
        <h1 className="text-sm font-semibold text-slate-500">
          {designation ?? "Designation"}
        </h1>
      </div>
    </div>
  );
}
