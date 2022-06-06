import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import tablePrices from "../data/TablePrice";

export default function Home() {
  // const handleClick = (event: React.FormEvent<HTMLFormElement>)  --> esse tipo FormEvent estava dando erro no onClick
  const navigate = useNavigate();

  const handleClick = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if ((event.target as HTMLElement).innerHTML === "CADASTRAR") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <>
      <Header
        titlePage="HOME"
        existButtonInHeader={true}
        textButtonRegister="CADASTRAR"
        textButtonInside="ENTRAR"
        funcLoginAndRegister={handleClick}
      />
      <main>
        <div>
          <h2>BEM-VINDA(O) A AGENDA DA HELOISA</h2>
          <img src="../../images/imgHome1.png" alt="imgUnhaHome" />
        </div>
        <div>
          <h3>TABELA</h3>
          <ul>
            {tablePrices.map((work) => (
              <li key={work.id}>
                {work.specialty}--------------------{work.price}
              </li>
            ))}
          </ul>
        </div>
        <h2>Quem sou</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas,
          laudantium recusandae tenetur molestias aliquid sint deleniti rem
          dolorum eligendi nihil perspiciatis veritatis quia quam impedit
          repellat, dicta cupiditate unde.
        </p>
        <div>
          <h3>Notify me by</h3>
          <div>
            <img src="../../images/whatsup.png" alt="Whats up" />
            <img width="500px" src="../../images/email.png" alt="Email" />
          </div>
        </div>
        <footer>
          <p>&copy;</p>
        </footer>
      </main>
    </>
  );
}
