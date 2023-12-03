import "../Passeios/Passeios.css";

import { Link } from "react-router-dom";
import imgMarcoZero from "../../img/marco zero card.jpg";
import imgBomJesus from "../../img/Rua_do_Bom_Jesus,_Recife_antigocard.jpg";
import imgPacoDofrevo from "../../img/paço do frevo card.jpg";
import imgPortodigital from "../../img/portodigitalcard.png";
import imgBrennand from "../../img/instituto-ricardo-brennand-foto-ed-machado-04 card.jpg";
import imgPortoRecife from "../../img/Porto de Recifecard.jpg";
import imgPortoGalinhas from "../../img/porto de galinhascard.webp";
import imgCaixaCultural from "../../img/caixa-cultural-foto-ed-machado-01 card.jpg";
export default function Passeios() {
  return (
    <div>
      {/* div contendo o titulo "Bora Ali" */}

      <h1 className="tituloinicial">"Recife, onde cada esquina é um palco de arte e tradição, convidando você a dançar na história."</h1>

      {/* main contendo toda os cards */}

      <main className="containercards">
        <div className="card">
          <img src={imgMarcoZero} alt="marco_zero" />
          <h1>Marco Zero</h1>
          <p>
            Importante e presentativo ponto turístico da cidade, localizado às
            margens do Rio Capibaribe. Este marco é reconhecido como o centro
            geográfico da cidade e possui uma admirável rosa dos ventos no chão.
          </p>
          <Link to="PasseiosDetalhes">
            <button className="btn">Saiba Mais!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgBomJesus} alt="bom_Jesus" />
          <h1>Rua do Bom Jesus</h1>
          <p>
            Um dos principais pontos turísticos de recife, foi eleita a 3ª mais
            bonita do mundo. Conhecida por seu charme histórico, abriga diversos
            pontos históricos e arte, atraindo visitantes de todo o mundo.
          </p>
          <Link to="PasseiosDetalhes2">
            <button className="btn">Saiba Mais!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgPacoDofrevo} alt="paço_frevo" />
          <h1>Paço do Frevo</h1>
          <p>
            Espaço cultural que celebra a história e a cultura do frevo. Com
            arquitetura moderna e atividades diversificadas, o Paço do Frevo se
            tornou um ponto de referência para os admiradores e estudiosos desse
            patrimônio cultural.
          </p>
          <Link to="PasseiosDetalhes3">
            <button className="btn">Saiba Mais!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgPortodigital} alt="porto_digital" />
          <h1>Porto Digital</h1>
          <p>
            Parque tecnológico, que se destaca como um dos principais polos de
            inovação e tecnologia no país. Fundado em 2000, oferece um ambiente
            propício para empresas de TI, startups e instituições de pesquisa.
          </p>
          <Link to="DetalhesPorto_digital">
            <button className="btn">Saiba Mais!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgBrennand} alt="brennand" />
          <h1>Museu Francisco Brennand</h1>
          <p>
            Espaço dedicado à preservação e exibição das obras do renomado
            artista brasileiro Francisco Brennand. O museu está situado na
            antiga fábrica de cerâmica da família Brennand e abriga uma vasta
            coleção de esculturas, azulejos, pinturas e outras peças criadas
            pelo artista.
          </p>
          <Link to="DetalhesMuseu_brennand">
            <button className="btnb">SAIBA MAIS!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgPortoRecife} alt="porto_recife" />
          <h1>Porto do Recife</h1>
          <p>
            Um dos mais antigos do Brasil, com mais de 300 anos de história. É
            estratégico para a economia regional, sendo um importante centro de
            movimentação de cargas e passageiros. Sua localização privilegiada o
            torna um ponto chave para o comércio marítimo.
          </p>
          <Link to="DetalhesPorto_recife">
            <button className="btnb">SAIBA MAIS!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgPortoGalinhas} alt="porto_galinhas" />
          <h1>Porto de Galinhas</h1>
          <p>
            Destino conhecido por suas praias, suas piscinas naturais e seus
            passeios de buggy, é um destino popular para turistas em busca de
            belezas naturais. Para além do mar. O lugar oferece passeios
            variados, lojinhas ótimas para comprar artesanato,
          </p>
          <Link to="DetalhesPorto_galinhas">
            <button className="btnb">SAIBA MAIS!</button>
          </Link>
        </div>

        <div className="card">
          <img src={imgCaixaCultural} alt="caixa_cultural" />
          <h1>Caixa Cultural</h1>
          <p>
            Espaço multifuncional que promove eventos culturais, exposições,
            workshops e atividades artísticas para a comunidade. Localizada no
            coração da cidade, oferece acesso a diversas manifestações
            culturais, como dança, música, teatro e artes visuais.
          </p>
          <Link to="DetalhesCaixa_cultural">
            <button className="btnb">SAIBA MAIS!</button>
          </Link>
        </div>
      </main>
    </div>
  );
}
