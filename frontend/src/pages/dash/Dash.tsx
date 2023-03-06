import React, { useState } from "react";
import { DashAluno } from "./DashAluno";
import { DashProfessor } from "./DashProfessor";

export const Dash = () => {
  const [isAluno, setIsAluno] = useState(true);

  return (
    <>
      {isAluno ? (
        <DashAluno isAluno={true} />
      ) : (
        <DashProfessor isAluno={false} />
      )}
    </>
  );
};
