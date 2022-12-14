import { DivStyled } from "./style";

const Cart = ({
  currentSale,
  setCurrentSale,
  removeAllProduct,
  removeOnlyProduct,
}) => {
  function removeAll() {
    removeAllProduct();
    setCurrentSale([]);
  }

  function removeOnly(event) {
    removeOnlyProduct();
    let idProduct = event.target.id;

    const cartIntensFiltered = currentSale
      .filter((element) => {
        return element.id != idProduct;
      })
      .map((element) => {
        element.id = element.id + 10;
        return element;
      });

    setCurrentSale(cartIntensFiltered);
  }

  const sum = currentSale.reduce((acumulate, next) => {
    return acumulate + Number(next.price) * Number(next.count);
  }, 0);

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
                  <button
                    type="button"
                    id={element.id}
                    onClick={(event) => {
                      removeOnly(event);
                    }}
                  >
                    Remover
                  </button>
                </li>
              );
            })}
          </ul>
          <div className="cartTotal">
            <div>
              <p>Total</p>
              <span>
                {sum.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  style: "currency",
                  currency: "BRL",
                })}
              </span>
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
