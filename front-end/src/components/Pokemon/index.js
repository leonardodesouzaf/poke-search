import styled from 'styled-components';

export const AboutFlexing = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-right: 60px;
  padding-left: 20px;
  font-size: 17px;
`;

export const PokemonOrderButton = styled.div`
  box-shadow: 1px 2px 2px 0px darkred;
  font-family: "Lexend Deca", sans-serif;
  color: white;
  background-color: #73c256;
  font-size: 17px;
  width: 42%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const PokemonNumOrderButton = styled.div`
  box-shadow: 1px 2px 2px 0px darkred;
  font-family: "Lexend Deca", sans-serif;
  color: white;
  background-color: #73c256;
  font-size: 17px;
  width: 42%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const SearchIcon = styled.div`
  box-shadow: ${(props) => (props.buttonSearch ? 'inset 0 0 10px gray' : '0px 0px 4px 0px gray')};
  color: black;
  font-size: 25px;
  background-color: lightgray;
  width: 70px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  padding-right: 2px;
  position: absolute;
  left: 0;
  :hover{
    cursor: pointer;
    filter: brightness(1.05);
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
  p{
    margin-right: 20px;
    margin-left: 15px;
  }
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
  justify-content: space-evenly;
  padding: 30px;
  p{
    width: 80px;
  }
`;

export const PokemonList = styled.div`
  box-shadow: 1px 2px 2px 0px darkred;
  border: 4px solid white;
  border-radius: 30px;
  background-color: black;
  padding: 15px;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 100%;
  }
`;

export const Search = styled.div`
  font-family: 'Pokemon Solid', sans-serif;
  box-shadow: 1px 2px 2px 0px darkred;
  text-transform: capitalize;
  font-size: 35px;
  color: black;
  background-color: white;
  border-radius: 50px;
  padding-left: 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
    text-transform: capitalize;
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
