import React from "react";
import styled from "styled-components";

function About() {
  return (
    <AboutMainWrapper>
      <AboutMainContainer>
        <Left>Here Goes Text</Left>

        <Right>Here Goes Face</Right>
      </AboutMainContainer>
    </AboutMainWrapper>
  );
}

export default About;

const AboutMainWrapper = styled.div`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  margin-top: 100px;
  background-color: red;
  z-index: 10;
`;

const AboutMainContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  background-color: blue;
  transition: width 0.25s ease;
  @media (max-width: 975px) {
    width: 180px;
  }
`;

const Right = styled.div`
  width: 360px;
  transition: width 0.25s ease;
  position: relative;
  background-color: green;
  @media (max-width: 975px) {
    width: 222px;
  }
`;
