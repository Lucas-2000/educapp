import React from "react";
import "./Button.css";
import { IButtonProps } from "../../interfaces/IButtonProps";

export const Button = ({ children, type, background }: IButtonProps) => {
  return (
    <button
      className="button"
      type={type}
      style={{ background: `${background}` }}
    >
      {children}
    </button>
  );
};
