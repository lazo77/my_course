import React, { FC, ChangeEvent } from "react";

export const Input: FC<{
  type: string;
  value: string;
  changeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  inputClassName: string;
}> = ({type = 'text', value, inputClassName, changeHandler}) => {
  return <input 
    type={type}
    value={value}
    className={inputClassName}
    onChange={changeHandler}
  />
};