/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import * as S from '@pages/search-cocktail/search-cocktail.style';
import { useCocktailByName } from '@hooks/queryHooks';
import CocktailLists from '@components/search-cocktail/cocktail-lists';

function Ingredients() {
  const [inputValue, setInputValue] = useState('Gin');
  const [searchTerm, setSearchTerm] = useState('Gin');
  const { data, isLoading, error } = useCocktailByName(searchTerm);

  const handleSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setSearchTerm(inputValue);
  };

  const handleInputChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setInputValue(e.target.value);
  };
  return (
    <S.Container>
      <h1>칵테일 검색</h1>
      <form onSubmit={handleSearch}>
        <S.SearchInput
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="찾고싶은 칵테일은?"
        />
      </form>
      {error && <div>Error loading data</div>}
      {data && data.drinks && data.drinks.length > 0 ? (
        <CocktailLists data={data} />
      ) : isLoading ? (
        <div>칵테일 정보를 불러오는 중...</div>
      ) : (
        <div>칵테일 정보가 없습니다.</div>
      )}
    </S.Container>
  );
}

export default Ingredients;
