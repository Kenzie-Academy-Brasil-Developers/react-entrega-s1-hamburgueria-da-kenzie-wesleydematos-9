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

  .carrinho {
    max-height: 235px;
    overflow-y: auto;

    @media (min-width: 1440px) {
      max-height: 350px;
    }

    & > li {
      padding: 0 5px;
      margin: 20px 0;
      height: 70px;
      display: flex;
      justify-content: space-between;

      & > article {
        display: flex;

        & > div {
          display: flex;
          width: 70px;
          height: 70px;
          gap: 5px;
          background-color: var(--gray-20);

          & > img {
            padding-left: 10px;
            width: 60px;
            height: 60px;
          }
        }

        & .contentProductCart {
          width: 170px;
          height: 70px;
          flex-direction: column;
          background-color: var(--gray-0);
          margin-left: 15px;

          & > p {
            font-weight: 700;
            font-size: 14px;
            line-height: 24px;
            color: var(--gray-100);
          }

          & > span {
            color: var(--gray-50);
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
          }
        }
      }

      & > button {
        align-self: flex-start;
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: var(--gray-50);
        padding: 5px;
        border-radius: 4px;

        &:hover {
          color: var(--gray-20);
          background-color: var(--gray-50);
        }
      }
    }
  }

  .cartTotal {
    border-top: 2px solid var(--gray-20);
    display: flex;
    flex-direction: column;
    height: 140px;
    padding: 15px;
    background-color: var(--gray-0);

    & > div {
      display: flex;
      justify-content: space-between;
      margin-bottom: 22px;

      & > p {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--gray-100);
      }

      & > span {
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        color: var(--gray-50);
      }
    }

    & > button {
      background-color: var(--gray-20);
      color: var(--gray-50);
      border: 2px solid var(--gray-20);
      border-radius: 8px;
      height: 60px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19px;

      &:hover {
        color: var(--gray-0);
        background-color: var(--gray-50);
        border-color: var(--gray-50);
      }
    }
  }
`;
