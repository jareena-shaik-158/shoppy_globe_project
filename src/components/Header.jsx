import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"
function Header() {
  const cartCount = useSelector((state) => state.cart.length);

  return (
    <nav>
      <h2>ShoppyGlobe</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
