import React from "react";

interface IButton {
  text: string;
  classN: string;
  handleClick?: (Revent: React.FormEvent<HTMLInputElement>) => void;
}

export default function Button({ text, handleClick, classN }: IButton) {
  return (
    <button type="submit" onClick={handleClick as any} value={text} id={text} className={classN}>
      {text}
    </button>
  );
}
