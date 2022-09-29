import styled from "styled-components";

export const DivStyled = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-0);
  min-height: 158px;

  .contentCart {
    display: flex;
    flex-direction: column;
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
`;
