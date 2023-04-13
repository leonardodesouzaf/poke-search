import styled from 'styled-components';
import pokeball from '../../assets/images/pokeball.png';
import { useEffect, useState } from 'react';
import { Grow } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';

export default function Pokemon({ name, setIsGalleryDisplay, hashtable, isLoadingList }) {
  const [pokemonId, setPokemonId] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if(hashtable && hashtable.length !== 0) {
      getPokemonId();
    }
  }, [isLoadingList]);
  async function getPokemonId() {
    for(let i=0; i<hashtable.length; i++) {
      if(hashtable[i] === name) {
        setPokemonId(i+1);
      }
    }
  }
  function navigateToPokemon(pokename) {
    setIsGalleryDisplay(false);
    setTimeout(() => {
      navigate(`/pokemon/${pokename}`);
    }, 500);
  }
  return (
    <Grow in={true} timeout={1000} mountOnEnter unmountOnExit>
      <Container onClick={() => navigateToPokemon(name)}>
        <img src={pokeball} alt='A red pokeball'/>
        <Number>
          {pokemonId}
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
  height: 65px;
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
