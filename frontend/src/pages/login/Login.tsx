import React from "react";
import "./Login.css";
import webinar from "../../images/webinar-animate.svg";
import { FacebookLogo, GoogleLogo } from "phosphor-react";

export const Login = () => {
  return (
    <>
      <div className="main-login">
        <div className="left-login">
          <h1>
            Faça Login <p>E acesse suas melhores aulas</p>
          </h1>
          <img src={webinar} alt="Aula Animada" className="left-login-image" />
        </div>
        <div className="right-login">
          <div className="card-login">
            <h1>LOGIN</h1>
            <div className="textfield">
              <label htmlFor="usuario">Usuário</label>
              <input type="text" name="usuario" placeholder="Usuário"></input>
            </div>
            <div className="textfield">
              <label htmlFor="senha">Senha</label>
              <input type="password" name="senha" placeholder="Senha"></input>
            </div>
            <button className="btn-login">Login</button>
            <div className="btn-login-social">
              <button className="btn-social google">
              <GoogleLogo size={32} />
                Google
              </button>
              <button className="btn-social facebook">
              <FacebookLogo size={32} />
                Facebook
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
