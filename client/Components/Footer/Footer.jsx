import React, { useState } from "react";
import "./Footer.css";
import { IoLocationOutline } from "react-icons/io5";
import { SiMinutemailer, SiWhatsapp } from "react-icons/si";
import { Link } from "react-router-dom";
import { api_url } from "../../utills/config";
import { toast } from "react-toastify"; // Make sure to install react-toastify
import "react-toastify/dist/ReactToastify.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const subscribeToNewsletter = async () => {
    if (!email) {
      toast.warning("Please enter an email address.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch(`${api_url}/api/Newsletter/subscribe`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      
      if (response.ok) {
        toast.success("You Have Subscribed successfully!");
      } else {
        setMessage(data.message || "Failed to subscribe. Please try again.");
      }
    } catch (error) {
      toast("An error occurred. Please try again later.");
    }

    setLoading(false);
    setEmail(""); 
  };

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
          <input
            type="email"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <button onClick={subscribeToNewsletter} disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
        </div>

        {message && <p className="newsletter-message">{message}</p>}
      </div>

      {/* ************************************************************************************** */}

      <div className="bottomfooter">
        <div className="columns">
          <div className="about">
            <h1>About JosTech</h1>
            <div className="info">
              <p>{<IoLocationOutline />} </p>{" "}
              <p>Nairobi, Moi Avenue, Festive Mall, SE</p>
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
              <Link to="/Contact">Get In Touch</Link>
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
              <p>Screens</p>
              <p>Casing</p>
              <p>Wifi-cards</p>
              <p>Charger</p>
              <p>HDD connectors</p>
            </div>
          </div>
        </div>
      </div>

      <div className="marquee">
        <h2> &copy; JosTech Computers All Rights Reserved</h2>
      </div>
    </section>
  );
}

export default Footer;
