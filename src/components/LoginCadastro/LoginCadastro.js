import "../LoginCadastro/LoginCadastro.css";

export default function LoginCadastro() {
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
      <div className="container">
        <div className="content first-content">
          <div className="first-column">
            <h2 className="title title-primary">welcome back!</h2>
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
                <a
                  className="link-social-media"
                  href="https://icons8.com.br/icon/59780/facebook"
                >
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a
                  className="link-social-media"
                  href="https://icons8.com.br/icon/59780/facebook"
                >
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a
                  className="link-social-media"
                  href="https://icons8.com.br/icon/59780/facebook"
                >
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">
              Ou use seu e-mail para inscrição:
            </p>
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-user icon-modify"></i>
                <input type="text" placeholder="Name" />
              </label>

              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <button className="btn btn-second">Inscrever-se</button>
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
            <h2 className="title title-second">Faça login no desenvolvedor</h2>
            <div className="social-media">
              <ul className="list-social-media">
                <a
                  className="link-social-media"
                  href="https://icons8.com.br/icon/59780/facebook"
                >
                  <li className="item-social-media">
                    <i className="fab fa-facebook-f"></i>
                  </li>
                </a>
                <a className="link-social-media" href="">
                  <li className="item-social-media">
                    <i className="fab fa-google-plus-g"></i>
                  </li>
                </a>
                <a className="link-social-media" href="#">
                  <li className="item-social-media">
                    <i className="fab fa-linkedin-in"></i>
                  </li>
                </a>
              </ul>
            </div>
            <p className="description description-second">
              or use your email account:
            </p>
            <form className="form">
              <label className="label-input" for="">
                <i className="far fa-envelope icon-modify"></i>
                <input type="email" placeholder="Email" />
              </label>

              <label className="label-input" for="">
                <i className="fas fa-lock icon-modify"></i>
                <input type="password" placeholder="Password" />
              </label>

              <a className="password" href="#">
                forgot your password?
              </a>
              <button className="btn btn-second">sign in</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
