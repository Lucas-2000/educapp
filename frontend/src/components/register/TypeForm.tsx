import React from "react";
import "./Forms.css";
import { Subtitle } from "../subtitle/Subtitle";

export const TypeForm = () => {
  return (
    <div className="form-control">
      <Subtitle color="var(--light-text-color)">Selecione o tipo</Subtitle>
      <select className="select" name="tipo">
        <option value="">Selecione</option>
        <option value="1">Aluno</option>
        <option value="2">Professor</option>
      </select>
    </div>
  );
};
