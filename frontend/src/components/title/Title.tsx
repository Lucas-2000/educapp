import React from "react";
import { ITitleProps } from "../../interfaces/ITitleProps";
import "./Title.css";

export const Title = ({ children, color }: ITitleProps) => {
  return (
    <h1 className="title" style={{ color: `${color}` }}>
      {children}
    </h1>
  );
};
