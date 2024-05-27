import React from 'react';
import * as S from '@components/home/MainContent.style';

function MainContent() {
  return (
    <S.Container>
      <S.Title>Garnish</S.Title>
      <S.MenuContent>
        <S.MenuLeft>
          <S.StyledLink href="/dailydrink">오늘의 칵테일</S.StyledLink>
          <S.StyledLink href="/search-cocktail">칵테일 검색하기</S.StyledLink>
        </S.MenuLeft>

        <S.MenuRight>칵테일 재료 보기</S.MenuRight>
      </S.MenuContent>
    </S.Container>
  );
}

export default MainContent;
