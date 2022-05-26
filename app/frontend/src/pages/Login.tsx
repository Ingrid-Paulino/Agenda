import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { RootState } from "../Stock_redux_toolkit/store";
import { inputsLogin } from '../Stock_redux_toolkit/reducers_actions/myReduce'

import Button from "../components/Button";
import Input from "../components/Input";

export default function Login() {
  const dispatch = useDispatch();
  // const stock = useSelector<RootState>(state => state.stock)

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChange = (event: React.FormEvent<HTMLInputElement>, constSetState: Function) => {
    const target = event.target as HTMLTextAreaElement
    constSetState(target.value)
  }

  const onSaveResInput = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(inputsLogin({email, password}))
    window.location.href = "customerDay"
  }

  return (
    <main>
      <img src="../../images/esmalte.png" alt="esmalte" width="150px" />
      <h1>Agenda Heloisa</h1>
      <form action="">
        {/* Forma 1 */}
        {/* <Input text="email@gmail.com" labelInput="Login" func={(event) =>{
          const target = event.target as HTMLTextAreaElement
          setEmail(target.value)
          console.log('email', email);
        }
        }  /> */}

        {/* <Input text="********" labelInput="Senha" func={(event) =>{
          const target = event.target as HTMLTextAreaElement
          setSenha(target.value)
          console.log('senha', senha);
        }
        }/> */}
        {/* Forma 2 Refatorada */}
        <Input text="email@gmail.com" labelInput="Login" func={(event) => handleChange(event, setEmail)}/>
        <Input text="********" labelInput="Senha" func={(event) => handleChange(event, setPassword)}/>
        <Button text="LOGIN" handleClick={onSaveResInput}/>
        {/* Button 2 não funciona */}
        <Button text="Ainda não tenho conta" handleClick={() => window.location.href = "register"} /> 
      </form>
    </main>
  );
}
