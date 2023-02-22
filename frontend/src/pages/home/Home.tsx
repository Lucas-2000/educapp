import React from "react";
import "./Home.css";
import { Container } from "../../components/container/Container";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { Subtitle } from "../../components/subtitle/Subtitle";

export const Home = () => {
  return (
    <>
      <Container>
        <Header />
        <div className="body-home">
          <Subtitle>Sobre o EducApp</Subtitle>
          <section className="section-about">
            <img src="/" alt="img" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              repudiandae numquam eum quidem nam similique ullam quisquam
              exercitationem quos quibusdam officiis, cum impedit itaque natus
              magnam voluptatibus error, modi vero.
            </p>
          </section>
          <section className="section-faq">
            <div className="questions">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Dignissimos eveniet dolor est esse, officia laborum delectus
                animi optio commodi sequi facere doloribus id nihil dolore ullam
                voluptatibus maxime nemo sunt?
              </p>
              <p>Answer</p>
            </div>
          </section>
        </div>
      </Container>
      <Footer>Todos os direitos reservados. 2022</Footer>
    </>
  );
};
