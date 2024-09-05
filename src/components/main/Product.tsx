import { useTranslation } from "react-i18next";
import "./product.css"
interface ProductProps {
  id: number;
  img: string;
  title: string;
  price: number;
  rate: number;
}

const Product = ({ id, img, title, price, rate }:ProductProps) => {
    const { t } = useTranslation();
  return (
    <div className="product" key={id}>
      <div className="product-image">
        <img src={'../../assets/png/Apple Earpods.png'} alt={title} />
      </div>
      <div className="product-info">
        <div className="product-title">{title}</div>
        <div className="product-price">${price}</div>
        <div className="product-rating">{rate}</div>
        <button className="product-button">{t("main.buy")}</button>
      </div>
    </div>
  );
};

export default Product;