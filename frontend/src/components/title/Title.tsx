import React, { PropsWithChildren } from "react";
import "./Title.css";

export const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="title">{children}</h1>;
};
