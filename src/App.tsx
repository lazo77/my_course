import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { MainPage } from './components/mainPage';
import './App.scss';

function App() {
  return (
    <>
      <header>
        <Link to='/'>Главная</Link>
        <Link to='/about'>О нас</Link>
        <Link to='/courses'>Курсы</Link>
      </header>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
