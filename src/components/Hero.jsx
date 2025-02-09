import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div>
      <div className="hero bg-base-200 min-h-[650px]">
        <div className="hero-content text-center">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold">
              Har Kunlik <span className="text-green-600">Iqtiboslar</span>{" "}
              <br />
              <span className="text-3xl">
                Hayotingizga ilhom beradigan iqtiboslarni toping va biz bilan rivojlaning!
              </span>
            </h1>
            <p className="py-6">
              O'zingizning sevimli iqtiboslaringizni yozing va boshqalar bilan
              bo‘lishing.
            </p>
            <button className="btn btn-outline">
              <Link to="/create">Iqtibos yozish ⚡</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
