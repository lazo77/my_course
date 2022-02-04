import React from 'react';
import { Routes, Route} from 'react-router-dom';
import './App.scss';
import { Layout } from './components/layout';

import { MainPage } from './pages/mainPage';
import {NotFoundPage} from './pages/notFoundPage';
import {About} from './pages/about';
import {Courses} from './pages/courses';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='about' element={<About />} />
          <Route path='courses' element={<Courses />} />
          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
