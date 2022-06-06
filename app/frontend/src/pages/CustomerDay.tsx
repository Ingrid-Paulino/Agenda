import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import { RootState } from "../Stock_redux_toolkit/store";

export default function CustomerDay() {
  const stock = useSelector((state: RootState) => state.stock); // Retorna os dados salvos no meu estado

  // console.log("1", stock);
  // console.log("2", stock.myReducer.login);
  const [value, onChange] = useState(new Date());

  return (
    <>
      <Header
        titlePage="CALENDARIO"
        existButtonInHeader={true}
        textButtonRegister={stock.myReducer.login.email}
        /* textButtonRegister={stock.login.email} ---> aqui vou precisar do meu backend para pegar o nome, acredito que posso pegar pela api criada pelo back*/ textButtonInside="SAIR"
      />
      <div>
        {/*
          FONTE: https://projects.wojtekmaj.pl/react-calendar/
          REPOSITORIO: https://github.com/wojtekmaj/react-calendar
         */}
        <Calendar onChange={onChange} value={value} />
      </div>
    </>
  );
}
