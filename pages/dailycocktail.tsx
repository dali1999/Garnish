import React from 'react';
import Image from 'next/image';
import * as S from '@pages/dailycocktail.style';
import { getRandomCocktail } from './api/api';

type RandomData = {
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
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
  const ingredients = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = randomData[`strIngredient${i}`];
    if (ingredient) {
      ingredients.push(ingredient);
    }
  }
  console.log(ingredients);

  return (
    <S.Container>
      <S.DrinkImageWrapper>
        <Image src={randomData.strDrinkThumb} fill alt="칵테일 이미지" />
      </S.DrinkImageWrapper>
      <S.DrinkInfo>
        <h1>{randomData.strDrink}</h1>
        <p>{randomData.strCategory}</p>
        <S.Ingredients>
          {ingredients.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </S.Ingredients>
      </S.DrinkInfo>
    </S.Container>
  );
}

export default dailycocktail;
