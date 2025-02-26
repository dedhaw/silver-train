import React from "react";
import { Container } from "../GlobalStyles";
import styled from "styled-components";

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
  background-image: url("/model1.webp");
  background-size: cover;
  background-position: -400px 50px;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url("/jump.jpg");
  background-size: cover;
  background-position: 600px 50px;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: inherit;
`;

export default function SubSection() {
  return (
    <>
      <Container style={{ gap: "15px", height: "80vh" }}>
        <LeftColumn />
        <RightColumn />
      </Container>
    </>
  );
}
