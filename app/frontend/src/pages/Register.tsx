import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { inputsRegister } from '../Stock_redux_toolkit/reducers_actions/myReduce'
import { useNavigate } from "react-router-dom";


import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

import { validateRegister } from "../validations/inputs";


export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [complement, setComplement] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [proficional, setProficional] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>, constSetState: Function ) => {
    const target = event.target as HTMLTextAreaElement
    constSetState(target.value)
  }

  const valueSelect = () => {
    const select = document.getElementById('professional') as HTMLSelectElement;
    const value = select.options[select.selectedIndex].value;
    setProficional(value)
  }

  const onSaveResInput = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    console.log('porf', proficional);
    await validateRegister(fullName, email, address, number, complement, password, confirmPassword, proficional)
    
    await valueSelect()
    dispatch(inputsRegister({fullName, email, address, number, complement, password, confirmPassword, proficional }))
    // navigate("/customerDay");
  }

  return (
    <main>
      <h1>Agenda Heloisa</h1>
      <form action="">
        <Input labelInput="Nome Completo" func={(event) => handleChange(event, setFullName)}/>
        <Input text="email@gmail.com" labelInput="E-mail" type="email" func={(event) => handleChange(event, setEmail)}/>
        <Input labelInput="Endereço" func={(event) => handleChange(event, setAddress)}/>
        <Input labelInput="Numero" func={(event) => handleChange(event, setNumber)}/>
        <Input labelInput="Complemento" func={(event) => handleChange(event, setComplement)}/>
        <Input text="********" labelInput="Senha" type="password" func={(event) => handleChange(event, setPassword)}/>
        <Input text="********" labelInput="Confirmar Senha" type="password" func={(event) => handleChange(event, setConfirmPassword)}/>
        <Select />
        <Button text="LOGAR" handleClick={onSaveResInput} />
      </form>
    </main>
  );
}
