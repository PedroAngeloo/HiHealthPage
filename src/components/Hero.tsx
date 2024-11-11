import React from "react";
import rectangleOne from "../assets/images/rectangleOne.png";
import rectangleTwo from "../assets/images/rectangleTwo.png";
import Button from "../components/button";
import "../styles/hero.css";

const Hero: React.FC = () => {
  return (
    <section id="hero">
      <span className="desktop-only">
        <img src={rectangleTwo} alt="Retangulo um tela inicial" />
      </span>
      <img src={rectangleOne} alt="Retangulo dois tela inicial" />
      <div className="container content">
        <p className="desktop-only">Bem-Vindo</p>
        <h1>
          Sua saúde, nossa missão. Agende sua consulta com facilidade no
          <div style={{ textAlign: 'center' }}>
            <h1>Hi Health.</h1>
          </div>
        </h1>
        <p>Priorize sua saúde conosco!</p>
        <div className="flex gap-1">
          <span><Button text="Cadastre-se" /></span>
          <span className="desktop-only"><Button text="Veja mais" secondary /></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
