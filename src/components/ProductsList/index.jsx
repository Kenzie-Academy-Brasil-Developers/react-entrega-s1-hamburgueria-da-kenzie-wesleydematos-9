import Product from "../Product";
import { UlStyled } from "./style";

const ProductsList = ({ products, handleClick }) => {
  return (
    <UlStyled>
      {products.map((product) => {
        return (
          <Product
            handleClick={handleClick}
            key={product.id}
            image={product.img}
            name={product.name}
            category={product.category}
            value={product.price}
            id={product.id}
          />
        );
      })}
    </UlStyled>
  );
};

export default ProductsList;
