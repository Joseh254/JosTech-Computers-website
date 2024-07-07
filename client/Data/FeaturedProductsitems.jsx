import React from "react";
import "./FeaturedProductsitems.css";
import { Link } from "react-router-dom";

function FeaturedProductsitems() {
  return (
    <div>
      <div className="itemsqrapper">
        <div className="fitems">
          <Link to="/FeaturedProducts">Laptops</Link>
          <Link to="/FeaturedProducts">Batteries</Link>
        </div>

        <div className="sitems">
          <Link to="/FeaturedProducts">Keyboards</Link>
        </div>

        <div className="titems">
          <Link to="/FeaturedProducts">Screens</Link>
          <Link to="/FeaturedProducts">Mouse</Link>
        </div>

        <div className="foitems">
          <Link to="/FeaturedProducts">Motherboards</Link>
        </div>

        <div className="foitems">
          <Link to="/FeaturedProducts">Storage</Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProductsitems;
