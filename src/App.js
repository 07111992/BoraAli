import TelaInicial from "./components/telaInicial/telaInicial";
import QuemSomos from "./components/QuemSomos/quemSomos";
import Passeios from "./components/Passeios/Passeios";

import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginCadastro from './components/LoginCadastro/LoginCadastro';
import DetalhesMarco_zero from './components/DetalhesMarco_zero/DetalhesMarco_zero'
import DetalhesBom_Jesus from './components/DetalhesBom_Jesus/DetalhesBom_Jesus'
import DetalhesPaco_frevo from './components/DetalhesPaco_frevo/DetalhesPaco_frevo'
import DetalhesPorto_digital from './components/DetalhesPorto_digital/DetalhesPorto_digital'
import DetalhesMuseu_brennand from './components/DetalhesMuseu_brennand/DetalhesMuseu_brennand'
import DetalhesPorto_recife from './components/DetalhesPorto_recife/DetalhesPorto_recife'
import DetalhesPorto_galinhas from './components/DetalhesPorto_galinhas/DetalhesPorto_galinhas'
import DetalhesCaixa_cultural from './components/DetalhesCaixa_cultural/DetalhesCaixa_cultural'
function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path='/' element={<TelaInicial />} />
        <Route path='/Passeios' element={<Passeios />} />
        <Route path="/QuemSomos" element={<QuemSomos />} />
        <Route path="/LoginCadastro" element={<LoginCadastro />} />
        <Route path="/Passeios/DetalhesMarco_zero" element={<DetalhesMarco_zero />} />
        <Route path="/Passeios/DetalhesBom_Jesus" element={<DetalhesBom_Jesus />} />
        <Route path="/Passeios/DetalhesPaco_frevo" element={<DetalhesPaco_frevo />} />
        <Route path="/Passeios/DetalhesPorto_digital" element={<DetalhesPorto_digital />} />
        <Route path="/Passeios/DetalhesMuseu_brennand" element={<DetalhesMuseu_brennand />} />
        <Route path="/Passeios/DetalhesPorto_recife" element={<DetalhesPorto_recife />} />
        <Route path="/Passeios/DetalhesPorto_galinhas" element={<DetalhesPorto_galinhas />} />
        <Route path="/Passeios/DetalhesCaixa_cultural" element={<DetalhesCaixa_cultural />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
