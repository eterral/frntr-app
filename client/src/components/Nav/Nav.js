import { Link } from "react-router-dom";
import './Nav.css'

export default function Nav() {
  return (
    <nav>
      <div className="nav-container">
        <div className="home-link">
          <Link to="/">
            <img src="https://res.cloudinary.com/marssantos/image/upload/v1641312116/Frntr_Logo_i4y18a.png" />
          </Link>
        </div>
        <div className="links">
          <Link to="/furniture"><p className="nav-links">Furniture</p></Link>
          <Link to="/kitchen"><p className="nav-links">Kitchen/Dining</p></Link>
          <Link to="/backyard"><p className="nav-links">Backyard</p></Link>
          <Link to="/aboutus"><p className="nav-links">About us</p></Link>
          <Link to="/new"><p className="nav-links">Submit New Product</p></Link>
        </div>
        <div className="login-container">
          <Link to="/login"><p className="nav-links">Sign In/Sign Out</p></Link>
          <Link to ="/cart"><img className="cart" src="https://i.imgur.com/DMlqxwl.png" alt="cart"/></Link>
        </div>
      </div>
    </nav>
  );
}
