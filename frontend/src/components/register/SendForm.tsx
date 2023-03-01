import React from "react";
import { IDataProps } from "../../interfaces/IDataProps";
import { Subtitle } from "../subtitle/Subtitle";

export const SendForm = ({ data }: IDataProps) => {
  return (
    <div className="form-control">
      <Subtitle color="var(--light-text-color)">
        Falta pouco para terminar seu cadastro, confirme o resumo do seu
        preenchimento
      </Subtitle>
      <p className="review-data">
        <span>Tipo: {data.type}</span>
      </p>
      <p className="review-data">
        <span>Seu nome: {data.name}</span>
      </p>
      <p className="review-data">
        <span>Seu email: {data.email}</span>
      </p>
      <p className="review-data">
        <span>Sua bio: {data.bio}</span>
      </p>
      <p className="review-data">
        <span>Suas competências: {data.comp}</span>
      </p>
      <p className="review-data">
        <span>Sua escolaridade: {data.education}</span>
      </p>
    </div>
  );
};
