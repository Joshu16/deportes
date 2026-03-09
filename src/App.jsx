import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Reservar from "./pages/Reservar";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reservar" element={<Reservar />} />
      </Routes>
    </HashRouter>
  );
}


export default App;