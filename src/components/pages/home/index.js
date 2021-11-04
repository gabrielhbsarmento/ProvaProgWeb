import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

import "./styles.css";
import Img from "../../../assets/BackgroundGIF.gif";

const Home = () => {
  return (
    <div className="home">
      <img src={Img} alt="backgraud" />
      <div className="info">
        <h1>Ola,Eu sou</h1>
        <h2>Gabriel Baracat Sarmento</h2>
        <p>Front-end developer | Javascript | Reactjs</p>
        <div className="icons">
          <a
            href="https://github.com/gabrielhbsarmento"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={25} />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-baracat-a53a35216/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://www.facebook.com/gabrielbaracat.sarmento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={25} />
          </a>
          <a
            href="https://www.instagram.com/gabrielbsarmento/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
      <div className="content">
        <h2>Seja bem vindo ao meu portfólio</h2>

        <p>
          Meu Nome eh Gabriel Henrique B Sarmento Aluno no 6º semestre de SI
          CPAN - UFMS .Programador Web e Programado Unity em formação.
        </p>
        <button>
          <Link to="/about">Saiba mais</Link>
        </button>
      </div>
    </div>
  );
};
export default Home;
