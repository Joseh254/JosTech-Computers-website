import React from "react";
import "./Aboutdata.css";
import aboutus from "../../src/assets/aboutus.jpg";
import mission from "../../src/assets/mission.png";
import vission from "../../src/assets/vision.png";
import objective from "../../src/assets/objective.png";
import about from "../../src/assets/aboutus.gif";

function Aboutdata() {
  return (
    <>
      <div className="aboutaboutus">
        <div className="aboutaboutuscontent">
          <h1>Our History</h1>
          <p>
            Founded in 2005, JosTech Computers started as a small local business
            in the bustling city of Jos. Initially focusing on computer sales
            and repair services, the company quickly gained a reputation for its
            exceptional customer service and technical expertise. As technology
            evolved, so did JosTech Computers. By 2010, the company expanded its
            offerings to include custom-built PCs, networking solutions, and IT
            consulting services. This expansion marked the beginning of
            JosTech's growth into a comprehensive technology solutions provider.
            <br />
            <p>
              Today, JosTech Computers operates on a global scale, serving
              customers across multiple continents. Despite its growth, the
              company remains rooted in its core values of customer
              satisfaction, quality assurance, and community engagement. As
              JosTech looks to the future, it remains dedicated to pushing the
              boundaries of technology and delivering solutions that meet the
              needs of a diverse and dynamic clientele.
            </p>
          </p>
        </div>

        <div className="aboutaboutusimg">
          <img src={aboutus} alt="" />
        </div>
      </div>

      {/* ****************************************************************************** */}

      <div className="thegoals">
        <section className="aboutusgoals">
          <h1>Mission</h1>

          <div className="aboutusgoal">
            <div className="aboutgoalcontent">
              <img src={mission} alt="our mission" />
              <p>
                To be a global leader in providing cutting-edge technology
                solutions, driving the future of computing, and transforming
                lives through innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutusgoals">
          <h1>Vision</h1>

          <div className="aboutusgoal">
            <div className="aboutgoalcontent">
              <img src={vission} alt="our vision" />
              <p>
                To deliver innovative, high-quality, and reliable technology
                solutions that empower individuals and businesses to achieve
                their full potential.
              </p>
            </div>
          </div>
        </section>

        <section className="aboutusgoals">
          <h1>Objective</h1>

          <div className="aboutusgoal">
            <div className="aboutgoalcontent">
              <img src={objective} alt="our objective" />
              <p>
                Maintain the highest standards of quality in all products
                ,services and continuously enhance customer satisfaction by
                providing exceptional products and service
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Aboutdata;
