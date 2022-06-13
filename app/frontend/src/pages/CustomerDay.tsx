import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import home from "../assets/home.svg";
import hour from "../assets/hour.svg";
import profile from "../assets/profile.svg";
import Header from "../components/Header";
import { RootState } from "../Stock_redux_toolkit/store";

import "../styles/components.css";

export default function CustomerDay() {
  const stock = useSelector((state: RootState) => state.stock); // Retorna os dados salvos no meu estado

  // console.log("1", stock);
  // console.log("2", stock.myReducer.login);
  const [value, onChange] = useState(new Date());

  const navigate = useNavigate();

  return (
    <>
      <Header
        titlePage="CALENDARIO"
        existButtonInHeader={true}
        textButtonRegister={stock.myReducer.login.email}
        /* textButtonRegister={stock.login.email} ---> aqui vou precisar do meu backend para pegar o nome, acredito que posso pegar pela api criada pelo back*/ textButtonInside="SAIR"
      />

      <h2 className="titleSelectDay">SELECIONE UM DIA DA SEMANA</h2>

      <div>
        {/*
          FONTE: https://projects.wojtekmaj.pl/react-calendar/
          REPOSITORIO: https://github.com/wojtekmaj/react-calendar
         */}
        <Calendar
          onChange={onChange}
          onClickDay={() => navigate("/customerHour")}
          value={value}
          className="calendar"
        />
      </div>
      <footer className="footerCustomerDay">
        <div>
          <img
            src={home}
            alt="Pagina principal"
            onClick={() => navigate("/customerDay")}
          />
          <p>HOME</p>
        </div>
        <div>
          <img
            src={profile}
            alt="Pagina de perfil"
            onClick={() => navigate("/customerHours")}
          />
          <p>PERFIL</p>
        </div>
        <div>
          <img
            src={hour}
            alt="Pagina de horarios do cliente"
            onClick={() => navigate("/customerProfile")}
          />
          <p>HORARIOS</p>
        </div>
      </footer>
    </>
  );
}
