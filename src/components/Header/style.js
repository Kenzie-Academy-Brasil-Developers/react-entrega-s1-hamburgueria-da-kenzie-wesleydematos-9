import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 139px;
  background-color: var(--gray-0);
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  img {
    width: 159px;
    height: 37px;
  }

  div {
    height: 60px;
    width: 300px;
    position: relative;
  }

  div > input {
    width: 100%;
    height: 100%;
    padding-left: 15px;
    color: var(--gray-100);
    border: 2px solid var(--gray-20);
    border-radius: 8px;
    outline: none;
  }

  div > input::placeholder {
    color: var(--gray-20);
  }

  div > input:focus {
    border: 2px solid var(--gray-50);
  }

  div > button {
    height: 40px;
    width: 106px;
    right: 10px;
    bottom: 10px;
    color: var(--white);
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
    position: absolute;
  }

  div > button:hover {
    background-color: var(--color-primary-ligth);
    border: 2px solid var(--color-primary-ligth);
  }

  @media (min-width: 425px) {
    div {
      width: 382px;
    }
  }

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    height: 80px;

    img {
      margin-left: 7.18%;
    }

    div {
      margin-right: 7.18%;
    }
  }
`;
