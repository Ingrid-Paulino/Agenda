import React from "react";
import Button from "./Button";

import "../styles/pages.css";
import "../styles/components.css";

interface IHeader {
  titlePage: string;
  existButtonInHeader: boolean;
  textButtonRegister?: string;
  textButtonInside?: string;
  funcLoginAndRegister?(event: React.FormEvent<HTMLInputElement>): void;
}

export default function Header({
  titlePage,
  existButtonInHeader,
  textButtonRegister,
  textButtonInside,
  funcLoginAndRegister,
}: IHeader) {
  return (
    <header className="header">
      <h1 className="textBemVinda">{titlePage}</h1>
      <div className="btns">
        {existButtonInHeader ? (
          <>
            <Button
              text={textButtonRegister}
              classN="btnCadastrar"
              handleClick={funcLoginAndRegister}
            />
            <Button
              text={textButtonInside}
              classN="btnEntrar"
              handleClick={funcLoginAndRegister}
            />
          </>
        ) : null}
      </div>
    </header>
  );
}
