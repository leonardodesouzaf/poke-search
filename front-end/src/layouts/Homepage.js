import styled from 'styled-components';

export default function Homepage({ children }) {
  return (
    <Page>
      { children }
    </Page>
  );
}

const Page = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  height: 100%;
  width: 100%;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;

  *{
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 800px) {
  }
`;
