import React from 'react';
import * as S from '@components/dailydrink/Ingredients.style';
import Image from 'next/image';

type Props = {
  ingredients: string[];
  measures: string[];
};

function Ingredients({ ingredients, measures }: Props) {
  return (
    <S.Ingredients>
      {ingredients.map((ingredient, idx) => (
        <S.Ingredient key={ingredient}>
          <S.IngredientImageWrapper>
            <Image
              src={`https://www.thecocktaildb.com/images/ingredients/${ingredient}-Medium.png`}
              width={170}
              height={170}
              alt="재료 이미지"
              style={{ objectFit: 'cover' }}
            />
          </S.IngredientImageWrapper>
          <S.IngredientName>{ingredient}</S.IngredientName>
          <S.Measure>{measures[idx]}</S.Measure>
        </S.Ingredient>
      ))}
    </S.Ingredients>
  );
}

export default Ingredients;
