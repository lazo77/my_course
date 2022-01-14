import React, { FC } from "react";
import {CourseInfo} from '../courseInfo';
import {Button} from '../common/button';

export const WelcomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      
      <div className={'regAndAuthButtons'}>
        <Button 
        text="Вход"
        onClickHandler={() => alert('Enter')}
        />
        <Button 
        text="Регистрация"
        onClickHandler={() => console.log("Регистрация")}
        />
      </div> 
    </div>
  )
};