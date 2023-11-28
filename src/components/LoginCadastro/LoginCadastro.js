import { useState } from "react";
import "../LoginCadastro/LoginCadastro.css";
import { Link } from "react-router-dom";

export default function LoginCadastro() {
    const [isSignUpActive, setIsSignUpActive] = useState(false);

    return (
        <div className="box-master">
            <h2>BEM VINDO AMORZINHO</h2>

            <div
                className={`container ${isSignUpActive ? "right-painel-active" : ""}`}
            >
                <div className="form-container sign-up-container">
                    <form action="#">
                        <h1>CRIAR CONTA</h1>

                        <div className="social-container">
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </Link>
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                        <span>Use seu email para se cadastrar.</span>

                        <input className="botao" type="text" placeholder="Nome" />
                        <input className="botao" type="email" placeholder="Email" />
                        <input className="botao" type="password" placeholder="Senha" />
                        <button className="butao1" >CADASTRAR</button>
                    </form>
                </div>

                <div className="form-container sign-in-container">
                    <form action="#">
                        <h1>ACESSO</h1>

                        <div className="social-container">
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-facebook-f"></i>
                            </Link>
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-google-plus-g"></i>
                            </Link>
                            <Link className="link" href="#" class="social">
                                <i class="fab fa-linkedin-in"></i>
                            </Link>
                        </div>
                        <span  >Acesso de usuário</span>

                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Senha" />
                        <Link className="link" href="#">ESQUECEU A SENHA?</Link>
                        <button>ENTRAR</button>
                    </form>
                </div>

                <div className="sobreposição-container">
                    <div className="sobreposição">
                        <div className="sobreposição-painel sobreposição-left">
                            <h1>Se já for cadastrado, vem cá.</h1>
                            <p>Informe seus dados de usuário.</p>
                            <button
                                class="ghost"
                                id="SignIn"
                                onClick={() => {
                                    setIsSignUpActive(false);
                                }}
                            >
                                Acessar
                            </button>
                        </div>

                        <div className="sobreposição-painel sobreposição-right">
                            <h1>Bora ali?</h1>
                            <p>Por aqui pra se tornar um usuário.</p>
                            <button
                                className="ghost"
                                id="SignUn"
                                onClick={() => {
                                    setIsSignUpActive(true);
                                }}
                            >
                                Agora mesmo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
