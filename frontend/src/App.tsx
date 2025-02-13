import { Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./views/Landing";
import PNF from "./views/PageNotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/*" element={<PNF />} />
    </Routes>
  );
}

export default App;
