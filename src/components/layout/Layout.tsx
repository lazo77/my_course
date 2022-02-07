import React, { FC } from "react";
import { NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.scss';

type SetActive = (props: { isActive: boolean; }) => string;

const setActive: SetActive = ({isActive}) => isActive ? styles.active : ''; 

export const Layout: FC = () => {
  return (
    <>
      <header>
        <NavLink to='/' className={setActive}>Главная</NavLink>
        <NavLink to='/about' className={setActive}>О проекте</NavLink>
        <NavLink to='/courses' className={setActive}>Курсы</NavLink>
      </header>
      <Outlet />
      <footer>
        2022
      </footer>
    </>
  )
};