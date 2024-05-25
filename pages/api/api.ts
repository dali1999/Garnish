const BASE_URL = 'https://www.thecocktaildb.com/api/json/v1/1';

export async function getRandomCocktail() {
  const url = `${BASE_URL}/random.php`;
  const response = await fetch(url);
  return response.json();
}

export async function getCocktailByName(name: string) {
  const url = `${BASE_URL}/search.php?s=${name}`;
  const response = await fetch(url);
  return response.json();
}

export async function getCocktailByFirstLetter(letter: string) {
  const url = `${BASE_URL}/search.php?f=${letter}`;
  const response = await fetch(url);
  return response.json();
}

export async function getIngredientByName(name: string) {
  const url = `${BASE_URL}/search.php?i=${name}`;
  const response = await fetch(url);
  return response.json();
}

export async function getCocktailDetailsById(id: string) {
  const url = `${BASE_URL}/lookup.php?i=${id}`;
  const response = await fetch(url);
  return response.json();
}

export async function getIngredientDetailsById(id: string) {
  const url = `${BASE_URL}/lookup.php?iid=${id}`;
  const response = await fetch(url);
  return response.json();
}
