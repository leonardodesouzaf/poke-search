import GalleryLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import { Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { ContainerCenter, ContainerLeft, ContainerRight, Flexing, Line, PokemonFilters, PokemonList, Search, Title } from '../../components/Gallery';
import bluepokeball from '../../assets/images/bluepokeball.png';
import Pokemon from '../../components/Gallery/Pokemon';

export default function Gallery() {
  const [isGalleryDisplay, setIsGalleryDisplay] = useState(true);
  const [pokemonList, setPokemonList] = useState([{ name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }, { name: 'Bulbasaur' }]);
  useEffect(() => {
  }, []);

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
              {pokemonList.map((pokemon, index) => <Pokemon key={index} name={pokemon.name} number={index+1}/>)}
            </PokemonList>
          </ContainerLeft>
          <ContainerCenter>
            <Line></Line>
            <Line></Line>
          </ContainerCenter>
          <ContainerRight>
            <Search>Search pokémon...</Search>
            <PokemonFilters></PokemonFilters>
          </ContainerRight>
        </Flexing>
      </Zoom>
    </GalleryLayout>
  );
}
