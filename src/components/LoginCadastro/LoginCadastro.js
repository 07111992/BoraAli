import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../LoginCadastro/LoginCadastro.css";

import iconFace from "../../img/iconFaceAzul.png";
import iconGoogle from "../../img/iconGoogleAzul.png";

export default function LoginCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cadastrarEmail, setCadastrarEmail] = useState("");
  const [cadastrarSenha, setCadastrarSenha] = useState("");
  const navegar = useNavigate();

  function fazerLogin(e) {
    if (email === "" && senha === "") {
      console.log("Digite uma senha valida e um email valido");
      e.preventDefault();
    } else if (email === "") {
      console.log("Digite uma email valido");
      e.preventDefault();
    } else if (senha === "") {
      console.log("Digite uma senha valida");
      e.preventDefault();
    } else {
      return navegar("/");
    }
  }

  function cadastrarUsuario(e) {
    if (nome === "" && cadastrarEmail === "" && cadastrarSenha === "") {
      console.log("Os campos precisam esta preenchidos");
      e.preventDefault();
    } else if (nome === "" || cadastrarEmail === "" || cadastrarSenha === "") {
      console.log("Os campos precisam esta preenchidos");
      e.preventDefault();
    } else if (cadastrarEmail === "") {
      console.log("O campo email precisa esta preenchido");
      e.preventDefault();
    } else if (cadastrarSenha === "") {
      console.log("O campo senha e precisa esta preenchido");
      e.preventDefault();
    } else if (nome === "") {
      console.log("O campo nome presisa esta preencido");
      e.preventDefault();
    } else {
      return navegar("/");
    }
  }

  function Signin() {
    var body = document.querySelector("body");
    body.className = "sign-in-js";
  }

  function Signup() {
    var body = document.querySelector("body");
    body.className = "sign-up-js";
  }

  return (
    <>
      <div className="containerLogin">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">Bem vindo de volta!</h2>
            <p className="description description-primary">
              Para se manter conectado
            </p>
            <p className="description description-primary">
              Por favor faça login
            </p>
            <button onClick={Signin} id="signin" className="btn btn-primary">
              Entrar
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Criar uma conta</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <Link className="link-social-media" href="">
                  <li className="">
                    <img id="iconGo" src={iconGoogle} alt="" />
                    {/* <i className="fab fa-google-plus-g"></i> */}
                  </li>
                </Link>
                <Link className="link-social-media" href="">
                  <li className="">
                    <img id="iconGo" src={iconFace} alt="" />
                    {/* <i className="fab fa-google-plus-g"></i> */}
                  </li>
                </Link>
              </ul>
            </div>
            <p className="description description-second">
              Ou use seu e-mail para inscrição:
            </p>
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-user icon-modify"></i>
                <input
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => {
                    setNome(e.target.value);
                  }}
                />
              </label>

              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setCadastrarEmail(e.target.value);
                  }}
                />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => {
                    setCadastrarSenha(e.target.value);
                  }}
                />
              </label>

              <button onClick={cadastrarUsuario} className="btn btn-second">
                Inscrever-se
              </button>
            </form>
          </div>
        </div>
        <div className="content second-content">
          <div className="first-column">
            <h2 className="title title-primary">Olá amigo!</h2>
            <p className="description description-primary">
              Insira seus dados pessoais
            </p>
            <p className="description description-primary">
              E comece a jornada conosco
            </p>
            <button onClick={Signup} id="signup" className="btn btn-primary">
              Inscrever-se
            </button>
          </div>
          <div className="second-column">
            <h2 className="title title-second">Faça login</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <Link className="link-social-media" href="">
                  <li className="">
                    <img id="iconGo" src={iconGoogle} alt="" />
                    {/* <i className="fab fa-google-plus-g"></i> */}
                  </li>
                </Link>
                <Link className="link-social-media" href="">
                  <li className="">
                    <img id="iconGo" src={iconFace} alt="" />
                  </li>
                </Link>
              </ul>
            </div>
            <p className="description description-second">
              Ou use sua conta de e-mail:
            </p>
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input
                  type="password"
                  placeholder="Senha"
                  onChange={(e) => {
                    setSenha(e.target.value);
                  }}
                />
              </label>

              <a className="password" href="#">
                Esqueceu sua senha?
              </a>
              <button onClick={fazerLogin} className="btn btn-second">
                Entrar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
