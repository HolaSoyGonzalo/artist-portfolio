import React from "react";
import styled from "styled-components";
import Example from "../Components/Example";
function Portfolio() {
  return (
    <Container>
      <Example />
    </Container>
  );
}

export default Portfolio;

const Container = styled.div`
  height: 100vh;
  background-color: red;
`;
