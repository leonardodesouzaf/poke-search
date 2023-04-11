import styled from 'styled-components';
import pokeball from '../../assets/images/pokeball.png';

export default function Pokemon({ name, number }) {
  return (
    <Container>
      <img src={pokeball} alt='A red pokeball'/>
      <Number>{number}</Number>
      <p>{name}</p>
    </Container>
  );
}

const Number = styled.div`
  padding: 5px;
  border: 2px solid darkgray;
  border-radius: 6px;
  height: 40px;
  width: 30px;
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
  }
`;
