import { useTranslation } from "react-i18next";
import "./product.css";
import SvgIcon from "../../assets/svg/SvgIcon";
import { product } from "./products";
import { CartContext } from "../../store/CartContext";
import { useContext } from "react";

export default function Product({ product }: { product: product }) {
  const { id, title, img, rate, price, priceBeforeDiscount, isDiscount } =
    product;
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart({ id, img, title, price, quantity: 0 });
    }
  };
  return (
    <div className="product" key={id}>
      <div className="product-image">
        <img src={img} alt={title} />
      </div>
      <div className="product-info">
        <div className="product-title">{title}</div>

        <div className="product-price">{price} ₽</div>
        {isDiscount && (
          <div className="product-price-discount">{priceBeforeDiscount} ₽</div>
        )}
        <div className="product-rating">
          <SvgIcon icon="star" width={23} height={23} />
          {rate}
        </div>
        <button className="product-button" onClick={handleAddToCart}>
          {t("main.buy")}
        </button>
      </div>
    </div>
  );
}
