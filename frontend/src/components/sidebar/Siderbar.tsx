import {
  Book,
  Calendar,
  Chalkboard,
  House,
  MagnifyingGlass,
  Notepad,
  Pencil,
  SignOut,
  X,
} from "phosphor-react";
import React from "react";
import { Subtitle } from "../subtitle/Subtitle";
import "./Sidebar.css";

export const Siderbar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <Subtitle color="var(--light-text-color)">Menu do Aluno</Subtitle>
        <button className="sidebar-header-close">
          <X size={32} />
        </button>
        <div className="sidebar-header-search">
          <MagnifyingGlass size={32} color="var(--light-text-color)" />
          <input placeholder="Pesquisar..." />
        </div>
      </div>
      <hr />
      <div className="sidebar-options">
        <a className="sidebar-link" href="#">
          <House size={32} />
          Painel
        </a>
        <a className="sidebar-link" href="#">
          <Pencil size={32} />
          Editar perfil
        </a>
        <a className="sidebar-link" href="#">
          <Chalkboard size={32} />
          Aulas
        </a>
        <a className="sidebar-link" href="#">
          <Book size={32} />
          Temas
        </a>
        <a className="sidebar-link" href="#">
          <Notepad size={32} />
          Exercícios
        </a>
        <a className="sidebar-link" href="#">
          <Calendar size={32} />
          Calendário
        </a>
      </div>
      <div className="sidebar-footer">
        <a className="sidebar-footer-link" href="#">
          Logout
          <SignOut size={32} />
        </a>
      </div>
    </div>
  );
};
