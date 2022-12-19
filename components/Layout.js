import { useRouter } from "next/router";
// import AppBar from "./AppBar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/auth/login"
      ? false
      : true && router.pathname.includes("/blog")
      ? false
      : true && router.pathname.includes("/store")
      ? false
      : true && router.pathname.includes("/testing")
      ? false
      : true && router.pathname.includes("/counter")
      ? false
      : true;

  return (
    <div className="h-screen flex flex-col ">
      {/* {showHeader && <Header />} */}
      {/* <h1>{showHeader}</h1> */}
      {/* <div className={`${showHeader ? "mb-16" : "mb-0"}`}></div> */}
      {children}
      {/* {showHeader && <Footer />} */}
    </div>
  );
}
