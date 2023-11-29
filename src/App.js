import TelaInicial from "./components/telaInicial/telaInicial";
import QuemSomos from "./components/QuemSomos/quemSomos";
import Passeios from "./components/Passeios/Passeios";

import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginCadastro from "./components/LoginCadastro/LoginCadastro";

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/Passeios" element={<Passeios />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/LoginCadastro" element={<LoginCadastro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
