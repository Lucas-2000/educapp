import React from "react";
import "./DashAluno.css";
import { Siderbar } from "../../components/sidebar/Siderbar";
import { Title } from "../../components/title/Title";
import { ISidebarProps } from "../../interfaces/ISidebarProps";
import { Carousel } from "../../components/carousel/Carousel";

export const DashAluno = ({ isAluno }: ISidebarProps) => {
  return (
    <div>
      <Siderbar isAluno={isAluno} />
      <div className="dash-container">
        <Title>Bem vindo, Aluno</Title>
        <Carousel isAluno={isAluno} />
        <div className="calendar-container">
          <div className="calendar">
            <div className="calendar-header">
              <span className="month-picker">February</span>
              <div className="year-picker">
                <span className="year-change">
                  <pre>&lsaquo;</pre>
                </span>
                <span className="year">2023</span>
                <span className="year-change">
                  <pre>&rsaquo;</pre>
                </span>
              </div>
            </div>
            <div className="calendar-body">
              <div className="calendar-week-day">
                <div>Dom</div>
                <div>Seg</div>
                <div>Ter</div>
                <div>Qua</div>
                <div>Qui</div>
                <div>Sex</div>
                <div>Sab</div>
              </div>
              <div className="calendar-days">
                <div>
                  1<span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
