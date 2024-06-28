import{Link} from "react-router-dom"
function Navigation(){
    return(
        <nav className="navigation_bar">
            
                <Link to="/">Home</Link>
                <Link to="/About">About Us</Link>
                <Link to="/FeaturedProducts">Featured Products</Link>
                <Link to="/Contact">Contact Us</Link>

            
        </nav>
    )
}
export default Navigation;