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
  }
`;

export const PokemonFilters = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  font-size: 15px;
  background-color: white;
  border-radius: 30px;
  padding-left: 20px;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 30px;
  div{
    display: flex;
    width: 100%;
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
`;

export const Search = styled.div`
  font-family: "Lexend Deca", sans-serif;
  color: black;
  font-size: 15px;
  background-color: white;
  border-radius: 50px;
  padding-left: 20px;
  width: 100%;
  height: 60px;
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
