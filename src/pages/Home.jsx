import { Link } from "react-router-dom";
import { Statistic } from "../components/Statistic";
import Hero from "../components/Hero";
import Quotes from "../components/Quotes";


function Home() {
  return (
    <div>
      <Hero/>
      <Statistic/>
      <Quotes/>
    </div>
  );
}

export default Home;
