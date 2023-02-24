import React from "react";
import { ISubtitleProps } from "../../interfaces/ISubtitleProps";
import "./Subtitle.css";

export const Subtitle = ({ children, color }: ISubtitleProps) => {
  return (
    <h2 className="subtitle" style={{ color: `${color}` }}>
      {children}
    </h2>
  );
};
