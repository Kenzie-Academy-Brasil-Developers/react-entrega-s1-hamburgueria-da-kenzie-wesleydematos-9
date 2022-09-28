import Product from "../Product";
import { UlStyled } from "./style";

const ProductsList = ({ products }) => {
  return (
    <UlStyled>
      {products.map((product) => {
        return (
          <Product
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
