import useAsync from '../useAsync';

import * as pokeApi from '../../services/pokeApi';

export default function usePokemonByUrl() {
  const {
    loading: pokemonByUrlLoading,
    error: pokemonByUrlError,
    act: pokemonByUrl,
  } = useAsync(pokeApi.pokemonByUrl, false);

  return {
    pokemonByUrlLoading,
    pokemonByUrlError,
    pokemonByUrl,
  };
}
