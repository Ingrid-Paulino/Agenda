import React from "react";
import Button from "./Button";

interface IHeader {
  titlePage: string;
  existButtonInHeader: boolean;
  textButtonRegister: string;
  textButtonInside: string;
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
    <header>
      <h1>{titlePage}</h1>
      {existButtonInHeader ? (
        <>
          <Button
            text={textButtonRegister}
            handleClick={funcLoginAndRegister}
          />
          <Button text={textButtonInside} handleClick={funcLoginAndRegister} />
        </>
      ) : null}
    </header>
  );
}
