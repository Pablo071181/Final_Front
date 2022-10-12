import { Outlet } from "react-router-dom";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";

const PrimaryLayout = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PrimaryLayout;