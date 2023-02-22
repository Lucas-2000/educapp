import React, { PropsWithChildren } from "react";
import "./Subtitle.css";

export const Subtitle = ({ children }: PropsWithChildren) => {
  return <h2 className="subtitle">{children}</h2>;
};
