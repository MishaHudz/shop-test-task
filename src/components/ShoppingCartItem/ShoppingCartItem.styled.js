import styled from 'styled-components';

export const ShoppingListItem = styled.li`
  width: 360px;
  display: flex;

  border: 1px solid black;
  border-radius: 25px;
  overflow: hidden;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const ShoppingListItemRightPart = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  justify-content: space-between;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;

export const ShoppingListItemButton = styled.button`
  height: 30px;
  cursor: pointer;

  @media (min-width: 768px) {
  }

  @media (min-width: 1280px) {
  }
`;
