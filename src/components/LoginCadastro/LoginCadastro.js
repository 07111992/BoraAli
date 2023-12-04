import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../LoginCadastro/LoginCadastro.css";
import AlertDismissibleExample from "./alerta";
import "../LoginCadastro/alerta.css";

import iconFace from "../../img/iconFaceAzul.png";
import iconGoogle from "../../img/iconGoogleAzul.png";
import axios from "axios";
import { async } from "q";

//Funcao conecxao com o banco
export default function LoginCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cadastrarEmail, setCadastrarEmail] = useState("");
  const [cadastrarSenha, setCadastrarSenha] = useState("");
  // avisos
  const [avisoEmail, setAvisoEmail] = useState("");
  const [avisoSenha, setAvisoSenha] = useState("");
  const [avisoUsuarioInvalido, setUsuarioInvalido] = useState("");
  const [avisoCadastrarNome, setAvisoCadastrarNome] = useState("");
  const [avisoCadastrarEmail, setAvisoCadastrarEmail] = useState("");
  const [avisoCadastrarSenha, setAvisoCadastrarSenha] = useState("");
  const [showAlert, setShowAlert] = useState();
  const navegar = useNavigate();

  const [resp, setResp] = useState([]);

  // Funcao fazer login
  function fazerLogin(e) {
    if (email === "" && senha === "") {
      setAvisoEmail("O e-mail precisa ser preenchido");
      setAvisoSenha("A senha precisa ser preenchida");
      e.preventDefault();
    } else if (email === "") {
      setAvisoEmail("O e-mail precisa ser preenchido");
      e.preventDefault();
    } else if (senha === "") {
      setAvisoSenha("A senha precisa ser preenchida");
      e.preventDefault();
    } else {
      e.preventDefault();
      axios
        .post("http://localhost:5001/logar", { email: email, senha: senha })
        .then((res) => {
          setResp(res.data);
          console.log(resp);
        })
        .catch((error) => {
          return error;
        });
      if (resp.length !== 0) {
        navegar("/Passeios");
      }
    }
  }

  // funcao para cadastrar usuario

  function cadastrarUsuario(e) {
    if (nome === "" && cadastrarEmail === "" && cadastrarSenha === "") {
      setAvisoCadastrarNome("*O campo precisa ser preenchido ");
      setAvisoCadastrarEmail("*O campo precisa ser preenchido ");
      setAvisoCadastrarSenha("*O campo precisa ser preenchido ");
      e.preventDefault();
    } else if (cadastrarEmail === "") {
      setAvisoCadastrarEmail("*O campo precisa ser preenchido ");
      e.preventDefault();
      return;
    } else if (cadastrarSenha === "") {
      setAvisoCadastrarSenha("*O campo precisa ser preenchido ");
      e.preventDefault();
    } else if (nome === "") {
      setAvisoCadastrarNome("*O campo precisa ser preenchido ");
      e.preventDefault();
    } else {
      axios
        .post("http://localhost:5001/registrar", {
          nome: nome,
          email: cadastrarEmail,
          senha: cadastrarSenha,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((error) => {
          console.log(error);
          e.preventDefault();
        });
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
              <span id="teste123">{avisoCadastrarNome}</span>
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
              <span id="teste123">{avisoCadastrarEmail}</span>
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
              <span id="teste123">{avisoCadastrarSenha}</span>
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
              <span id="teste123">{avisoUsuarioInvalido}</span>
              <span id="teste123">{avisoEmail}</span>
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
              <span id="teste123">{avisoSenha}</span>
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
