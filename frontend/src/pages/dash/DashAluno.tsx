import React from "react";
import "./DashAluno.css";
import { Siderbar } from "../../components/sidebar/Siderbar";
import { Title } from "../../components/title/Title";
import { ISidebarProps } from "../../interfaces/ISidebarProps";
import { Carousel } from "../../components/carousel/Carousel";

export const DashAluno = ({ isAluno }: ISidebarProps) => {
  return (
    <div>
      <Siderbar isAluno={isAluno} />
      <div className="dash-container">
        <Title>Bem vindo, Aluno</Title>
        <Carousel />
      </div>
    </div>
  );
};
