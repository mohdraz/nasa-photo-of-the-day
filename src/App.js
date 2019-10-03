import React from "react";
import "./App.css";
import NasaGrid from "./components/NasaGrid";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1200px;
  margin: 10px auto;
  padding: 0px 20px;
  border: 1px solid #233a77;
`;

function App() {
  return (
    <Container>
      <NasaGrid />
    </Container>
  );
}

export default App;
