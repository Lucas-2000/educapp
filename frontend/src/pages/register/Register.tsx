import React from "react";
import "./Register.css";
import { Title } from "../../components/title/Title";
import { Button } from "../../components/button/Button";
import { Container } from "../../components/container/Container";
import { ArrowLeft, ArrowRight, PaperPlaneTilt } from "phosphor-react";
import { TypeForm } from "../../components/register/TypeForm";
import { DataForm } from "../../components/register/DataForm";
import { ProfileForm } from "../../components/register/ProfileForm";
import { Review } from "../../components/register/Review";
import { useForm } from "../../hooks/useForm";
import { Steps } from "../../components/register/Steps";

export const Register = () => {
  const formComponents = [
    <TypeForm />,
    <DataForm />,
    <ProfileForm />,
    <Review />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <div className="bg-color">
      <Container>
        <div className="register">
          <div className="header-register">
            <Title color="var(--light-text-color)">Faça seu cadastro</Title>
            <p>Realize abaixo seu cadastro na plataforma do EducApp!</p>
          </div>
          <div className="form-container">
            <Steps currentStep={currentStep} />
            <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
              <div className="inputs-container">{currentComponent}</div>
              <div className="actions">
                {!isFirstStep && (
                  <Button
                    type="button"
                    background="var(--main-color)"
                    onClick={() => changeStep(currentStep - 1)}
                  >
                    <ArrowLeft size={32} />
                    <span>Voltar</span>
                  </Button>
                )}
                {!isLastStep ? (
                  <Button type="submit" background="var(--secondary-color)">
                    <ArrowRight size={32} />
                    <span>Avançar</span>
                  </Button>
                ) : (
                  <Button type="submit" background="var(--secondary-color)">
                    <PaperPlaneTilt size={32} />
                    <span>Avaliar</span>
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};
