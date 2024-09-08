import Product from "./Product";
import { headphones, wirelessHeadphones } from "./products";
import "./catalog.css";
import { useTranslation } from "react-i18next";

export default function Catalog() {
  const { t } = useTranslation();
  return (
    <div className="catalog">
      <h1>{t("main.headphones")}</h1>
      <div className="list">
        {headphones.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <h1>{t("main.wireless")}</h1>
      <div className="list">
        {wirelessHeadphones.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
