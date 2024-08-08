import React from "react";
import "./Homedatatestimony.css";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import p1 from "../src/assets/p1.jpeg";
import p2 from "../src/assets/p2.jpeg";
import p3 from "../src/assets/p3.jpeg";
import p4 from "../src/assets/p4.jpg";
import logo from "../src/assets/logo.jpeg";

function Homedatatestimony() {
  return (
    <div>
      <div className="otherssaying">
        <h1 className="actualsay">What Others Say About Us</h1>
      </div>

      <section className="testimonies">
        <div className="jostechh">
          <div className="testimonyimg">
            <img src={logo} alt="Phyllis" />
          </div>

          <div className="thetestimony">
            <h2>JosTech Computers</h2>
            <p className="p11">5.0 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p className="p22">based On 11 Reviews</p>
            <p className="p33">
              Powerde by
              <FcGoogle />{" "}
            </p>
            <p className="p44">
              Review Us On{" "}
              <Link to="https://github.com/Joseh254">
                <FcGoogle />
              </Link>
            </p>
          </div>
        </div>

        <div className="jostechh">
          <div className="testimonyimg">
            <img src={p2} alt="Phyllis" />
          </div>

          <div className="thetestimony">
            <h2>Phyllis Wambui</h2>
            <p className="p11">5.0 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>Best laptop shop in Nairobi CBD
            I bought my Laptop from them 3months ago and its serving me
              well..They are reliable dealers and their customer service is the
              best.
            </p>
          </div>
        </div>

        <div className="jostechh">
          <div className="testimonyimg">
            <img src={p3} alt="Phyllis" />
          </div>

          <div className="thetestimony">
            <h2>Emmah Njambi</h2>
            <p className="p11"> 4.0 &#9733; &#9733; &#9733; &#9733; </p>
            <p>
              I bought my Laptop from them 3months ago and its serving me
              well..They are reliable dealers and their customer service is the
              best.
            </p>
          </div>
        </div>

        <div className="jostechh">
          <div className="testimonyimg">
            <img src={p4} alt="Phyllis" />
          </div>

          <div className="thetestimony">
            <h2>Jane Wangari</h2>
            <p className="p11">4.0 &#9733; &#9733; &#9733; &#9733; </p>
            <p>
              I bought a laptop and a ssd and they are all serving me well.I
              recommend others to visit the sho
            </p>
          </div>
        </div>

        <div className="jostechh">
          <div className="testimonyimg">
            <img src={p2} alt="Phyllis" />
          </div>

          <div className="thetestimony">
            <h2>Annastscia Wanja</h2>
            <p className="p11">5.0 &#9733; &#9733; &#9733; &#9733; &#9733;</p>
            <p>Bought my laptop here and experienced great customer service</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homedatatestimony;
