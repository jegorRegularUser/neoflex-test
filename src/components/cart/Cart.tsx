import { useTranslation } from "react-i18next";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./cart.css";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  

  const totalPrice = cartContext?.getTotalPrice() || 0;

  return (
    <div className="cart">
      <h1>{t("cart.cart")}</h1>
     {cartContext?.cartItems.length===0? t('cart.there'):<div className="list-payment">
        <div className="list">
          {cartContext?.cartItems.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
        <div className="payment">
          <div className="text">
            <span>{t('cart.total')}</span>
            <span>₽ {totalPrice}</span>
          </div>
          <button className="payment-btn">{t('cart.go')}</button>
        </div>
      </div>
      }
    </div>
  );
}