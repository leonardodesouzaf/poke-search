import useAsync from '../useAsync';

import * as pokeApi from '../../services/pokeApi';

export default function usePokemonsByType() {
  const {
    loading: pokemonsByTypeLoading,
    error: pokemonsByTypeError,
    act: pokemonsByType,
  } = useAsync(pokeApi.pokemonsByType, false);

  return {
    pokemonsByTypeLoading,
    pokemonsByTypeError,
    pokemonsByType,
  };
}
