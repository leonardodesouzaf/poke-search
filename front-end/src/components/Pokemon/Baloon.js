import styled from 'styled-components';

export default function Baloon({ name }) {
  return (
    <PokemonBallons>
      {name}
    </PokemonBallons>
  );
}

export const PokemonBallons = styled.div`
  box-shadow: 1px 2px 2px 0px gray;
  font-family: "Lexend Deca", sans-serif;
  color: black;
  background-color: gold;
  font-size: 15px;
  width: 35%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  text-transform: capitalize;
  margin-left: 40px;
`;
