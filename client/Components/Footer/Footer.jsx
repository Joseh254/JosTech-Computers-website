import React from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { Link } from "react-router-dom";
import { SiWhatsapp } from "react-icons/si";

function Footer() {
  return (
    <section className="footer">
      {/* ************************************************************************************* */}
      <div className="newsletter">
        <div>
          <h1>Sign Up For Newsletters</h1>
          <div className="newsletteroffer">
            <p className="p1">
              Get E-mail updates about our latest news and{" "}
              <p className="p2"> special offers.</p>
            </p>
          </div>
        </div>

        <div className="newsletteremail">
          <input type="text" placeholder="Your Email Address" />
          <button>Sign Up</button>
        </div>
      </div>

      {/* ************************************************************************************** */}

      <div className="bottomfooter">
        <div className="columns">
          <div className="about">
            <h1>About JosTech</h1>
            <div className="info">
              <p>{<IoLocationOutline />} </p>{" "}
              <p>Nairobi,Moi Avenue,Festive Mall,SE</p>
            </div>

            <div className="info">
              <p>{<SiMinutemailer />} </p>{" "}
              <Link to="https://github.com/Joseh254">JosTech@info.co.ke</Link>
            </div>
            <div className="info">
              <p>{<SiWhatsapp />}</p> +254768163608
            </div>
          </div>

          <div className="quicklinks">
            <h1>Quick Links</h1>

            <div className="links">
              <Link to="/">Home</Link>
              <Link to="/About">About</Link>
              <Link to="/FeaturedProducts">Featured Products</Link>
              <Link to="/Contact">Get In Tourch</Link>
            </div>
          </div>

          <div className="usefullinks">
            <div>
              <p>Laptops</p>
              <p>Motherboards</p>
              <p>Desktops</p>
              <p>Batteries</p>
              <p>Lcd Cables</p>
              <p>Track pads</p>
              <p>Keyboards</p>
              <p>Mouse</p>
            </div>
          </div>

          <div className="usefullinks">
            <div>
              <p>Printers</p>
              <p>Hardisk</p>
              <p>SSD</p>
              <p>SCreens</p>
              <p>Casing</p>
              <p>Wifi-cards</p>
              <p>Charger</p>
              <p>HDD conectors</p>
            </div>
          </div>
        </div>
      </div>

      <div class="marquee">
        <h2> &copy;JosTech Computers All Rights Reserved</h2>
      </div>
    </section>
  );
}

export default Footer;
