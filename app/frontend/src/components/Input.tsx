import React from "react";

interface IInput {
  text?: string;
  labelInput: string;
}

export default function Input({ text, labelInput }: IInput) {
  return (
    <>
      <label htmlFor={labelInput}>
        {labelInput}
        <input type="text" placeholder={text} />
      </label>
    </>
  );
}
