import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import api from "./services/api";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  function showProducts(event) {
    const newProducts = products.filter((product) => {
      if (
        product.name
          .toLowerCase()
          .includes(event.target.value.trim().toLowerCase())
      ) {
        return product;
      }
    });

    setFilteredProducts(newProducts);
  }

  return (
    <div className="App dark">
      <Header showProducts={showProducts} />
      <main>
        <ProductsList
          products={filteredProducts.length ? filteredProducts : products}
        />
      </main>
    </div>
  );
}

export default App;
