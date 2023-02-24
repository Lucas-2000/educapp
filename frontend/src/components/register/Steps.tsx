import React from "react";
import "./Steps.css";
import { GraduationCap, Notepad, Star, User } from "phosphor-react";
import { IStepsProps } from "../../interfaces/IStepsProps";

export const Steps = ({ currentStep }: IStepsProps) => {
  return (
    <div className="steps">
      <div className="step active">
        <GraduationCap className="icon-form" weight="bold" size={24} />
        <p>Professor/Aluno</p>
      </div>
      <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
        <User className="icon-form" weight="bold" size={24} />
        <p>Identificação</p>
      </div>
      <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
        <Notepad className="icon-form" weight="bold" size={24} />
        <p>Perfil</p>
      </div>
      <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
        <Star className="icon-form" weight="bold" size={24} />
        <p>Avaliação</p>
      </div>
    </div>
  );
};
