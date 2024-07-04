import React from 'react'
import "./FeaturedProductsDesktops.css";
import { FaShoppingCart } from "react-icons/fa";
import desktop1 from "../src/assets/desktop1.webp"
import desktop2 from "../src/assets/desktop2.webp"
import desktop3 from "../src/assets/desktop3.webp"
import offer from "../src/assets/OFFER.png"
import { Link } from 'react-router-dom';
function FeaturedProductsDesktops() {
  return (
    <>
    <div className="desktopheading">
      <h1>Desktops</h1>
    </div>
    <section className='desktopswrapper'>

<div className="desktopcontainer">
 
  <img src={desktop1} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>

<div className="desktopcontainer">

  <img src={desktop2} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>


<div className="desktopcontainer">

  <img src={desktop3} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>

<div className="desktopoffers">
  <img src={offer} alt="offer image"  />
</div>

    </section>
    {/* ********************************************************************** */}





    <section className='desktopswrapper'>

<div className="desktopcontainer">

  <img src={desktop1} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>

<div className="desktopcontainer">

  <img src={desktop2} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>


<div className="desktopcontainer">

  <img src={desktop3} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>



<div className="desktopcontainer">

  <img src={desktop3} alt="desktop" />
  <h1>Dell latitude 7440</h1>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus, voluptas?</p>
  <p><strike>Ksh 5600</strike></p>
  <p>Now Ksh 5300</p>
  <button>< FaShoppingCart/> Add to cart</button>
</div>


    </section>
    </>
  )
}

export default FeaturedProductsDesktops