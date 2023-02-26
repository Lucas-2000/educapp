import React, { useState } from "react";
import "./Header.css";
import { Title } from "../title/Title";
import { Link } from "../link/Link";
import { User, SignIn, DotsThreeOutlineVertical, X } from "phosphor-react";

export const Header = () => {
  const [state, setState] = useState("");
  const [icon, setIcon] = useState(true);
 
 const toogleAccordion = () => {
    setState(state === "" ? "open" : "");
    setIcon(!icon);
 }

  return (
    <header className="header">
      <Title>EducApp</Title>
        <ul className={`navigation ${state}`}>
        <li>
            <a href="/#">Home</a>
          </li>
        <li>
            <a href="/#">Planos</a>
          </li>
        <li>
          <a href="/#">FAQ</a>
          </li>
          <li>
          </li>
        </ul>
        
        <div className="main">
        <a href="/login"><User size={32} />Login</a>
        <a href="/register"><SignIn size={32} />Cadastre-se</a>
          <div onClick={toogleAccordion} className={`menu-icon`} >
            {icon ?
            <DotsThreeOutlineVertical size={32} /> : <X size={32} />} </div>
        </div>
        
    </header>
  );
};
