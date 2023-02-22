import React from "react";
import "./Login.css";
import { Container } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Subtitle } from "../../components/subtitle/Subtitle";
import webinar from "../../images/webinar-animate.svg"
import google from "../../images/GoogleLogo.png"
import facebook from "../../images/FacebookLogo.png"

export const Login = () => {
    return (
        <>
          
            <div className="main-login">
              <div className="left-login">
                <h1>Faça Login <p>E acesse suas melhores aulas</p></h1>
                <img src={webinar} alt="Aula Animada" className="left-login-image"/>
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
                  <button className="btn-social"><img src={google} alt="Logo Google" className="left-login-image"/>Google</button>
                  <button className="btn-social"><img src={facebook} alt="Logo Facebok" className="left-login-image"/>Facebook</button>
                  </div>
                </div>
              </div>
            </div>
        </>
      );
    };
