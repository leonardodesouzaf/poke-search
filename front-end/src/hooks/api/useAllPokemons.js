import useAsync from '../useAsync';

import * as pokeApi from '../../services/pokeApi';

export default function useAllPokemons() {
  const {
    loading: allPokemonsLoading,
    error: allPokemonsError,
    act: allPokemons,
  } = useAsync(pokeApi.allPokemons, false);

  return {
    allPokemonsLoading,
    allPokemonsError,
    allPokemons,
  };
}
