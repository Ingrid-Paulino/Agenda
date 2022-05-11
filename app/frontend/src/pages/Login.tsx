import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  return (
    <main>
      <img src="../../images/esmalte.png" alt="esmalte" width="150px" />
      <h1>Agenda Heloisa</h1>
      <form action="">
        <Input text="email@gmail.com" labelInput="Login" />
        <Input text="********" labelInput="Senha" />
        <Button text="LOGIN" />
        <Button text="Ainda não tenho conta" />
      </form>
    </main>
  );
}
