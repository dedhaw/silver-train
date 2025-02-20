import Hero from "../components/ComingSoonComponents/Hero";
import LearnMore from "../components/ComingSoonComponents/LearnMore";
import Navbar from "../components/ComingSoonComponents/Navbar";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <LearnMore />
      <div style={{ height: "100vh" }}></div>
    </>
  );
}
