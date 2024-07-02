import React from 'react'
import "./Featuredproducts.css"
import FeaturedProductsitems from '../../Data/FeaturedProductsitems'
import FeaturedproductsProducts from '../../Data/FeaturedproductsProducts'
import FeaturedProductsMotherboads from '../../Data/FeaturedProductsMotherboads'
import FeaturedProductsDesktops from '../../Data/FeaturedProductsDesktops'

function FeaturedProducts() {
  return (

    <>
   <section className='featuredproducts'>

<div className='itemsandproducts'> 

<div className="items">
  <FeaturedProductsitems/>
</div>

<div className="featuredproductsproducts">
  <FeaturedproductsProducts/>
</div>
</div>

   </section>

   <FeaturedProductsMotherboads/>
    <FeaturedProductsDesktops/>

   </>
  )
}

export default FeaturedProducts