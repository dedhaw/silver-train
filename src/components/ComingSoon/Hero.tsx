import { useEffect, useState } from "react";
import { HeroContainer, HeroText, HeroSubText } from "../GlobalStyles";

export default function Hero() {
  const [opacity, setOpacity] = useState(1);
  opacity;

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
      <HeroContainer style={{ backgroundImage: 'url("/heroBg.jpg")' }}>
        <HeroText>apparel coming soon</HeroText>
      </HeroContainer>
    </>
  );
}
