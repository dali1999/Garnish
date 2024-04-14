import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DrinkImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  border-bottom-right-radius: 50px;
  overflow: hidden;
`;

export const DrinkInfo = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  h1 {
    font-size: 40px;
  }
  p {
    font-size: 15px;
    border: 1px solid red;
    text-align: end;
    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Ingredients = styled.ul``;
