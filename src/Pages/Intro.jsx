import React from "react";
import styled from "styled-components";

function Intro() {
  return (
    <Main>
      <Title>Andrea Diana</Title>
      <Button>ENTER</Button>
    </Main>
  );
}

export default Intro;

const Main = styled.div`
  text-align: center;
  background-image: url("https://res.cloudinary.com/adiunilux2021/image/upload/v1627890798/PICT4920_new_1_q69pmn.jpg");
  background-size: cover;
  height: 98vh;
`;

const Title = styled.h1`
  padding-top: 200px;
  color: white;
  font-size: 60px;
  font-weight: 400;
  margin: 0;
  font-family: "WindSong", cursive;
`;

const Button = styled.button`
  height: 40px;
  border: white 1px solid;
  border-radius: 10%;
  margin-top: 80px;
  padding-left: 10px;
  padding-right: 10px;
  color: white;
  font-weight: 400;
  font-size: 18px;
  background: none;
  :hover {
    background: white;
    color: black;
  }
`;
