import React from "react";
import "./Featuredproducts.css";
import FeaturedProductsitems from "../../../Data/FeaturedProductsitems";
import FeaturedproductsProducts from "../../../Data/FeaturedProducts/Laotops/FeaturedproductsProducts";
// import FeaturedProductsMotherboads from "../../../Data/FeaturedProducts/Motherboards/FeaturedProductsMotherboads";
// import FeaturedProductsDesktops from "../../../Data/FeaturedProducts/Desktops/FeaturedProductsDesktops";

function FeaturedProducts() {
  return (
    <>
      <section className="featuredproducts">
        <div className="itemsandproducts">
          <div className="featuredproductsproducts"></div>
        </div>
      </section>
      <FeaturedproductsProducts />

      {/* <FeaturedProductsMotherboads />
      <FeaturedProductsDesktops /> */}
    </>
  );
}

export default FeaturedProducts;
