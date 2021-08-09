import React from "react";
import styled from "styled-components";

import ContactForm from "../Components/ContactForm";

function Contact() {
  return (
    <Container>
      <ContactForm />
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  height: 87vh;
  padding-top: 140px;
  margin: 0 auto;
  text-align: center;
`;
