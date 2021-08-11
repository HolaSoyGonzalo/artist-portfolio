import React from "react";
import styled from "styled-components";

import { Col, Image, Row } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  return (
    <AboutMainWrapper>
      <AboutMainContainer>
        <div className="text-center">
          <div>
            {/* Row 1 */}
            <Row>
              <Col sm={12} lg={4}>
                <Image
                  src="https://res.cloudinary.com/adiunilux2021/image/upload/ar_1:1,b_rgb:ffffff,bo_1px_solid_rgb:ffffff,c_fill,g_auto,r_max,w_300/v1628669939/906b48e1-409b-4349-b124-080e0a3187f9_k8tdms.jpg"
                  roundedCircle
                  fluid
                />
              </Col>
              <Col className="pt-3 text-about">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Col>
            </Row>
          </div>
        </div>
      </AboutMainContainer>
    </AboutMainWrapper>
  );
}

export default About;

const AboutMainWrapper = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
`;

const AboutMainContainer = styled.div`
  margin-top: 12vw;
  @media (max-width: 400px) {
    margin-top: 30vw;
  }
`;
