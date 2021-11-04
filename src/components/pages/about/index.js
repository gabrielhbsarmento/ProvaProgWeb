import React from "react";
import Img from "../../../assets/Img2.png";
import Habilidades from "../skills/index";
import "./styles.css";

function Sobre() {
  return (
    <>
      <div className="sobre">
        <img src={Img} alt="perfil" />

        <div className="conteudo">
          <div className="title">
            <strong>Sobre</strong>
            <h2>Mim</h2>
          </div>
          <p>
            Meu nome eh Gabriel Henrique B Sarmento estou no momento no 6º
            periodo do curso de Si CPAN - UFMS.
          </p>
          <p>
            Desenvolvedor HTML, JAVASCRIPT ,CSS ,HTML e rescentemente REACTJS
          </p>
        </div>
      </div>
      <Habilidades />
    </>
  );
}
export default Sobre;
