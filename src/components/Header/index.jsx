import logo from "../../img/logo.svg";
import { HeaderStyled } from "./style";

const Header = ({ showProducts }) => {
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
        <button>Pesquisar</button>
      </div>
    </HeaderStyled>
  );
};

export default Header;
