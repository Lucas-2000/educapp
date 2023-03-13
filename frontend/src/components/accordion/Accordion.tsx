import { CaretDown, CaretUp } from "phosphor-react";
import React, { useState } from "react";
import { IAccordionProps } from "../../interfaces/IAccordionProps";
import "./Accordion.css";

export const Accordion = ({ id, question, answer }: IAccordionProps) => {
  const [arrow, setArrow] = useState(false);
  const [active, setActive] = useState("");
  const [res, setRes] = useState("");

  const toogleAccordion = () => {
    setActive(active === "" ? "active" : "");
    setArrow(!arrow)
    setRes(res === "" ? "resActive" : "")
  }


  return (
    <>
      <div className={`questions ${active}`} key={id} onClick={toogleAccordion}>
        <p>{question}</p>
        {!arrow ? (
          <CaretDown size={32} className="caretDown" />
        ) : (
          <CaretUp size={32} className="caretUp" />
        )}
      </div>
      {arrow && (
        <div className={`answer ${res}`} key={id}>
          <p>{answer}</p>
        </div>
      )}
    </>
  );
};
