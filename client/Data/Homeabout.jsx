import React from "react";
import "./Homeabout.css";
import objective from "../src/assets/objective.png";
import mission from "../src/assets/mission.png";
import vision from "../src/assets/vision.png";

function Homeabout() {
  return (
    <div className="homeabout">
      <div className="title">
        <h1>About us</h1>
      </div>

      <div className="aboutcards">
        <div className="card">
          <img src={mission} alt="" />
          <h1>Mission</h1>

          <p>
            To deliver innovative, high-quality, and reliable technology
            solutions that empower individuals and businesses to achieve their
            full potential.
          </p>
        </div>

        <div className="card">
          <img src={vision} alt="" />
          <h1>Vission</h1>

          <p>
            To be a global leader in providing cutting-edge technology
            solutions, driving the future of computing, and transforming lives
            through innovation.
          </p>
        </div>

        <div className="card">
          <img src={objective} alt="" />
          <h1>Objective</h1>

          <p>
            Maintain the highest standards of quality in all products ,services
            and continuously enhance customer satisfaction by providing
            exceptional products and services.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homeabout;
