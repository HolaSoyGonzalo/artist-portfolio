import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const NavBar = () => {
  return (
    <NavBarMainWrapper>
      <NavBarMainContainer>
        <Left>
          <Title>Andrea Diana</Title>
        </Left>

        <Right>
          <ul>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/portfolio/about">About</Link>
            </li>
            <li>
              <Link to="/portfolio/contact">Contact</Link>
            </li>
          </ul>
        </Right>
      </NavBarMainContainer>
    </NavBarMainWrapper>
  );
};

export default NavBar;

const Title = styled.h1`
  color: black;
  font-size: 40px;
  font-weight: 400;
  margin: 0;
  font-family: "WindSong", cursive;
`;

const NavBarMainWrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: white;
  z-index: 10;
`;

const NavBarMainContainer = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  width: 700px;
  transition: width 0.25s ease;
  @media (max-width: 975px) {
    width: 180px;
  }
`;

const Right = styled.div`
  width: 360px;
  transition: width 0.25s ease;
  position: relative;
  @media (max-width: 975px) {
    width: 222px;
  }
  > ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      margin: 0 10px;
      cursor: pointer;
      text-decoration: none;

      a {
        text-decoration: none;
        color: black;
      }
    }
  }
`;
