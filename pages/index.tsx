import Head from 'next/head';
import Link from 'next/link';
import * as S from '@pages/Home.style';
import barImage from '@assets/images/bar.jpg';
import Image from 'next/image';
import { useState } from 'react';

function Home() {
  const [isContent1Visible, setContent1Visible] = useState<boolean>(true);

  const toggleContentVisibility = () => {
    setContent1Visible((prev) => !prev);
  };

  return (
    <>
      <Head>
        <title>Garnish</title>
        <meta name="description" content="Choose your cocktail" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <S.Container>
        <S.BackgroundImageWrapper>
          <Image
            src={barImage}
            fill
            alt="홈 배경 이미지"
            style={{ objectFit: 'cover' }}
          />
        </S.BackgroundImageWrapper>

        <S.Button onClick={toggleContentVisibility}>넘기기</S.Button>
        <S.MainContent1 isVisible={isContent1Visible}>
          <h1>Cocktail</h1>
          <Link href="/dailydrink">오늘의 칵테일</Link>
        </S.MainContent1>

        <S.MainContent2 isVisible={isContent1Visible}>
          <h1>Ingredients</h1>
          <Link href="/dailydrink">오늘의 칵테일</Link>
        </S.MainContent2>
      </S.Container>
    </>
  );
}

export default Home;
