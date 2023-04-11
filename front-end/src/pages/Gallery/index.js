import GalleryLayout from '../../layouts/Page';
import { useEffect, useState } from 'react';
import { IoMdMenu, IoIosAdd } from 'react-icons/io';
import { Zoom } from '@material-ui/core';
import { toast } from 'react-toastify';
import { ContainerCenter, ContainerLeft, ContainerRight, Flexing, Line, PokemonFilterImg, PokemonFilters, PokemonList, Search, Title } from '../../components/Gallery';
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
            <Search>Search by pokémon name...</Search>
            <PokemonFilters>
              <div>
                <PokemonFilterImg>
                  <img src={water} alt='Pokemon type'/>
                  <p>Water</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={fire} alt='Pokemon type'/>
                  <p>Fire</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={grass} alt='Pokemon type'/>
                  <p>Grass</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={ground} alt='Pokemon type'/>
                  <p>Ground</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={rock} alt='Pokemon type'/>
                  <p>Rock</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={steel} alt='Pokemon type'/>
                  <p>Steel</p>
                </PokemonFilterImg>
              </div>
              <Line></Line>
              <div>
                <PokemonFilterImg>
                  <img src={ice} alt='Pokemon type'/>
                  <p>Ice</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={eletric} alt='Pokemon type'/>
                  <p>Eletric</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={dragon} alt='Pokemon type'/>
                  <p>Dragon</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={ghost} alt='Pokemon type'/>
                  <p>Ghost</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={psychic} alt='Pokemon type'/>
                  <p>Psychic</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={normal} alt='Pokemon type'/>
                  <p>Normal</p>
                </PokemonFilterImg>
              </div>
              <Line></Line>
              <div>
                <PokemonFilterImg>
                  <img src={fightning} alt='Pokemon type'/>
                  <p>Fightning</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={poison} alt='Pokemon type'/>
                  <p>Poison</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={bug} alt='Pokemon type'/>
                  <p>Bug</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={flying} alt='Pokemon type'/>
                  <p>Flying</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
                  <img src={dark} alt='Pokemon type'/>
                  <p>Dark</p>
                </PokemonFilterImg>
                <PokemonFilterImg>
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
