import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import api from "./services/api";
import toast, { Toaster } from "react-hot-toast";
import { MainStyled } from "./styles/main";
import Results from "./components/Results";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [resultSaerch, setResultSaerch] = useState("");
  const [currentSale, setCurrentSale] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  const inexist = () =>
    toast("Produto inexistente, refaça a busca.", {
      style: {
        backgroundColor: "var(--negative)",
        color: "var(--white)",
      },
    });

  const addProduct = () =>
    toast("Produto adicionado ao carrinho!", {
      style: {
        backgroundColor: "var(--sucess)",
        color: "var(--white)",
      },
    });

  function showProducts(event) {
    const newProducts = products.filter((product) => {
      if (
        product.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
      ) {
        return product;
      }
    });

    setResultSaerch(event.target.value);
    setFilteredProducts(newProducts);
  }

  function handleClick(productId) {
    const productSale = products.find((element) => element.id == productId);
    if (currentSale.length) {
      const aux = currentSale.filter((element) => {
        if (element.id == productId) {
          return element;
        }
      });

      if (aux.length) {
        aux[0].count = aux[0].count + 1;
        setCurrentSale([...currentSale]);
        addProduct();
      } else {
        setCurrentSale([...currentSale, { ...productSale, count: 1 }]);
        addProduct();
      }
    } else {
      setCurrentSale([...currentSale, { ...productSale, count: 1 }]);
      addProduct();
    }
  }

  return (
    <div className="App">
      <Toaster
        containerStyle={{
          position: "relative",
          bottom: 0,
        }}
      />
      <Header
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        inexist={inexist}
      />

      <MainStyled>
        <section>
          {resultSaerch && (
            <Results
              resultSaerch={resultSaerch}
              setResultSaerch={setResultSaerch}
              setFilteredProducts={setFilteredProducts}
            />
          )}
          <ProductsList
            products={filteredProducts.length ? filteredProducts : products}
            handleClick={handleClick}
          />
        </section>

        <section className="cart">
          <h2>Carrinho de compras</h2>
          <Cart currentSale={currentSale} setCurrentSale={setCurrentSale} />
        </section>
      </MainStyled>
    </div>
  );
}

export default App;
