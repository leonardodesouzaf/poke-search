import PokeLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { AboutFlexing, ContainerCenter, ContainerLeft, ContainerRight, Flexing, Line, PokemonFilters, PokemonFiltersSpace, PokemonList, PokemonNumOrderButton, PokemonOrder, PokemonOrderButton, Search, SearchIcon, Title } from '../../components/Pokemon';
import bluepokeball from '../../assets/images/bluepokeball.png';
import { Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import usePokemonByName from '../../hooks/api/usePokemonByName';
import { IoIosArrowRoundBack } from 'react-icons/io';
import Baloon from '../../components/Pokemon/Baloon';

export default function Pokemon() {
  const [isPokemonDisplay, setIsPokemonDisplay] = useState(false);
  const [pokemonData, setPokemonData] = useState([]);
  const [pokemonImage, setPokemonImage] = useState('');
  const [buttonSearch, setButtonSearch] = useState(false);
  const { pokename } = useParams();
  const { pokemonByNameLoading, pokemonByName } = usePokemonByName();
  const navigate = useNavigate();
  useEffect(() => {
    searchByName();
    setTimeout(() => {
      setIsPokemonDisplay(true);
    }, 500);
  }, []);
  async function searchByName() {
    try {
      const pokemon = await pokemonByName(pokename);
      setPokemonImage(pokemon.sprites.front_default);
      setPokemonData(pokemon);
    } catch (error) {
    }
  }
  async function backToGallery() {
    setButtonSearch(true);
    setIsPokemonDisplay(false);
    setTimeout(() => {
      setButtonSearch(false);
    }, 300);
    setTimeout(() => {
      navigate('/gallery/f');
    }, 500);
  }
  return (
    <PokeLayout>
      <Flexing>
        <ContainerLeft>
          <Title>
            <img src={bluepokeball} alt='Its a pokeball in blue color'/>
            <p>Pokédex</p>
            <img src={bluepokeball} alt='Its a pokeball in blue color'/>
          </Title>
          <PokemonList>
            <Zoom in={isPokemonDisplay} timeout={500} mountOnEnter unmountOnExit>               
              <img src={pokemonImage} alt='Pokemon pic'/>
            </Zoom>
          </PokemonList>
        </ContainerLeft>
        <ContainerCenter>
          <Line></Line>
          <Line></Line>
        </ContainerCenter>
        <ContainerRight>
          <Search>
            <SearchIcon buttonSearch={buttonSearch} onClick={() => backToGallery()}><IoIosArrowRoundBack/></SearchIcon>
            <Zoom in={isPokemonDisplay} timeout={500} mountOnEnter unmountOnExit>               
              <p>{pokemonData.name}</p>
            </Zoom>
          </Search>
          <PokemonOrder>
            <p>Size:</p>
            <PokemonOrderButton>{pokemonData.height} fts</PokemonOrderButton>
            <PokemonNumOrderButton>{pokemonData.weight} lbs</PokemonNumOrderButton>
          </PokemonOrder>
          <PokemonFiltersSpace>
            <Zoom in={isPokemonDisplay} timeout={500} mountOnEnter unmountOnExit>               
              <PokemonFilters>
                <AboutFlexing>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec felis lectus. Aenean bibendum tristique eros, eu condimentum nulla. Nunc dapibus, neque et rutrum scelerisque, mauris lorem facilisis ante, ac facilisis libero elit eget ante. Nunc iaculis condimentum nisi vel vestibulum. Nulla pellentesque erat vehicula cursus lobortis.
                </AboutFlexing>
                <AboutFlexing>
                  <p>Types:</p>
                  { isPokemonDisplay ? (
                    <>{(pokemonData.types).map((type, index) => <Baloon key={index} name={type.type.name}/>)}</>
                  ):(
                    <></>
                  )}
                </AboutFlexing>
                <AboutFlexing>
                  <p>Abilities:</p>
                  { isPokemonDisplay ? (
                    <>{(pokemonData.abilities).map((ability, index) => <Baloon key={index} name={ability.ability.name}/>)}</>
                  ):(
                    <></>
                  )}
                </AboutFlexing>
              </PokemonFilters>
            </Zoom>
          </PokemonFiltersSpace>
        </ContainerRight>
      </Flexing>
    </PokeLayout>
  );
}
