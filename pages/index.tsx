// import Link from 'next/link';
import * as S from '@pages/Home.style';
import barImage from '@assets/images/bar.jpg';
import Image from 'next/image';
import MainContent from '@components/home/MainContent';

function Home() {
  return (
    <S.Container>
      <S.BackgroundImageWrapper>
        <Image
          src={barImage}
          fill
          alt="홈 배경 이미지"
          style={{ objectFit: 'cover' }}
        />
      </S.BackgroundImageWrapper>

      <MainContent />
    </S.Container>
  );
}

export default Home;
