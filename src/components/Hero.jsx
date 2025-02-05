import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[650px]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold">
              Har Kunlik <span className="text-green-600 font-montserrat">IQTIBOSLAR</span> <br /> <span className="text-4xl">O'zingizga mos Iqtiboslarni tez va oson toping.</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline "><Link to="/iqtiboslar">Get Started ⚡</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
