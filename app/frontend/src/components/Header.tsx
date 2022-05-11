import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

interface IHeader {
  titlePage: string;
  existButtonInHeader: boolean;
}

export default function Header({titlePage, existButtonInHeader}: IHeader) {

  // const handleClick = (event: React.FormEvent<HTMLFormElement>)  --> esse tipo FormEvent estava dando erro no onClick
  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    // console.log(event);
    
    if ((event.target as HTMLElement).innerHTML  === "CADASTRAR") {
      window.location.href = "register"
    } else {
      window.location.href = "login"
    }
  }

  return (
    <header>
      <h1>{titlePage}</h1>
      {existButtonInHeader ? (
        <>
          <Button text="CADASTRAR" handleClick={handleClick}/>
          <Button text="ENTRAR"  handleClick={handleClick}/>
        </>
      ) : null}      
    </header>  );
}