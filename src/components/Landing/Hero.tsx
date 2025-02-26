import { HeroContainer, HeroText } from "../GlobalStyles";
import { useEffect, useState } from "react";

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
    <div>
      <HeroContainer
        style={{ backgroundImage: "url('/guy.png')", height: "80vh" }}
      >
        <HeroText style={{ fontSize: "70px", fontWeight: "700" }}>
          alg snow
        </HeroText>
      </HeroContainer>
    </div>
  );
}
