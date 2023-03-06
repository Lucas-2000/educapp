import React from "react";
import { Siderbar } from "../../components/sidebar/Siderbar";
import { ISidebarProps } from "../../interfaces/ISidebarProps";

export const DashAluno = ({ isAluno }: ISidebarProps) => {
  return (
    <div>
      <Siderbar isAluno={isAluno} />
    </div>
  );
};
