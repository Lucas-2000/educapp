import React, { useState } from "react";
import "./Forms.css";
import { Subtitle } from "../subtitle/Subtitle";
import { IDataProps } from "../../interfaces/IDataProps";

export const TypeForm = ({ data, updateFieldHandler }: IDataProps) => {
  return (
    <div className="form-control">
      <Subtitle color="var(--light-text-color)">Selecione o tipo</Subtitle>
      <select
        className="select"
        name="tipo"
        value={data.type}
        onChange={(e) => updateFieldHandler("type", e.target.value)}
      >
        <option value="">Selecione</option>
        <option value="Aluno">Aluno</option>
        <option value="Professor">Professor</option>
      </select>
    </div>
  );
};
