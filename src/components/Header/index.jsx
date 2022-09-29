import logo from "../../img/logo.svg";
import { HeaderStyled } from "./style";

const Header = ({ showProducts, filteredProducts, inexist }) => {
  function searchProduct() {
    if (!filteredProducts.length) {
      inexist();
      const input = document.querySelector("input");
      input.value = "";
    }
  }
  return (
    <HeaderStyled>
      <img src={logo} alt="Burguer Kenzie Logo" />
      <div>
        <input
          type="text"
          placeholder="Digitar Pesquisa"
          onChange={(event) => {
            showProducts(event);
          }}
        />
        <button
          type="button"
          onClick={() => {
            searchProduct();
          }}
        >
          Pesquisar
        </button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
