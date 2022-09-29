import { DivStyled } from "./style";

const Cart = ({ currentSale }) => {
  return (
    <DivStyled>
      {!currentSale.length ? (
        <div className="contentCart">
          <p>Sua sacola está vazia</p>
          <span>adicione itens</span>
        </div>
      ) : (
        <ul className="carrinho">
          {currentSale.map((element) => {
            return (
              <li key={element.id}>
                <p>{element.name}</p>
              </li>
            );
          })}
        </ul>
      )}
    </DivStyled>
  );
};

export default Cart;
