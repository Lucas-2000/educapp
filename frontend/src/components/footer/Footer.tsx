import React, { PropsWithChildren } from "react";
import "./Footer.css";

export const Footer = ({ children }: PropsWithChildren) => {
  return (
    <footer className="footer">
      <p>{children}</p>
    </footer>
  );
};
