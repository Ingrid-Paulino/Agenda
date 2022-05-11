import React from "react";

export default function Select() {
  const proficionais = ["Select", "Heloisa Ezequiel", "Amanda Souza"];
  return (
    <select name="" id="">
      {proficionais.map((proficional) => (
        <option value={proficional}>{proficional}</option>
      ))}
    </select>
  );
}
