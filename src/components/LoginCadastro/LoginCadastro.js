import { useState } from 'react';
import '../LoginCadastro/LoginCadastro.css'

export default function LoginCadastro() {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    const [trocar, setTrocar] = useState('signIn')
    // signUpButton.onclick(() => {

    //     container.classList.add("right-panel-active");
    // });

    // signInButton.addEventListener('click', () => {
    //     container.classList.remove("right-panel-active");
    // });
    function change() {
        if(trocar==='signIn'){
            setTrocar('signUp')
        } else{
            setTrocar('signIn')
        }
     
    }

    return <div>

        <h2>BEM VINDO AMORZINHO</h2>


        <div className="container" id="container">

            <div className="form-container sign-up-container">
                <form action="#">
                    <h1>CRIAR CONTA</h1>

                    <div className="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>Use seu email para se cadastrar.</span>

                    <input type="text" placeholder="Nome" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <button>CADASTRAR</button>
                </form>
            </div>


            <div className="form-container sign-in-container">
                <form action="#">
                    <h1>ACESSO</h1>

                    <div className="social-container">
                        <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                        <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>Acesso de usuário</span>

                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Senha" />
                    <a href="#">ESQUECEU A SENHA?</a>
                    <button>ENTRAR</button>
                </form>
            </div>


            <div className="overlay-container">
                <div className="overlay">

                    <div className="overlay-panel overlay-left">
                        <h1>Se já for cadastrado, vem cá.</h1>
                        <p>Informe seus dados de usuário.</p>
                        <button class="ghost" id='SignIn'>Acessar</button>
                    </div>

                    <div className="overlay-panel overlay-right">
                        <h1>Bora ali?</h1>
                        <p>Por aqui pra se tornar um usuário.</p>
                        <button className="ghost" id='SignUn'>Agora mesmo</button>
                    </div>
                </div>
            </div>

        </div>
    </div>
}