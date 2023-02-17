import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  return (
   
      <ul className="nav">
        <li><Link to="/login">Login/Logout</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    
  );
}

export default Navbar;
