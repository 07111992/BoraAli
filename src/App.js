import TelaInicial from "./components/telaInicial/telaInicial";
import QuemSomos from "./components/QuemSomos/quemSomos";
import Passeios from "./components/Passeios/Passeios";

import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LoginCadastro from './components/LoginCadastro/LoginCadastro';
import PasseiosDetalhes from './components/PasseiosDetalhes/PasseiosDetalhes'
import PasseiosDetalhes2 from './components/PasseiosDetalhes2/PasseiosDetalhes2'
import PasseiosDetalhes3 from './components/PasseiosDetalhes3/PasseiosDetalhes3'
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
        <Route path="/Passeios/PasseiosDetalhes" element={<PasseiosDetalhes />} />
        <Route path="/Passeios/PasseiosDetalhes2" element={<PasseiosDetalhes2 />} />
        <Route path="/Passeios/PasseiosDetalhes3" element={<PasseiosDetalhes3 />} />
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
