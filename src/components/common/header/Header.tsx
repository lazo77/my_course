import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <header className="container">
      <div className="row justify-content-between">
         <div className="my_logo col-lg-4">
            <a href="index.html" className=""><img src="img\logo_11.png" alt="Информационные технологии и математика"/></a>
         </div>
         <div className="my_header_right btn-toolbar col-12 col-lg-8">
            <form className="form-inline mr-2 my-2">
               <input className="form-control" type="search" placeholder="Поиск" aria-label="Search"/>
               <button className="btn btn-light" type="submit"><i className="fas fa-search" aria-hidden="true"></i></button>
            </form>
            <div className="btn-group mr-2 mr-sm-0" role="group" aria-label="Login and registration">
               <button type="button" className="btn btn-dark">Вход</button>
               <button type="button" className="btn btn-dark">Регистрация</button>
            </div>
         </div>
      </div>
   </header>
  )
};