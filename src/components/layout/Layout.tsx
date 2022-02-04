import React, { FC } from "react";
import { NavLink, Outlet } from 'react-router-dom';

export const Layout: FC = () => {
  return (
    <>
      <header>
        <NavLink to='/'>Главная</NavLink>
        <NavLink to='/about'>О проекте</NavLink>
        <NavLink to='/courses'>Курсы</NavLink>
      </header>
      <Outlet />
      <footer>
        2022
      </footer>
    </>
  )
};