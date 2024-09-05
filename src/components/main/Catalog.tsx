import Product from "./Product"; 
import { headphones, wirelessHeadphones } from "./products";
import "./catalog.css";
const Catalog: React.FC = () => {
  return (
    <div className="catalog">
      {headphones.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          price={product.price}
          rate={product.rate}
        />
      ))}
    </div>
  );
};

export default Catalog;
