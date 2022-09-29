import styled from "styled-components";

export const MainStyled = styled.main`
  display: flex;
  flex-direction: column;

  .cart {
    align-self: center;
    margin-top: 20px;
    width: 300px;
  }

  .cart > h2 {
    border-radius: 5px 5px 0px 0px;
    color: var(--white);
    background-color: var(--color-primary);
    width: 100%;
    height: 65px;
    padding: 20px;
  }

  @media (min-width: 425px) {
    .cart {
      width: 95%;
    }
  }

  @media (min-width: 1600px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 7.18%;

    .cart {
      min-width: 365px;
      align-self: flex-start;
    }
    .cart > h2 {
      margin-top: 30px;
    }
  }
`;
