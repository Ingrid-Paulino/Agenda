import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

export default function Register() {
  return (
    <main>
      <h1>Agenda Heloisa</h1>
      <form action="">
        <Input labelInput="Nome Completo" />
        <Input text="email@gmail.com" labelInput="E-mail" />
        <Input labelInput="Endereço" />
        <Input labelInput="Numero" />
        <Input labelInput="Complemento" />
        <Input text="********" labelInput="Senha" />
        <Input text="********" labelInput="Confirmar Senha" />
        <Select />
        <Button text="LOGAR" />
      </form>
    </main>
  );
}
