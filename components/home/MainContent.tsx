import React from 'react';
import Link from 'next/link';
import * as S from '@components/home/MainContent.style';

function MainContent() {
  return (
    <S.Container>
      <S.Title>Cocktail</S.Title>
      <S.MenuContent>
        <S.MenuLeft>
          <Link href="/dailydrink">오늘의 칵테일</Link>
          <Link href="/search-cocktail">칵테일 검색하기</Link>
        </S.MenuLeft>

        <S.MenuRight>2</S.MenuRight>
      </S.MenuContent>
    </S.Container>
  );
}

export default MainContent;
