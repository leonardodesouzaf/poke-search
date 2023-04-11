import styled from 'styled-components';

export const PokeballTop = styled.div`
  width: 100%;
  height: 50vh;
  border: 30px solid black;
  background-color: red;
`;

export const PokeballBottom = styled.div`
  width: 100%;
  height: 50vh;
  border: 30px solid black;
  background-color: white;
`;

export const Logo = styled.div`
  font-family: "Lexend Deca", sans-serif;
  width: fit-content;
  display: flex;
  justify-content: center;
  font-size: 60px;
  box-sizing: border-box;
  padding-top: 30px;
  p{
    color: white;
    margin-top: 8px;
  }
  img{
    height: 80px;
    margin: 0px 13px;
  }
  :hover{
    cursor: pointer;
  }
`;
