import { useQuery } from '@tanstack/react-query';
import { getRandomCocktail } from '@pages/api/api';

export default function useRandomCocktail() {
  return useQuery({
    queryKey: ['randomCocktail'],
    queryFn: getRandomCocktail,
  });
}
