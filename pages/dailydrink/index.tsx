import React from 'react';
import Image from 'next/image';
import * as S from '@pages/dailydrink/dailydrink.style';
import Ingredients from '@components/dailydrink/Ingredients';
import useRandomCocktail from '@hooks/useQuery';

type RandomData = {
  strDrink: string;
  strCategory: string;
  strInstructions: string;
  strDrinkThumb: string;
  strVideo: string;
  [key: string]: string;
};

const extractIngredientsAndMeasures = (data: RandomData) => {
  const ingredients: string[] = [];
  const measures: string[] = [];

  for (let i = 1; i <= 15; i++) {
    const ingredient = data[`strIngredient${i}`];
    const measure = data[`strMeasure${i}`];
    if (ingredient && measure) {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }
  return { ingredients, measures };
};

function Dailycocktail() {
  const { data, isLoading, error } = useRandomCocktail();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  if (!data || !data.drinks || !data.drinks[0])
    return <div>No cocktail data found</div>;

  const randomData: RandomData = data.drinks[0];
  const { ingredients, measures } = extractIngredientsAndMeasures(randomData);

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

export default Dailycocktail;
