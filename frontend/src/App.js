import styled from "styled-components"

import Header from "./components/Header";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color:rgb(240, 240, 240);
  margin: 0 auto;
`

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
