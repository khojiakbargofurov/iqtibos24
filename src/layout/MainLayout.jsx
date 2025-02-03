// rrd
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="font-mono">
      <header>
        <Navbar/>
      </header>
      <main className="max-w-6xl mx-auto">
        <Outlet/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default MainLayout;
