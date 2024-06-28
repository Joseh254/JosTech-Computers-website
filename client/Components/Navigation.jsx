import{Link} from "react-router-dom"
import "./Navigationbar.css"
function Navigation(){
    return(
        <nav className="navigation_bar">
                <Link to="/">Home</Link>
                <Link to="/About">About Us</Link>
                <Link to="/FeaturedProducts">Featured Products</Link>
                <Link to="/Contact">Contact Us</Link>
                <Link to="/Hotdeals">Hot Deals</Link>  
        </nav>
    )
}
export default Navigation;