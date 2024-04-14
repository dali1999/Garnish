import styled, { css } from 'styled-components';

interface MainContentProps {
  isVisible: boolean;
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const BackgroundImageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  filter: blur(6px);
  -webkit-filter: blur(6px);
  z-index: -1;
`;

const MainContentBase = css`
  background-color: #f5ede9;
  margin-top: 100px;
  width: 1000px;
  height: 100vh;
  z-index: 0;
  border: 1px solid black;
  position: absolute;
  top: 0;
  transition: opacity 0.5s ease;
`;

export const MainContent1 = styled.div<MainContentProps>`
  ${MainContentBase}
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
`;

export const MainContent2 = styled.div<MainContentProps>`
  ${MainContentBase}
  opacity: ${({ isVisible }) => (isVisible ? 0 : 1)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'none' : 'auto')};
`;

export const Button = styled.button`
  position: absolute;
  top: 150px;
  right: 160px;
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #000000;
  cursor: pointer;
  z-index: 1;
`;
