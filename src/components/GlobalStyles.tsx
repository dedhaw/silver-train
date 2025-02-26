import styled, { keyframes } from "styled-components";

export const SectionTitle = styled.h1`
  font-size: 70px;
  margin: auto;
`;

export const CenteredText = styled.p`
  text-align: center;
  margin: auto;
  font-size: 25px;
`;

export const Logo = styled.img`
  height: 50px;
  width: auto;
  margin-left: auto;
  color: black;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
`;

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: -90px;
  flex-direction: column;
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroText = styled.h1`
  font-size: 100px;
  margin-top: -150px;
  margin-bottom: 10px;
  position: relative;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: ${fadeIn} 6s ease-out forwards;
`;

export const HeroSubText = styled.p`
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
`;

export const Section = styled.section`
  border: 2px solid rgba(105, 105, 105, 0.7);
  width: 85vw;
  margin: 20px auto;
  padding: 10px 15px;
  border-radius: 10px;

  h1 {
    margin: 2px;
    font-size: 60px;
  }

  h2 {
    text-align: center;
    font-weight: 100;
  }

  p {
    font-size: 25px;
    text-align: center;
  }

  ul {
    font-size: 18px;
    text-align: center;
    list-style-position: inside;
  }
`;
