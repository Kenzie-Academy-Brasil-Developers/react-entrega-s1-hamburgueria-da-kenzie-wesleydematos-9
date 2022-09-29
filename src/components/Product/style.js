import styled from "styled-components";

export const LiStyled = styled.li`
  width: 300px;
  height: 346px;
  border: 2px solid var(--gray-20);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 14px;

  div {
    width: 100%;
    height: 150px;
    background-color: var(--gray-0);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div > img {
    height: 150px;
  }

  div > img:hover {
    transform: scale(1.25, 1.25);
  }

  h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: var(--gray-100);
    margin-left: 21px;
    margin-top: 10px;
    width: 300px;
  }

  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: var(--gray-50);
    margin-left: 21px;
  }

  p {
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--color-primary);
    margin-left: 21px;
  }

  button {
    height: 40px;
    width: 106px;
    margin-left: 21px;
    color: var(--white);
    background-color: var(--color-primary);
    border: 2px solid var(--color-primary);
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--color-primary-ligth);
    border: 2px solid var(--color-primary-ligth);
  }
`;
