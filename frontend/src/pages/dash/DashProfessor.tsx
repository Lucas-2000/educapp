import React from "react";
import { Carousel } from "../../components/carousel/Carousel";
import { Siderbar } from "../../components/sidebar/Siderbar";
import { Title } from "../../components/title/Title";
import { ISidebarProps } from "../../interfaces/ISidebarProps";

export const DashProfessor = ({ isAluno }: ISidebarProps) => {
  return (
    <div>
      <Siderbar isAluno={isAluno} />
      <div className="dash-container">
        <Title>Bem vindo, Professor</Title>
        <Carousel isAluno={isAluno} />
      </div>
    </div>
  );
};
