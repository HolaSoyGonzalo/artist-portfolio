import React from "react";

import { Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

function Intro(props) {
  const StyledButton = withStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      borderRadius: 3,
      border: 0,
      color: "white",
      height: 48,
      padding: "0 30px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      marginTop: "100px",
    },
    label: {
      textTransform: "capitalize",
    },
  })(Button);

  const clickHandler = () => {
    props.history.push("/portfolio");
  };

  return (
    <Main>
      <Title>Andrea Diana</Title>
      <StyledButton onClick={clickHandler}>ENTER</StyledButton>
    </Main>
  );
}

export default Intro;

const Main = styled.div`
  text-align: center;
  background-image: url("https://res.cloudinary.com/adiunilux2021/image/upload/v1627890798/PICT4920_new_1_q69pmn.jpg");
  background-size: cover;
  height: 100vh;
`;

const Title = styled.h1`
  padding-top: 200px;
  color: white;
  font-size: 80px;
  font-weight: 400;
  margin: 0;
  font-family: "WindSong", cursive;
`;

// const Button = styled.button`
//   height: 40px;
//   border: white 1px solid;
//   border-radius: 10%;
//   margin-top: 80px;
//   padding-left: 10px;
//   padding-right: 10px;
//   color: white;
//   font-weight: 400;
//   font-size: 18px;
//   background: none;
//   :hover {
//     background: white;
//     color: black;
//   }
// `;
