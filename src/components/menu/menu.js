import { Link } from "react-router-dom";

import logoImg from "../../img/boraalinova2.png";

import "../menu/menu.css";

export default function Menu() {
  return (
    <div>
      <nav className="nav">
        <div className="contanier_logo">
          <Link to="/">
            <img src={logoImg} alt="logo Bora ali" />
          </Link>
        </div>
        <ul>
          <li>
            <Link id="linkMenu" to="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link id="linkMenu" to="/Passeios">
              Passeios
            </Link>
          </li>
          <li>
            <Link id="linkMenu" to="/QuemSomos">
              Quem somos
            </Link>
          </li>
          <li>
            <Link id="botaoLogin" to="/LoginCadastro">
              <span>Entar</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
