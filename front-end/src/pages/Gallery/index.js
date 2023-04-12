import GalleryLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { ContainerCenter, ContainerLeft, ContainerRight, Flexing, Line, LoadingList, PokemonFilterImg, PokemonFilters, PokemonList, PokemonOrder, PokemonOrderButton, Search, SearchIcon, Title } from '../../components/Gallery';
import bluepokeball from '../../assets/images/bluepokeball.png';
import water from '../../assets/types/water.png';
import fire from '../../assets/types/fire.png';
import grass from '../../assets/types/grass.png';
import ground from '../../assets/types/ground.png';
import rock from '../../assets/types/rock.png';
import steel from '../../assets/types/steel.png';
import ice from '../../assets/types/ice.png';
import eletric from '../../assets/types/eletric.png';
import dragon from '../../assets/types/dragon.png';
import ghost from '../../assets/types/ghost.png';
import psychic from '../../assets/types/psychic.png';
import normal from '../../assets/types/normal.png';
import fightning from '../../assets/types/fightning.png';
import poison from '../../assets/types/poison.png';
import bug from '../../assets/types/bug.png';
import flying from '../../assets/types/flying.png';
import dark from '../../assets/types/dark.png';
import fairy from '../../assets/types/fairy.png';
import Pokemon from '../../components/Gallery/Pokemon';
import useAllPokemons from '../../hooks/api/useAllPokemons';
import usePokemonsByType from '../../hooks/api/usePokemonsByType';

export default function Gallery() {
  const [isGalleryDisplay, setIsGalleryDisplay] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [isSortedOrder, setIsSortedOrder] = useState(false);
  const [isTypeFilter, setIsTypeFilter] = useState(false);
  const [isLoadingList, setIsLoadingList] = useState(false);
  const { allPokemonsLoading, allPokemons } = useAllPokemons();
  const { pokemonsByTypeLoading, pokemonsByType } = usePokemonsByType();
  useEffect(() => {
    getAllPokemons();
  }, []);
  async function getAllPokemons() {
    try {
      setIsLoadingList(true);
      const pokemons = await allPokemons();
      setPokemonList(pokemons.results);
      setIsSortedOrder(false);
      setIsTypeFilter(false);
      setTimeout(() => {
        setIsLoadingList(false);
      }, 500);
    } catch (error) {
      toast('Error loading the pokémons list');
    }
  }
  function sortByName() {
    setIsLoadingList(true);
    let sortedList;
    if(isTypeFilter) {
      sortedList = pokemonList.sort(function(a, b) {
        if (a.pokemon.name < b.pokemon.name) {
          return -1;
        }
        if (a.pokemon.name > b.pokemon.name) {
          return 1;
        }
        return 0;
      });
    }else {
      sortedList = pokemonList.sort(function(a, b) {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });
    }
    setPokemonList(sortedList);
    setIsSortedOrder(true);
    setTimeout(() => {
      setIsLoadingList(false);
    }, 1000);
  }
  async function getPokemonsByType(type) {
    try {
      setIsLoadingList(true);
      const pokemons = await pokemonsByType(type);
      setPokemonList(pokemons.pokemon);
      setIsSortedOrder(false);
      setIsTypeFilter(false);
      setIsTypeFilter(true);
      setTimeout(() => {
        setIsLoadingList(false);
      }, 1000);
    } catch (error) {
      toast('Error loading the type pokémons list');
    }
  }
  return (
    <GalleryLayout>
      <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>
        <Flexing>
          <ContainerLeft>
            <Title>
              <img src={bluepokeball} alt='Its a pokeball in blue color'/>
              <p>Pokédex</p>
              <img src={bluepokeball} alt='Its a pokeball in blue color'/>
            </Title>
            <PokemonList>
              { isLoadingList ? (
                <LoadingList><p>Loading...</p></LoadingList>
              ):(
                <></>
              ) }
              { allPokemonsLoading ? (
                <></>
              ):(
                <>{ isTypeFilter ? (
                  <>{pokemonList.map((pokemon, index) => <Pokemon key={index} name={pokemon.pokemon.name} url={pokemon.pokemon.url} isSortedOrder={isSortedOrder} isTypeFilter={isTypeFilter}/>)}</>
                ):(
                  <>{ isSortedOrder ? (
                    <>{pokemonList.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} url={pokemon.url} isSortedOrder={isSortedOrder} isTypeFilter={isTypeFilter}/>)}</>
                  ):(
                    <>{pokemonList.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} url={pokemon.url} isSortedOrder={isSortedOrder} isTypeFilter={isTypeFilter}/>)}</>
                  )}</>
                )}</>
              )}
            </PokemonList>
          </ContainerLeft>
          <ContainerCenter>
            <Line></Line>
            <Line></Line>
          </ContainerCenter>
          <ContainerRight>
            <Search>
              <p>Search by name...</p>
              <SearchIcon><IoIosSearch/></SearchIcon>
            </Search>
            <PokemonOrder>
              <p>Order by:</p>
              <PokemonOrderButton onClick={() => {
                if(!isSortedOrder) {
                  sortByName();
                }
              }}>A-Z</PokemonOrderButton>
              <PokemonOrderButton onClick={() => {
                if(isSortedOrder) {
                  getAllPokemons();
                }
              }}>1-1279</PokemonOrderButton>
            </PokemonOrder>
            <PokemonFilters>
              <p>Search by type:</p>
              <div>
                <PokemonFilterImg onClick={() => getPokemonsByType('water')}>
                  <img src={water} alt='Pokemon type'/>
                  <p>Water</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('fire')}>
                  <img src={fire} alt='Pokemon type'/>
                  <p>Fire</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('grass')}>
                  <img src={grass} alt='Pokemon type'/>
                  <p>Grass</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('ground')}>
                  <img src={ground} alt='Pokemon type'/>
                  <p>Ground</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('rock')}>
                  <img src={rock} alt='Pokemon type'/>
                  <p>Rock</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('steel')}>
                  <img src={steel} alt='Pokemon type'/>
                  <p>Steel</p>
                </PokemonFilterImg>
              </div>
              <Line></Line>
              <div>
                <PokemonFilterImg onClick={() => getPokemonsByType('ice')}>
                  <img src={ice} alt='Pokemon type'/>
                  <p>Ice</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('electric')}>
                  <img src={eletric} alt='Pokemon type'/>
                  <p>Electric</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('dragon')}>
                  <img src={dragon} alt='Pokemon type'/>
                  <p>Dragon</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('ghost')}>
                  <img src={ghost} alt='Pokemon type'/>
                  <p>Ghost</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('psychic')}>
                  <img src={psychic} alt='Pokemon type'/>
                  <p>Psychic</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('normal')}>
                  <img src={normal} alt='Pokemon type'/>
                  <p>Normal</p>
                </PokemonFilterImg>
              </div>
              <Line></Line>
              <div>
                <PokemonFilterImg onClick={() => getPokemonsByType('fighting')}>
                  <img src={fightning} alt='Pokemon type'/>
                  <p>Fighting</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('poison')}>
                  <img src={poison} alt='Pokemon type'/>
                  <p>Poison</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('bug')}>
                  <img src={bug} alt='Pokemon type'/>
                  <p>Bug</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('flying')}>
                  <img src={flying} alt='Pokemon type'/>
                  <p>Flying</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('dark')}>
                  <img src={dark} alt='Pokemon type'/>
                  <p>Dark</p>
                </PokemonFilterImg>
                <PokemonFilterImg onClick={() => getPokemonsByType('fairy')}>
                  <img src={fairy} alt='Pokemon type'/>
                  <p>Fairy</p>
                </PokemonFilterImg>
              </div>
            </PokemonFilters>
          </ContainerRight>
        </Flexing>
      </Zoom>
    </GalleryLayout>
  );
}
