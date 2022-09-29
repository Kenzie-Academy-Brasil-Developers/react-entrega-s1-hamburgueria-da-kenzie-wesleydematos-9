import { LiStyled } from "./style";

const Product = ({ image, name, category, value, id, handleClick }) => {
  return (
    <LiStyled>
      <div>
        <img src={image} alt={name} />
      </div>
      <h1>{name}</h1>
      <span>{category}</span>
      <p>
        {value.toLocaleString("pt-BR", {
          minimumFractionDigits: 2,
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button
        id={id}
        type="button"
        onClick={(event) => {
          handleClick(event.target.id);
        }}
      >
        Adicionar
      </button>
    </LiStyled>
  );
};

export default Product;
