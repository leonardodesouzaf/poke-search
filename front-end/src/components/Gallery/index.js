import { TextField } from '@material-ui/core';
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
      filter: brightness(1.05);
    }
    border-radius: 50%;
    box-shadow: 1px 1px 1px 0px gray;
    background-color: gray;
  }
  :hover{
    cursor: pointer;
  }
`;

export const PokemonOrderButton = styled.div`
  width: 42%;
  Button{
    box-shadow: ${(props) => (props.buttonSort ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
    font-family: "Lexend Deca", sans-serif;
    color: white;
    background-color: #73c256;
    font-size: 15px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    :hover{
      cursor: pointer;
      filter: brightness(1.05);
      background-color: #73c256;
      box-shadow: ${(props) => (props.buttonSort ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
      :focus{
        box-shadow: ${(props) => (props.buttonSort ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
      }
    }
  }
`;

export const PokemonNumOrderButton = styled.div`
  width: 42%;
  Button{
    box-shadow: ${(props) => (props.buttonNumeric ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
    font-family: "Lexend Deca", sans-serif;
    color: white;
    background-color: #73c256;
    font-size: 15px;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    :hover{
      cursor: pointer;
      filter: brightness(1.05);
      background-color: #73c256;
      box-shadow: ${(props) => (props.buttonNumeric ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
      :focus{
        box-shadow: ${(props) => (props.buttonNumeric ? 'inset 0 0 10px black' : '1px 2px 2px 0px darkred')};
      }
    }
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

export const ResetFilters = styled.div`
  Button{
    box-shadow: ${(props) => (props.buttonReset ? 'inset 0 0 10px gray' : '1px 1px 1px 0px gray')};
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
    border-radius: 20px;
    height: 30px;
    font-size: 15px;
    text-transform: none;
    font-family: "Lexend Deca", sans-serif;
    :hover{
      cursor: pointer;
      filter: brightness(1.05);
      background-color: lightgray;
      box-shadow: ${(props) => (props.buttonReset ? 'inset 0 0 10px gray' : '1px 1px 1px 0px gray')};
    }
    :focus{
      box-shadow: ${(props) => (props.buttonReset ? 'inset 0 0 10px gray' : '1px 1px 1px 0px gray')};
    }
  }
`;

export const FiltersTop = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PokemonFiltersSpace = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  font-size: 15px;
  background-color: white;
  border-radius: 30px;
  width: 100%;
  height: calc(80vh - 75px);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  box-shadow: 1px 2px 2px 0px darkred;
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
`;

export const FiltersDiv = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
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
  box-shadow: 1px 2px 2px 0px darkred;
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

export const SearchIconDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  Button{
    box-shadow: ${(props) => (props.buttonSearch ? 'inset 0 0 10px gray' : '0px 0px 3px 0px gray')};
    color: black;
    font-size: 25px;
    background-color: lightgray;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0px;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    padding-right: 18px;
    :hover{
      cursor: pointer;
      filter: brightness(1.05);
      background-color: lightgray;
      box-shadow: ${(props) => (props.buttonSearch ? 'inset 0 0 10px gray' : '0px 0px 3px 0px gray')};
    }
    :focus{
      box-shadow: ${(props) => (props.buttonSearch ? 'inset 0 0 10px gray' : '0px 0px 3px 0px gray')};
    }
  }
`;

export const WrongIcon = styled.div`
  color: black;
  font-size: 25px;
  background-color: darkred;
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-right: 2px;
  padding-top: 4px;
  p{
    animation: wiggle 2s linear;
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
`;

export const SearchInput = styled(TextField)`
  .MuiInputBase-input{
    width: 100%;
    border: none !important;
    border-radius: 50px;
  }
  label{
    font-family: "Lexend Deca", sans-serif;
    font-size: 15px;
    color: grey !important;
    background-color: white;
    border-radius: 10px;
    padding: 3px !important;
    padding-left: 10px !important;
    padding-right: 10px !important;
    margin-top: -3px;
  }
  .MuiOutlinedInput-root{
    border: none !important;
    fieldset{
      border: none !important;
    }
    :hover fieldset{
      border: none !important;
    }
    .Mui-focused{
      border: none !important;
    }
    .Mui-focused fieldset{
      border: none !important;
    }
  }
`;

export const Search = styled.div`
  box-shadow: 1px 2px 2px 0px darkred;
  font-family: "Lexend Deca", sans-serif;
  color: black;
  background-color: ${(props) => (props.searchExists ? 'white' : 'lightcoral')};
  border-radius: 50px;
  padding-left: 10px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  SearchInput{
    .MuiInputBase-input{
      background-color: ${(props) => (props.searchExists ? 'white' : 'lightcoral')};
    }
  }
`;

export const Title = styled.div`
  box-shadow: 1px 2px 2px 0px darkred;
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
  box-shadow: 1px 2px 2px 0px black;
`;

export const Line = styled.div`
  width: 100%;
  height: 2px;
  background-color: #880101;
  box-shadow: 1px 1px 1px 0px darkred;
`;

export const Flexing = styled.div`
  display: flex;
  width: 93%;
  justify-content: center;
  align-items: center;
`;
