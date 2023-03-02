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
        <Subtitle>Planos</Subtitle>
        <section className="section-planos">
          <div className="planos">
            <h3>Plano Bronze</h3>
            <div className="planos-vantagens">
              <p>Acesso por 1 mês</p>
              <p>Aulas ao vivo e gravadas ilimitadas</p>
              <p>Exercícios ilimitados</p>
              <p className="planos-valor">
                <span>R$ 69,99</span>
              </p>
            </div>
            <Button type="submit" background="var(--secondary-color)">
              Assinar
            </Button>
          </div>
          <div className="planos">
            <h3>Plano Prata</h3>
            <div className="planos-vantagens">
              <p>Acesso por 6 meses</p>
              <p>Aulas ao vivo e gravadas ilimitadas</p>
              <p>Exercícios ilimitados</p>
              <p>Grupo para interação com outros alunos</p>
              <p className="planos-valor">
                <span>R$ 359,94 (59,99 por mês)</span> podendo parcelar em 6
                vezes
              </p>
            </div>
            <Button type="submit" background="var(--secondary-color)">
              Assinar
            </Button>
          </div>
          <div className="planos">
            <h3>Plano Ouro</h3>
            <span>(Recomendado)</span>
            <div className="planos-vantagens">
              <p>Acesso por 12 meses</p>
              <p>Aulas ao vivo e gravadas ilimitadas</p>
              <p>Exercícios ilimitados</p>
              <p>Programa de mentoria individual</p>
              <p>Rever gravação de aulas ao vivo</p>
              <p>Grupo para interação com outros alunos</p>
              <p>Bônus de aulas extras de redação e inglês</p>
              <p className="planos-valor">
                <span>R$ 599,88 (49,99 por mês)</span> podendo parcelar em 12
                vezes
              </p>
            </div>
            <Button type="submit" background="var(--secondary-color)">
              Assinar
            </Button>
          </div>
        </section>
        <Subtitle>Faq</Subtitle>
        {Faq.map((faq) => (
          <section className="section-faq">
            <Accordion
              id={faq.id}
              question={faq.question}
              answer={faq.answer}
            />
          </section>
        ))}
      </div>
      <Footer>Todos os direitos reservados. 2022</Footer>
    </>
  );
};
