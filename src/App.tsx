import { Routes, Route } from "react-router-dom";
import PNF from "./views/PageNotFound";
import Apparel from "./views/Apparel";
import Mission from "./views/Mission";
import Contact from "./views/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Apparel />} />
      <Route path="/apparel" element={<Apparel />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/*" element={<PNF />} />
    </Routes>
  );
}

export default App;
