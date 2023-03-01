import React, { useState } from "react";
import { IDataProps } from "../../interfaces/IDataProps";
import { Subtitle } from "../subtitle/Subtitle";
import { TextArea } from "../textarea/Textarea";
import "./Forms.css";

export const ProfileForm = ({ data, updateFieldHandler }: IDataProps) => {
  return (
    <div className="profile-form">
      <div className="form-control">
        <Subtitle color="var(--light-text-color)">Preencha seu perfil</Subtitle>
        <TextArea
          label="Biografia"
          name="biografia"
          placeholder="Digite sua biografia..."
          rows={5}
          cols={16}
          required={true}
          value={data.bio}
          onChange={(e) => updateFieldHandler("bio", e.target.value)}
        />
        <TextArea
          label="Competências"
          name="competências"
          placeholder="Digite suas competências..."
          rows={5}
          cols={16}
          required={true}
          value={data.comp}
          onChange={(e) => updateFieldHandler("comp", e.target.value)}
        />
        <Subtitle color="var(--light-text-color)">Formação</Subtitle>
        <select
          required
          className="select"
          name="formacao"
          value={data.education}
          onChange={(e) => updateFieldHandler("education", e.target.value)}
        >
          <option value="Bacharel">Bacharel</option>
          <option value="Mestre">Mestre</option>
          <option value="Doutor">Doutor</option>
          <option value="Ensino médio completo">Ensino médio completo</option>
          <option value="Ensino médio incompleto">
            Ensino médio incompleto
          </option>
          <option value="Ensino superior incompleto">
            Ensino médio incompleto
          </option>
          <option value="Técnologo">Tecnólogo</option>
        </select>
      </div>
    </div>
  );
};
