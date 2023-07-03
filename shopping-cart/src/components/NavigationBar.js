import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo"><Link to="/">ArtStart Inc.</Link></div>
      <div className="shop"><Link to="/shop">Shop</Link></div>
      <div className="search"><form><input></input><button>Search</button></form></div>
      <div className="cart"><Link to="/cart">Cart</Link></div>
    </div>
  );
};

export default NavigationBar;
