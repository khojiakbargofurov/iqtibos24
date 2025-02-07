// rrd
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className=" font-sora">
      <header>
        <Navbar/>
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;
