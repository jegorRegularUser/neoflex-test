import { useTranslation } from "react-i18next";
import "./product.css";
import SvgIcon from "../../assets/svg/SvgIcon";
import { product } from "./products";
import { CartContext } from "../../store/CartContext";
import { useContext, useState } from "react";
import "./productModal.css";
export default function ProductModal({ product }: { product: product }) {
  const {
    id,
    title,
    img,
    rate,
    price,
    priceBeforeDiscount,
    isDiscount,
    description,
    features,
  } = product;
  const {feature, featureDescription} = features;
  const { t } = useTranslation();
  const cartContext = useContext(CartContext);
  const handleAddToCart = () => {
    if (cartContext) {
      cartContext.addToCart({ id, img, title, price, quantity: 0 });
    }
  };
  return (
    <>
      <div className="product-modal" key={id}>
        <img className="product-modal-image" src={img} alt={title} />
        <div className="product-modal-info">
          <div className="product-modal-main">
            <div className="product-modal-title">{title}</div>
            <div className="product-modal-rait-price">
              <div className="product-modal-rating">
                <SvgIcon icon="star" width={23} height={23} />
                {rate}
              </div>
              <div className="product-modal-price">{price} ₽</div>
              {isDiscount && (
                <div className="product-modal-price-discount">
                  {priceBeforeDiscount} ₽
                </div>
              )}
            </div>
            <button className="product-modal-button" onClick={handleAddToCart}>
              {t("main.buy")}
            </button>
          </div>
          <div className="product-modal-title small">{t("main.desc")}</div>

          <div className="product-modal-description">{description}</div>
          <div className="product-modal-title small">{t("main.feat")}</div>
          <div className="product-modal-features">
            {feature.map((feature, index) =>  (
    <div key={index} >
     <span className="product-modal-feature">{feature}:</span> {featureDescription[index]}
    </div>
  ))}

          </div>
        </div>
      </div>
    </>
  );
}
