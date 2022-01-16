import React, { FC, MouseEvent } from "react";

export const Button: FC<{
  text: string;
  onClickHandler: (event: MouseEvent<HTMLButtonElement>) => void;
}> = ({ text = '', onClickHandler }) => {
  return (
  <button onClick={onClickHandler}>
    {text}
  </button>
  )}