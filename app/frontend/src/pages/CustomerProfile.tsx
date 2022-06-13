import React from "react";

import { RootState } from "../Stock_redux_toolkit/store";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";


import md5 from "crypto-js/md5";
import Header from "../components/Header";

export default function CustomerProfile() {
  const navigate = useNavigate();

  const stock = useSelector((state: RootState) => state.stock);

  const gravatar = md5(stock.myReducer.login.email).toString();

  function voltarPage() {
    navigate("/customerDay");
  }

  return (
    <>
      <Header
        titlePage="PROFILE"
        existButtonInHeader={true}
        textButtonRegister="VOLTAR"
        funcLoginAndRegister={() => voltarPage()}
      />

      <div>
        <img
          // data-testid="header-profile-picture"
          src={`https://www.gravatar.com/avatar/${gravatar}`}
          alt="Imagem gravatar"
        />
      </div>

      <p>Puxarei o nome do banco de dados</p>
      <p>Puxarei o endereço do banco de dados</p>
    </>
  );
}
