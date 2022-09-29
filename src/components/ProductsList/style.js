import styled from "styled-components";

export const UlStyled = styled.ul`
  list-style: none;
  display: flex;
  overflow: auto;
  margin-top: 15px;
  gap: 20px;
  width: 100vw;
  margin-left: 10px;

  @media (min-width: 800px) {
    margin-top: 30px;
  }

  @media (min-width: 1600px) {
    flex-wrap: wrap;
    width: 60vw;
  }
`;
