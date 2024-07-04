import React from 'react'

import laptop2 from "../src/assets/laptop2.jpeg"

import laptop6 from "../src/assets/laptop6.jpeg"

import { FaShoppingCart } from "react-icons/fa";

import "./FeaturedproductsProducts.css"

function FeaturedproductsProducts() {
  return (
    <>
    <div className='productswarapper'>
<div className="productstitle">
    <h1>Laptops</h1>
</div>

<section  className='laptops'>
<div className='laptopcontainer'>
<img src={laptop2} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>





<div className='laptopcontainer'>
<img src={laptop6} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>



<div className='laptopcontainer'>
<img src={laptop2} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>





<div className='laptopcontainer'>
<img src={laptop6} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>


</section>

{/* ******************************************************************************** */}



<section  className='laptops'>
<div className='laptopcontainer'>
<img src={laptop2} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>





<div className='laptopcontainer'>
<img src={laptop6} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>



<div className='laptopcontainer'>
<img src={laptop2} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>





<div className='laptopcontainer'>
<img src={laptop6} alt="laptop" />
<h1>Lenovo X360</h1>
<p><strike>Ksh 34000</strike></p>
<h3>Now 32000</h3>
<button>{<FaShoppingCart/>}     Add to Cart </button>
</div>
</section>

    </div>



<div>
 
</div>
    </>
  )
}

export default FeaturedproductsProducts;