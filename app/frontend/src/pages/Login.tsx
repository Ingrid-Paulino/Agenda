import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";
// import { RootState } from "../Stock_redux_toolkit/store";
import { inputsLogin } from "../Stock_redux_toolkit/reducers_actions/myReduce";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const stock = useSelector<RootState>(state => state.stock)

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleChange = (
    event: React.FormEvent<HTMLInputElement>,
    constSetState: Function
  ) => {
    const target = event.target as HTMLTextAreaElement;
    constSetState(target.value);
  };

  const onSaveResInput = async (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    await dispatch(inputsLogin({ email, password }));
    navigate("/customerDay");
    setEmail(" "); // nn funciona
    setPassword(" ");
  };

  return (
    <main>
      <img src="../../images/esmalte.png" alt="esmalte" width="150px" />
      <h1>Agenda Heloisa</h1>
      <form action="" onSubmit={(event) => event.preventDefault()}>
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
        <Input
          text="email@gmail.com"
          labelInput="Login"
          func={(event) => handleChange(event, setEmail)}
        />
        <Input
          text="********"
          labelInput="Senha"
          func={(event) => handleChange(event, setPassword)}
        />
        <Button text="LOGIN" handleClick={onSaveResInput} />
        {/* Button 2 não funciona */}
        <Button
          text="Ainda não tenho conta"
          handleClick={() => (window.location.href = "register")}
        />
      </form>
    </main>
  );
}
