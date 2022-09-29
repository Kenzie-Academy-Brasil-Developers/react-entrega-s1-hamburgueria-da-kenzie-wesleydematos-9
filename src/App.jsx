import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import api from "./services/api";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

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

    setFilteredProducts(newProducts);
  }

  return (
    <div className="App">
      <Header
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        inexist={inexist}
      />
      <main>
        <ProductsList
          products={filteredProducts.length ? filteredProducts : products}
        />
      </main>
      <Toaster
        containerStyle={{
          position: "relative",
        }}
      />
    </div>
  );
}

export default App;
