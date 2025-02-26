import { Section, Container } from "../GlobalStyles";
import styled from "styled-components";

const LeftColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: inherit;
`;

const RightColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-image: url("/mountain.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  height: inherit;
`;

export default function About() {
  return (
    <div id="about">
      <br />
      <Container style={{ gap: "15px" }}>
        <LeftColumn>
          <Section style={{ width: "inherit", margin: "20px" }}>
            <h1 style={{ margin: " 10px auto" }}>The Problem</h1>
            <p>
              Snow sports are only becoming more and more expensive and
              inaccessible. The mountain should be available to all; that’s why
              at ALG we are proud to donate 20% of every purchase to
              organizations that are supporting underprivileged kids and
              providing them with opportunities to hit the mountain.
            </p>
            <p>
              10% of our earnings goes to The Service Board, a Seattle
              non-profit that works with local youth and provides equitable
              access to traditionally inaccessible sports such as snowboarding.{" "}
            </p>
            <ul>
              <li>
                {" "}
                Learn more about{" "}
                <a href="https://theserviceboard.org" target="_blank">
                  The Service Board
                </a>
              </li>
            </ul>
            <p>
              Another 10% goes to the Share Winter Foundation, which works all
              across the country giving kids lifelong winter sport participation
              opportunities.{" "}
            </p>
            <ul>
              <li>
                Learn more about{" "}
                <a href="https://sharewinterfoundation.org" target="_blank">
                  the Share Winter
                </a>
              </li>
            </ul>
          </Section>
        </LeftColumn>
        <RightColumn />
      </Container>
      <br />
    </div>
  );
}
