import React from 'react';
import Image from 'next/image';
import * as S from '@pages/dailydrink.style';
import Ingredients from '@components/dailydrink/Ingredients';
import { getRandomCocktail } from './api/api';

type RandomData = {
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strVideo: string;
  [key: string]: string;
};

export async function getStaticProps() {
  const res = await getRandomCocktail();
  const randomData: RandomData = res.drinks[0];

  return {
    props: {
      randomData,
    },
  };
}

type Props = {
  randomData: RandomData;
};

function dailycocktail({ randomData }: Props) {
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = randomData[`strIngredient${i}`];
    const measure = randomData[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }

  return (
    <>
      <S.Container>
        <S.DrinkImageWrapper>
          <Image
            src={randomData.strDrinkThumb}
            fill
            alt="칵테일 이미지"
            priority
            style={{ objectFit: 'cover' }}
            quality={100}
          />
        </S.DrinkImageWrapper>
        <S.DrinkInfo>
          <h1>{randomData.strDrink}</h1>
          <S.DrinkCategory>{randomData.strCategory}</S.DrinkCategory>
          <p>{randomData.strInstructions}</p>
        </S.DrinkInfo>
      </S.Container>
      {randomData.strVideo}
      <S.IngredientsContainer>
        <Ingredients ingredients={ingredients} measures={measures} />
      </S.IngredientsContainer>
    </>
  );
}

export default dailycocktail;
