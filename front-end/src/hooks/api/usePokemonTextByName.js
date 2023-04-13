import useAsync from '../useAsync';

import * as pokeApi from '../../services/pokeApi';

export default function usePokemonTextByName() {
  const {
    loading: pokemonTextByNameLoading,
    error: pokemonTextByNameError,
    act: pokemonTextByName,
  } = useAsync(pokeApi.pokemonTextByName, false);

  return {
    pokemonTextByNameLoading,
    pokemonTextByNameError,
    pokemonTextByName,
  };
}
