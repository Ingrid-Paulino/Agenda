import React from "react";
import { useNavigate } from "react-router-dom";

import Header from "../components/Header";
import "../styles/components.css";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if ((event.target as HTMLElement).innerHTML === "CADASTRAR") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header
        titlePage="BEM-VINDA(O) A AGENDA "
        existButtonInHeader={true}
        textButtonRegister="CADASTRAR"
        textButtonInside="ENTRAR"
        funcLoginAndRegister={handleClick}
      />
      <main>
        <img
          className="homeImg"
          src="../../images/imgHome1.png"
          alt="imgUnhaHome"
        />
      </main>
      <footer className="footer">
        <p>&copy;</p>
      </footer>
    </>
  );
}
