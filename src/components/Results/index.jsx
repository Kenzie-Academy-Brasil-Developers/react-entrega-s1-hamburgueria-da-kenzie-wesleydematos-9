import { ResultsStyled } from "./style";

const Results = ({ resultSaerch, setResultSaerch, setFilteredProducts }) => {
  return (
    <ResultsStyled>
      <p>
        Resultados para: <span>{resultSaerch}</span>
      </p>
      <button
        type="button"
        onClick={() => {
          const input = document.querySelector("input");
          input.value = "";
          setResultSaerch("");
          setFilteredProducts([]);
        }}
      >
        Limpar Busca
      </button>
    </ResultsStyled>
  );
};

export default Results;
