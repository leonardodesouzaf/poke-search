import GalleryLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { Button, Tooltip, Zoom } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { ContainerCenter, ContainerLeft, ContainerRight, FiltersDiv, FiltersTop, Flexing, Line, LoadingList, PokemonFilterImg, PokemonFilters, PokemonFiltersSpace, PokemonList, PokemonNumOrderButton, PokemonOrder, PokemonOrderButton, ResetFilters, Search, SearchIconDiv, SearchInput, Title, WrongIcon } from '../../components/Gallery';
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
import { useNavigate, useParams } from 'react-router-dom';
import usePokemonByName from '../../hooks/api/usePokemonByName';

export default function Gallery() {
  const { zoom } = useParams();
  const [isZoomGallery, setIsZoomGallery] = useState(false);
  const [isGalleryDisplay, setIsGalleryDisplay] = useState(true);
  const [pokemonList, setPokemonList] = useState([]);
  const [isSortedOrder, setIsSortedOrder] = useState(false);
  const [isTypeFilter, setIsTypeFilter] = useState(false);
  const [typeSelectioned, setTypeSelectioned] = useState('');
  const [isLoadingList, setIsLoadingList] = useState(false);
  const { allPokemonsLoading, allPokemons } = useAllPokemons();
  const { pokemonsByType } = usePokemonsByType();
  const { pokemonByNameLoading, pokemonByName } = usePokemonByName();
  const [nameSearching, setNameSearching] = useState('');
  const [searchExists, setSearchExists] = useState(true);
  const [buttonReset, setButtonReset] = useState(false);
  const [buttonSort, setButtonSort] = useState(false);
  const [buttonNumeric, setButtonNumeric] = useState(false);
  const [buttonSearch, setButtonSearch] = useState(false);
  const [hashtable, setHashtable] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(zoom === 't') {
      setIsZoomGallery(true);
    }
    getAllPokemons();
  }, []);
  async function getAllPokemons() {
    if(isTypeFilter) {
      setButtonNumeric(true);
      setTimeout(() => {
        setButtonNumeric(false);
      }, 500);
      getPokemonsByType(typeSelectioned);
    }else{
      if(isSortedOrder) {
        setButtonNumeric(true);
        setTimeout(() => {
          setButtonNumeric(false);
        }, 500);
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
      }else{
        try {
          setIsLoadingList(true);
          const pokemons = await allPokemons();
          pokeHashtable(pokemons.results);
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
    }
  }
  function pokeHashtable(list) {
    for (let i = 0; i < list.length; i ++) {
      hashtable.push(list[i].name);
    }
  }
  function sortByName() {
    setButtonSort(true);
    setTimeout(() => {
      setButtonSort(false);
    }, 500);
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
      setTypeSelectioned(type);
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
  async function resetFiltersOrders() {
    setButtonReset(true);
    setTimeout(() => {
      setButtonReset(false);
    }, 200);
    setIsTypeFilter(false);
    try {
      setIsLoadingList(true);
      const pokemons = await allPokemons();
      setPokemonList(pokemons.results);
      setIsSortedOrder(true);
      setIsSortedOrder(false);
      setIsTypeFilter(false);
      setTimeout(() => {
        setIsLoadingList(false);
      }, 500);
    } catch (error) {
      toast('Error loading the pokémons list');
    }
  }
  async function searchByName() {
    setButtonSearch(true);
    setTimeout(() => {
      setButtonSearch(false);
    }, 500);
    try {
      const name = await nameSearching.toLowerCase();
      const pokemon = await pokemonByName(name);
      setIsGalleryDisplay(false);
      setTimeout(() => {
        navigate(`/pokemon/${name}`);
      }, 500);
    } catch (error) {
      setSearchExists(false);
      setTimeout(() => {
        setSearchExists(true);
      }, 3000);
    }
  }
  return (
    <GalleryLayout>
      { isZoomGallery ? (
        <Zoom in={true} timeout={500} mountOnEnter unmountOnExit>
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
                    <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                      <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.pokemon.name} setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                    </Zoom>
                  ):(
                    <>{ isSortedOrder ? (
                      <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                        <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.name}  setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                      </Zoom>
                    ):(
                      <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                        <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.name}  setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                      </Zoom>
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
              <Search searchExists={searchExists}>
                <SearchInput id="outlined-basic" onChange={e => setNameSearching(e.target.value)} label='Search by name...' variant='outlined' fullWidth/>
                { searchExists ? (
                  <SearchIconDiv buttonSearch={buttonSearch} onClick={() => searchByName()}>
                    <Button variant='contained' color='inherit' onClick={() => searchByName()}>
                      <SearchIcon sx={{ fontSize: 30 }}/>
                    </Button>
                  </SearchIconDiv>
                ):(
                  <WrongIcon><p><CloseIcon sx={{ fontSize: 30 }}/></p></WrongIcon>
                )}
              </Search>
              <PokemonOrder>
                <p>Order by:</p>
                <PokemonOrderButton buttonSort={buttonSort}>
                  <Tooltip title="Reorder the list alphabetically" TransitionComponent={Zoom}  arrow>
                    <Button variant='contained' color='inherit' onClick={() => {
                      if(!isSortedOrder) {
                        sortByName();
                      }
                    }}>
                      A-Z
                    </Button>
                  </Tooltip>
                </PokemonOrderButton>
                <PokemonNumOrderButton buttonNumeric={buttonNumeric}>
                  <Tooltip title="Reorder the list numerically" TransitionComponent={Zoom} arrow>
                    <Button variant='contained' color='inherit' onClick={() => {
                      if(isSortedOrder) {
                        getAllPokemons();
                      }
                    }}>
                      1-9
                    </Button>
                  </Tooltip>
                </PokemonNumOrderButton>
              </PokemonOrder>
              <PokemonFiltersSpace>
                <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                  <PokemonFilters>
                    <FiltersTop>
                      <p>Search by type:</p>
                      <ResetFilters buttonReset={buttonReset}>
                        <Tooltip title="Reset all the filters and orders" placement="left" TransitionComponent={Zoom} arrow>
                          <Button variant='contained' color='inherit' onClick={() => resetFiltersOrders()}>
                            Reset
                          </Button>
                        </Tooltip>
                      </ResetFilters>
                    </FiltersTop>
                    <FiltersDiv>
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
                    </FiltersDiv>
                    <Line></Line>
                    <FiltersDiv>
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
                    </FiltersDiv>
                    <Line></Line>
                    <FiltersDiv>
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
                    </FiltersDiv>
                  </PokemonFilters>
                </Zoom>
              </PokemonFiltersSpace>
            </ContainerRight>
          </Flexing>
        </Zoom>
      ):(
        <Zoom in={true} timeout={0} mountOnEnter unmountOnExit>
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
                    <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                      <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.pokemon.name} setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                    </Zoom>
                  ):(
                    <>{ isSortedOrder ? (
                      <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                        <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.name}  setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                      </Zoom>
                    ):(
                      <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                        <div>{pokemonList.map((pokemon, index) => <Pokemon key={index} hashtable={hashtable} isLoadingList={isLoadingList} name={pokemon.name}  setIsGalleryDisplay={setIsGalleryDisplay}/>)}</div>
                      </Zoom>
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
              <Search searchExists={searchExists}>
                <SearchInput id="outlined-basic" onChange={e => setNameSearching(e.target.value)} label='Search by name...' variant='outlined' fullWidth/>
                { searchExists ? (
                  <SearchIconDiv buttonSearch={buttonSearch} onClick={() => searchByName()}>
                    <Button variant='contained' color='inherit' onClick={() => searchByName()}>
                      <SearchIcon sx={{ fontSize: 30 }}/>
                    </Button>
                  </SearchIconDiv>
                ):(
                  <WrongIcon><p><CloseIcon sx={{ fontSize: 30 }}/></p></WrongIcon>
                )}
              </Search>
              <PokemonOrder>
                <p>Order by:</p>
                <PokemonOrderButton buttonSort={buttonSort}>
                  <Tooltip title="Reorder the list alphabetically" TransitionComponent={Zoom}  arrow>
                    <Button variant='contained' color='inherit' onClick={() => {
                      if(!isSortedOrder) {
                        sortByName();
                      }
                    }}>
                      A-Z
                    </Button>
                  </Tooltip>
                </PokemonOrderButton>
                <PokemonNumOrderButton buttonNumeric={buttonNumeric}>
                  <Tooltip title="Reorder the list numerically" TransitionComponent={Zoom} arrow>
                    <Button variant='contained' color='inherit' onClick={() => {
                      if(isSortedOrder) {
                        getAllPokemons();
                      }
                    }}>
                      1-9
                    </Button>
                  </Tooltip>
                </PokemonNumOrderButton>
              </PokemonOrder>
              <PokemonFiltersSpace>
                <Zoom in={isGalleryDisplay} timeout={500} mountOnEnter unmountOnExit>               
                  <PokemonFilters>
                    <FiltersTop>
                      <p>Search by type:</p>
                      <ResetFilters buttonReset={buttonReset}>
                        <Tooltip title="Reset all the filters and orders" placement="left" TransitionComponent={Zoom} arrow>
                          <Button variant='contained' color='inherit' onClick={() => resetFiltersOrders()}>
                            Reset
                          </Button>
                        </Tooltip>
                      </ResetFilters>
                    </FiltersTop>
                    <FiltersDiv>
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
                    </FiltersDiv>
                    <Line></Line>
                    <FiltersDiv>
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
                    </FiltersDiv>
                    <Line></Line>
                    <FiltersDiv>
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
                    </FiltersDiv>
                  </PokemonFilters>
                </Zoom>
              </PokemonFiltersSpace>
            </ContainerRight>
          </Flexing>
        </Zoom>
      )}
    </GalleryLayout>
  );
}
