import React from "react";
import "./home.css";
import p1 from "../img/p1.webp";
import p2 from "../img/p2.jpg";

export default function home() {
  return (
    <>
      <div className="home">
        <p className="smell">
          Buy Perfume <br /> Feel Perfume <br /> Smell Perfume{" "}
        </p>
        <img className="p1" src={p1} alt="photo" />
      </div>

      <div className="home">
        <img className="p2" src={p2} alt="photo" />
        <p className="smell">
          Buy <br />top quility Perfume <br /> on <br /> PerfumeWala{" "}
        </p>
      </div>

     
    </>
  );
}
