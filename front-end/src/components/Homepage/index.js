import styled from 'styled-components';

export const PokeballTop = styled.div`
  width: 100%;
  height: 50vh;
  border: 30px solid black;
  border-bottom: 20px solid black;
  background-color: red;
  color: white;
  font-size: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PokeballBottom = styled.div`
  width: 100%;
  height: 50vh;
  border: 30px solid black;
  border-top: 20px solid black;
  background-color: white;
`;

export const PokeballCircle = styled.div`
  width: 150px;
  height: 150px;
  border: 20px solid black;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: calc(50vh - 75px);
  color: black;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    cursor: pointer;
  }
  p {
    animation: color-change 1.5s infinite;
  }
  @keyframes color-change {
    0% { color: white; }
    50% { color: black; }
    100% { color: white; }
  }
`;
