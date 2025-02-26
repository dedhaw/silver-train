import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo } from "./GlobalStyles";

const FooterContainer = styled.div`
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 14px;
  position: relative;
  bottom: 0;
  width: 60vw;
  margin: auto;
  justify-content: space-between;
  align-items: start;
  display: flex;

  p {
    margin-top: 1rem;
  }
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 0 auto;
  flex: 1;

  h2 {
    gap: 0px;
    margin: 0px;
    padding: 0px;
    font-weight: 100;
  }

  a {
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
      color: rgb(26, 119, 201);
    }
  }
`;

export default function Footer() {
  return (
    <>
      <div style={{ backgroundColor: "#333" }}>
        <FooterContainer>
          <FooterContent style={{ width: "400px" }}>
            <Link
              to={"/"}
              style={{ margin: "0", padding: "0px", textAlign: "left" }}
            >
              <Logo style={{ margin: "0px" }} src="/logo.png" alt="Brand" />
            </Link>
            <p style={{ textAlign: "left", margin: "0", padding: "0px" }}>
              ALG Snow stands behind The Better Mountain Project donates 20% of
              every purchase to support underprivileged kids with snow sports
              opportunities.
            </p>
          </FooterContent>
          <FooterContent>
            <h2>Links</h2>
            <Link to="/apparel">apparel</Link>
            <Link to="/mission">our story</Link>
            <Link to="/contact">contact</Link>
          </FooterContent>
          <FooterContent>
            <h2>contact us</h2>
            <a href="mailto:algsnowcompany@gmail.com">Email us</a>
          </FooterContent>
        </FooterContainer>
      </div>
      <div
        style={{
          borderTop: "solid 2px black",
          textAlign: "center",
          backgroundColor: "#333",
          padding: "10px",
        }}
      >
        <p style={{ margin: "0px" }}>Built by Dev Dhawan</p>
      </div>
    </>
  );
}
