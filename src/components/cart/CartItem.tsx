import React, { useContext } from "react";
import SvgIcon from "../../assets/svg/SvgIcon";
import { CartContext } from "../../store/CartContext";
import "./cartItem.css";
import { Product } from "../../store/CartContext";
interface CartItemProps {
  item: Product;
}

export default function CartItem({ item }: CartItemProps) {
  const cartContext = useContext(CartContext);

  const incHandler = () => {
    cartContext?.incQuantity(item.id);
  };
  const decHandler = () => {
    cartContext?.decQuantity(item.id);
  };
  const deleteHandler = () => {
    cartContext?.removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="img-title">
        <img src={item.img} alt={item.title} className="img" />
        <div className="title-price">
          <span className="title">{item.title}</span>
          <span className="item-price">{item.price} ₽</span>
        </div>
      </div>
      <div className="quantity-price">
        <div className="quantity-changer">
          <button className="dec-btn" onClick={decHandler}>
            <SvgIcon icon="dec" width={25} height={25} />
          </button>
          <span className="quantity">{item.quantity}</span>
          <button className="inc-btn" onClick={incHandler}>
            <SvgIcon icon="inc" width={25} height={25} />
          </button>
        </div>
        <span className="total-price">{item.price} ₽</span>
      </div>
      <button className="delete-btn" onClick={deleteHandler}>
        <SvgIcon icon="delete" />
      </button>
    </div>
  );
}
