import{Link} from "react-router-dom"
import "./Navigationbar.css"
import { IoMdMenu } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";


import logo from "../src/assets/logo.jpeg"
 function Icons(btn,description,icon){
    return(
        <>
       
        
        </>
    )
 }
function Navigation(){

    
    return(
<section className="navigation">

<div className="top_nav">
<img src={logo} alt="logo" />

<div className="topleftbtn">
    <button className="btnleft" >All</button>
    <input type="text" className="searchinput" id="searchinput" placeholder="Search"/>
    <button className="btnright">Search</button>




</div>


</div>



{/* *********************************************************8 */}


<nav className="navigation_bar">

            
                <Link to="/">Home</Link>
                <Link to="/About">About Us</Link>
                <Link to="/FeaturedProducts">Featured Products</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/Hotdeals">Hot Deals</Link>  
        </nav>



</section>
    )
}
export default Navigation;