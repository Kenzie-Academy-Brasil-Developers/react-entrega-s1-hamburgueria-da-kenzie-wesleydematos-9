import { DivStyled } from "./components/Cart/style";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <ProductsList />
        <DivStyled />
      </main>
    </div>
  );
}

export default App;
