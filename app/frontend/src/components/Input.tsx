import React from "react";

interface IInput {
  text?: string;
  labelInput: string;
  type?: string;
  func(event: React.FormEvent<HTMLInputElement>): void;
}

export default function Input({ text, labelInput, func, type}: IInput) {
  return (
    <>
      <label htmlFor={labelInput}>
        {labelInput}
        <input
          type={type || 'text'}
          placeholder={text}
          onChange={func}
          required
        />
      </label>
    </>
  );
}
