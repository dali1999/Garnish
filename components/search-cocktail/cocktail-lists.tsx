import React from 'react';
import * as S from '@components/search-cocktail/cocktail-lists.style';
import Image from 'next/image';

type TDrink = {
  idDrink: number;
  strDrinkThumb: string;
  strDrink: string;
};

type TCocktailListsProps = {
  data: { drinks: TDrink[] };
};

function CocktailLists({ data }: TCocktailListsProps) {
  console.log(data);
  return (
    <S.CocktailLists>
      {data.drinks.map((drink: TDrink) => (
        <S.CocktailList key={drink.idDrink}>
          <S.CocktailImageWrapper>
            <Image
              src={drink.strDrinkThumb}
              alt="칵테일 이미지"
              quality={30}
              fill
            />
          </S.CocktailImageWrapper>
          <h3>{drink.strDrink}</h3>
        </S.CocktailList>
      ))}
    </S.CocktailLists>
  );
}

export default CocktailLists;
