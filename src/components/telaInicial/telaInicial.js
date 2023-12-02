import "../telaInicial/telaInicial.css";

import { Link } from "react-router-dom";

import imgCarousel1 from "../../img/babauuu.jpg";
import imgCarousel2 from "../../img/aacopia.jpg";
import imgCarousel3 from "../../img/marco-zero-6-scaled.jpeg";

import carangueijo from "../../img/caranguejo_1.png";
import imgSol from "../../img/sol_1.png";
import imgMapa from "../../img/mapa_1.png";
import imgFotoLateral from "../../img/lateral.jpg";
import iconTelefone from "../../img/telefone.png";
import iconPino from "../../img/pointer.png";
import iconMensagem from "../../img/mensagem1.png";

export default function TeleInicial() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={imgCarousel1} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={imgCarousel2} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={imgCarousel3} class="d-block w-100" alt="..." />
          </div>
          <div className="frase_carousel">
            <h1 id="frase_1">
              <span>
                Venha conhecer <span id="spanNone">o melhor de</span>
              </span>
            </h1>
            <p id="frase_2">Recife</p>

            <Link id="botao_bora" to="/Passeios">
              <div class="botao_bora">
                <span>Bora Ali ?</span>
              </div>
            </Link>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section className="sectionDetalhes">
        <p className="proposito">Nosso propósito</p>
        <div className="detalhesDescricao">
          {" "}
          {/* Div descriçao */}
          <div className="cardDescricao">
            <img src={carangueijo} alt="" />
            <div className="descricao">
              <p> Inovação </p>

              <h1>
                A inovação na área de turismo está moldando uma indústria mais
                dinâmica, acessível e sustentável. À medida que novas
                tecnologias continuam a surgir, a experiência do turista
                evoluirá, oferecendo oportunidades emocionantes para explorar o
                mundo de maneiras inéditas.
              </h1>
            </div>
          </div>
          <div className="cardDescricao">
            <img src={imgSol} alt="" />
            <div className="descricao">
              <p> Objetivo </p>
              <h1>
                O objetivo primordial do projeto de turismo e informação é criar
                uma experiência de viagem enriquecedora e personalizada para os
                visitantes, promovendo a descoberta autêntica de destinos.
                Buscamos
              </h1>
            </div>
          </div>
          <div className="cardDescricao">
            <img src={imgMapa} alt="" />
            <div className="descricao">
              <p> Valores </p>

              <h1>
                Compromisso em educar tanto os turistas quanto os parceiros
                sobre práticas de turismo responsáveis, tecnologias emergentes e
                mudanças na indústria.
              </h1>
            </div>
          </div>{" "}
          {/* card descricao */}
        </div>{" "}
        {/* Div descriçao  */}
      </section>
      <section className="historia">
        <div className="contanierFotoLateral">
          <img src={imgFotoLateral} alt="" />
        </div>
        <div className="container_historia_recife">
          <h1>
            <p id="historiaP">Sobre</p>
            Recife, a "Veneza Brasileira", é uma cidade vibrante e multifacetada
            que pulsa com a energia única do Nordeste brasileiro. Localizada no
            litoral de Pernambuco, essa cidade encantadora mistura tradição e
            modernidade de maneira cativante. As raízes históricas de Recife
            estão visíveis em seu centro antigo, conhecido como Recife Antigo,
            onde prédios coloniais coloridos e igrejas se mesclam com galerias
            de arte contemporânea, bares modernos e restaurantes badalados. As
            pontes que cruzam os rios Capibaribe e Beberibe dão um charme extra
            à paisagem, proporcionando cenários pitorescos e inspiradores.
          </h1>
        </div>
      </section>
      <section className="section_contatos">
        <div className="nome_contato">
          <h1>Contatos</h1>
        </div>
        <div className="contanier_icons">
          <div className="icons_contato">
            <img src={iconPino} alt="" />
            <span>
              Av. Dos desenvolvedorres Guiide, nº30 – Recife – PE CEP 54330-027
            </span>
          </div>
          <div className="icons_contato">
            <img src={iconTelefone} alt="" />
            <span>081 3333-3333</span>
          </div>
          <div className="icons_contato">
            <img src={iconMensagem} alt="" />
            <span>Grupoguiide@gmail.com</span>
          </div>
        </div>
      </section>
    </div>
  );
}
