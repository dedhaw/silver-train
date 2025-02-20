import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120vh;
  text-align: center;
  background-image: url("/heroBg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  margin-top: -90px;
  flex-direction: column;
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px); /* Slight lift effect */
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroText = styled.h1`
  font-size: 100px;
  margin-top: -150px;
  margin-bottom: 10px;
  position: relative;
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  opacity: 0;
  animation: ${fadeIn} 8s ease-out forwards;
`;

const HeroSubText = styled.p`
  color: white;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  position: relative;
  display: flex;
`;

export default function Hero() {
  const [opacity, setOpacity] = useState(1);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 300;
    const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <HeroContainer>
        <HeroText>coming soon</HeroText>
        <HeroSubText>winter 2025</HeroSubText>
      </HeroContainer>
    </>
  );
}
