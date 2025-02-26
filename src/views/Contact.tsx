import styled from "styled-components";
import Footer from "../components/Footer";
import { Section } from "../components/GlobalStyles";
import Navbar from "../components/Navbar";

const Container = styled.div`
  justify-content: center;
  display: flex;
  gap: 80px;

  a {
    text-decoration: none;
    color: black;
    font-size: 25px;

    &:hover {
      color: rgb(26, 119, 201);
    }
  }
`;

export default function Contact() {
  return (
    <div>
      <Navbar />
      <h1>Contact Us</h1>
      <Section style={{ height: "60vh" }}>
        <p>Check us out at:</p>
        <Container>
          <a href="" target="_blank">
            Instagram
          </a>
          <a href="" target="_blank">
            Tiktok
          </a>
        </Container>

        <br />
        <br />

        <p>Need more information?</p>
        <Container>
          <a href="mailto:algsnowcompany@gmail.com">Email us</a>
          <a href="tel:+15103017718">(510)-301-7718</a>
        </Container>
      </Section>
      <br />
      <Footer />
    </div>
  );
}
