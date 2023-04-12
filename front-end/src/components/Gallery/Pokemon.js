import styled from 'styled-components';
import pokeball from '../../assets/images/pokeball.png';
import usePokemonByUrl from '../../hooks/api/usePokemonByUrl';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Grow } from '@material-ui/core';

export default function Pokemon({ name, url, isSortedOrder, isTypeFilter }) {
  const { pokemonByUrlLoading, pokemonByUrl } = usePokemonByUrl();
  const [pokemonId, setPokemonId] = useState();
  useEffect(() => {
    if(url) {
      getPokemonId();
    }
  }, [isSortedOrder, isTypeFilter]);
  async function getPokemonId() {
    try {
      const pokemonData = await pokemonByUrl(url);
      setPokemonId(pokemonData.id);
    } catch (error) {
      toast('Error loading the pokémon info');
    }
  }
  return (
    <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
      <Container>
        <img src={pokeball} alt='A red pokeball'/>
        <Number>
          { pokemonByUrlLoading ? (
            <></>
          ):(
            <>{pokemonId}</>
          )}
        </Number>
        <p>{name}</p>
      </Container>
    </Grow>
  );
}

const Number = styled.div`
  padding: 5px;
  border: 2px solid darkgray;
  border-radius: 6px;
  height: 40px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  background-color: white;
  border-radius: 50px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  padding: 5px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  p{
    font-size: 18px;
    margin-left: 10px;
    text-transform: capitalize;
  }
  img{
    height: 52px;
    object-fit: cover;
    margin-right: 5px;
  }
  :hover{
    cursor: pointer;
    background-color: #8e8e8e;
    color: white;
    img{
      animation: wiggle 1s linear infinite;
    }
    @keyframes wiggle {
      0%, 7% {
        transform: rotateZ(0);
      }
      15% {
        transform: rotateZ(-25deg);
      }
      20% {
        transform: rotateZ(20deg);
      }
      25% {
        transform: rotateZ(-20deg);
      }
      30% {
        transform: rotateZ(12deg);
      }
      35% {
        transform: rotateZ(-8deg);
      }
      40%, 100% {
        transform: rotateZ(0);
      }
    }
  }
`;
