import React from "react";
import "./Button.css";
import { IButtonProps } from "../../interfaces/IButtonProps";

export const Button = ({
  children,
  type,
  background,
  onClick,
}: IButtonProps) => {
  return (
    <button
      className="button"
      type={type}
      style={{ background: `${background}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
