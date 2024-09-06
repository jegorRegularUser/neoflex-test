import { useTranslation } from "react-i18next";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";
import CartItem from "./CartItem";
import "./cart.css"
export default function Cart() {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  return (
    <div className="cart">
      <h1>{t("cart.cart")}</h1>
      <div className="list-payment">
        <div className="list">
          <CartItem />
        </div>
        <div className="payment">
          <div className="text"><span>{t('cart.total')}</span><span>2354</span></div>
          <button className="payment-btn">{t('cart.go')}</button>
        </div>
      </div>
    </div>
  );
}
