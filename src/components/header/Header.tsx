import { Link } from "react-router-dom";
import SvgIcon from "../../assets/svg/SvgIcon";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../../store/CartContext";
export default function Header() {
  const cartContext = useContext(CartContext);

  const  cartItems  = cartContext?.cartItems;

  return (
    <div className="header">
      <Link to="/">
        <SvgIcon icon="logo" width={85} height={30} />
      </Link>
      <div className="links">
        <Link to="/" className="link">
          <SvgIcon icon="favorite" />
          <span className="count">1</span>
        </Link>
        <Link className="link" to="/cart">
          <SvgIcon icon="cart" />
          {cartItems?.length!==0 && <span className="count">{cartItems?.length}</span>}
        </Link>
      </div>
    </div>
  );
}
