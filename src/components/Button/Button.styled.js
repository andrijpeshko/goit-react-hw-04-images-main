import styled from 'styled-components';

export const ButtonLoadMore = styled.button`
  padding: 8px 16px;
  border-radius: 2px;
  margin-top: 18px;
  background: linear-gradient(
    55deg,
    rgb(240, 240, 240) 6%,
    rgb(180, 180, 180),
    rgb(120, 120, 120)
  );
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  display: inline-block;
  color: #fff;
  border: 1px solid #707070;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 20px;
  line-height: 24px;
  font-style: normal;
  font-weight: 900;
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;
