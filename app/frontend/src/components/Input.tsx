import React from "react";

interface IInput {
  text?: string;
  labelInput: string;
  func(event: React.FormEvent<HTMLInputElement>): void;
}

export default function Input({ text, labelInput, func}: IInput) {
  return (
    <>
      <label htmlFor={labelInput}>
        {labelInput}
        <input
          type="text"
          placeholder={text}
          onChange={func}
        />
      </label>
    </>
  );
}
