import React from "react";
import "./Home.css";
import { Container } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Subtitle } from "../../components/subtitle/Subtitle";
import webinar from "../../images/webinar-animate.svg";
import { Faq } from "../../utils/lists/Faq";
import { Accordion } from "../../components/accordion/Accordion";
import { Button } from "../../components/button/Button";
import { CheckCircle } from "phosphor-react";
import faq from "../../images/faq.svg";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="body-home">
        <section className="section-about">
          <div className="about-text">
            <h4>Bem vindos ao EducApp</h4>
            <h1>Acesse suas melhores aulas</h1>
            <p>
              O EducApp é voltado para a educação de forma online para
              professores que desejam dar aulas e alunos que queiram ter aulas,
              precisando apenas de um celular e acesso à Internet. Os
              professores e os alunos irão interagir compartilhando experiências
              e convivendo com todos os tipos de pessoas e de variadas regiões,
              facilitando a troca de cultura, informação e conhecimento. Em
              consequência da pandemia covid19, muitos professores perderam seus
              empregos e precisam de uma renda extra, o aplicativo consegue
              entregar isso a eles e também para alunos que foram forçados a
              adotar esse tipo de ensino. A tendência é aumentar a quantidade de
              pessoas que desejam adotar o ensino remoto, já era um movimento
              existente principalmente por cursinhos online e aulas de inglês,
              podendo assim explorar esse mercado que é muito promissor e
              facilitar o acesso à educação de qualidade. Buscando uma forma de
              monetização suficiente para o professor conseguir ter uma renda
              extra e os alunos possam gastar um dinheiro não tão alto para
              poderem ter acesso às aulas.
            </p>
            <a href="#" className="about-btn">Cadastre-se</a>
          </div>
          <div className="about-img">
            <img src={webinar} alt="Aula Animada" />
          </div>
        </section>
        <section className="section-planos">
          <h1 className="planos-title">Nossos Planos</h1>
          <div className="planos">
            <div className="plano shadow">
              <ul>
                <li className="tipo">Plano Bronze</li>
                <li className="price">R$ 69,99</li>
                <li><CheckCircle size={32} weight="fill" />Acesso por 1 mês</li>
                <li><CheckCircle size={32} weight="fill" />Aulas ao vivo e gravadas ilimitadas</li>
                <li><CheckCircle size={32} weight="fill" />Exercícios ilimitados</li>
                <a href="#" className="planos-btn">
                  Assinar
                </a>
              </ul>

            </div>
            <div className="plano rec">
              <ul>
                <li className="tipo">Plano Ouro</li>
                <li className="price"> R$ 599,88</li>
                <li><CheckCircle size={32} weight="fill" />Acesso por 12 meses</li>
                <li><CheckCircle size={32} weight="fill" />Aulas ao vivo e gravadas ilimitadas</li>
                <li><CheckCircle size={32} weight="fill" />Exercícios ilimitados</li>
                <li><CheckCircle size={32} weight="fill" />Programa de mentoria individual</li>
                <li><CheckCircle size={32} weight="fill" />Rever gravação de aulas ao vivo</li>
                <li><CheckCircle size={32} weight="fill" />Grupo para interação com outros alunos</li>
                <li><CheckCircle size={32} weight="fill" />Bônus de aulas extras de redação e inglês</li>
                <a href="#" className="planos-btn">
                  Assinar
                </a>
              </ul>
            </div>
            <div className="plano shadow">
              <ul>
                <li className="tipo">Plano Prata</li>
                <li className="price">R$ 359,94</li>
                <li><CheckCircle size={32} weight="fill" />Acesso por 6 meses</li>
                <li><CheckCircle size={32} weight="fill" />Aulas ao vivo e gravadas ilimitadas</li>
                <li><CheckCircle size={32} weight="fill" />Exercícios ilimitados</li>
                <li><CheckCircle size={32} weight="fill" />Grupo para interação com outros alunos</li>
                <a href="#" className="planos-btn">
                  Assinar
                </a>
              </ul>
            </div>
          </div>
        </section>
        <section className="section-faq">
          <div className="faq">
            <div className="image-faq">
              <img src={faq} />
            </div>
            <div className="text-faq">
            <h1>FAQ</h1>
              {Faq.map((faq) => (
                <Accordion
                  id={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer>Todos os direitos reservados. 2022</Footer>
    </>
  );
};
