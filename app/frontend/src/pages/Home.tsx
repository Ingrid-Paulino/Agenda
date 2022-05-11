import React from "react";
import Header from "../components/Header";
import tablePrices from '../data/TablePrice'

export default function Home() {
  return (
    <>
      <Header titlePage="Home" existButtonInHeader={true}/>
      <main>
        <div>
          <h2>BEM-VINDA(O) A AGENDA DA HELOISA</h2>
          <img src="../../images/imgHome1.png" alt="imgUnhaHome"/>
        </div>
        <div>
          <h3>TABELA</h3>
          <ul>
            {tablePrices.map((work) => <li key={work.id}>{work.specialty}--------------------{work.price}</li>)}
         </ul>
        </div>
        <h2>Quem sou</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quas, laudantium recusandae tenetur molestias aliquid sint deleniti rem dolorum eligendi nihil perspiciatis veritatis quia quam impedit repellat, dicta cupiditate unde.</p>
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