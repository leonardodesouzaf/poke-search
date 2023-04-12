import styled from 'styled-components';

export const PokemonFilterImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    margin-top: 5px;
  }
  img{
    width: 70px;
    height: 70px;
    filter: brightness(0.95);
    :hover{
      filter: brightness(1.3);
    }
  }
  :hover{
    cursor: pointer;
  }
`;

export const PokemonOrderButton = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: white;
  background-color: #73c256;
  font-size: 15px;
  width: 42%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  :hover{
    cursor: pointer;
    background-color: #80d860;
  }
`;

export const PokemonOrder = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: white;
  font-size: 15px;
  padding-left: 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonFilters = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  font-size: 15px;
  background-color: white;
  border-radius: 30px;
  padding-left: 20px;
  width: 100%;
  height: calc(80vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 30px;
  div{
    display: flex;
    width: 100%;
  }
`;

export const LoadingList = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.85;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  p{
    opacity: 1;
    color: white;
    font-size: 30px;
    animation: color-change 1s infinite;
  }
  @keyframes color-change {
    0% { color: white; }
    50% { color: black; }
    100% { color: white; }
  }
`;

export const PokemonList = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  font-size: 15px;
  border: 4px solid white;
  border-radius: 30px;
  background-color: black;
  padding: 15px;
  padding-top: 20px;
  width: 100%;
  height: 80vh;
  overflow: scroll;
  position: relative;
`;

export const SearchIcon = styled.div`
  color: black;
  font-size: 25px;
  background-color: lightgray;
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-right: 2px;
  :hover{
    cursor: pointer;
    background-color: darkgray;
    color: white;
  }
`;

export const Search = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  background-color: white;
  border-radius: 50px;
  padding-left: 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p{
    font-size: 15px;
  }
`;

export const Title = styled.div`
  background-color: white;
  border-radius: 50px;
  padding: 5px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  p{
    color: black;
    font-size: 35px;
  }
  img{
    height: 50px;
    object-fit: cover;
    animation: wiggle 6s linear infinite;
  }
  @keyframes wiggle {
    0% {
      transform: rotateZ(0);
    }
    5% {
      transform: rotateZ(-30deg);
    }
    10% {
      transform: rotateZ(30deg);
    }
    15% {
      transform: rotateZ(-25deg);
    }
    20% {
      transform: rotateZ(22deg);
    }
    25% {
      transform: rotateZ(-20deg);
    }
    30% {
      transform: rotateZ(18deg);
    }
    35% {
      transform: rotateZ(-15deg);
    }
    40% {
      transform: rotateZ(12deg);
    }
    50% {
      transform: rotateZ(-10deg);
    }
    60% {
      transform: rotateZ(8deg);
    }
    70% {
      transform: rotateZ(-5deg);
    }
    80% {
      transform: rotateZ(3deg);
    }
    90% {
      transform: rotateZ(-2deg);
    }
    100% {
      transform: rotateZ(0deg);
    }
  }
`;

export const ContainerLeft = styled.div`
  width: 40vw;
  height: 95vh;
  background-color: #e20202;
  border-radius: 15px;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
  padding: 20px;
`;

export const ContainerRight = styled.div`
  width: 50vw;
  height: 95vh;
  background-color: #e20202;
  border-radius: 15px;
  border-bottom-left-radius: 0px;
  border-top-left-radius: 0px;
  padding: 20px;
`;

export const ContainerCenter = styled.div`
  width: 5vw;
  height: 98vh;
  background-color: #b50202;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #880101;
`;

export const Flexing = styled.div`
  display: flex;
  width: 93%;
  justify-content: center;
  align-items: center;
`;
