import { CaretDown, CaretUp } from "phosphor-react";
import React, { useState } from "react";
import { IAccordionProps } from "../../interfaces/IAccordionProps";
import "./Accordion.css";

export const Accordion = ({ id, question, answer }: IAccordionProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className="questions" key={id}>
        <p>{question}</p>
        <i>
          {!isActive ? (
            <CaretDown size={32} onClick={() => setIsActive(!isActive)} />
          ) : (
            <CaretUp size={32} onClick={() => setIsActive(!isActive)} />
          )}
        </i>
      </div>
      {isActive && (
        <div className="answer" key={id}>
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};
