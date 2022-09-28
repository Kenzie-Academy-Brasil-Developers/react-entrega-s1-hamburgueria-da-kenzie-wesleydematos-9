import { LiStyled } from "./style";

const Product = ({ image, name, category, value, id }) => {
  return (
    <LiStyled>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <span>{category}</span>
      <p>{value}</p>
      <button id={id}>Adicionar</button>
    </LiStyled>
  );
};

export default Product;
