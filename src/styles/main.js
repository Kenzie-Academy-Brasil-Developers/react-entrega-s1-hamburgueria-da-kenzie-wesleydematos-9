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

  .contentCart {
    display: flex;
    flex-direction: column;
    background-color: var(--gray-0);
    min-height: 158px;
  }

  .contentCart > p {
    margin: 50px 0 15px 0;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
    align-self: center;
  }

  .contentCart > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--gray-50);
    align-self: center;
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
