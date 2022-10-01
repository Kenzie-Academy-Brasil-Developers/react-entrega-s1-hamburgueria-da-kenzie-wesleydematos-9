import { DivStyled } from "./style";

const Cart = ({ currentSale, setCurrentSale }) => {
  function removeAll() {
    setCurrentSale([]);
  }

  return (
    <DivStyled>
      {!currentSale.length ? (
        <div className="contentCart">
          <p>Sua sacola está vazia</p>
          <span>adicione itens</span>
        </div>
      ) : (
        <>
          <ul className="carrinho">
            {currentSale.map((element) => {
              return (
                <li key={element.id}>
                  <article>
                    <div>
                      <img src={element.img} alt={element.name} />
                    </div>
                    <div className="contentProductCart">
                      <p>{element.name}</p>
                      <span>{element.category}</span>
                      <span>Quantidade: {element.count}</span>
                    </div>
                  </article>
                  <button type="button" id={element.id}>
                    Remover
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="cartTotal">
            <div>
              <p>Total</p>
              <span>RS 40.00</span>
            </div>
            <button
              type="button"
              onClick={() => {
                removeAll();
              }}
            >
              Remover todos
            </button>
          </div>
        </>
      )}
    </DivStyled>
  );
};

export default Cart;
