import React from "react";

export default function Select() {
  const proficionais = ["Select", "Heloisa Ezequiel", "Amanda Souza"];
  return (
    <select name="" id="professional">
      {proficionais.map((proficional) => (
        <option key={proficional}  value={proficional}>{proficional}</option>
      ))}
    </select>
  );
}
