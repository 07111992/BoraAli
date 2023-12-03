import "./QuemSomos.css";

import Isis from "../../img/isis.jpg";
import Linkedin from "../../img/linkedinBlack.png";
import GitHub from "../../img/gitBlack.png";
import GustavoLindo from "../../img/gustavoLindo.PNG";
import Douglas from "../../img/douglas.jpg";
import Eliel from "../../img/foto eliel.jpg";
import ItaloAtor from "../../img/italoAtor.jpg";

export default function QuemSomos() {
  return (
    <main>
      <h1 className="equipeh1">Nossa Equipe</h1>
      <h2>"No calor da cultura recifense, encontramos a motivação para enfrentar qualquer desafio."</h2>

      <div className="container_participantes">
        <div className="card_participantes" id="isis">
          <img className="img_participantes" src={Isis} id="isis" alt="" />
          <div className="quadrado">
            <p>Isis Braz</p>
            <p className="dev">Desenvolvedor</p>
            <div className="redes_sociais">
              <img src={Linkedin} alt="" />
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
        <div className="card_participantes">
          <img className="img_participantes" src={ItaloAtor} alt="" />
          <div className="quadrado">
            <p>Ithalo Soares</p>
            <p className="dev">Desenvolvedor</p>
            <div className="redes_sociais">
              <img src={Linkedin} alt="" />
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
        <div className="card_participantes">
          <img className="img_participantes" src={GustavoLindo} alt="" />
          <div className="quadrado">
            <p>Gustavo Miranda</p>
            <p className="dev">Desenvolvedor</p>
            <div className="redes_sociais">
              <img src={Linkedin} alt="" />
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
        <div className="card_participantes">
          <img className="img_participantes" src={Douglas} alt="" />
          <div className="quadrado">
            <p>Douglas Stevens</p>
            <p className="dev">Desenvolvedor</p>
            <div className="redes_sociais">
              <img src={Linkedin} alt="" />
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
        <div className="card_participantes">
          <img className="img_participantes" src={Eliel} alt="" />
          <div className="quadrado">
            <p>Eliel Santana</p>
            <p className="dev">Desenvolvedor</p>
            <div className="redes_sociais">
              <img src={Linkedin} alt="" />
              <img src={GitHub} alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
