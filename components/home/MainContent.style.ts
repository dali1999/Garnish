import Link from 'next/link';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px 60px;
  background-color: #f8f1f1;
  margin-top: 100px;
  width: 1000px;
  height: 1000px;
  z-index: 0;
  border: 1px solid black;
  position: absolute;
  top: 0;
  transition: opacity 0.5s ease;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 70px;
  margin: 20px 0 50px;
  font-family: 'Times New Roman', Times, serif;
`;

export const MenuContent = styled.div`
  display: flex;
  border-top: 2px solid black;
  width: 100%;
  height: 100%;
`;

export const StyledLink = styled(Link)`
  margin: 20px 0;
  text-decoration: none;
  color: black;
  font-size: 30px;
`;

export const MenuLeft = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid black;
  width: 50%;
`;

export const MenuRight = styled.div`
  width: 50%;
`;
