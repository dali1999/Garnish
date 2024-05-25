import { useQuery } from '@tanstack/react-query';
import {
  getCocktailByName,
  getIngredientByName,
  getRandomCocktail,
} from '@api';

export function useRandomCocktail() {
  return useQuery({
    queryKey: ['randomCocktail'],
    queryFn: getRandomCocktail,
  });
}

export function useCocktailByName(name: string) {
  return useQuery({
    queryKey: ['cocktailByName', name],
    queryFn: () => getCocktailByName(name),
    enabled: !!name,
  });
}

export function useIngredientByName(name: string) {
  return useQuery({
    queryKey: ['ingredientByName', name],
    queryFn: () => getIngredientByName(name),
    enabled: !!name,
  });
}
