import React, { useState } from "react";
import { IDataProps } from "../../interfaces/IDataProps";
import { Input } from "../input/Input";
import { Subtitle } from "../subtitle/Subtitle";

export const DataForm = ({ data, updateFieldHandler }: IDataProps) => {
  return (
    <div className="profile-form">
      <div className="form-control">
        <Subtitle color="var(--light-text-color)">Preencha seus dados</Subtitle>
        <Input
          label="Nome Completo"
          name="nome"
          type="text"
          placeholder="Nome..."
          required={true}
          value={data.name}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          placeholder="exemplo@gmail.com"
          required={true}
          value={data.email}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
        <Input
          label="Senha"
          name="password"
          type="password"
          placeholder="****************"
          required={true}
          value={data.password}
          onChange={(e) => updateFieldHandler("password", e.target.value)}
        />
        <Input
          label="Redigite a Senha"
          name="repassword"
          type="password"
          placeholder="****************"
          required={true}
          value={data.rePassword}
          onChange={(e) => updateFieldHandler("rePassword", e.target.value)}
        />
      </div>
    </div>
  );
};
