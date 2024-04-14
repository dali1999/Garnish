import styled from 'styled-components';

export const Ingredients = styled.ul`
  width: fit-content;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  flex-wrap: wrap;
  gap: 70px;
`;

export const Ingredient = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  p {
    width: 100%;
  }
`;

export const IngredientImageWrapper = styled.div`
  padding: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const IngredientName = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const Measure = styled.p`
  /* text-align: end; */
`;
