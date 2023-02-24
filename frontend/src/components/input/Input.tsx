import React from "react";
import "./Input.css";
import { IInputProps } from "../../interfaces/IInputProps";

export const Input = ({
  label,
  placeholder,
  name,
  type,
  value,
  onChange,
}: IInputProps) => {
  return (
    <div className="input-wrapper">
      <label className="label-form">{label}</label>
      <input
        className="input-form"
        placeholder={placeholder}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
