import React from "react";
import Header from "../components/Header";

import { useSelector } from "react-redux";
import { RootState } from "../Stock_redux_toolkit/store";
import Input from "../components/Input";
import Select from "../components/Select";

export default function CustomerHour() {
  const stock = useSelector((state: RootState) => state.stock);

  return (
    <>
      <Header
        titlePage="HORARIO"
        existButtonInHeader={true}
        textButtonRegister={stock.myReducer.login.email}
      />
      <main>
        <h1>CONFIRME SEU HORARIO</h1>
        <form action="">
          <Input
            labelInput="NOME"
            func={(event) => handleChange(event, setPassword)}
          />
          <Input
            labelInput="DATA"
            func={(event) => handleChange(event, setPassword)}
          />
          <Select
            labelInput="NOME"
            func={(event) => handleChange(event, setPassword)}
          />
          <Select />
          <Input
            labelInput="PREÇO"
            func={(event) => handleChange(event, setPassword)}
          />
        </form>
      </main>
    </>
  );
}
