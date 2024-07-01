import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
import Homedatatestimony from '../../Data/Homedatatestimony';
import { AiOutlineMenu } from "react-icons/ai";
import Homeabout from '../../Data/Homeabout';

function Home() {
  return (

    <>
    <section className='hero'>

      <div className='heroitems'>
  
<section className='homesectionlinks'>
<Link to="">
 <p className='products'>{<AiOutlineMenu/>}   All Products </p>
</Link>
  
    <Link to="/FeaturedProducts">Laptops</Link>
    <Link to="/FeaturedProducts">Desktops</Link>
    <Link to="/FeaturedProducts"> Cooling Fans</Link>
    <Link to="/FeaturedProducts">Central Processing Unit</Link>
    <Link to="/FeaturedProducts">Solid State drive</Link>
    <Link to="/FeaturedProducts">motheboards</Link>
    <Link to="/FeaturedProducts">hdd connectors</Link>
    <Link to="/FeaturedProducts">heat sinks</Link>
    <Link to="/FeaturedProducts">printers</Link>
    <Link to="/FeaturedProducts">screens</Link>
    <Link to="/FeaturedProducts">casings</Link>
    <Link to="/FeaturedProducts">hindges</Link>
    <Link to="/FeaturedProducts">switches</Link>
    <Link to="/FeaturedProducts">charging ports</Link>
    <Link to="/FeaturedProducts">hdd covers</Link>

    </section>
      </div>


      <div className='heroimg'>
          <div className='abouthero'>
            <h1>Welcome</h1>

            <h4>to </h4>
            <h2>  JosTech Computers! </h2>
            <p>
           We provide top-notch tech solutions to meet all your computing needs. 
            </p>

            <p>Explore our services and products to find the best fit for you.</p>
          </div>

          <div className='shop'>
    <Link to="/FeaturedProducts">Shop Now</Link>
  </div>
  
      </div>
      

      
    </section>

    <Homedatatestimony/>
    <Homeabout/>

    </>
  )
}

export default Home