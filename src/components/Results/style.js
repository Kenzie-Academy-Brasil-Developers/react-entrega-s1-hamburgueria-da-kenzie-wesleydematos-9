import styled from "styled-components";

export const ResultsStyled = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color: var(--gray-100);
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 30px;
  }

  span {
    font-weight: 700;
    font-size: 26px;
    line-height: 34px;
    color: var(--gray-50);
  }

  button {
    display: none;
    align-self: center;
    background-color: var(--color-primary);
    width: 137px;
    height: 40px;
    color: var(--white);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--color-primary-ligth);
    border: 2px solid var(--color-primary-ligth);
  }
  @media (min-width: 1440px) {
    width: 60vw;
    justify-content: space-between;

    button {
      margin-top: 20px;
      display: block;
      margin-right: 20px;
    }

    p {
      margin-top: 20px;
      margin-bottom: 0;
    }
  }

  @media (min-width: 1700px) {
    button {
      margin-right: 120px;
    }
  }

  @media (min-width: 1800px) {
    button {
      margin-right: 220px;
    }
  }
`;
