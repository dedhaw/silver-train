import { HeroContainer, HeroText, HeroSubText } from "../GlobalStyles";
import { scrollToSection } from "../../utils/ScrollToSection";

export default function Hero() {
  const scrollToMission = () => {
    scrollToSection("about");
  };
  return (
    <HeroContainer style={{ backgroundImage: "url('/mission-bg.png')" }}>
      <HeroText
        style={{ fontSize: "70px", fontWeight: "700" }}
        onClick={scrollToMission}
      >
        The Better Mountain Project
      </HeroText>
      <HeroSubText
        style={{ fontSize: "25px", fontWeight: "700" }}
        onClick={scrollToMission}
      >
        Where does my 20% go?
      </HeroSubText>
    </HeroContainer>
  );
}
