import { useTranslation } from "react-i18next";
import { CartContext } from "../../store/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import "./cart.css";
import { Link } from "react-router-dom";
import Payment from "../payment/Payment";
import Modal from "../modal/Modal";

export default function Cart() {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();

  const totalPrice = cartContext?.getTotalPrice() || 0;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <div className="cart">
        <h1>{t("cart.cart")}</h1>
        {cartContext?.cartItems.length === 0 ? (
          t("cart.there")
        ) : (
          <div className="list-payment">
            <div className="list">
              {cartContext?.cartItems.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="cart-payment">
              <div className="text">
                <span>{t("cart.total")}</span>
                <span>₽ {totalPrice}</span>
              </div>
              <button className="payment-btn" onClick={toggleModal}>
                {t("cart.go")}
              </button>
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        <Payment onPay={toggleModal}></Payment>
      </Modal>
    </>
  );
}
