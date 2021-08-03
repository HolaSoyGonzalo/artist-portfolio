import React from "react";
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { Photos } from "../Assets/Photos";

function columns(containerWidth) {
  let columns = 1;
  if (containerWidth >= 500) columns = 2;
  if (containerWidth >= 900) columns = 3;
  if (containerWidth >= 1500) columns = 4;
  return columns;
}

function Portfolio() {
  return (
    <Container>
      <Gallery photos={Photos} direction={"column"} columns={columns} />
    </Container>
  );
}

export default Portfolio;

const Container = styled.div`
  padding-top: 119px;
  margin: 0 auto;
`;
