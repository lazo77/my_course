import React, { FC } from "react";
import {CourseInfo} from '../courseInfo';
import {Button} from '../button';

export const WelcomePage: FC = () => {
  return (
    <div className={'wrapper'}>
      <CourseInfo
      courseName="КУРС"
      courseDescription="Краткое описание офигенного курса"
      />
      <div className={'loginAndAuthButtons'}>
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