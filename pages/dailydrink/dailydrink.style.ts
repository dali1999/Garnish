import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const DrinkImageWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 500px;
  border-bottom-right-radius: 120px;
  overflow: hidden;
`;

export const DrinkInfo = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  width: 100%;
  h1 {
    font-size: 50px;
    font-weight: 900;
    margin-bottom: 20px;
  }
`;

export const DrinkCategory = styled.p`
  font-size: 20px;
  text-align: end;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 100px;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 50px;
`;
