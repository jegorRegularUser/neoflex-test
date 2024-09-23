import { Link } from "react-router-dom";
import SvgIcon from "../../assets/svg/SvgIcon";
import "./Header.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../store/CartContext";

export default function Header() {
  const cartContext = useContext(CartContext);

  const cartItemsQuantity = cartContext?.cartItemsQuantity;

  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    if (cartItemsQuantity !== 0) {
      setIsJumping(true);

      const timeoutId = setTimeout(() => {
        setIsJumping(false);
      }, 300);

      return () => clearTimeout(timeoutId);
    }
  }, [cartItemsQuantity]);

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
          {cartItemsQuantity !== 0 && (
            <span className={`count ${isJumping ? "jumping" : ""}`}>
              {cartItemsQuantity}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
