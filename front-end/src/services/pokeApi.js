import axios from 'axios';

export async function allPokemons() {
  const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
  return response.data;
}

export async function pokemonByUrl(url) {
  const response = await axios.get(url);
  return response.data;
}

export async function pokemonsByType(type) {
  const response = await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
  return response.data;
}

export async function pokemonByName(name) {
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return response.data;
}
