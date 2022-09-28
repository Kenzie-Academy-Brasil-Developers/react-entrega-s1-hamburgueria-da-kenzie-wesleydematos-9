import { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import api from "./services/api";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => {
      setProducts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <ProductsList products={products} />
      </main>
    </div>
  );
}

export default App;
