import React from "react";
import "./Link.css";
import { ILinkProps } from "../../interfaces/ILinkProps";

export const Link = ({ children, path }: ILinkProps) => {
  return (
    <a className="link" href={path}>
      {children}
    </a>
  );
};
