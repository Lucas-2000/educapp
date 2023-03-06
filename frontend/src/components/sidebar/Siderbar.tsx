import {
  ArrowRight,
  Book,
  Calendar,
  Chalkboard,
  ChalkboardTeacher,
  ChartLine,
  House,
  MagnifyingGlass,
  Notepad,
  Pencil,
  SignOut,
  X,
} from "phosphor-react";
import React, { useState } from "react";
import { ISidebarProps } from "../../interfaces/ISidebarProps";
import { Subtitle } from "../subtitle/Subtitle";
import "./Sidebar.css";

export const Siderbar = ({ isAluno }: ISidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  function handleCloseSidebar() {
    setIsOpen(false);
  }

  function handleOpenSidebar() {
    setIsOpen(true);
  }

  return (
    <>
      {isOpen ? (
        <div className="sidebar-container">
          <div className="sidebar-header">
            <Subtitle color="var(--light-text-color)">Menu do Aluno</Subtitle>
            <button
              className="sidebar-header-close"
              onClick={handleCloseSidebar}
            >
              <X size={32} />
            </button>
            <div className="sidebar-header-search">
              <MagnifyingGlass size={32} color="var(--light-text-color)" />
              <input placeholder="Pesquisar..." />
            </div>
          </div>
          <hr />
          {isAluno ? (
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
          ) : (
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
                Buscar Aulas
              </a>
              <a className="sidebar-link" href="#">
                <Book size={32} />
                Cadastrar Aulas
              </a>
              <a className="sidebar-link" href="#">
                <ChalkboardTeacher size={32} />
                Próximas Aulas
              </a>
              <a className="sidebar-link" href="#">
                <Notepad size={32} />
                Correção Exercícios
              </a>
              <a className="sidebar-link" href="#">
                <ChartLine size={32} />
                Status
              </a>
              <a className="sidebar-link" href="#">
                <Calendar size={32} />
                Calendário
              </a>
            </div>
          )}
          <div className="sidebar-footer">
            <a className="sidebar-footer-link" href="#">
              Logout
              <SignOut size={32} />
            </a>
          </div>
        </div>
      ) : (
        <div className="sidebar-container-closed">
          <div className="sidebar-header-closed">
            <button onClick={handleOpenSidebar}>
              <ArrowRight size={32} />
            </button>
          </div>
          <hr />
          {isAluno ? (
            <div className="sidebar-options">
              <a className="sidebar-link" href="#">
                <House size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Pencil size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Chalkboard size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Book size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Notepad size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Calendar size={32} />
              </a>
            </div>
          ) : (
            <div className="sidebar-options">
              <a className="sidebar-link" href="#">
                <House size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Pencil size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Chalkboard size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Book size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <ChalkboardTeacher size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Notepad size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <ChartLine size={32} />
              </a>
              <a className="sidebar-link" href="#">
                <Calendar size={32} />
              </a>
            </div>
          )}
          <div className="sidebar-footer-closed">
            <a className="sidebar-footer-link" href="#">
              <SignOut size={32} />
            </a>
          </div>
        </div>
      )}
    </>
  );
};
