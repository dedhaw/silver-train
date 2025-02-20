import { Routes, Route } from "react-router-dom";
import Landing from "./views/Landing";
import PNF from "./views/PageNotFound";
import ComingSoon from "./views/ComingSoon";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<PNF />} />
      <Route path="/about" element={<ComingSoon />} />
    </Routes>
  );
}

export default App;
