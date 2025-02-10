import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[650px]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="sm:text-4xl text-2xl font-bold">
              Har Kunlik <span className="text-green-600">Iqtiboslar</span>{" "}
              <br />
              <span className="sm:text-3xl text-2xl">
                Hayotingizga ilhom beradigan iqtiboslarni toping va biz bilan
                rivojlaning!
              </span>
            </h1>
            <p className="py-6">
              O'zingizning sevimli iqtiboslaringizni yozing va boshqalar bilan
              bo‘lishing.
            </p>
            <Link to="/create">
              <button className="btn btn-outline">Iqtibos yozish ⚡</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
