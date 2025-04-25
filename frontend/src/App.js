import styled from "styled-components"

import Header from "./components/Header";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color:rgb(240, 240, 240);
`

function App() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default App;
