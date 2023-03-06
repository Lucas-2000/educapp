import React from "react";
import { Siderbar } from "../../components/sidebar/Siderbar";
import { ISidebarProps } from "../../interfaces/ISidebarProps";

export const DashProfessor = ({ isAluno }: ISidebarProps) => {
  return (
    <div>
      <Siderbar isAluno={isAluno} />
    </div>
  );
};
