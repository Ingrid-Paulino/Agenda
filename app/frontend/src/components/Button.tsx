import React from "react";

interface IButton {
  text: string;
  handleClick?: Function;
}

export default function Button({ text, handleClick }: IButton) {
  return (
    <button type="submit" onClick={handleClick as any} value={text} id={text}>
      {text}
    </button>
  );
}
