import React from "react";
import "./Header.css";
import { Title } from "../title/Title";
import { Link } from "../link/Link";

export const Header = () => {
  return (
    <header className="header">
      <Title>EducApp</Title>
      <nav>
        <ul className="navigation">
          <li>
            <Link path="/login">Login</Link>
          </li>
          <li>
            <Link path="/register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
