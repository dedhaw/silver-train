import styled from "styled-components";
import { SectionTitle, CenteredText, Container } from "../GlobalStyles";

export default function LearnMore() {
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
  `;

  return (
    <>
      <br />
      <Container>
        <LeftColumn></LeftColumn>
        <RightColumn>
          <SectionTitle>Mission</SectionTitle>
          <br />
          <CenteredText>Mission Text</CenteredText>
        </RightColumn>
      </Container>
    </>
  );
}
