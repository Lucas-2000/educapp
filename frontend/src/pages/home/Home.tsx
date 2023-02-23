import React, { useState } from "react";
import "./Home.css";
import { Container } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Subtitle } from "../../components/subtitle/Subtitle";
import webinar from "../../images/webinar-animate.svg";
import { CaretDown, CaretUp } from "phosphor-react";
import { Faq } from "../../utils/lists/Faq";
import { Accordion } from "../../components/accordion/Accordion";

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <div className="body-home">
          <Subtitle>Sobre o EducApp</Subtitle>
          <section className="section-about">
            <img src={webinar} alt="img" />
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
          </section>
          <Subtitle>Faq</Subtitle>
          {Faq.map((faq, index) => (
            <section className="section-faq">
              <Accordion
                id={faq.id}
                question={faq.question}
                answer={faq.answer}
              />
            </section>
          ))}
        </div>
      </Container>
      <Footer>Todos os direitos reservados. 2022</Footer>
    </>
  );
};
