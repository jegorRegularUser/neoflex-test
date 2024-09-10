import React, { useContext, useState } from "react";
import "./payment.css";
import { useTranslation } from "react-i18next";
import { CartContext } from "../../store/CartContext";

export default function Payment({ onPay }: { onPay: () => void }) {
  const cartContext = useContext(CartContext);
  const { t } = useTranslation();
  const [cardNumber, setCardNumber] = useState("");
  const [date, setdate] = useState("");
  const [cvv, setCvv] = useState("");
  const [isError, setIsError] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const payHandler = () => {
    setIsError(true);
    const timeoutId = setTimeout(() => onPay(), 2000);

    return () => clearTimeout(timeoutId);
  };

  return isError ? (
    <div className="error">{t("payment.sorry")}</div>
  ) : (
    <div className="payment">
      <h1 className="payment-title">{t("payment.payment")}</h1>
      <p className="payment-amount">
        {t("payment.amount")}: {cartContext?.getTotalPrice()} ₽
      </p>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          <label htmlFor="cardNumber" className="input-label">
            {t("payment.number")}
          </label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="input"
            placeholder="4444 4444 4444 4444"
          />
        </div>
        <div className="input-field-small">
          <div className="input-field-dates">
            <div className="input-field">
              <label htmlFor="date" className="input-label">
                {t("payment.year")}
              </label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                className="input"
                placeholder="24"
              />
            </div>
            <div className="input-field">
              <label htmlFor="date" className="input-label">
                {t("payment.date")}
              </label>
              <input
                type="text"
                id="date"
                value={date}
                onChange={(e) => setdate(e.target.value)}
                className="input"
                placeholder="07"
              />
            </div>
          </div>
          <div className="input-field">
            <label htmlFor="cvv" className="input-label">
              {t("payment.cvv")}
            </label>
            <input
              type="text"
              id="cvv"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              className="input"
              placeholder="795"
            />
          </div>
        </div>

        <button type="submit" className="submit-button" onClick={payHandler}>
          {t("payment.pay")}
        </button>
      </form>
    </div>
  );
}
