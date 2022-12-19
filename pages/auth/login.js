import Link from "next/link";

export default function Login() {
  return (
    <div className="relative w-full bg-black ">
      <img
        src="https://as2.ftcdn.net/v2/jpg/01/15/19/93/1000_F_115199386_EOfBmQd1u4amRCVuXXhgKCiQ2aLrfbnk.jpg"
        alt="img"
        className="object-cover opacity-80 w-full h-screen"
      />
      <div className="absolute inset-0 p-5   flex flex-col justify-center items-center rounded-xl">
        <div className="bg-white w-1/3 shadow-lg rounded-lg flex flex-col items-stretch">
          <h1 className="text-3xl w-full font-bold text-center p-3">Login</h1>
          <p className="text-md font-semibold text-slate-600 mx-4 my-2">
            Email
          </p>
          <input
            type="text"
            className="bg-slate-100 p-2  mx-4 rounded-md"
            placeholder="some@email.com"
          />
          <p className="text-md font-semibold text-slate-600 mx-4 my-2">
            Password
          </p>
          <input
            type="password"
            className="bg-slate-100 p-2  mx-4 rounded-md"
            placeholder="******"
          />
            <Link href={"/"}>
                 <p className="text-md font-semibold text-blue-600 mx-4 my-2 cursor-pointer">
            {"<< Get back to Home"}
          </p>
            </Link>
         

          <button className="bg-blue-900 w-full font-bold text-white text-2xl p-3 rounded-b-lg">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
