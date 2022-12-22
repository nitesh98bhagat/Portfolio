import { useRouter } from "next/router";
// import AppBar from "./AppBar";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  const router = useRouter();
  const showHeader = router.pathname === "/auth/login" ? false : true;

  return (
    <div
      className="flex flex-col items-center "
      style={{
        backgroundImage: `url(https://media.istockphoto.com/id/1224388366/vector/colorful-geometric-background.jpg?s=612x612&w=0&k=20&c=0MH3nZPyJnqL41pnXHnejHlUqFBPmVVKt8dCl9tbaOs=)`,
        minHeight: "100vh",
      }}
    >
      {showHeader && <Header />}
      {children}
      {showHeader && <Footer />}
    </div>
  );
}
