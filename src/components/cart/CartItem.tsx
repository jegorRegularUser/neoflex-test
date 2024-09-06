import SvgIcon from "../../assets/svg/SvgIcon";
import "./cartItem.css"

export default function CartItem() {
    return (
     <div className="cart-item">
      <div className="img-title"></div>
      <div className="quantity-price">
      <div className="quantity-changer">
        <button className="dec-btn"><SvgIcon icon="dec"/></button>
        <span className="quantity"></span>
        <button className="inc-btn"><SvgIcon icon="inc"/></button>
      </div>
      <span className="price"></span>
      </div>
      <button className="delete-btn"><SvgIcon icon="delete"/></button>
     </div>
    );
  }
  