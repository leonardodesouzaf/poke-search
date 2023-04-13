import useAsync from '../useAsync';

import * as pokeApi from '../../services/pokeApi';

export default function usePokemonByName() {
  const {
    loading: pokemonByNameLoading,
    error: pokemonByNameError,
    act: pokemonByName,
  } = useAsync(pokeApi.pokemonByName, false);

  return {
    pokemonByNameLoading,
    pokemonByNameError,
    pokemonByName,
  };
}
